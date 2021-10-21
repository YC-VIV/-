/* 
    listSize（属性） 列表的元素个数 
    pos（属性） 列表的当前位置
    dataStore （属性） 保存元素

    length（属性） 返回列表中元素的个数 
    clear（方法） 清空列表中的所有元素 
    find（方法） 查找元素
    showData（方法） 返回列表的字符串形式 
    getElement（方法） 返回当前位置的元素 
    insert（方法） 在现有元素后插入新元素 
    append（方法） 在列表的末尾添加新元素 
    remove（方法） 从列表中删除元素 
    front（方法） 将列表的当前位置移动到第一个元素 
    end（方法） 将列表的当前位置移动到最后一个元素 
    prev（方法） 将当前位置向前移一位 
    next（方法） 将当前位置向后移一位 
    currPos（方法） 返回列表的当前位置 
    moveTo（方法） 将当前位置移动到指定位置
 */

function List() {
    this.listSize = 0
    this.pos = 0
    this.dataStore = []

    this.length = length
    this.clear = clear
    this.find = find
    this.showData = showData
    this.getElement = getElement
    this.insert = insert
    this.append = append
    this.remove = remove
    this.front = front
    this.end = end
    this.prev = prev
    this.next = next
    this.currPos = currPos
    this.moveTo = moveTo
}

function length() {
    return this.listSize
}

function clear() {
    delete this.dataStore
    this.dataStore = []
    this.listSize = this.pos = 0
}

function find(element) {
    for( var i = 0 ; i < this.dataStore.length ; ++i ) {
        if( this.dataStore[i] === element ) {
            return i
        }
    }

    return -1
}

function showData(/**optional */ position) {
    // 注意：这里的position参数可以不传，不传则打印所有元素
    if(!position)
        return this.dataStore
    else 
        return this.dataStore[position]
}

function getElement() {
    return this.dataStore[this.pos]
}

function insert(element,position) {
    // 新元素插入到position的位置，position-1 后
    // position从0开始

    if(position<0 || position>this.listSize)
    { return -1 }
    let pastEle = this.dataStore[position]
    this.dataStore[position] = element

    for( let i = position+1 ; i<=listSize ; i++ ) {
        let s = dataStore[i]
        dataStore[i] = pastEle
        pastEle = s
    }
    this.listSize++
    return true
}

function append(element) {
    this.dataStore[this.listSize++] = element
}

function remove(element) {
    let elePos = this.find(element)
    if(elePos == -1) {
        return false
    }
    delete dataStore[elePos]
    this.listSize --
    return true
}

function front() {
    this.pos = 0
    return this.dataStore[this.pos]
}

function end() {
    this.pos = this.listSize-1
    return this.dataStore[this.pos]
}

function prev() {
    this.pos -= 1
    return this.pos
}

function next() {
    this.pos += 1
    return this.pos
}

function currPos() {
    return this.pos
}

function moveTo(position) {
    this.pos = position
    return this.pos
}

var zimu = new List()
zimu.append('a')
zimu.append('b')
zimu.append('c')
zimu.next()
console.log(zimu.getElement())
console.log(zimu.length())
console.log(zimu.showData())
console.log(zimu.showData(2))
zimu.clear()
console.log(zimu.showData())
// console.log(zimu)