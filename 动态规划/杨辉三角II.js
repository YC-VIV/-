/* 
    给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。
    在「杨辉三角」中，每个数是它左上方和右上方的数的和。

    示例 1:

    输入: rowIndex = 3
    输出: [1,3,3,1]
    示例 2:

    输入: rowIndex = 0
    输出: [1]
    示例 3:

    输入: rowIndex = 1
    输出: [1,1]
     

    提示:

    0 <= rowIndex <= 33
     

    进阶：

    你可以优化你的算法到 O(rowIndex) 空间复杂度吗？
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    let triangle = []
    let past = []
    // 思路：将原来二维数组简化为两个一维数组，其中，past用于暂存上一层，triangle用于保存当前层

    for( let i = 0 ; i <= rowIndex ; i++ ){
        // 注意：如果没有在每次循环的时候重置triangle数组，则会在past=triangle的时候，把当前循环时最后一个元素的“1”带到下一次循环的第i-1个past里，导致计算的时候多加了1
        triangle = new Array(i+1).fill(0)

        // 一头一尾初始值为1
        triangle[0] = triangle[i] = 1

        for( let j = 1 ; j < i ; j ++ ){
            // 注意这里j是从1开始算，到第i-1次执行完后结束（如三角第三行，这里只计算了triangle[1]、triangle[2]）
            triangle[j] = past[j-1] + past[j]

            // console.log(i+",past["+j+"]："+past[j]+" past is："+past+" triangle is："+triangle)
        }

        // 目前的层数就是下一次循环的上一层
        past = triangle

        // console.log(past)
    }
    
    return triangle
};

// 终极简化版，简化为一个一维数组，思路看注释运行过程
var getRow2 = function(rowIndex) {
    
    let triangle = new Array(rowIndex+1).fill(0)
    triangle[0] = 1

    for( let i = 0 ; i <= rowIndex ; i++ ){
        for(let j = i ; j > 0 ; j-- ){
            triangle[j] = triangle[j-1] + triangle[j]
            // console.log(i+" "+j+" "+triangle)
        }
    }

    return triangle

}

// getRow(5)
console.log(getRow(5))
console.log(getRow2(5))