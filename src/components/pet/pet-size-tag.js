import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';

class PetSizeTag extends Component {
  render() {
    const { size } = this.props;
    switch (size) {
      case 's':
        return <Label>Porte pequeno</Label>;
      case 'm':
        return <Label>Porte médio</Label>;
      case 'b':
        return <Label>Porte grande</Label>;
      default:
        return <Label>Indefinido</Label>;
    }
  }
}

PetSizeTag.propTypes = {
  size: React.PropTypes.string.isRequired,
};

export default PetSizeTag;
