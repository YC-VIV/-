/* 
    给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

    示例 1：
    输入：head = [1,2,3,4,5], n = 2
    输出：[1,2,3,5]

    示例 2：
    输入：head = [1], n = 1
    输出：[]

    示例 3：

    输入：head = [1,2], n = 1
    输出：[1]
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
/* 
思路：双指针，第一个指针先走n步，第二个指针再开始走，
当第一个指针走到最后的时候，此时第二个指针走的步数就是length-n步，位置是倒数第n个前面一个
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    var first = head
    // 考虑到链表只有1个或者2个时的特殊情况,需要在头节点前加一个结点
    var res = new ListNode(0,head)
    var second = res

    for( let i = 0 ; i<n ; i++ ){
        first = first.next
    }
    while( first ) {
        first = first.next
        second = second.next
    }

    second.next = second.next.next
    // 注意:这里不能直接return head,当输入的链表只有一个时,head指向的仍然是原来第一个结点
    return res.next
};