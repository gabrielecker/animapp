import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class PetPagination extends Component {

  renderMenuItem(page) {
    const { fetchPets, setLoading, searchFilters } = this.props;
    const fetchPage = () => {
      setLoading(true);
      fetchPets({
        ...searchFilters,
        skip: (page - 1) * 5,
      }).then(() => {
        setLoading(false);
      });
    };
    return (
      <Menu.Item name={page} onClick={fetchPage} />
    );
  }

  render() {
    const { petsListPagination } = this.props;
    return (
      <Menu pagination>
        {petsListPagination.map(this.renderMenuItem.bind(this))}
      </Menu>
    );
  }
}

PetPagination.propTypes = {
  fetchPets: React.PropTypes.function,
  petsListPagination: React.PropTypes.array,
};

export default PetPagination;
