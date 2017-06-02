import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {Menu, Dropdown, Icon} from 'semantic-ui-react';
import {Link} from 'react-router';

class MainMenu extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  render() {
    const {accountInfo, logoutAccount} = this.props;

    return (
      <Menu stackable>
        <Menu.Item header><Icon name='paw'/>Animapp</Menu.Item>
        <Link to='/'>
          <Menu.Item link>
            Início
          </Menu.Item>
        </Link>

        <Link to='/pets'>
          <Menu.Item  link>
            Adotar
          </Menu.Item>
        </Link>

        <Dropdown item text='Cadastrar'>
          <Dropdown.Menu>
            <Link to='/pets/new'>
              <Dropdown.Item link>Pet</Dropdown.Item>
            </Link>
            <Link to='/shelters/new'>
              <Dropdown.Item link >Lar temporário</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Menu stackable position='right'>
          {!accountInfo.name ? this.renderLogin() : ''}
          {!accountInfo.name ? this.renderSignUp() : ''}
          {accountInfo.name ? this.renderAccountInfo() : ''}
          {accountInfo.name ? this.renderLogout() : ''}
        </Menu.Menu>
      </Menu>
    )
  }


  renderLogin(){
    return(
      <Link to='/account/login'>
        <Menu.Item  link>
          Login
        </Menu.Item>
      </Link>
    )
  }

  renderSignUp(){
    <Link to='/account/signup'>
      <Menu.Item  link>
        Registro
      </Menu.Item>
    </Link>
  }

  renderAccountInfo(){
    const {accountInfo} = this.props;
    return(
      <Link to='/account/me'>
        <Menu.Item link>
          {accountInfo.name}
        </Menu.Item>
      </Link>
    )
  }

  renderLogout(){
    const {logoutAccount} = this.props;
    return(
      <Menu.Item link onClick={logoutAccount}>
        Logout
      </Menu.Item>
    )
  }

}

export default MainMenu;
