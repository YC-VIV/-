/* 
    你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
    给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

    示例 1：

    输入：nums = [2,3,2]
    输出：3
    解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
    示例 2：

    输入：nums = [1,2,3,1]
    输出：4
    解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
         偷窃到的最高金额 = 1 + 3 = 4 。
    示例 3：

    输入：nums = [0]
    输出：0
     

    提示：
    1 <= nums.length <= 100
    0 <= nums[i] <= 1000
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

// 思路：打劫第一家时，最后一家不能打劫。所以可以分两种情况考虑，取最大值。
 var rob = function(nums) {
    if( nums.length == 1 )
    { return nums[0] }
    if( nums.length == 2 )
    { return Math.max( nums[0],nums[1] ) }
    let dp = []

    // 第一种情况，打劫第一家：(注意在循环那里,因为最后一家也不能抢,可以看作少了最后一个房子)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0],nums[1])
    for( let i = 2 ; i < nums.length-1 ; i++ ){
        dp[i] = Math.max( dp[i-1] , dp[i-2]+nums[i] )
    }

    let first = dp[nums.length-2]

    // 第二种情况，第一家不打劫
    dp[0] = 0
    dp[1] = nums[1]
    for( let i = 2 ; i < nums.length ; i++ ){
        dp[i] = Math.max( dp[i-1] , dp[i-2]+nums[i] )
    }

    return Math.max(first,dp[nums.length-1])
};

// 类似打家劫舍1,也可以用滚动数组的思想来优化空间复杂度,这里不写出来了.
console.log(rob([2,3,2]))