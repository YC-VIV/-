/* 
    14. 最长公共前缀
    编写一个函数来查找字符串数组中的最长公共前缀。
    如果不存在公共前缀，返回空字符串 ""。


    示例 1：
    输入：strs = ["flower","flow","flight"]
    输出："fl"

    示例 2：
    输入：strs = ["dog","racecar","car"]
    输出：""
    解释：输入不存在公共前缀。
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    var res = "";
    if( strs.length === 0 ) { return res; }

    for( let i = 0 ; i<strs.length ; i++ ) {
        for( let j = 0 ; j<strs[0].length ; j++ ) {
            if( i===0 ) { res+=strs[i].charAt(j); }
            if( res.charAt(j) !== strs[i].charAt(j) ) {
                // 不匹配就变短
                res = res.slice(0,j);
                if( res.length===0 ) { return res; }
            }
        }
    }

    return res;

};