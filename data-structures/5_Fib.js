// 斐波那切数列
function recurFib(n) {
  if (n < 2) {
    return n;
  } else {
    return recurFib(n-1) + recurFib(n-2);
  }
}

// 动态规划的斐波那契
function dynFib(n) {
  let val = [];

  if (n < 2) {
    return n;
  } else {
    val[1] = 1; val[2] = 2;
    for (let i = 3; i < n; i ++) {
      val[i] = val[i - 1] + val[i - 2];
    }
  }

  return val[n - 1];  // 数组还能额外保存所有的记录
}

function runTime(func, num) {
  let start = new Date().getTime();
  console.log(func(num));
  let end = new Date().getTime();
  console.log((end - start) + ' 毫秒;');
}

runTime(recurFib, 10); // 显示 55
runTime(recurFib, 40); // 复杂度指数级增长，算不了100的

runTime(dynFib, 10);
runTime(dynFib, 40);
