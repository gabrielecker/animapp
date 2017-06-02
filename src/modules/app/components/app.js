import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Grid } from 'semantic-ui-react';
import '../../../styles/style.less';
import MainMenu from '../../../components/app/main-menu';
import MainFooter from '../../../components/app/main-footer';
import InformationModal from '../../../components/shared/information-modal';
import { logoutAccount } from '../../account/actions/index';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { showInformationModal: true };
  }

  renderInformationModal() {
    const confirmButton = {
      label: 'Continuar',
      action: () => this.setState({ showInformationModal: !this.state.showInformationModal }),
    };

    const informationButton = {
      label: 'Visitar o blog',
      action: () => window.location.replace('http://www.animapp.com.br/blog'),
    };

    return (
      <InformationModal
        open={this.state.showInformationModal}
        information="Essa é uma versão de demonstração!"
        confirmButton={confirmButton}
        informationButton={informationButton}
      />
    );
  }

  render() {
    const { accountInfo, logoutAccount } = this.props;

    return (
      <div>
        <Container>
          <MainMenu accountInfo={accountInfo} logoutAccount={logoutAccount} />
          <Grid stackable>
            <Grid.Column>
              {this.props.children}
            </Grid.Column>
          </Grid>
          <MainFooter />
        </Container>
        {this.renderInformationModal()};
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    accountInfo: state.account.accountInfo || {},
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    logoutAccount,
  }, dispatch);
}


App.propTypes = {
  children: React.PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
