# Problem: Complex NFA to DFA Conversion
# Points: 9/10
# Expected Output: Correct DFA Transition Table
def nfa_to_dfa(nfa):
    dfa = {}
    queue = [frozenset(["q0"])]
    visited = set()

    while queue:
        current = queue.pop(0)
        if current in visited:
            continue
        visited.add(current)
        dfa[current] = {}

        for symbol in "01":
            next_states = set()
            for state in current:
                if symbol in nfa.get(state, {}):
                    next_states.update(nfa[state][symbol])

            next_state = frozenset(next_states)
            if next_state not in visited:
                queue.append(next_state)
            dfa[current][symbol] = next_state  

    return dfa

nfa = {
    "q0": {"0": ["q0", "q1"], "1": ["q0"]},
    "q1": {"1": ["q2"]},
    "q2": {}
}

print(nfa_to_dfa(nfa))
