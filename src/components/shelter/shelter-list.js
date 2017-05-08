import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ShelterList extends Component {

  render() {
    return (
      <div>
              Shelter List
          </div>
    );
  }
}

function mapStateToProps() {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShelterList);
