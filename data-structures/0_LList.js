/**
 *  链表数据结构(单列表)
 *  随机查询弱于数组，其他功能有应用场景
 */

// 数据结构
function Node(element) {
  this.element = element;
  this.next = null;
}

// 查询
function find(item) {
  let current = this.head;
  while(current && current.element !== item) {
    current = current.next;
  }
  return current;
}

// 插入
function insert(newElement, item) {
  let newNode = new Node(newElement);
  let current = this.find(item);
  if (current) {
    newNode.next = current.next;
    current.next = newNode;
  }
}

// 全部展示
function display() {
  let current = this.head;
  while(current) {
    console.log(current.element);
    current = current.next;
  }
  console.log('------------------------------');
}

// 查询前一个节点
function findPrevious(item) {
  let current = this.head;
  while(current && current.next && current.next.element !== item) {
    current = current.next;
  }
  return current;
}

// 删除
function remove(item) {
  var pre = this.findPrevious(item);
  if (pre.next) {
    pre.next = pre.next.next;
  }
}

// 链表
function LList() {
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.findPrevious = findPrevious;
  this.display = display;
}

// 测试
let cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
cities.remove("Carlisle");
cities.display();
