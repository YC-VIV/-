/* 
    假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
    每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

    注意：给定 n 是一个正整数。

    示例 1：

    输入： 2
    输出： 2
    解释： 有两种方法可以爬到楼顶。
    1.  1 阶 + 1 阶
    2.  2 阶

    示例 2：

    输入： 3
    输出： 3
    解释： 有三种方法可以爬到楼顶。
    1.  1 阶 + 1 阶 + 1 阶
    2.  1 阶 + 2 阶
    3.  2 阶 + 1 阶
 */

// 思路：因为题目中只能爬一阶或者两阶，所以当在第n阶时，爬法是f(n) = f(n-1) + f(n-2)

/**
 * @param {number} n
 * @return {number}
 */

// 暴力递归法（力扣超出时间限制）
 var climbStairs = function(n) {
    if( n== 1 )
    { return 1; }
    if( n ==2 )
    { return 2; }
    else{
        return climbStairs(n-1)+climbStairs(n-2)
    }
};

// 需要数组的动态规划
var climbStairs2 = function(n) {
    let res = []
    res[0] = 1
    res[1] = 2
    
    for( let i = 2 ; i < n ; i++ )
    {
        res[i] = res[i-1] + res[i-2]
    }
    return res[n-1]
}

var climbStairs3 = function(n) {
    let pastpast = 1
    let past = 2
    let res
    if(n==1){ res = 1 }
    if(n==2){ res = 2 }

    for( let i = 2 ; i < n ; i++ )
    { 
        res = pastpast + past
        pastpast = past
        past = res
    }
    return res
}

console.log(climbStairs(3))