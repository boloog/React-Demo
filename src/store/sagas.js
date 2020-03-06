//
import { takeEvery, put } from 'redux-saga/effects';
import { GET_MY_LIST } from './actionTypes';
import { getListAction } from './actionFactory';
import axios from 'axios';

function* mySaga() {
  yield takeEvery(GET_MY_LIST, getList);
}

function* getList() {
  // axios
  //   .get(
  //     'api/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&city=成都&start=0&count=10'
  //   )
  //   .then(res => {
  //     // console.log(res);
  //     const data = res.data.subjects;
  //     const action = getListAction(data);
  //     put(action);
  //   });

  const res = yield axios.get(
    'api/coming_soon?apikey=0df993c66c0c636e29ecbb5344252a4a&city=成都&start=0&count=10'
  );
  const action = getListAction(res.data.subjects);
  yield put(action);
}

export default mySaga;
