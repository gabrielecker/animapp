import React, { Component } from 'react';
import { Grid, Image, Label } from 'semantic-ui-react';
import PetSizeTag from './pet-size-tag';
import ScreenHeader from '../shared/screen-header';

class PetInfo extends Component {
  componentWillMount() {
    const { setLoading, fetchCurrentPet } = this.props;

    setLoading(true);
    fetchCurrentPet(this.props.params.id).then(() => {
      setLoading(false);
    });
  }

  renderPetInfo(currentPet = {}) {
    return (
      <Grid stackable>
        <Grid.Row>
          <ScreenHeader>Informações do Pet - {currentPet.name}</ScreenHeader>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <PetSizeTag size={currentPet.size} />
            {currentPet.castrated ? <Label>Castrado</Label> : ''}
            {currentPet.dewormed ? <Label>Vermifugado</Label> : ''}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <Image src={currentPet.pictures[0]} />
          </Grid.Column>
          <Grid.Column width={8}>
            {currentPet.information || 'Nenhuma informação disponível!'}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

  render() {
    const { currentPet } = this.props;

    return (
      <div>
        {currentPet ? this.renderPetInfo(currentPet) : ''}
      </div>
    );
  }
}

PetInfo.propTypes = {
  setLoading: React.PropTypes.func.isRequired,
  fetchCurrentPet: React.PropTypes.func.isRequired,
  currentPet: React.PropTypes.object,
  params: React.PropTypes.object,
};

export default PetInfo;
