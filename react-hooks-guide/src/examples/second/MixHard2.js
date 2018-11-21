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

  // QA: useEffect 如果有多个，怎样安排逻辑，需要按顺序吗
  useEffect(() => {
    console.log('effect-in');
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    }
  });
  console.log('state-in');

  return position;
}

function useCount() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('effect-out');
    document.title = `You clicked ${count} times`;
    return () => {
      document.title = '我走了';
    }
  });
  useEffect(() => {
    console.log('effect-out-2');
    // useEffect发生在dom完成后，如果此处再修改相关参数会怎样呢？
    // setCount(count + 1);
    return () => {}
  });
  console.log('state-out'); // 注意异步

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
    <div>
      <MouseRender />
      <p>clicked {count.count} times</p>
      <button onClick={() => count.setCount(count.count + 1)}>
        Click me
      </button>
    </div>
  )
}
