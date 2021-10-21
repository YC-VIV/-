// 链表的结点
function ListNode( val ) {
    this.val = ( val===undefined ? 0 : val )
    this.next = ( next===undefined ? null : next )
}

/* 
    find 查找并返回结点
    findPrevious 查找前一个结点
    findLast 查找最后的结点
    insert 插入新结点到链表的某个值的后面
    display 显示链表的元素
*/
function LinkList() {
    this.head = new ListNode('head')

    this.find = find
    this.findPrevious = findPrevious
    this.findLast = findLast
    this.insert = insert
    this.display = display

}

function find( item ) {
    let cur = this.head
    while( cur.val!=item )
    {
        cur = cur.next
    }
    return cur
} 

function findPrevious( item ) {
    let cur = this.head
    while( (cur.next.val != item) &&  ) {
        cur = cur.next
    }
    return cur
}

function findLast() {
    let cur = this.head
    while( cur.next!=null )
    {
        cur = cur.next
    }
    return cur
}

function insert( val , preElement ) {
    let newNode = new ListNode(preElement)

    if( !preElement )
    {
        let last = this.findLast()
        last.next = newNode
        return 
    }

    let cur = this.find(val)
    let curNext = cur.next
    cur.next = newNode
    newNode.next = curNext
}

function display() {
    let cur = this.head
    while(cur.next) {
        console.log(cur.val)
        cur = cur.next
    }
}

