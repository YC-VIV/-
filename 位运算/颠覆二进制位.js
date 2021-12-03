/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
    var arr = []
    arr = n.toString(2)
    // for( let i = 0,j = arr.length-1 ; i<j ; i++ ) {
    //     let temp = arr[i]
    //     arr[i] = arr[j]
    //     arr[j] = temp

    //     j--
    // }
    // n = arr.join('')

    return arr
};

console.log(reverseBits(00000010100101000001111010011100))