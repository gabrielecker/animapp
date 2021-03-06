import React, { Component } from 'react';
import { Grid, Item } from 'semantic-ui-react';
import ScreenHeader from '../shared/screen-header';
import PetCard from './pet-card';
import PetPagination from './pet-pagination';
import PetSearch from './pet-search';

class PetList extends Component {

  componentWillMount() {
    const { fetchPets, setLoading } = this.props;
    setLoading(true);
    fetchPets().then(() => {
      setLoading(false);
    });
  }

  render() {
    const { petsList, petsListPagination, fetchPets, setLoading, updateSearchFilters, searchFilters } = this.props;

    return (
      <Grid>
        <Grid.Row>
          <ScreenHeader>Lista de pets para adoção</ScreenHeader>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <PetSearch
              updateSearchFilters={updateSearchFilters}
              searchFilters={searchFilters}
              fetchPets={fetchPets}
              setLoading={setLoading}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Item.Group>
              {petsList.map(pet => <PetCard pet={pet} />)}
            </Item.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <PetPagination
              searchFilters={searchFilters}
              petsListPagination={petsListPagination}
              fetchPets={fetchPets}
              setLoading={setLoading}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

PetList.propTypes = {
  fetchPets: React.PropTypes.function,
  setLoading: React.PropTypes.function,
  updateSearchFilters: React.PropTypes.function,
  searchFilters: React.PropTypes.object,
};

export default PetList;
