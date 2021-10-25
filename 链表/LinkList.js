// 链表的结点
function ListNode( val ) {
    this.val = ( val===undefined ? 0 : val )
    this.next = null
}

/* 
    find 查找并返回结点
    findPrevious 查找前一个结点
    findLast 查找最后的结点
    insert 插入新结点到链表的某个值的后面(或者插入到链表最后)
    remove 删除结点
    display 显示链表的元素

    在实现上述方法时，注意考虑特殊情况，如：查询的元素不存在等等
*/
function LinkList() {
    this.head = new ListNode('head')

    this.find = find
    this.findPrevious = findPrevious
    this.findLast = findLast
    this.insert = insert
    this.remove = remove
    this.display = display

}

function find( item ) {
    let cur = this.head
    while( cur.val!=item )
    {
        cur = cur.next

        // 找不到
        if( cur==null )
        {
            return -1
        }
    }
    return cur
} 

function findPrevious( item ) {
    let cur = this.head

    // 所查找是头结点的情况
    if( item==this.head )
    { return -1 }

    while( (cur.next) && (cur.next.val != item) ) {
        // 注意: cur.next!=undefined/null是考虑到查不到的情况
        cur = cur.next

        if( cur.next == null )
        { return -1 }
    }
    
    return cur
}

function findLast() {
    let cur = this.head
    while( cur.next )
    {
        cur = cur.next
    }
    return cur
}

function insert( val , preElement ) {
    let newNode = new ListNode(val)

    if( preElement == undefined )
    {
        let last = this.findLast()
        last.next = newNode
        return 
    }

    let cur = this.find(preElement)
    let curNext = cur.next
    cur.next = newNode
    newNode.next = curNext
}

function remove(item) {
    let pre = this.findPrevious(item)
    if( pre.next != null )
    { 
        pre.next = pre.next.next
        return true
    }
    return -1
}

function display() {
    let cur = this.head
    while(cur.next!=null) {
        console.log(cur.next.val)
        cur = cur.next
    }
}


// 测试
var zimu = new LinkList();
zimu.insert('a') 
zimu.insert('c')
zimu.display()
zimu.insert('b','a')
zimu.display()
console.log(zimu.find('a'))
console.log(zimu.findPrevious('b'))
zimu.remove('b')
zimu.display()
console.log(zimu.findLast())
console.log(zimu.remove('g'))
// console.log(zimu)