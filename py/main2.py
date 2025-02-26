# Problem: LL(1) Parser with Incorrect Derivations
# Points: 9/10
# Expected Output: True, False
def parse(tokens):
    stack = ["E"]
    i = 0

    while stack:
        top = stack.pop()

        if top == "E":
            stack.append("T")  
        elif top == "T" and tokens[i] == "id":
            stack.append("id")  
        elif top == tokens[i]:
            i += 1
        else:
            return False

    return i == len(tokens)

print(parse(["id", "+", "id"]))
print(parse(["id", "+", "+", "id"]))
