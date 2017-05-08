import React, { Component } from 'react';

class ShelterContainer extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}


ShelterContainer.propTypes = {
  children: React.PropTypes.object,
};

export default ShelterContainer;
