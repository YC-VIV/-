/* 
    一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。

    示例 1:

    输入: [0,1,3]
    输出: 2
    示例 2:

    输入: [0,1,2,3,4,5,6,7,9]
    输出: 8

    限制：
    1 <= 数组长度 <= 10000
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// 思路1：利用indexOf（力扣内置方法不一样，行不通）
 var missingNumber = function(nums) {
    if( nums[0]!=0 ){
        return 1
    }
    for( let n of nums ){
        if( nums.indexOf(n) != n )
        { return n-1 }
    }
};

var missingNumber2 = function(nums) {
    
    for( let i = 0 ; i < nums.length ; i++ ){
        if( nums[i] != i )
        { return i }
    }

    return nums.length
};

console.log(missingNumber([0,1,2,4]))