import React,{Component, PropTypes} from 'react';
import {Grid, Form} from 'semantic-ui-react';
import {Link} from 'react-router';
import ScreenHeader from '../shared/screen-header';

class AccountLogin extends Component{

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    const { setLoading, loginAccount} = this.props;
    const {email, password} = this.state;

    event.preventDefault();
    setLoading(true);

    loginAccount({
      email,
      password,
    }).then(res=>{
      setLoading(false);
      console.log(res);
    });
  }

  render(){
    return(
      <Grid stackable>
        <Grid.Row>
          <ScreenHeader>Login</ScreenHeader>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={8}>
            <Form>
              <Form.Group>
                <Form.Input
                  label="E-mail"
                  value={this.state.email}
                  onChange={(event, value) => this.handleChange('email', event, value || {})}
                  width={16}
                />
              </Form.Group>
              <Form.Group>
                <Form.Input
                  label="Senha"
                  value={this.state.password}
                  onChange={(event, value) => this.handleChange('password', event, value || {})}
                  type="password"
                  width={16}
                />
              </Form.Group>
              <Form.Group>
                <Form.Button
                  onClick={event => this.handleSubmit(event)}
                  primary
                  fluid
                  width={8}
                >
                  Login
                </Form.Button>
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