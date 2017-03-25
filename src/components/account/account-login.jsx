import React,{Component, PropTypes} from 'react';
import {Grid, Form} from 'semantic-ui-react';
import {Link} from 'react-router';
import ScreenHeader from '../shared/screen-header';

class AccountLogin extends Component{

  static contextTypes = {
    router: PropTypes.object
  }

  render(){
    return(
      <Grid stackable>
        <Grid.Row>
            <ScreenHeader>Login</ScreenHeader>
          {this.props.children}
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={8}>
            <Form>
              <Form.Group>
                <Form.Input label="Usuário" width={16} />
              </Form.Group>
              <Form.Group>
                <Form.Input label="Senha" type="password" width={16} />
              </Form.Group>
              <Form.Group>
                <Form.Button primary fluid width={8}>Login</Form.Button>
                <Form.Button positive fluid width={8} onClick={()=> this.context.router.push('/account/signup')}>Registro</Form.Button>
              </Form.Group>
            </Form>
          </Grid.Column>
          <Grid.Column width={4}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

}

export default AccountLogin;