// 双向链表

function ListNode( val ) {
    this.val = ( val===undefined ? 0 : val )
    this.next = null
    this.previous
}

/* 
    find 查找并返回结点
    findLast 查找最后的结点
    insert 插入新结点到链表的某个值的后面（或者插入到链表最后）
    remove 删除结点
    display 显示链表的元素
*/

function DuLinkList() {
    this.head = new ListNode('head')

    this.find = find
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
        if( cur==null )
        {
            return -1
        }
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
    let newElement = new ListNode(val)

    if( preElement==undefined ) {
        let last = this.findLast()
        newElement.previous = last
        last.next = newElement
        return
    }

    let cur = this.find(preElement)
    let curNext = cur.next
    cur.next = newElement
    newElement.previous = cur
    newElement.next = curNext
}

function remove( val ) {
    let element = this.find(val)

    if( val )
    {
        let pre = element.previous
        pre.next = pre.next.next
        pre.next.previous = pre

        element.previous = null
        element.next = null
    }
}

function display() {
    let cur = this.head
    while(cur.next!=null) {
        console.log(cur.next.val)
        cur = cur.next
    }
}

// 测试
var zimu = new DuLinkList();
zimu.insert('a') 
zimu.insert('c')
console.log(zimu.head)
zimu.display()
zimu.insert('b','a')
zimu.display()
console.log(zimu.find('a'))
zimu.remove('b')
zimu.display()
console.log(zimu.findLast())
