class Evaluator {
    constructor(expression) {
        this.expression = expression;
        this.operators = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 };
    }

    precedence(op) {
        return this.operators[op] || -1;
    }

    infixToPostfix() {
        let output = [], stack = [];
        for (let i = 0; i < this.expression.length; i++) {
            let token = this.expression[i];

            if (!isNaN(token)) output.push(token);
            else if (token in this.operators) {
                while (stack.length && this.precedence(stack[stack.length - 1]) >= this.precedence(token)) {
                    output.push(stack.pop());
                }
                stack.push(token);
            } else if (token === '(') stack.push(token);
            else if (token === ')') {
                while (stack.length && stack[stack.length - 1] !== '(') {
                    output.push(stack.pop());
                }
                stack.pop();
            }
        }
        while (!stack.length) output.push(stack.pop());
        return output;
    }

    evaluatePostfix(postfix) {
        let stack = [];
        for (let token of postfix) {
            if (!isNaN(token)) stack.push(parseFloat(token));
            else {
                let b = stack.pop(), a = stack.pop();
                if (token === '+') stack.push(a + b);
                if (token === '-') stack.push(a - b);
                if (token === '*') stack.push(a * b);
                if (token === '/') stack.push(a / b);
            }
        }
        return stack.pop();
    }

    evaluate() {
        let postfix = this.infixToPostfix();
        return this.evaluatePostfix(postfix);
    }
}

let exp = "3 + 5 * ( 2 - 8 )";
let evaluator = new Evaluator(exp);
console.log(evaluator.evaluate());
