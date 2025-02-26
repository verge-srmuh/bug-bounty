// Problem: Advanced Regular Expression Matcher (TOC)
// Points: 8/10
// Expected Output: true, false, true, false, true
function isMatch(text, pattern) {
    if (pattern.length === 0) return text.length === 0;

    let firstMatch = (text.length > 0 && (text[0] === pattern[0] || pattern[0] === '.'));

    if (pattern.length >= 2 && pattern[1] === '*') {
        return isMatch(text, pattern.substring(2)) ||
               (firstMatch && isMatch(text.substring(1), pattern));
    } else {
        return firstMatch && isMatch(text.substring(1), pattern.substring(1));
    }
}

console.log(isMatch("aaab", "a*b"));   
console.log(isMatch("abc", "a.c"));    
console.log(isMatch("mississippi", "mis*is*ip*.")); 
console.log(isMatch("abcd", "d*"));    
console.log(isMatch("aa", "a*"));      
