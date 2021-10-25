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
const inorderTraversal = require('./inorder')
const preorderTarversal = require('./preorder')
const postorderTraversal = require('./postorder')

// 定义结点
function TreeNode(val,left,right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)

    this.show = show


}

function show() {
    return this.data
}

// 定义BST树(二叉查找树)
/* 
    root 树的根结点
    insert 插入方法
    
    遍历：
    preorderTarversal 前序遍历
    inorderTraversal 中序遍历
    postorderTraversal 后序遍历

*/

function BST() {
    this.root = null
    this.insert = insert

    // 使用引入的模块方法
    this.preorderTarversal = preorderTarversal
    this.inorderTarversal = inorderTraversal
    this.postorderTraversal = postorderTraversal
}

function insert( data ) {
    // 初始化left、right都是null
    let newNode = new TreeNode(data,null,null)

    // 当树为空的时候，直接将新结点插入到树根
    if( this.root == null ) {
        this.root = newNode
        return 
    }

    let cur = this.root

    while(1) {

        if( data < cur.val ) {
            // 当左子树为空时，放入左子树内
            if( cur.left==null ) {
                cur.left = newNode
                return
            }
            // 当左子树不为空，继续找下面的左子树
            cur = cur.left
        }

        else if( data >= cur.val ) {
            // 右子树为空时，放入右子树内
            if( cur.right==null ) {
                cur.right = newNode
                return
            }
            // 当右子树不为空，继续找下面的右子树
            cur = cur.right
        }
    }
}

// 测试
/* var tree = new BST()
tree.insert(23)
tree.insert(45)
tree.insert(16)
tree.insert(37)
tree.insert(3)
tree.insert(99)
tree.insert(22)
console.log(tree)
console.log(tree.preorderTarversal(tree.root))
console.log(tree.inorderTarversal(tree.root))
 */

// 暴露BST二叉树
module.exports = {TreeNode,BST}