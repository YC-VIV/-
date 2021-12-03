/*     
    给定一个由 0 和 1 组成的矩阵 mat ，请输出一个大小相同的矩阵，其中每一个格子是 mat 中对应位置元素到最近的 0 的距离。
    两个相邻元素间的距离为 1 。
     
    示例 1：
    输入：mat = [[0,0,0],[0,1,0],[0,0,0]]
    输出：[[0,0,0],[0,1,0],[0,0,0]]

    示例 2：

    输入：mat = [[0,0,0],[0,1,0],[1,1,1]]
    输出：[[0,0,0],[0,1,0],[1,2,1]]
     
    提示：
    m == mat.length
    n == mat[i].length
    1 <= m, n <= 104
    1 <= m * n <= 104
    mat[i][j] is either 0 or 1.
    mat 中至少有一个 0 

 */

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var updateMatrix = function(mat) {
    var res = []
    var row = mat.length
    var col = mat[0].length

    // 队列，这里第一轮保存的是0的值，然后一圈圈扩大到比0远的元素，实则是广度优先遍历
    var queue = []
    for( let i = 0 ; i<row ; i++ ) {
        // 初始化res数组，保存距离，为了方便之后多次计算距离，初始化为无限大
        res[i] = new Array(col).fill(Infinity) 
        for( let j = 0 ; j<col ; j++ ) {
            if( mat[i][j] === 0 ) {
                // 把是0的位置存入队列中
                queue.push([i,j])
                // 值为0，与0最小距离也为0
                res[i][j] = 0
            }
        }
    }

    while( queue.length>0 ) {
        [i,j] = queue.shift()

        // 右,先判断边界，然后判断它与0的最小距离是否大于当前元素与0的距离+1
        if( j+1<col && res[i][j+1] > res[i][j]+1 ) {
            // 满足条件，由于该元素挨着当前元素，距离是当前元素与0最小距离加1
            res[i][j+1] = res[i][j] + 1
            queue.push([i,j+1])
        }

        // 左
        if( j-1>=0 && res[i][j-1] > res[i][j]+1 ) {
            res[i][j-1] = res[i][j] + 1
            queue.push([i,j-1])
        }

        // 上
        if( i-1>=0 && res[i-1][j] > res[i][j]+1 ) {
            res[i-1][j] = res[i][j] + 1
            queue.push([i-1,j])
        }

        // 下
        if( i+1<row && res[i+1][j] > res[i][j]+1 ) {
            res[i+1][j] = res[i][j] + 1
            queue.push([i+1,j])
        }
    }   

    return res

};