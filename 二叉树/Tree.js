// BST:二叉查找树，特殊的二叉树，相对较小的值保存在左节点中，较大的值保存在右节点中。

/* 
    属性：
    data 保存的数据
    left 左结点
    right 右结点

    方法：
    show 输出结点中的数据
*/

/* 
    引入模块
*/
const preorderTarversal = require('./preorder')

// 定义结点
function TreeNode(val,left,right) {
    this.val = val
    this.left = left
    this.right = right

    this.show = show
}

function show() {
    return this.data
}

// 定义BST树
/* 
    root 树的根结点
    insert 插入方法
    
    遍历：
    preorderTarversal 前序遍历
    inorderTraversal 中序遍历
    postorderTraversal 后序遍历

*/

function Tree() {
    this.root = null
    this.insert = insert

}

function insert( data ) {
    // 初始化left、right都是null
    let newNode = new TreeNode(data,undefined,undefined)

    // 当树为空的时候，直接将新结点插入到树根
    if( this.root == null ) {
        this.root = newNode
        return 
    }

    let cur = this.root

    while(1) {
        if( cur.left != null )
        {
            
            cur.left = newNode
            break
        }

        if( cur.right != null )
        {
            cur.right = newNode
            break
        }
        
        cur = cur.left
        cur = cur.right
    }
}

// 测试
var tree = new Tree()
tree.insert('a')
tree.insert('b')
// tree.insert('c')
console.log(tree)


// 暴露BST二叉树
module.exports = {TreeNode,Tree}