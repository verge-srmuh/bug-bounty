// Problem: LR(1) Parser with Incorrect Reductions
// Points: 9/10
// Expected Output: true, false, true
function parse(tokens) {
    let stack = [];
    let i = 0;
    
    while (i < tokens.length) {
        let top = stack.length > 0 ? stack[stack.length - 1] : null;

        if (top === 'E' && tokens[i] === '+') {
            stack.pop();
            stack.push('E+T');  
        } else if (tokens[i] === 'id') {
            stack.push('T');  
        } else {
            return false;
        }
        i++;
    }

    return stack.length === 1 && stack[0] === 'E';
}

console.log(parse(["id", "+", "id"]));       
console.log(parse(["id", "+", "+", "id"]));  
console.log(parse(["id", "*", "id", "+", "id"])); 
