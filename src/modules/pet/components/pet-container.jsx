import React, { Component } from 'react';

class PetContainer extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export default PetContainer;
