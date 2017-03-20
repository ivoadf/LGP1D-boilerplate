import React from 'react';
import { connect } from 'react-redux';
import Nested from '../views/nested';
import store from '../../store';

const NestedContainer = React.createClass({

  render: function() {
    return (
      <Nested message={this.props.message}/>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    message: store.messageState.message
  };
};

export default connect(mapStateToProps)(NestedContainer);
