import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Index() {
  // 有状态改变时 会再次执行
  useEffect(() => {
    console.log('Index进入');
    return () => {
      console.log('Index离开');
    };
  }, []);
  return <div>这是首页</div>;
}

function List() {
  useEffect(() => {
    console.log('List进入');
    return () => {
      console.log('List离开');
    };
  });

  return <div>这是列表页</div>;
}

// Hooks 写函数方式 使用 useState 控制 https://zh-hans.reactjs.org/docs/hooks-reference.html#usestate
function Example() {
  const [count, setCount] = useState(0);
  //componentDidMount componentDidUpdate 都会走这里 https://zh-hans.reactjs.org/docs/hooks-reference.html#useeffect
  useEffect(() => {
    console.log('componentDidMount-componentDidUpdate', count);
    // 解绑回调
    return () => {
      console.log('count改变时 就会走这里～');
    };
    // 第二个参数 有改变时 调用 回调
  }, [count]);
  return (
    <div>
      <p>点击次数 {count}</p>
      <button onClick={() => setCount(count + 1)}>按钮</button>
      <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/list">列表</Link>
          </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list" component={List} />
      </Router>
    </div>
  );
}

export default Example;
