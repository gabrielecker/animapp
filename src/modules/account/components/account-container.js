import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import {
  setLoading,
  registerAccount,
  loginAccount,
} from '../actions/index';

class AccountContainer extends Component {

  render() {
    const { isLoading } = this.props;
    return (
      <div>
        <Dimmer active={isLoading} inverted>
          <Loader active size="massive" />
        </Dimmer>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.account.isLoading || false,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setLoading,
    registerAccount,
    loginAccount,
  }, dispatch);
}

AccountContainer.propTypes = {
  children: React.PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
