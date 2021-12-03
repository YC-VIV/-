/* 
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

 

示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：

输入：nums = [1]
输出：[[1]]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    var res = []        // 保存结果
    var track = []      // 临时记录每次排列（即路径），并用于回溯

    var backtrack = function(nums,track) {
        // 当一种排列完成时（track长度和nums长度一样），加入res结果中
        if( track.length === nums.length ) {
            res.push(track.slice())
            return
        }
    
        for( let i = 0 ; i < nums.length ; i++ ) {
            // 当前排列中已存在该数字，进入下一次循环
            if( track.indexOf(nums[i]) !== -1 ) {
                // console.log("continue_:"+nums[i])
                // console.log(track)
                continue
            }
    
            track.push(nums[i])
            // console.log(track)
            backtrack(nums,track)   // 进入下一层树，注意，此时直到排列完成即叶结点才能结束到下一行
            /* 
                思路： 
                所谓回溯，可以这样理解：
                拿本题的树来讲，排列到第三个子树节点，即套娃中套娃中套娃，
                （拿本题中代码执行到strack=[1,2,3]时为例，此时第一次的第三层递归结束,
                然后剪枝叶删除3；第二层递归结束，剪去2；此时回到第二层递归的第二次，添加3，strack=[1,3]）
                此时要回溯，即是stack记录的元素个数和nums相等，此时一次递归才结束，
                但是整个递归程序还在进行，

                也可以这样理解：树的每一层就是一层递归
            */
            // console.log("-------")
            track.pop()             // track删除最后一个数，即取消选择回溯到上一层
            // console.log(track.pop())
        }
    }
    
    backtrack( nums , track )
    return res
};


var nums = [1,2,3]
console.log(permute(nums))