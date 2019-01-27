/**
 *  图
 */

function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges ++;
}

function display() {
  for (let i = 0; i < this.vertices; i ++) {
    console.log(i + ' ->');
    console.log(this.adj[i]);
  }
  console.log('------------------------------');
}

// 深度优先搜索
function dsf(v) {
  this.marked[v] = true;

  console.log('visited: ' + v);
  if (this.adj[v]) {
    this.adj[v].forEach(item => {
      if (!this.marked[item]) {
        this.dsf(item);
      }
    });
  }
}

// 广度优先搜索
function bsf(s) {
  let queue = [];
  this.marked[s] = true;

  queue.push(s);

  while (queue.length > 0) {
    let v = queue.shift();  // 拿到队首的元素
    console.log('visited: ' + v);
    if (this.adj[v]) {
      this.adj[v].forEach(item => {
        if (!this.marked[item]) {
          this.edgeTo[item] = v;
          this.marked[item] = true;
          queue.push(item);
        }
      });
    }
  }
}

// 搜索路线
function pathTo(v) {
  let source = 0;
  if (!this.marked[v]) {
    return false;
  }

  let path = [];

  for (let i = v; i !== source; i = this.edgeTo[i]) {
    path.push(i);
  }

  path.push(source);

  return path;
}

// 拓扑排序
function topSort() {
  // 还未实现，目前的数据结构是无序的，不支持
}

function initMark() {
  for (let i = 0; i < this.vertices; i ++) {
    this.marked[i] = false;
    this.edgeTo = [];
  }
}

function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  this.marked = [];
  this.edgeTo = [];
  this.vertexList = [];

  for (let i = 0; i < this.vertices; i ++) {
    this.adj[i] = [];
  }

  this.addEdge = addEdge;
  this.display = display;
  this.initMark = initMark;
  this.dsf = dsf;
  this.bsf = bsf;
  this.pathTo = pathTo;
  this.topSort = topSort;
}

g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.display();

g.initMark();
console.log('深度优先搜索');
g.dsf(0);

g.initMark();
console.log('广度优先搜索');
g.bsf(0);

g = new Graph(10);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.addEdge(0, 5);
g.addEdge(5, 6);
g.addEdge(6, 4);
g.addEdge(6, 3);
g.addEdge(5, 7);
g.addEdge(7, 8);
g.addEdge(8, 9);
g.display();

g.initMark();
console.log('深度优先搜索');
g.dsf(0);

g.initMark();
console.log('广度优先搜索');
g.bsf(0);

console.log('------------------------------');
console.log(g.pathTo(6));

g = new Graph(6);
g.addEdge(1, 2);
g.addEdge(2, 5);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(0, 1);
g.vertexList = ['CS1', 'CS2', 'Data Structures', 'Assembly Language', 'Operating Systems', 'Algorithms'];
g.display();
g.topSort();
