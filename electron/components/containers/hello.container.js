import React from 'react';
import { connect } from 'react-redux';
import HelloWorld from '../views/helloWorld';
import store from '../../store';
import {changeMessage} from '../../actions/helloActions';

const HelloContainer = React.createClass({

  changeMessageHandler: () => {
    store.dispatch(changeMessage(Date().toString()));
  },

  render: function() {
    return (
      <HelloWorld message={this.props.message} changeHandler={this.changeMessageHandler}/>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    message: store.messageState.message
  };
};

export default connect(mapStateToProps)(HelloContainer);
