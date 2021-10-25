const BTS = require('./BST')
var TreeNode = BTS.TreeNode

// 中序遍历按照节点上的键值，以升序访问 BST 上的所有节点
// 左子树 - 根结点 - 右子树

var inorderTraversal = function( root ) {
    let res =[]
    function inorder( node ) {
        if( node == null )
        { return }

        inorder(node.left)
        res.push(node.val)
        inorder(node.right)
    }

    inorder(root)
    return res
};

module.exports = inorderTraversal
