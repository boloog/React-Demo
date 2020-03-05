import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
// import { CHANGE_INPUT, CHANGE_BTN, DELETE_ITEM } from './store/actionTypes';
import {
  changeInputAction,
  changeBtnAction,
  deleteItemAction
} from './store/actionFactory';
import store from './store/postsReducer';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();

    this.changeInputValue = this.changeInputValue.bind(this);
    this.storeChange = this.storeChange.bind(this);
    // 订阅一下
    store.subscribe(this.storeChange);
  }
  changeInputValue(e) {
    // console.log(e.target.value);
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

  render() {
    return (
      <div style={{ width: '500px', margin: '20px auto' }}>
        <div>
          <Input
            placeholder={this.state.placeholder}
            value={this.state.inputValue}
            style={{ width: '426px', marginRight: '10px' }}
            onChange={this.changeInputValue}
          />
          <Button type="primary" onClick={() => this.clickBtn()}>
            增加
          </Button>
        </div>
        <div style={{ width: '500px', margin: '10px auto' }}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item
                onClick={this.deleteItem.bind(this, index)}
                key={index}
              >
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default TodoList;
