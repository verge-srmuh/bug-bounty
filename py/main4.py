# Problem: AVL Tree with Incorrect Rotations
# Points: 10/10
# Expected Output: Balanced AVL Tree
class Node:
    def __init__(self, key):
        self.key = key
        self.left = self.right = None
        self.height = 1

def get_height(node):
    return node.height if node else 0

def balance_factor(node):
    return get_height(node.left) - get_height(node.right)  

def rotate_right(y):
    x = y.left
    y.left = x.right
    x.right = y
    y.height = max(get_height(y.left), get_height(y.right)) + 1
    x.height = max(get_height(x.left), get_height(x.right)) + 1
    return x

def insert(root, key):
    if not root:
        return Node(key)

    if key < root.key:
        root.left = insert(root.left, key)
    else:
        root.right = insert(root.right, key)

    root.height = 1 + max(get_height(root.left), get_height(root.right))

    if balance_factor(root) > 1:
        return rotate_right(root)  

    return root

print(insert(None, 10))
