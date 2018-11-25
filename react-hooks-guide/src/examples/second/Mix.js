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

  // 官方的解释是Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    console.log('添加监听');
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      console.log('移除监听');
      window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [])

  return position;
}

function useCount() {
  const [count, setCount] = useState(0);
  return {
    count, setCount
  }
}

export default function MouseRender() {
  const mouse = useMousePosition();
  const count = useCount();
  console.log('re-render');

  return (
    <>
      <p>Mouse X: {mouse.x} Mouse Y: {mouse.y}</p>
      <p>clicked {count.count} times</p>
      <button onClick={() => count.setCount(count.count + 1)}>
        Click me
      </button>
    </>
  )
}
