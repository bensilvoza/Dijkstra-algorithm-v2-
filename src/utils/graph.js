// Note:
// A graph is basically,
// Node
// +
// Connections

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; //to return at end
    let smallest;
    //build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        //WE ARE DONE
        //BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

var graph = new WeightedGraph();

// node
graph.addVertex("D");
graph.addVertex("F");
graph.addVertex("M");
graph.addVertex("H");
graph.addVertex("C");
graph.addVertex("L");
graph.addVertex("B");
graph.addVertex("R");
graph.addVertex("A");
graph.addVertex("Y");
graph.addVertex("J");
graph.addVertex("I");
graph.addVertex("P");
graph.addVertex("U");
graph.addVertex("Z");
graph.addVertex("S");
graph.addVertex("X");
graph.addVertex("V");
graph.addVertex("N");
graph.addVertex("W");
graph.addVertex("Q");

// connections
graph.addEdge("D", "F", 5);
graph.addEdge("D", "L", 3);
graph.addEdge("F", "M", 5);
graph.addEdge("F", "B", 3);
graph.addEdge("L", "B", 5);
graph.addEdge("L", "J", 4);
graph.addEdge("J", "Z", 3);
graph.addEdge("J", "I", 5);
graph.addEdge("M", "H", 6);
graph.addEdge("M", "R", 3);
graph.addEdge("B", "R", 5);
graph.addEdge("R", "P", 2);
graph.addEdge("R", "A", 6);
graph.addEdge("Z", "V", 3);
graph.addEdge("Z", "S", 5);
graph.addEdge("V", "N", 5);
graph.addEdge("B", "I", 4);
graph.addEdge("I", "S", 3);
graph.addEdge("S", "N", 3);
graph.addEdge("P", "U", 7);
graph.addEdge("I", "P", 5);
graph.addEdge("S", "U", 8);
graph.addEdge("A", "U", 7);
graph.addEdge("N", "U", 10);
graph.addEdge("H", "C", 5);
graph.addEdge("C", "Y", 3);
graph.addEdge("A", "Y", 5);
graph.addEdge("Y", "X", 7);
graph.addEdge("X", "Q", 4);
graph.addEdge("W", "Q", 4);
graph.addEdge("U", "W", 5);
graph.addEdge("N", "W", 8);

export default graph;
