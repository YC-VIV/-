/* 
斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

F(0) = 0，F(1) = 1
F(n) = F(n - 1) + F(n - 2)，其中 n > 1
给你 n ，请计算 F(n) 。

 

示例 1：

输入：2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1
示例 2：

输入：3
输出：2
解释：F(3) = F(2) + F(1) = 1 + 1 = 2
示例 3：

输入：4
输出：3
解释：F(4) = F(3) + F(2) = 2 + 1 = 3
 

提示：

0 <= n <= 30 
*/

/**
 * @param {number} n
 * @return {number}
 */

// 普通递归解法
 var fib1 = function(n) 
 {
    if( n == 1 || n == 2 )
    { return 1 }
    else{
        return fib(n-1) + fib(n-2)
        // 由大到小算
    }
};

// 动态规划写法
var fib2 = function(n)
{
    var dp = []
    // 数组用于保存每次计算的结果，这样减少计算次数，这也是动态规划的特点

    if( n == 1 || n == 2 )
    { return 1 }
    else{
        dp[0] = 0
        dp[1] = dp[2] = 1
        for( let i=3 ; i<=n ; i++ ){
            dp[i] = dp[i-1] + dp[i-2]
            // 由小到大算
        } 
        return dp[n]
    }
}

// 动态规划改良版
var fib3 = function(n)
{
    if( n == 0 )
    { return 0 }

    if( n == 1 || n == 2 )
    { return 1 }

    // 用三个数来代替数组
    // 其中，now相当于上一个方法中的dp[i],past则是dp[i-1],pastpast是dp[i-2]
    // 在这里，pastpast、past、now也可以用一组数组的arr[0],arr[1],arr[2]来代替，这种思想叫“滚动数组”
    var pastpast = 0
    var past = 1
    var now = 1

    for( let i = 3 ; i<=n ; i++ ){
        pastpast = past
        past = now
        now = past + pastpast
    }
    return now

}

console.log(fib3(0));
