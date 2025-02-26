// Problem: Dijkstra’s Algorithm with Incorrect Priority Queue Handling
// Points: 10/10
// Expected Output: { A: 0, B: 1, C: 3, D: 6, E: 8 }
class Graph {
    constructor() {
        this.adjList = {};
    }

    addEdge(u, v, w) {
        if (!this.adjList[u]) this.adjList[u] = [];
        if (!this.adjList[v]) this.adjList[v] = [];
        this.adjList[u].push([v, w]);
        this.adjList[v].push([u, w]);  
    }

    dijkstra(start) {
        let dist = {};
        let visited = new Set();
        let queue = [[start, 0]];

        for (let node in this.adjList) {
            dist[node] = Infinity;
        }
        dist[start] = 0;

        while (queue.length > 0) {
            let [node, d] = queue.shift();  

            if (visited.has(node)) continue;
            visited.add(node);

            for (let [neighbor, weight] of this.adjList[node]) {
                let newDist = d + weight;
                if (newDist < dist[neighbor]) {
                    dist[neighbor] = newDist;
                    queue.push([neighbor, newDist]);  
                }
            }
        }
        return dist;
    }
}

let g = new Graph();
g.addEdge("A", "B", 1);
g.addEdge("B", "C", 2);
g.addEdge("C", "D", 3);
g.addEdge("D", "E", 2);
g.addEdge("A", "C", 4);

console.log(g.dijkstra("A"));
