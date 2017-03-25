import React, { Component } from 'react';

class PetContainer extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

PetContainer.propTypes = {
  children: React.PropTypes.object,
};

export default PetContainer;
