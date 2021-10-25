const BTS = require('./BST')
var TreeNode = BTS.TreeNode

// 后序遍历：左子树 - 右子树 - 根结点

var postorderTraversal = function( root ) {
    let res = []

    function postorder( node ) {
        if( node == null ) 
        { return }

        postorder(node.left)
        postorder(node.right)
        res.push(node.val)
    }
    postorder(root)

    return res
};

module.exports = postorderTraversal