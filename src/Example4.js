import React, { useState, createContext, useContext } from 'react';
// Hooks useContext 解决父子组件传值问题
const CountContext = createContext();

// 子组件
function Counter() {
  // useContext 接受
  let count = useContext(CountContext);
  return <h2>{count}</h2>;
}
// 父组件
function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>点击次数 {count}</p>
      <button onClick={() => setCount(count + 1)}>按钮</button>
      {/* 提供共享数据 */}
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </div>
  );
}

export default Example;
