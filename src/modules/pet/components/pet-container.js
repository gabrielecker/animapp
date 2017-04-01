import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import { fetchPets, registerPet, setLoading } from '../actions/index';

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
    isLoading: state.pet.get('isLoading') || false,
    petsList: state.pet.get('petsList') || [],
    petsListPagination: state.pet.get('petsListPagination') || [1],
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPets, registerPet, setLoading }, dispatch);
}

PetContainer.propTypes = {
  children: React.PropTypes.object,
  isLoading: React.PropTypes.bool,
};


export default connect(mapStateToProps, mapDispatchToProps)(PetContainer);
