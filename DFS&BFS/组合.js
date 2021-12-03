/* 
    77. 组合
    给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
    你可以按 任何顺序 返回答案。

    
    示例 1：
    输入：n = 4, k = 2
    输出：
    [
    [2,4],
    [3,4],
    [2,3],
    [1,2],
    [1,3],
    [1,4],
    ]

    示例 2：
    输入：n = 1, k = 1
    输出：[[1]]
    

    提示：
    1 <= n <= 20
    1 <= k <= n
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    var res = []
    var stack = []

    var backtrack = function( start , end , k , stack ) {
        if( stack.length === k ) {
            // res.push(stack.slice())
            return
        }

        for( let i = start ; i<=end ; i++ ) {
            stack.push(i)
            console.log(stack)

            backtrack( i+1 , end , k , stack )
            stack.pop()
        }

       
    }

    backtrack( 1 , n , k , stack )
    return res
};

console.log( combine(4,2))