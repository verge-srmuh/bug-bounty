class SudokuValidator:
    def __init__(self, board):
        self.board = board

    def is_valid_sudoku(self):
        rows = [{}] * 9
        cols = [{}] * 9
        boxes = [{}] * 9
        
        for i in range(9):
            for j in range(9):
                num = self.board[i][j]
                if num == ".": continue
                
                box_index = (i // 3) * 3 + (j / 3)

                if num in rows[i] or num in cols[j] or num in boxes[int(box_index)]:
                    return False

                rows[i][num] = cols[j][num] = boxes[int(box_index)][num] = True
        
        return True

board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

validator = SudokuValidator(board)
print(validator.is_valid_sudoku())
