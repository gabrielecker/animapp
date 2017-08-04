import React,{Component, PropTypes} from 'react';
import {Grid, Form} from 'semantic-ui-react';
import {Link} from 'react-router';
import ScreenHeader from '../shared/screen-header';
import classnames from 'classnames';

class AccountLogin extends Component{

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  validateForm(fields) {
    const errors = {};
    Object.keys(fields).map(key => {
      if(fields[key] === "") errors[key] = "Campo obrigatório";
    });
    this.setState({ errors });
  }

  handleSubmit = (event) => {
    const {setLoading, loginAccount} = this.props;
    const {email, password} = this.state;
    const {router} = this.context;

    event.preventDefault();
    this.validateForm({email, password});
    setLoading(true);

    loginAccount({
      email,
      password,
    }).then(res=>{
      setLoading(false);
      if(res.error){
        throw res.payload.message;
      }else{
        router.push('/pets');
      }
    }).catch(err=>{
      this.setState({errors: {...this.state.errors, login: err}});
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
            <span className="error error-title">{this.state.errors.login}</span>
            <Form>
              <span className="error">{this.state.errors.email}</span>
              <Form.Group className={classnames('field', {error: Boolean(this.state.errors.email)})}>
                <Form.Input
                  name="email"
                  label="E-mail"
                  value={this.state.email}
                  onChange={this.handleChange}
                  type="email"
                  width={16}
                />
              </Form.Group>
              <span className="error">{this.state.errors.password}</span>
              <Form.Group className={classnames('field', {error: Boolean(this.state.errors.password)})}>
                <Form.Input
                  name="password"
                  label="Senha"
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  width={16}
                />
              </Form.Group>
              <Form.Group>
                <Form.Button
                  onClick={this.handleSubmit}
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
