const BTS = require('./BST')
var TreeNode = BTS.TreeNode

// 层序遍历：一层一层地遍历出来

var levelorderTraversal = function( root ) {
    let res = []
    if( root == null ) {
        return res
    }

    let que = []
    que.push(root)

    while( que.length!=0 ) {
        // 注意：这行不能放进i<que.length里，否则长度有可能没有及时获取
        let length = que.length
        res.push([])
        for( let i = 0 ; i<length ; i++ ) {
            let node = que.shift()
            res[res.length-1].push(node.val)
 
            if( node.left )
            { que.push(node.left) }
            if( node.right )
            { que.push(node.right) }
        }
    }

    return res
};

module.exports = levelorderTraversal