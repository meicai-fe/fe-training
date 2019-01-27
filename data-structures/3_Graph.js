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

  if (this.adj[v]) {
    let sons = this.adj[v].filter(item => {
      return !this.marked[item]
    });

    if (sons.length > 0) {
      sons.forEach(item => {
        console.log('visited: ' + v);
        this.dsf(item);
      });
    } else {
      console.log('visited: ' + v);
      console.log('------------------------------');
    }
  }
}

// 广度优先搜索
function bsf(s) {
  let queue = [];
  this.marked[s] = true;

  queue.push(s);

  while (queue.length > 0) {
    let v = queue.shift();
  }
}

function initMark() {
  for (let i = 0; i < this.vertices; i ++) {
    this.marked[i] = false;
  }
}

function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = [];
  this.marked = [];

  for (let i = 0; i < this.vertices; i ++) {
    this.adj[i] = [];
  }

  this.addEdge = addEdge;
  this.display = display;
  this.initMark = initMark;
  this.dsf = dsf;
  this.bsf = bsf;
}

g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.display();

g.initMark();
g.dsf(0);

g.initMark();
g.bsf(0);
