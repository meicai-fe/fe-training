import React, { useEffect, useState } from 'react';

function useMousePosition() {
  const [position, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  function handleMouseMove(e) {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    })
  }

  // 观察console可以看到，useEffect只会调用一次，和我们预期的不符合，因为这里的写法本身有一些小问题
  useEffect(() => {
    console.log('添加监听');
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      console.log('移除监听');
      window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);
  // 同学可以把上面的"[]"去掉，或者替换为"[position]"
  // []相当于不监听，也就是只执行一次，保证了执行的效果和componentDidmount一样

  return position;
}

// 为了体现出独立性，我分开写，其实这边比较简单，写到原来的函数中也行
function useCount() {
  const [count, setCount] = useState(0);
  return {
    count, setCount
  }
}

function MouseRender() {
  const mouse = useMousePosition();
  console.log('re-render-in');

  return (
    <p>Mouse X: {mouse.x} Mouse Y: {mouse.y}</p>
  )
}

export default function Example() {
  const count = useCount();
  console.log('re-render-out');

  return (
    <>
      <MouseRender />
      <p>clicked {count.count} times</p>
      <button onClick={() => count.setCount(count.count + 1)}>
        Click me
      </button>
    </>
  )
}
