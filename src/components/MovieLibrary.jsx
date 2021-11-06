import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.handleChange = this.handleChange.bind(this);
    this.bookmarkedFilter = this.bookmarkedFilter.bind(this);
    this.genreFilter = this.genreFilter.bind(this);
    this.addMovieFunc = this.addMovieFunc.bind(this);
  }

  handleChange({ target: { type, name, checked, value } }) {
    if (type === 'checkbox') {
      this.setState({ [name]: checked });
      return;
    }
    this.setState({ [name]: value });
  }

  bookmarkedFilter(movie) {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly) {
      return movie.bookmarked;
    }
    return true;
  }

  genreFilter(movie) {
    const { selectedGenre } = this.state;
    if (selectedGenre !== '') {
      return movie.genre === selectedGenre;
    }
    return true;
  }

  addMovieFunc(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const movieBookmark = movies.filter((movie) => {
      if (this.bookmarkedFilter(movie) && this.genreFilter(movie)) {
        const { title, subtitle, storyline } = movie;
        return title.toLowerCase().includes(searchText.toLowerCase())
        || subtitle.toLowerCase().includes(searchText.toLowerCase())
        || storyline.toLowerCase().includes(searchText.toLowerCase());
      }
      return false;
    });
    return (
      <section>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movieBookmark } />
        <AddMovie onClick={ this.addMovieFunc } />
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
