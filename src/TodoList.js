import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {
  changeInputAction,
  changeBtnAction,
  deleteItemAction,
  getMyTodoList
} from './store/actionFactory';
import store from './store/postsReducer';
import TodoListUI from './TodoListUI';
// import axios from 'axios';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();

    // this.changeInputValue = this.changeInputValue.bind(this);
    this.clickBtn = this.clickBtn.bind(this);
    this.storeChange = this.storeChange.bind(this);
    // 订阅一下
    store.subscribe(this.storeChange);
  }
  componentDidMount() {
    // 获取 远程数据  调用 中间件的 方法
    const action = getMyTodoList();
    store.dispatch(action);

    // 以下接口写在Factory里面
    // axios
    //   .get('api/top250?apikey=0df993c66c0c636e29ecbb5344252a4a')
    //   .then(res => {
    //     console.log(res);
    //     const data = res.data.subjects;
    //     const action = getListAction(data);
    //     store.dispatch(action);
    //   });
  }

  render() {
    return (
      <TodoListUI
        placeholder={this.state.placeholder}
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    );
  }

  // getListAction() {
  //   let action = changeInputAction(e.target.value);
  //   store.dispatch(action);
  // }
  changeInputValue(e) {
    let action = changeInputAction(e.target.value);
    store.dispatch(action);
  }
  storeChange() {
    this.setState(store.getState());
  }
  clickBtn() {
    if (this.state.inputValue) {
      let action = changeBtnAction(this.state.inputValue);
      store.dispatch(action);
    }
  }
  deleteItem(index) {
    let action = deleteItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;
