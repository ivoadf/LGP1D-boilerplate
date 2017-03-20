import React from 'react';
import {Link} from 'react-router-dom';

class Nested extends React.Component {
  render() {
    return (
      <div>
        <h1>I am a nested view!</h1>
        <p>Message: {this.props.message}</p>
        <Link to="/">Hide nested view</Link>
      </div>
    );
  }
}

export default Nested;
