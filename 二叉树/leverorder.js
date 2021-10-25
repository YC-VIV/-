const BTS = require('./BST')
var TreeNode = BTS.TreeNode

// 层序遍历：一层一层地遍历出来

var leverorderTraversal = function( root ) {
    let res = []

    // 特殊情况，根结点为空
    if( root==null ) {
        return res
    } 

    // que用于保存该层的结点，初始化第一层结点为root
    let que = []
    que.push(root)

    // 当que内还有结点时，说明还没遍历完
    while(que.length!=0) {
        let length = que.length()
        for( let i=0 ; i<length ; i++ ) {
            let node = que.shift()
            res[]
            if(node.left)
            {
                que.push(node.left)
            }
            if(node.right)
            {
                que.push(node.right)
            }
        }
    }

    return res
};

module.exports = leverorderTraversal