import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Index() {
  return <h1>首页</h1>;
}
function List() {
  return <h2>列表</h2>;
}
export default function AppRouter() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/list/">列表</Link>
        </li>
      </ul>
      <Route path="/" exact component={Index} />
      <Route path="/list/" component={List} />
    </Router>
  );
}
