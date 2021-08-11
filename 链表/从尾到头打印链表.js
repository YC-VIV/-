/* 
    输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。


    示例 1：

    输入：head = [1,3,2]
    输出：[2,3,1]
     

    限制：

    0 <= 链表长度 <= 10000

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
 * @return {number[]}
 */

function ListNode(val) {
     this.val = val;
     this.next = null;
}

var reversePrint = function(head) {
    // 用两个栈，into将链表保存进数组，out保存倒放的into
    var into = []
    var out = []
    while( head ){
        into.push(head.val)
        head = head.next
    }
    while( into.length != 0 ){
        // 放进pop出来的数字（pop删除并返回最后一个元素）
        out.push(into.pop())
    }
    return out
};