import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import {
  fetchPets,
  registerPet,
  setLoading,
  fetchCurrentPet,
  updateSearchFilters,
} from '../actions/index';

class PetContainer extends Component {

  render() {
    const { isLoading } = this.props;

    return (
      <div>
        <Dimmer active={isLoading} inverted>
          <Loader active size="massive" />
        </Dimmer>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.pet.isLoading || false,
    petsList: state.pet.petsList || [],
    petsListPagination: state.pet.petsListPagination || [1],
    currentPet: state.pet.currentPet,
    searchFilters: state.pet.searchFilters,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchPets,
    registerPet,
    setLoading,
    fetchCurrentPet,
    updateSearchFilters,
  }, dispatch);
}

PetContainer.propTypes = {
  children: React.PropTypes.object,
};


export default connect(mapStateToProps, mapDispatchToProps)(PetContainer);
