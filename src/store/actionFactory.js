// 把 action  写成一个文件
import { CHANGE_INPUT, CHANGE_BTN, DELETE_ITEM } from './actionTypes';

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
