import { createStore, combineReducers } from 'redux';

const inputReducer = (state = '请输入内容', action) => {
  switch (action.type) {
    case 'changeInput':
      return action.value;
    default:
      return state;
  }
};

const listReducer = (state = [], action) => {
  switch (action.type) {
    case 'changeBtn':
      return [...state, action.value];
    case 'deleteItem':
      state.splice(action.index, 1);
      return [...state];
    default:
      return state;
  }
};

// 多个处理
// const mainReducer = (state = {}, action) => {
//   return {
//     inputValue: inputReducer(state.inputValue, action),
//     list: listReducer(state.list, action)
//   };
// };

// 组合 combineReducers 方便多个 reducers
const mainReducer = combineReducers({
  inputValue: inputReducer,
  list: listReducer
});

// const postsReducer = (state = defaultState, action) => {
//   let newState = JSON.parse(JSON.stringify(state));
//   switch (action.type) {
//     case 'changeInput':
//       return {
//         ...state,
//         inputValue: action.value
//       };
//     case 'changeBtn':
//       newState.list.push(newState.inputValue);
//       newState.inputValue = '';
//       return newState;
//     case 'deleteItem':
//       newState.list.splice(action.index, 1);
//       return newState;
//     default:
//       return state;
//   }
// };

const store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
