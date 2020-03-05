import { combineReducers } from 'redux';

const stateData = {
  posts: [
    {
      id: 1,
      title: 'react-redux'
    },
    {
      id: 2,
      title: 'connect'
    },
    {
      id: 3,
      title: 'Provider'
    }
  ],
  comments: [
    {
      id: 1,
      post: 1,
      content: 'nice ~'
    }
  ]
};
const postsReducer = (state = stateData.posts, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, { ...action.post }];
    case 'DELETE_POST':
      return state.filter(item => action.id !== item.id);
    default:
      return state;
  }
};

const commentsReducer = (state = stateData.comments, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, { ...action.comment }];

    default:
      return state;
  }
};

const mainReduces = combineReducers({
  posts: postsReducer,
  comments: commentsReducer
});

export default mainReduces;
