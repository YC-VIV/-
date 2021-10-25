// 栈

/* 
    top 记录栈的位置

    push 添加元素-入栈
    pop 删除元素-出栈
    clear 清空栈
    peek 查看栈顶元素
    length 返回栈的长度
*/

function Stack() {
    this.dataStore = []
    this.top = 0

    this.push = push
    this.pop = pop
    this.peek = peek
    this.clear = clear
    this.length = length
}

function push( element ) {
    this.dataStore[this.top++] = element
}

function pop() {
    // 删除最后一个元素
    delete this.dataStore[this.top-1]
    // 栈顶位置减1
    this.top --
}

function peek() {
    if( this.top == 0 )
    { return 'Empty' }
    return this.dataStore[this.top-1]
}

function clear() {
    this.dataStore = []
    this.top = 0
}

function length() {
    return this.top
}

// 测试
var s = new Stack()
s.push('a')
s.push('b')
s.push('c')
console.log(s.peek())
s.pop()
console.log(s.peek())
console.log(s)
s.clear()
console.log(s)
