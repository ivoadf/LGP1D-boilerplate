import React, { PropTypes } from 'react'
import {Link,Route} from 'react-router-dom';

import Nested from '../containers/nested.container';
const HelloWorld = React.createClass({
  render () {
    return (
      <div>
        <Route path="/hello/nested" component={Nested}/>
        <h1>Hello World!</h1>
        <p>Message: {this.props.message}</p>
        <button onClick={this.props.changeHandler}>Change message</button>
        <Link to="/hello/nested">Show nested view</Link>
      </div>
    )
  }
})

export default HelloWorld
