import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './Pages/Index';
import JiaDian from './Pages/JiaDian';
import ShouJi from './Pages/ShouJi';
import DianNao from './Pages/DianNao';

import './index.css';

export default function AppRouter() {
  // 动态权限菜单
  let routeConfig = [
    {
      path: '/',
      title: '首页',
      exact: true,
      component: Index
    },
    {
      path: '/jiadian',
      title: '家用电器',
      exact: false,
      component: JiaDian
    },
    {
      path: '/shouji',
      title: '手机数码',
      exact: false,
      component: ShouJi
    },
    {
      path: '/diannao',
      title: '电脑办工',
      exact: false,
      component: DianNao
    }
  ];

  return (
    <Router>
      <div className="root-wrap">
        <div className="left-nav">
          <h3>一级导航</h3>
          <ul>
            {routeConfig.map(item => {
              return (
                <li key={item.title}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right-main">
          {routeConfig.map(item => {
            return (
              <Route
                key={item.title}
                path={item.path}
                exact={item.exact}
                component={item.component}
              />
            );
          })}
        </div>
      </div>
    </Router>
  );
}
