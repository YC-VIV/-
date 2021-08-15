/* 
    数组的每个下标作为一个阶梯，第 i 个阶梯对应着一个非负数的体力花费值 cost[i]（下标从 0 开始）。
    每当爬上一个阶梯都要花费对应的体力值，一旦支付了相应的体力值，就可以选择向上爬一个阶梯或者爬两个阶梯。
    请找出达到楼层顶部的最低花费。在开始时，你可以选择从下标为 0 或 1 的元素作为初始阶梯。

    示例 1：

    输入：cost = [10, 15, 20]
    输出：15
    解释：最低花费是从 cost[1] 开始，然后走两步即可到阶梯顶，一共花费 15 。

    示例 2：

    输入：cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
    输出：6
    解释：最低花费方式是从 cost[0] 开始，逐个经过那些 1 ，跳过 cost[3] ，一共花费 6 。
     

    提示：

    2 <= cost.length <= 1000
    0 <= cost[i] <= 999
  */
/* 
    首先说人话分析脑残出题人的题目意思：（转力扣评论区）
    体力值  10  15  20    
    水平线   0   1   2  天台

    一次最多可以跨两步。cost[i]为离开当前台阶需要的体力，水平线出发不花体力。
    如果离开水平线跨1步到了0级，耗费体力为0；然后离开0级跨一步或两步都是10体力，如果跨到2级，这时还没到天台，还要跨一步离开2级要20体力。所以共需要30体力。
    如果一开始跨2步直接到1级，花费0体力，然后离开1级跨两步直接上天台，花费15体力。所以共需要15体力
 */

/* 思路：上第i级楼梯时，对比i-1和i-2级楼梯所起步耗费体力较小的那个，再加上踩上楼梯后需要的体力。 */

/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    let res = []
    res[0] = cost[0]
    res[1] = cost[1]
    
    for( let i = 2 ; i < cost.length ; i++ )
    {
        res[i] = Math.min(res[i-1],res[i-2]) + cost[i]
    }

    return Math.min(res[cost.length-1],res[cost.length-2])
    // 注意：因为最后一步（上天台）无需体力，所以返回时需要取倒数第一和倒数第二的较小值，此时可以看成是cost[cost.length]==0。
};

// 优化空间复杂度版本

var minCostClimbingStairs2 = function(cost) {
    let res = cost[1]
    let past = cost[0]
    let box = 0

    for( let i = 2 ; i < cost.length ; i++ )
    {
        box = res
        // box用于临时保存旧值
        
        res = Math.min(res,past) + cost[i]
        past = box
    }

    return Math.min(res,past)
    
}

console.log(minCostClimbingStairs2([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))