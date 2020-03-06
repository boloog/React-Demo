import React from 'react';
import { Route, Link } from 'react-router-dom';
import BiJiBen from './diannao/BiJiBen';
import Cpu from './diannao/Cpu';

export default function DianNao() {
  return (
    <div>
      <div className="top-nav">
        <ul>
          <li>
            <Link to="/diannao/bijiben">笔记本</Link>
          </li>
          <li>
            <Link to="/diannao/cpu">CPU 酷睿</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        电脑系列
        <Route path="/diannao/bijiben" component={BiJiBen} />
        <Route path="/diannao/cpu" component={Cpu} />
      </div>
    </div>
  );
}
