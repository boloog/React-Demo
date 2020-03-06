import React from 'react';
import { Route, Link } from 'react-router-dom';
import DianShi from './jiadian/DianShi';
import KongTiao from './jiadian/KongTiao';

export default function JiaDian() {
  return (
    <div>
      <div className="top-nav">
        <ul>
          <li>
            <Link to="/jiadian/dianshi">电视</Link>
          </li>
          <li>
            <Link to="/jiadian/kongtiao">空调</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        家电系列
        <Route path="/jiadian/dianshi" component={DianShi} />
        <Route path="/jiadian/kongtiao" component={KongTiao} />
      </div>
    </div>
  );
}
