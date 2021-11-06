import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.click = this.click.bind(this);
    this.movieTitle = this.movieTitle.bind(this);
    this.movieSubtitle = this.movieSubtitle.bind(this);
    this.movieImage = this.movieImage.bind(this);
    this.movieRating = this.movieRating.bind(this);
    this.movieStoryline = this.movieStoryline.bind(this);
    this.movieGenre = this.movieGenre.bind(this);
  }

  handleChange({ target: { id, value } }) {
    this.setState({
      [id]: value,
    });
  }

  movieTitle(title) {
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          id="title"
          type="text"
          data-testid="title-input"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  movieSubtitle(subtitle) {
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitle"
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  movieImage(imagePath) {
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          id="imagePath"
          type="text"
          data-testid="image-input"
          value={ imagePath }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  movieStoryline(storyline) {
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  movieRating(rating) {
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  movieGenre(genre) {
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          id="genre"
          data-testid="genre-input"
          value={ genre }
          onChange={ this.handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  click(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  movieButton() {
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ this.click }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.movieTitle(title)}
        {this.movieSubtitle(subtitle)}
        {this.movieImage(imagePath)}
        {this.movieStoryline(storyline)}
        {this.movieRating(rating)}
        {this.movieGenre(genre)}
        {this.movieButton()}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
