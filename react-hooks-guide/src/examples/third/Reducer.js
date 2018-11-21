import React, { useReducer } from 'react';

const initialState = {
  count: 0
}

// 自定义的reducer函数接受两个参数，一个是state，也就是对应的数据，一个是action，也就是触发的参数
// 个人认为action、dispatch这些叫法，好像是为了让人理解，其实会带来跟多的误解。。。
function reducer(state, action) {
  switch(action.type) {
    case 'reset':
      return initialState;
      // return { count: action.payload };
    case 'increment':
      return {
        count: state.count + 1
      };
    case 'decrement':
      return {
        count: state.count - 1
      };
    default:
      return state; // 必须恒返回一个可用值
  }
}

function Count(initialCount) {
  // 我这里特意写成了fire，强调的是这里的命名并没有引入一个新的特性
  // 官方介绍当中的dispatch容易带来一些误解
  const [state, fire] = useReducer(reducer, { count: initialCount });
  // useReducer可以接受第三个参数，作为初始的action
  // const [state, fire] = useReducer(reducer, initialState, { type: 'reset', payload: initialCount });

  return (
    <>
      Count {state.count}
      <button onClick={() => fire({ type: 'reset'})}>
        Reset
      </button>
      <button onClick={() => fire({ type: 'increment'})}>
        Increment
      </button>
      <button onClick={() => fire({ type: 'decrement' })}>
        Decrement
      </button>
    </>
  )
}

export default function Example() {
  return Count(2);
}
