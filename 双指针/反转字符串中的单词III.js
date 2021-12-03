/*     
    给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

    示例：

    输入："Let's take LeetCode contest"
    输出："s'teL ekat edoCteeL tsetnoc"  

    提示：
    在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。 
*/
/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    //  将多个单词按空格分开成单词数组
    var arr = s.split(' ')
    for( let i=0 ; i<arr.length ; i++ ) {
        /*  注意这里：先将数组中成员(也就是单词)分割成数组(不转换会报错)，
            然后调用reverseStrarr进行反转并重新转换为字符串 */
        arr[i] = reverseStrarr(arr[i].split(''))
    }
    
    return arr.join(' ')
};


// 输入一个字符数组，返回颠倒的字符串
var reverseStrarr = function(strarr) {
    var last = strarr.length-1

    for( let i = 0 ; i<strarr.length/2 ; i++ ) {
        let temp = strarr[i]
        strarr[i] = strarr[last]
        strarr[last] = temp

        last--
    }

    return strarr.join('')
}

console.log(reverseWords("Let's take LeetCode contest"))