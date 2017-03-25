import React, { Component } from 'react';

class AccountContainer extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export default AccountContainer;
