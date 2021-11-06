import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.textSearch = this.textSearch.bind(this);
    this.checkboxInput = this.checkboxInput.bind(this);
    this.genreInput = this.genreInput.bind(this);
  }

  textSearch(searchText, onSearchTextChange) {
    return (
      <label htmlFor="text-input-search" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          id="text-input-search"
          value={ searchText }
          name="searchText"
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  }

  checkboxInput(bookmarkedOnly, onBookmarkedChange) {
    return (
      <label htmlFor="forms-input-checkbox" data-testid="checkbox-input-label">
        Mostrar somente favoritos
        <input
          type="checkbox"
          id="forms-input-checkbox"
          data-testid="checkbox-input"
          checked={ bookmarkedOnly }
          name="bookmarkedOnly"
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }

  genreInput(selectedGenre, onSelectedGenreChange) {
    return (
      <label htmlFor="select-form-input" data-testid="select-input-label">
        Filtrar por gênero
        <select
          id="select-form-input"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          name="selectedGenre"
          data-testid="select-input"
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        {this.textSearch(searchText, onSearchTextChange)}
        {this.checkboxInput(bookmarkedOnly, onBookmarkedChange)}
        {this.genreInput(selectedGenre, onSelectedGenreChange)}
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
