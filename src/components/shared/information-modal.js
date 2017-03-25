import React, {Component} from 'react';
import {Button, Header, Modal, Icon} from 'semantic-ui-react';

class InformationModal extends Component{
  render(){
    const {open, confirmButton, informationButton, cancelButton, information} = this.props;
    return(
      <Modal open={open}>
        <Modal.Header><Icon name='news'/> Informações</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            {information}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          {cancelButton ? <Button negative onClick={cancelButton.action}>{cancelButton.label}</Button> : ''}
          {informationButton ? <Button primary onClick={informationButton.action}>{informationButton.label}</Button> : ''}
          {confirmButton ? <Button positive onClick={confirmButton.action}>{confirmButton.label}</Button> : ''}
        </Modal.Actions>
      </Modal>
    )
  }
}

export default InformationModal;