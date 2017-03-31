import React, { Component } from 'react';

class AccountContainer extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

AccountContainer.propTypes = {
  children: React.PropTypes.object,
};

export default AccountContainer;
