import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import '../../../styles/style.less';
import MainMenu from '../../../components/app/main-menu';
import MainFooter from '../../../components/app/main-footer';
import InformationModal from '../../../components/shared/information-modal';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { showInformationModal: true };
  }

  render() {
    return (
      <div>
        <Container>
          <MainMenu />
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
}
