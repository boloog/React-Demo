import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './Pages/Index';
import JiaDian from './Pages/JiaDian';
import ShouJi from './Pages/ShouJi';
import DianNao from './Pages/DianNao';

import './index.css';

export default function AppRouter() {
  return (
    <Router>
      <div className="root-wrap">
        <div className="left-nav">
          <h3>一级导航</h3>
          <ul>
            <li>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/jiadian/">家用电器</Link>
            </li>
            <li>
              <Link to="/shouji/">手机数码</Link>
            </li>
            <li>
              <Link to="/diannao/">电脑办工</Link>
            </li>
          </ul>
        </div>
        <div className="right-main">
          <Route path="/" exact component={Index} />
          <Route path="/jiadian/" component={JiaDian} />
          <Route path="/shouji/" component={ShouJi} />
          <Route path="/diannao/" component={DianNao} />
        </div>
      </div>
    </Router>
  );
}
