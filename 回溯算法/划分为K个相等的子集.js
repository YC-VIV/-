/*     
    698. 划分为k个相等的子集
    给定一个整数数组  nums 和一个正整数 k，找出是否有可能把这个数组分成 k 个非空子集，其总和都相等。

    示例 1：

    输入： nums = [4, 3, 2, 3, 5, 2, 1], k = 4
    输出： True
    说明： 有可能将其分成 4 个子集（5），（1,4），（2,3），（2,3）等于总和。
    

    提示：

    1 <= k <= len(nums) <= 16
    0 < nums[i] < 10000
     
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
/* 
    思路：
    把k当作桶，先判断总和是否能平均分入每个桶，然后使用回溯算法穷举
*/
 var canPartitionKSubsets = function(nums, k) {
    //  特殊情况
    if( k > nums.length ) 
    { return false }

    // 计算总和
    var sum = 0
    for( let n of nums ) 
    { sum+=n }

    // 判断是否能平分
    if( sum%k !== 0 )
    { return false }

    // 创建桶，用于记录回溯的路径
    var bucket = []
    // 计算平分数
    var target = sum/k

    var backtrack = function( nums,index,bucket ) {
        // index用于记录循环的层数是否到达k个，到达k个时判断所有桶里面的数字之和是否为target
        if( nums.length === index ) {
            for( let i = 0 ; i < k ; i++ ) {
                if( bucket[i]!==target )
                    { return false }
            }
            
            return true
        }

        // 正文开始
        for( let i = 0 ; i < k ; i++ ) {
            // 剪枝
            if( bucket[i] + nums[index] > target ) {
                continue
            }

            bucket[i] += nums[index]
            if( backtrack(nums,index+1,target) ) {
                return true
            }

            // 撤销选择
            backtrack[i] -= nums[index]
        }

        return false
    }

    let res = backtrack( nums,0,bucket )

    return res
};

console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1],4))