/*     
    给定一个整数数组，找出总和最大的连续数列，并返回总和。

    示例：

    输入： [-2,1,-3,4,-1,2,1,-5,4]
    输出： 6
    解释： 连续子数组 [4,-1,2,1] 的和最大，为 6。 

    */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let res = nums[0]
    let dp = 0

    for( let i = 0 ; i<nums.length ; i++ ) {
        // 如果当前数组大于之前数组和+当前数组，则数组和从当前数组开始计算
        dp = Math.max(nums[i],dp+nums[i])
        // 保存已有的数组和中最大的那个
        res = Math.max(res,dp)
    }
    return res
};
