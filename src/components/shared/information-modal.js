import React, { Component } from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';

class InformationModal extends Component {
  render() {
    const { open, confirmButton, informationButton, cancelButton, information } = this.props;
    return (
      <Modal open={open}>
        <Modal.Header><Icon name="info" /> Informações</Modal.Header>
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
    );
  }
}

InformationModal.propTypes = {
  open: React.PropTypes.boolean,
  confirmButton: React.PropTypes.shape({
    action: React.PropTypes.function,
    label: React.PropTypes.string.isRequired,
  }),
  informationButton: React.PropTypes.shape({
    action: React.PropTypes.function,
    label: React.PropTypes.string.isRequired,
  }),
  cancelButton: React.PropTypes.shape({
    action: React.PropTypes.function,
    label: React.PropTypes.string.isRequired,
  }),
  information: React.PropTypes.string.isRequired,
};

export default InformationModal;
