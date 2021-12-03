const BTS = require('./BST')
var TreeNode = BTS.TreeNode

// 二叉树的最小深度

var minDepth = function( root ) {
    // 注意：这里和maxDepth不同：
    // 如果树中其中一个结点只有一边子树，此时为null的那边子树并不是最小深度
    if( root == null )
    { return 0 }

    let left = minDepth(root.left)
    let right = minDepth(root.right)

    // 因为是从底到顶递归，所以如果结点中只有一边子树，此时计算另外一边子树的深度+1
    if( !root.left ) {
        return right+1
    }
    if(!root.right) {
        return left+1
    }

    return Math.min(left,right)+1
};

module.exports = minDepth