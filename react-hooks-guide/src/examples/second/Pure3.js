import React, { useState, useEffect } from 'react';

function useCount() {
  const [count, setCount] = useState(0);
  console.log(`what is hooks count now: ${count}`);

  useEffect(() => {
    console.log('call effect');
    return () => {
      console.log('call clean up');
    }
  })

  return {
    count, setCount
  }
}

export default function Example() {
  const countHooks = useCount();

  return (
    <div>
      <p>clicked {countHooks.count} times</p>
      <button onClick={() => countHooks.setCount(countHooks.count + 1)}>
        Click me
      </button>
    </div>
  )
}
