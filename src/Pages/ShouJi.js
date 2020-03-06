import React from 'react';
import { Route, Link } from 'react-router-dom';
import Iphone from './shouji/Iphone';
import XiaoMi from './shouji/XiaoMi';

export default function ShouJi() {
  return (
    <div>
      <div className="top-nav">
        <ul>
          <li>
            <Link to="/shouji/iphone">苹果</Link>
          </li>
          <li>
            <Link to="/shouji/xiaomi">小米</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        手机系列
        <Route path="/shouji/iphone" component={Iphone} />
        <Route path="/shouji/xiaomi" component={XiaoMi} />
      </div>
    </div>
  );
}
