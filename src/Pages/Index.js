import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          id: 111111,
          title: '第一篇文章'
        },
        {
          id: 22222,
          title: '第二篇文章'
        },
        {
          id: 33333,
          title: '第三页'
        }
      ]
    };

    // 编程式重定项
    this.props.history.push('/home/');
  }

  render() {
    let li = this.state.list.map((item, index) => {
      return (
        <li key={item.id}>
          <Link to={'/list/' + item.id}>{item.title}</Link>
        </li>
      );
    });
    return (
      <div>
        {/* <Redirect to="/home/" /> */}
        <ul>{li}</ul>
      </div>
    );
  }
}
