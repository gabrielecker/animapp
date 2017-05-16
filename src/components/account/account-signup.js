import React, { Component, PropTypes } from 'react';
import { Grid, Form, Segment, Divider } from 'semantic-ui-react';
import ScreenHeader from '../shared/screen-header';

class AccountSignUp extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      email: '',
      password: '',
      facebookProfile: '',
      cellPhone: '',
    };
  }

  handleChange(field, event, { value }) {
    const updatedValue = {};

    switch (field) {
      default:
        updatedValue[field] = value || event.target.value;
    }

    this.setState(updatedValue);
  }

  handleSubmit(event){
    const { setLoading, registerAccount} = this.props;
    const {name, lastName, email, password, facebookProfile, cellPhone} = this.state;

    event.preventDefault();
    setLoading(true);

    registerAccount({
      name,
      lastName,
      email,
      password,
      facebookProfile,
      cellPhone,
    }).then(res=>{
      setLoading(false);
      this.context.router.push(`/account/login`);
    });
  }

  render() {
    return (
      <Grid stackable>
        <Grid.Row>
          <ScreenHeader>Cadastrar Usuário</ScreenHeader>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <p>Utilize esta página para realizar seu cadastro.</p>
              <p>Por gentileza não abuse dessa página.</p>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row><Divider horizontal>Formulário</Divider></Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Form>
              <Form.Group>
                <Form.Input
                  label="Nome"
                  value={this.state.name}
                  onChange={(event, value) => this.handleChange('name', event, value || {})}
                  width={8}
                />
                <Form.Input
                  label="Sobrenome"
                  value={this.state.lastName}
                  onChange={(event, value) => this.handleChange('lastName', event, value || {})}
                  width={8}
                />
              </Form.Group>
              <Form.Group >
                <Form.Input
                  label="Email"
                  value={this.state.email}
                  onChange={(event, value) => this.handleChange('email', event, value || {})}
                  width={8}
                />
                <Form.Input
                  label="Senha"
                  value={this.state.password}
                  onChange={(event, value) => this.handleChange('password', event, value || {})}
                  type="password"
                  width={8}
                />
              </Form.Group>
              <Form.Group>
                <Form.Input
                  label="Perfil no facebook"
                  value={this.state.facebookProfile}
                  onChange={(event, value) => this.handleChange('facebookProfile', event, value || {})}
                  width={8} />
                <Form.Input
                  label="Celular"
                  value={this.state.cellPhone}
                  onChange={(event, value) => this.handleChange('cellPhone', event, value || {})}
                  width={8} />
              </Form.Group>
              <Form.Group>
                <Form.Button
                  onClick={event => this.handleSubmit(event)}
                  positive
                  fluid
                  width={16}
                >
                  Cadastrar
                </Form.Button>
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

}

export default AccountSignUp;
