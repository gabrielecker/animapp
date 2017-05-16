import React, { Component } from 'react';
import { Icon, Form, Checkbox } from 'semantic-ui-react';

class PetSearch extends Component {

  handleChange(field, event, { value }) {
    const { updateSearchFilters, searchFilters } = this.props;
    const updatedValue = {};

    switch (field) {
      case 'castrated':
      case 'dewormed':
        updatedValue[field] = !searchFilters[field];
        break;
      default:
        updatedValue[field] = value || event.target.value;
    }

    updateSearchFilters(updatedValue);
  }

  handleSubmit(event) {
    const { fetchPets, setLoading, searchFilters } = this.props;

    event.preventDefault();

    setLoading(true);

    fetchPets(searchFilters).then(() => {
      setLoading(false);
    });
  }

  render() {
    const { searchFilters } = this.props;
    return (
      <Form size="medium" stackable>
        <Form.Group>
          <Form.Input
            value={searchFilters.name}
            onChange={(event, value) => this.handleChange('name', event, value || {})}
            label="Nome"
            width={8}
          />
          <Form.Select
            value={searchFilters.type}
            onChange={(event, value) => this.handleChange('type', event, value || {})}
            label="Tipo"
            options={[{ key: 'd', text: 'Cão', value: 'd' }, { key: 'c', text: 'Gato', value: 'c' }]}
            width={8}
          />
        </Form.Group>
        <Form.Group>
          <Form.Select
            value={searchFilters.size}
            onChange={(event, value) => this.handleChange('size', event, value || {})}
            label="Porte"
            options={[{ key: 'b', text: 'Grande', value: 'b' }, { key: 'm', text: 'Médio', value: 'm' }, { key: 'p', text: 'Pequeno', value: 'p' }]}
            width={8}
          />
          <Form.Select
            value={searchFilters.sex}
            onChange={(event, value) => this.handleChange('sex', event, value || {})}
            label="Sexo"
            options={[{ key: 'm', text: 'Macho', value: 'm' }, { key: 'f', text: 'Fêmea', value: 'f' }]}
            width={8}
          />
        </Form.Group>
        <Form.Group>
          <Form.Field
            value={searchFilters.castrated}
            onChange={(event, value) => this.handleChange('castrated', event, value || {})}
            control={Checkbox}
            label={<label>Castrado</label>}
          />
          <Form.Field
            value={searchFilters.dewormed}
            onChange={(event, value) => this.handleChange('dewormed', event, value || {})}
            control={Checkbox}
            label={<label>Vermifugado</label>}
          />
        </Form.Group>
        <Form.Group>
          <Form.Button onClick={event => this.handleSubmit(event)}><Icon name="search" />Pesquisar</Form.Button>
        </Form.Group>
      </Form>
    );
  }

}

PetSearch.propTypes = {
  fetchPets: React.PropTypes.function,
  setLoading: React.PropTypes.function,
  updateSearchFilters: React.PropTypes.function,
  searchFilters: React.PropTypes.object,
};

export default PetSearch;
