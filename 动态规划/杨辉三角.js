/* 
    给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

    在「杨辉三角」中，每个数是它左上方和右上方的数的和。

    示例 1:

    输入: numRows = 5
    输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

    示例 2:

    输入: numRows = 1
    输出: [[1]]
     

    提示:
    1 <= numRows <= 30
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */

 var generate = function(numRows) {

    let triangle = []
    
    for( let i = 0 ; i < numRows ; i++ ){
        triangle[i] = []
        for( let j = 0 ; j <= i ; j++ ){
            if( j == 0 || j == i )
            {
                triangle[i][j] = 1
            }
            else{
                triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j]
            }
        }
    }
    return triangle
};

console.log(generate(5))