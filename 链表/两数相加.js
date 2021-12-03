/* 
    2. 两数相加
    给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
    请你将两个数相加，并以相同形式返回一个表示和的链表。
    你可以假设除了数字 0 之外，这两个数都不会以 0 开头。


    示例 1：
    输入：l1 = [2,4,3], l2 = [5,6,4]
    输出：[7,0,8]
    解释：342 + 465 = 807.

    示例 2：
    输入：l1 = [0], l2 = [0]
    输出：[0]

    示例 3：
    输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    输出：[8,9,9,9,0,0,0,1]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    var l3 = new ListNode();
    var head = l3;
    var adv = 0;
    var val1 = 0;
    var val2 = 0;
    while( l1||l2 ) {
        val1 = l1 ? l1.val : 0;
        val2 = l2 ? l2.val : 0;
       
        l3.next = new ListNode( val1+val2 );
        if( adv===1 ) {
            l3.next.val+=1;
            adv = 0;
        }
        if( l3.next.val>=10 ) {
            l3.next.val-=10;
            adv = 1;
        }
        
        l3 = l3.next;
        if( l1 ) { l1 = l1.next; }
        if( l2 ) { l2 = l2.next; }
        
    }

    // 特殊情况，加到最后还需要进位1
    if( adv===1 ) {
        l3.next = new ListNode(adv);
    }

    return head.next;
};