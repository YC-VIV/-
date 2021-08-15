/* 
    找出数组中重复的数字。

    在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

    示例 1：

    输入：
    [2, 3, 1, 0, 2, 5, 3]
    输出：2 或 3 
     
    限制：
    2 <= n <= 100000
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// 思路1：创建一个栈用来放入数组，先判断栈中是否存在该数组成员，不存在则放入栈中，存在则返回
 var findRepeatNumber = function(nums) {
    let numarr = []
    for( let n of nums )
    {
        if( numarr.indexOf(n) == -1 )
        { numarr.push(n) }
        else{
            return n
        }
    }
};
 
// 思路2：先排序，再判断第i个和i-1个数组元素是否相等
var findRepeatNumber2 = function(nums) {
    nums.sort((a,b) => {return a-b})
    for( let i = 1 ; i<nums.length ; i++ )
    {
        if( nums[i-1] == nums[i] )
        { return nums[i-1] }
    }
    return 0
}

console.log(findRepeatNumber2([1,5,2,3,4,5]))