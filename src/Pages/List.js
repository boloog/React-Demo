import React, { Component } from 'react';

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log('props', this.props.match);
    let tempId = this.props.match.params.id;
    this.setState({
      id: tempId
    });
  }

  render() {
    return <div>List-page -> {this.state.id}</div>;
  }
}
