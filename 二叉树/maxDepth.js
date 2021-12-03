const BTS = require('./BST')
var TreeNode = BTS.TreeNode

// 二叉树的最大深度

var maxDepth = function( root ) {
    if( root == null )
    {
        return 0
    }

    let left = maxDepth(root.left)
    let right = maxDepth(root.right)

    // 每次选取左右子树较大的那边作为递归的返回值
    return Math.max(left,right)+1
};

module.exports = maxDepth