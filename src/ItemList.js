// rce
import React, { Component } from 'react';
// 校验类
import PropTypes from 'prop-types';

export class ItemList extends Component {
  constructor(props) {
    super(props);
    this.handelClick = this.handelClick.bind(this);
  }

  // 组件内部优化
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }

  //
  // 组件第一次存在DOM中，函数不会被执行
  // 如果已经存在DOM中，函数才会被执行
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  componentWillUnmount() {
    console.log('组件删除之前执行');
  }

  handelClick() {
    // console.log('niubi', this.props.index);
    this.props.deleteItem(this.props.index);
  }
  render() {
    console.log('child-update');
    return (
      <li onClick={this.handelClick}>
        {this.props.name} - {this.props.content}
      </li>
    );
  }
}

ItemList.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
};

ItemList.defaultProps = {
  name: '前端开发'
};

export default ItemList;
