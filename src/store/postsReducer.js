import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { CHANGE_INPUT, CHANGE_BTN, DELETE_ITEM, GET_LIST } from './actionTypes';

// 增强函数 中间件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
// 以上 增强函数 中间件

const defaultState = {
  placeholder: '请输入内容',
  inputValue: '',
  list: []
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
    case GET_LIST:
      state.list = action.data.map(item => item.title);
      return state;
    default:
      return state;
  }
};

const store = createStore(
  postsReducer,
  enhancer
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
