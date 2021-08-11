/* 
    定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

    示例:

    输入: 1->2->3->4->5->NULL
    输出: 5->4->3->2->1->NULL

    限制：

    0 <= 节点个数 <= 5000

 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }

 var reverseList = function(head) {
    var cur = head  //保存链表第一个元素
    var pre = null  //保存链表最后一个元素
    var t = null

    while( cur )
    {
        t = cur.next    //暂时保存当前节点下一个

        cur.next = pre  //更改当前节点的下一个为原链表最后一个（或上一个）
        pre = cur       //更新“旧”的节点

        cur = t     //指向原链表的下一个
    }
    
    return pre
};