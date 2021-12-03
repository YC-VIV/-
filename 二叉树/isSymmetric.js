const BTS = require('./BST')
var TreeNode = BTS.TreeNode

// 判断二叉树是否对称
// 思路：将二叉树分为外层和内层进行比较

var isSymmetric = function(root) {
    if( root===null ) {
        return true
    }

    var compare = function(left,right) {
        // 确定递归出口，考虑特殊情况
        if( !left && !right ) {
            return true
        }
        else if( left && !right ) {
            return false
        }
        else if( !left & right ) {
            return false
        }
        else if( left.val!==right.val ) {
            return false
        }


    } 
};


module.exports = isSymmetric