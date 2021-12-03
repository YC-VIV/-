/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    var arr = new Set(nums)
    console.log(typeof(arr))

    return nums.length===arr.length ? false : true;
};

console.log(containsDuplicate([1,2,3,5]))