// Pseudocode

// if string length is 1 or 0 return true
// if first character is not the same as the last character return false
// call funtion without the first and the last character(middle characters)


function palindrome(str) {
    if (str.length === 1 || str.length === 0) {
        return true
    }

    if (str[0] !== str[str.length -1]){
        return false
        
    }

    return palindrome(str.slice(1, str.length -1))
}


function palindrome(str) {
    ​
        var len = str.length;
        var mid = Math.floor(len/2);
    ​
        for ( var i = 0; i < mid; i++ ) {
            if (str[i] !== str[len - 1 - i]) {
                return false;
            }
        }
    ​
        return true;
    }    