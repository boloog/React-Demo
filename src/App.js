import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <ul className="my-list">
        <li>1111</li>
        <li>22222</li>
      </ul>
    );

    // var child1 = React.createElement('li',null, '1111')
    // var child2 = React.createElement('li',null,'2222')
    // var root = React.createElement('ul',{ className: 'my-list', child1, child2})
  }
}

export default App;
