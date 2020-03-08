import React, { useState } from 'react';
// Hooks 写函数方式 使用 useState 控制 https://zh-hans.reactjs.org/docs/hooks-reference.html#usestate
function Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>点击次数 {count}</p>
      <button onClick={() => setCount(count + 1)}>按钮</button>
    </div>
  );
}

export default Example;
