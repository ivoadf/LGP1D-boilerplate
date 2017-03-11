import React from 'react';
import {Link} from 'react-router-dom';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
      <h1>Hello World</h1>
      <p>Message: {this.props.message}</p>
      <button onClick={this.props.changeHandler}>Change message</button>
      </div>
    );
  }
}

export default HelloWorld;
