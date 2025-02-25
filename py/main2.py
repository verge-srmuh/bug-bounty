class Graph:
    def __init__(self):
        self.adj = {}

    def add_edge(self, u, v):
        self.adj[u].append(v)
        self.adj[v].append(u)

    def bfs(self, start):
        queue = [start]
        visited = {}

        while queue:
            node = queue.pop(0)
            if node not in visited:
                print(node)
                visited[node] = True
                for neighbor in self.adj[node]:
                    queue.append(neighbor)

graph = Graph()
graph.add_edge(1, 2)
graph.add_edge(2, 3)
graph.add_edge(3, 1)

graph.bfs(1)
