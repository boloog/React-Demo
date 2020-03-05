import { createStore } from 'redux';

import { CHANGE_INPUT, CHANGE_BTN, DELETE_ITEM } from './actionTypes';

const defaultState = {
  placeholder: '请输入内容',
  inputValue: '',
  list: ['React-Redux学习']
};

const postsReducer = (state = defaultState, action) => {
  // let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        inputValue: action.value
      };
    case CHANGE_BTN:
      state.inputValue = '';
      state.list.push(action.value);
      return state;

    case DELETE_ITEM:
      state.list.splice(action.index, 1);
      return state;
    default:
      return state;
  }
};

const store = createStore(
  postsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
