import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

export class Ani extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    };
    this.toToggole = this.toToggole.bind(this);
  }

  toToggole() {
    this.setState({
      isShow: !this.state.isShow
    });
  }

  render() {
    return (
      <div>
        <CSSTransition
          in={this.state.isShow}
          timeout={2000}
          classNames="my-node"
        >
          <div>动画库效果制作</div>
        </CSSTransition>
        <div>
          <button onClick={this.toToggole}>执行</button>
        </div>
      </div>
    );
  }
}

export default Ani;
