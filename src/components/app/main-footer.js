import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Divider } from 'semantic-ui-react';
import { Link } from 'react-router';

class MainFooter extends Component {

  render() {
    return (
      <div>
        <Divider hidden />
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={4} textAlign="center">
              <Link to="/about">Sobre</Link>
            </Grid.Column>
            <Grid.Column width={4} textAlign="center">
              <Link to="/contact">Contato</Link>
            </Grid.Column>
            <Grid.Column width={4} textAlign="center">
              <a href="https://github.com/mblodorn/animapp">GitHub</a>
            </Grid.Column>
            <Grid.Column width={4} textAlign="center">
              <Link to="/policy">Política de Privacidade</Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainFooter);
