import React, { Component } from 'react';
import { Item, Label, Button, Icon } from 'semantic-ui-react';

class PetCard extends Component {
  renderPetSizeTag() {
    switch (this.props.pet.size) {
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

  render() {
    const { pet } = this.props;
;
    return (
      <Item>
        <Item.Image src={pet.pictures[0]} size="small" />

        <Item.Content>
          <Item.Header as="a">{pet.name}</Item.Header>
          <Item.Description>
            {pet.information}
          </Item.Description>
          <Item.Extra>
            <Label icon={pet.sex === 'm' ? 'man' : 'woman'} content={pet.sex === 'm' ? 'Macho' : 'Fêmea'} />
            {pet.castrated ? <Label>Castrado</Label> : ''}
            {pet.dewormed ? <Label>Vermifugado</Label> : ''}
            {this.renderPetSizeTag(pet.size)}
            <Button color="red" floated="right">
              <Icon name="heart" />Adotar
            </Button>
            <Button color="green" floated="right" disabled>
              <Icon name="money" />Doar
            </Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

PetCard.propTypes = {
  pet: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    pictures: React.PropTypes.array.isRequired,
    sex: React.PropTypes.string.isRequired,
    castrated: React.PropTypes.bool.isRequired,
    dewormed: React.PropTypes.bool.isRequired,
    size: React.PropTypes.string.isRequired,
    information: React.PropTypes.string.isRequired,
  }),
};

export default PetCard;
