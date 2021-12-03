/*     
    283. 移动零
    给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

    示例:

    输入: [0,1,0,3,12]
    输出: [1,3,12,0,0]
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 思路1：创建一个额外数组，把不是0的放进去，是0的话跳过，最后再根据跳过多少次循环放多少0在最后
 var moveZeroes = function(nums) {
    var arr = []
    var length = nums.length

    for( let i = 0 ; i<length ; i++ ) {
        if( nums[i] === undefined ) {
            arr.push(0)
            continue
        }

        if( nums[i]===0 ) {
            length++
            continue
        }
        
        arr.push(nums[i])
    }

    nums = arr.slice()
    console.log(nums)
};

// 双指针做法
var moveZeroes2 = function(nums) {
    //  指针，默认在第0个位置
    var point = 0
    var tem

    for( let i = 0 ; i<nums.length ; i++ ) {
        if( nums[i] !== 0 ) {
            // 当遇到的数不是0时，将该数和最前面的0交换
           tem = nums[i]
           nums[i] = nums[point]
           nums[point] = tem

           point++
        }
    }
};

console.log(moveZeroes2([0,1,0,3,12]))
// 双指针过程：
/* 
    i=0 j=0
    0 1 0 3 12

    i=1 j=0
    1 0 0 3 12

    i=2 j=1
    1 0 0 3 12

    i=3 j=1
    1 3 0 0 12

    i=4 j=2
    1 3 12 0 0 
*/