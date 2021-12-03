/*     
    剑指 Offer 58 - II. 左旋转字符串
    字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

    示例 1：
    输入: s = "abcdefg", k = 2
    输出: "cdefgab"

    示例 2：
    输入: s = "lrloseumgh", k = 6
    输出: "umghlrlose"
     */
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
// 思路1：利用slice
 var reverseLeftWords = function(s, n) {
    return `${s.slice(n)}${s.slice(0,n)}`
};

// 思路2：先转换为数组，然后使用额外空间处理，最后转换回来
var reverseLeftWords = function(s, n) {
    var arr = s.split('')
    var res = new Array(s.length);

    for( let i = n ; i<arr.length ; i++ ) {
        res.push( arr[i] );
    }

    for( let i = 0 ; i<n ; i++ ) {
        res.push( arr[i] );
    }

    return res.join('');
    
};