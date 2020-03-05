// 把 action  写成一个文件
import { CHANGE_INPUT, CHANGE_BTN, DELETE_ITEM, GET_LIST } from './actionTypes';
import axios from 'axios';

export const changeInputAction = value => ({
  type: CHANGE_INPUT,
  value
});

export const changeBtnAction = value => ({
  type: CHANGE_BTN,
  value
});

export const deleteItemAction = index => ({
  type: DELETE_ITEM,
  index
});

export const getListAction = data => ({
  type: GET_LIST,
  data
});

// 调用接口
export const getTodoList = () => {
  return dispatch => {
    axios
      .get(
        'api/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&city=成都&start=0&count=10'
      )
      .then(res => {
        // console.log(res);
        const data = res.data.subjects;
        const action = getListAction(data);
        dispatch(action);
      });
  };
};
