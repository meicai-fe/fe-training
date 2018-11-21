import React, { useState } from 'react';

function useCount() {
  const [count, setCount] = useState(0);  // useState每次都会执行，每次都会传递进去一个初始值0，但是返回的count却非常准确地在逐步增加
  console.log(`what is hooks count now: ${count}`);
  return {
    count, setCount
  }
}

function getCount() {
  let count = 0;
  let setCount = function(num) {
    count = num;
  }
  console.log(`what is normal count now: ${count}`);
  return {
    count, setCount
  }
}

export default function Example() {
  const countHooks = useCount();
  const countNormal = getCount();

  return (
    <div>
      <p>Hooks: clicked {countHooks.count} times</p>
      <p>Normal: clicked {countNormal.count} times</p>
      <button onClick={() => {
        countHooks.setCount(countHooks.count + 1);
        countNormal.setCount(countNormal.count + 1);
      }}>
        Click me
      </button>
    </div>
  )
}
