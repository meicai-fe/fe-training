/**
 *  散列表
 *
 *  数据可以快速插入或者取用
 *
 *  尽可能均匀映射键
 *
 *  137只是举例用得一个质数，是根据这道题目的数据规模和数据大小来定的
 *  Clayton 和 Raymond 私用simpleHash 产生了碰撞
 *
 *  注意，及时使用了betterHash，也是会产生碰撞的，对于散列表，碰撞是难免的
 */

// 散列函数
function simpleHash(data) {
  let total = 0;
  for (var i = 0; i < data.length; i ++) {
    total += data.charCodeAt(i);
  }

  console.log('hash value:' + data + '->' + total);
  return total % this.table.length;
}

// 优化的hash
function betterHash(data) {
  const H = 37;
  let total = 0;

  for (var i = 0; i < data.length; i ++) {
    total = H * total + data.charCodeAt(i);
  }

  if (total < 0) {
    total += this.table.length - 1;
  }
  return total % this.table.length;
}

// 添加
function put(data) {
  // let pos = this.simpleHash(data);
  let pos = this.betterHash(data);
  this.table[pos] = data;
}

// 展示
function display() {
  this.table.forEach((item, i) => {
    console.log(i + ':' + item);
  });
  
  console.log('------------------------------');
}

// 获取
function get(data) {
  let pos = this.betterHash(data);
  return this.table[pos];
}

// 散列表
function HashTable() {
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.betterHash = betterHash;
  this.display = display;
  this.put = put;
  this.get = get;
}

var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hTable = new HashTable();
for (var i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i]);
}
hTable.display();
console.log('get David: ' + hTable.get('David'));
