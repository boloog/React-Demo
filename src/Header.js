import React, { Component, Fragment } from 'react';
import axios from 'axios';
import ItemList from './ItemList';
import Ani from './Ani';

import './style.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      itemList: ['Component']
    };
    console.log('初始化 props state');
  }

  componentWillMount() {
    console.log('组件将要挂载');
  }

  componentDidMount() {
    console.log('组件挂载完成', axios);
  }

  shouldComponentUpdate() {
    console.log('1-组件更新之前');
    return true;
  }

  componentWillUpdate() {
    console.log('2-组件将要更新之前。。。。');
  }

  componentDidUpdate() {
    console.log('4-组件更新之后。。。。');
  }

  inputChange(e) {
    // this 指向 undefined 需要在事件上bind(this)
    // console.log(this);
    // console.log(this.input.value);
    // 不能直接用 this.state 直接修改
    // this.state.value = e.target.value
    this.setState({
      value: e.target.value
    });
  }
  // 添加内容
  addContent(e) {
    // setState 异步问题 在第二个回调里使用
    this.setState(
      {
        itemList: [...this.state.itemList, this.state.value],
        value: ''
      },
      () => {
        // console.log('长度', this.ul.querySelectorAll('li').length);
      }
    );
  }
  // 删除内容
  deleteItem(index) {
    var lists = this.state.itemList;
    lists.splice(index, 1);
    this.setState({
      itemList: lists
    });
    console.log(index);
  }

  render() {
    console.log('3-render..');
    return (
      <Fragment>
        {/* 写注释 */}
        <label htmlFor="server">服务名称：</label>
        <input
          id="server"
          className="input"
          value={this.state.value}
          onChange={this.inputChange.bind(this)}
          ref={input => (this.input = input)}
        />
        <button onClick={this.addContent.bind(this)}>添加内容</button>
        <ul ref={ul => (this.ul = ul)}>
          {/** 
          <li
            key={index + item}
            onClick={this.deleteItem.bind(this, index)}
            dangerouslySetInnerHTML={{ __html: item }}
          ></li>
          */}
          {this.state.itemList.map((item, index) => {
            return (
              <ItemList
                content={item}
                key={index + item}
                index={index}
                deleteItem={this.deleteItem.bind(this)}
              />
            );
          })}
        </ul>
        <Ani />
      </Fragment>
    );
  }
}

export default Header;
