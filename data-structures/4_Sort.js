/**
 *  排序算法示例
 */

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

// 冒泡
function bubbleSort(arr) {
  let len = arr.length;

  for(let i = len - 1; i >= 1; i --) {
    for (let j = 0; j < i; j ++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}

// 选择
function selectionSort(arr) {
  let len = arr.length;

  for (let i = 0; i < len - 1; i ++) {
    for (let j = i + 1; j < len; j ++) {
      if (arr[j] < arr[i]) {
        swap(arr, j, i);
      }
    }
  }
} 

// 插入
function insertionSort(arr) {
  let len = arr.length;
  let tmpArr = [];
  tmpArr.push(arr[0]);

  for(let i = 1; i < len; i ++) {
    for(let j = i - 1; j >= 0; j --) {
      if (arr[i] > tmpArr[j]) {
        tmpArr.splice(j + 1, 0, arr[i]);
        break;
      } else if (j === 0) {
        tmpArr.unshift(arr[i]);
      }
    }
  }
}

// 快排
function qSort(arr) {
  if (arr.length == 0) {
    return [];
  }

  let lesser = [];
  let greater = [];
  let p = arr[0];

  for (let i = 1; i < arr.length; i ++) {
    if (arr[i] < p) {
      lesser.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return qSort(lesser).concat(p).concat(qSort(greater));
}

// 运行时
function runTime(func, arr) {
  let start = new Date().getTime();
  func(arr.slice(0));
  let end = new Date().getTime();
  console.log((end - start) + ' 毫秒;');
}

let i = 0;
let arr = [];
while(i < 10000) {
  arr[i] = parseInt(Math.random(1) * 10000)
  i ++;
}

runTime(bubbleSort, arr);
runTime(selectionSort, arr);
runTime(insertionSort, arr);

runTime(qSort, arr);

