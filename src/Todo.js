import React, { Component } from 'react';
import { createStore } from 'redux';
import mainReducer from './reducers';
import App from './components/App';
// Provider组件，可以让容器组件拿到state。
import { Provider } from 'react-redux';

const store = createStore(mainReducer);

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    // 订阅一下
    store.subscribe(this.log);
  }
  componentWillMount() {
    console.log('挂载');
  }
  log() {
    console.log(store.getState());
  }

  addPost() {
    store.dispatch({
      type: 'ADD_POST',
      post: {
        id: 1,
        title: 'welcome to redux'
      }
    });
  }

  addComment() {
    store.dispatch({
      type: 'ADD_COMMENT',
      post: {
        id: 1,
        post: 1,
        content: 'nice ~'
      }
    });
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Todo;
