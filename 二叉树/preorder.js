const BTS = require('./BST')
var TreeNode = BTS.TreeNode

// 前序遍历： 根结点 - 左子树 - 右子树
/* 思路：首先初始化res数组用于保存结果，然后利用递归，
每次递归先存入该次递归的根节点的值，然后再进入左子树的递归、右子树的递归；
每次递归的出口条件是到达的结点为空。 中序和后序遍历也类似。*/
var preorderTraversal = function( root ) {
    let res = []

    function preorder(node) {
        if( node==null ) {
            return
        }

        res.push(node.val)
        preorder(node.left)
        preorder(node.right)
    }

    preorder(root)

    return res
};

module.exports = preorderTraversal
