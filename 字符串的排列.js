/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    if( s1.length > s2.length ) {
        return false
    }

    var arr1 = new Array(26).fill(0)
    var arr2 = new Array(26).fill(0)
    // console.log(arr1)
    

    for( let i = 0 ; i < s1.length ; i++ ) {
        arr1[s1.charAt(i).charCodeAt() - 'a'.charCodeAt()] ++
        arr2[s2.charAt(i).charCodeAt() - 'a'.charCodeAt()] ++
    }

    if( equals(arr1,arr2) ) {
        return true
    }

    for( let i = s1.length ; i < s2.length ; i++) {
        arr2[s2.charAt(i - s1.length).charCodeAt() - 'a'.charCodeAt()] --
        arr2[s2.charAt(i).charCodeAt() - 'a'.charCodeAt()] ++

        if( equals(arr1,arr2) ) {
            return true
        }
    }
    return false
};

var equals = function(arr1, arr2){
    for(var i =0; i < arr1.length; ++i){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}

checkInclusion("ab","eidboaoo")
