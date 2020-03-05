import React from 'react';

// 用于从 UI 组件生成容器组件。connect的意思，就是将这两种组件连起来。
import { connect } from 'react-redux';

const PostItem = ({ entity, onClickDeleteButton }) => {
  return (
    <div>
      <h3>{entity.title}</h3>
      <button onClick={onClickDeleteButton}>删除</button>
    </div>
  );
};

const PostList = ({ entities, onClickDeleteButton }) => {
  const items = entities.map(item => (
    <PostItem
      key={item.id}
      entity={item}
      onClickDeleteButton={() => onClickDeleteButton(item.id)}
    />
  ));
  return <div>{items}</div>;
};

const mapStateToProps = state => {
  return {
    entities: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickDeleteButton: id => {
      dispatch({
        type: 'DELETE_POST',
        id
      });
    }
  };
};

// 以下注释 同 connect 方法
const Posts = connect(mapStateToProps, mapDispatchToProps)(PostList);

// class Posts extends Component {
//   static contextTypes = {
//     store: PropTypes.object
//   };

//   constructor(props, context) {
//     super(props);
//     console.log('context1', props);
//     console.log('context', context);
//     console.log('state', context.store);

//     this.store = context.store;

//     // 订阅一下

//     this.unsubscribe = store.subscribe(() => this.forceUpdate());
//   }

//   // 组件渲染时
//   componentWillMount() {
//     this.unsubscribe();
//   }

//   onClickDeleteButton = id => {
//     store.dispatch({
//       type: 'DELETE_POST',
//       id
//     });
//   };

//   render() {
//     const entities = this.store.getState().posts;
//     return (
//       <PostList
//         entities={entities}
//         onClickDeleteButton={this.onClickDeleteButton}
//       />
//     );
//   }
// }

// 写在组件内 用 static
// Posts.contextType = {
//   store: PropTypes.object
// };

export default Posts;
