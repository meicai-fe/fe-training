/**
 *  字典
 *
 *  可以对键值进行直接排序
 */

// 添加
function add(key, value) {
  this.dataStore[key] = value;
}

// 查询
function find(key) {
  return this.dataStore[key];
}

// 删除
function remove(key) {
  delete this.dataStore[key];
}

// 展示
function display() {
  Object.keys(this.dataStore).sort().forEach((key) => {
    console.log(key + ' -> ' + this.dataStore[key]);
  });

  console.log('------------------------------');
}

// 计数
function count() {
  return Object.keys(this.dataStore).length;
}

// 清除
function clear() {
  Object.keys(this.dataStore).forEach((key) => {
    delete this.dataStore[key];
  });
}

// 定义字典
function Dictionary() {
  this.dataStore = {};
  this.add = add;
  this.find = find;
  this.remove = remove;
  this.display = display;
  this.count = count;
}

var pbook = new Dictionary();
pbook.add("Mike","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("David's extension: " + pbook.find("David"));
pbook.remove("David");
pbook.display();
