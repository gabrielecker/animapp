import React,{Component, PropTypes} from 'react';
import {Grid, Form, Segment, Divider} from 'semantic-ui-react';
import ScreenHeader from '../shared/screen-header';

class AccountSignUp extends Component{

  static contextTypes = {
    router: PropTypes.object
  }

  render() {
    return(
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
                <Form.Input label='Nome' width={8} />
                <Form.Input label='Sobrenome' width={8} />
              </Form.Group>
              <Form.Group >
                <Form.Input label='Email' width={8} />
                <Form.Input label='Senha' type='password' width={8} />
              </Form.Group>
              <Form.Group>
                <Form.Button positive fluid width={16}>Cadastrar</Form.Button>
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

}

export default AccountSignUp;