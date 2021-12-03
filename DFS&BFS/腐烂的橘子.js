/*     
    在给定的网格中，每个单元格可以有以下三个值之一：
    值 0 代表空单元格；
    值 1 代表新鲜橘子；
    值 2 代表腐烂的橘子。
    每分钟，任何与腐烂的橘子（在 4 个正方向上）相邻的新鲜橘子都会腐烂。
    返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1。

    示例 1：
    输入：[[2,1,1],[1,1,0],[0,1,1]]
    输出：4

    示例 2：
    输入：[[2,1,1],[0,1,1],[1,0,1]]
    输出：-1
    解释：左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个正向上。

    示例 3：
    输入：[[0,2]]
    输出：0
    解释：因为 0 分钟时已经没有新鲜橘子了，所以答案就是 0 。
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function(grid) {
    var row = grid.length
    var col = grid[0].length
    var queue = []
    // 记录时间
    var time = 0

    for( let i = 0 ; i<row ; i++ ) {
        for( let j = 0 ; j<col ; j++ ) {
            // 先把烂橘子找出来，位置放队列
            if( grid[i][j] === 2 ) {
                queue.push([i,j])
            }
        }
    }

    if( queue.length === 0 ) {
        return -1
    }

    while( queue.length ) {
        var len = queue.length
        for( let index = 0 ; index<len ; index++ ) {
            [i,j] = queue.shift()

            if( i-1>0 && grid[i-1][j]===1 ) {
                grid[i-1][j] = 2
                queue.push([i-1,j]) 
            }

            if( i+1<row && grid[i+1][j]===1 ) {
                grid[i+1][j] = 2
                queue.push([i+1,j])
            }

            if( j-1>0 && grid[i][j-1]===1 ) {
                grid[i][j-1] = 2
                queue.push([i,j-1])
            }

            if( j+1<col && grid[i][j+1]===1 ) {
                grid[i][j+1] = 2
                queue.push([i,j+1])
            }
        }
        time++
    }

    return time-1
};

console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]))