// 案例测试专用文件
var BST = require('./BST')

var tree = new BST.BST()
tree.insert(23)
tree.insert(45)
tree.insert(16)
tree.insert(37)
tree.insert(3)
tree.insert(99)
tree.insert(22)
/* 
    测试的树：
                  23
              /       \
             16       45 
            /  \     /  \
           3   22   37  99
*/
console.log(tree)
console.log(tree.preorderTarversal(tree.root))
console.log(tree.inorderTarversal(tree.root))
console.log(tree.postorderTraversal(tree.root))
console.log(tree.levelorderTraversal(tree.root))
console.log(tree.minDepth(tree.root))
