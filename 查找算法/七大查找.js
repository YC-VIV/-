/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 顺序查找(暴力法)
var search1 = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i
        }
    }
    return -1
};

// 折半查找（二分查找）
/* 注意：折半查找的前提条件是需要有序表顺序存储，对于静态查找表，一次排序后不再变化，
   折半查找能得到不错的效率。但对于需要频繁执行插入或删除操作的数据集来说，
   维护有序的排序会带来不小的工作量，那就不建议使用。——《大话数据结构》*/

// 二分查找递归版
var search2_1 = function (nums, target, low, high) {
    // nums.sort((a,b)=>a-b)   
    let mid = Math.floor((low + high) / 2)


    if (nums[mid] === target) {
        return mid
    }
    if (nums[mid] < target) {
        // 此时中间的数小于要找的数，说明要找的数在右边，下面情况同理，一直递归，直到找到该数
        return search2_1(nums, target, mid + 1, high)
    }
    if (nums[mid] > target) {
        return search2_1(nums, target, low, mid - 1)
    }

    return -1
}

// 二分查找循环法
var search2_2 = function (nums, target) {
    let low = 0
    let high = nums.length-1
    let mid

    while ( low<=high ) {
        // 为什么不用mid = (low+high)/2 ? 
        // 注意：此时如果这样写当出现偶数的情况下会进入死循环

        mid = Math.floor((low+high)/2)
        // mid = Math.floor((high - low) / 2) + low
        // 调试代码
        console.log(low+' : '+nums[low])
        console.log(high+' : '+nums[high])
        console.log(mid+' : '+nums[mid])
        console.log("-------------------------------------")
        // 使用(high-low)/2时的断点测试结果：
   /*   0 : 4
        查找算法/七大查找.js:52
        8 : 112
        查找算法/七大查找.js:53
        4 : 8
        查找算法/七大查找.js:54
        -------------------------------------
        查找算法/七大查找.js:55
        5 : 10
        查找算法/七大查找.js:52
        8 : 112
        查找算法/七大查找.js:53 */

        if (nums[mid] === target) {
            return mid
        }
        if (nums[mid] < target) {
            low = mid+1
        }
        if (nums[mid] > target) {
            high = mid-1
        }

    }

    return -1

}



console.log(search1([2, 8, 4, 1, 7], 1))
console.log(search2_1([4,5,6,7,8,10,20],7,0,6))
console.log(search2_2([4,5,6,7,8,10,20,99,112],20))

console.log('----------------------------------------')

// console.log(search2_1(['a','b','c','d','e'],'b',0,4))
// console.log(search2_2(['a','b','c','f','z'],'f'))

// console.log(search(['a','c','e','i','y'],'i'))
// console.log(search2_2(['a','p','p','l','e'],'a'))

/*  插值查找
 二分查找的升级版，动态设置查找点，mid=low+ (key-a[low])/(a[high]-a[low]) * (high-low)
 理解：mid = (low+high)/2  => mid = low + 1/2 *(high-low) 这里的1/2即是 查找的位置/全部数组成员
 而在插值查找中，(key-a[low])为查找位置，这里是计算小于等于key的元素的数量 ；(a[high]-a[low])为查找范围
 这里的整个mid即是小于等于key的元素占所有元素的比例的期望值 */

var search3 = function(nums,target){
    let low = 0
    let high = nums.length-1
    let mid

    while(low<=high) {
        mid = low + (target-nums[low]) / (nums[high]-nums[low])*(high-low)

        if( target == nums[mid] ) {
            return mid
        }

        if( target<nums[mid] ) {
            high = mid-1 
        }

        if( target>nums[mid] ) {
            low = mid+1
        }
    }

    return -1
}

console.log(search3([4,5,6,7,8,10,20,99,112],20))
