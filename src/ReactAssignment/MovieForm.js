import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class MovieForm extends Component {
  // 1. constructor
  constructor(props) {
    super(props);
    console.log("constructor executed");

    // State: form inputs + movie list + showForm toggle
    this.state = {
      title: "",
      director: "",
      releaseYear: "",
      genre: "Action",
      rating: "",
      description: "",
      platforms: {
        netflix: false,
        amazonPrime: false,
        disneyPlus: false,
        others: false,
      },
      movies: [],
      showForm: true,
    };
  }

  // 2. static getDerivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps executed");
    return null; // No state update needed from props
  }

  // 3. componentDidMount
  componentDidMount() {
    console.log("componentDidMount executed");
  }

  // 4. shouldComponentUpdate
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate executed");
    // Always update for this example
    return true;
  }

  // 5. getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate executed");
    return null; // Not using snapshot
  }

  // 6. componentDidUpdate
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate executed");
  }

  // 7. componentWillUnmount
  componentWillUnmount() {
    console.log("componentWillUnmount executed");
  }

  // Handle text, select, radio input changes
  handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // For checkboxes under platforms
    if (type === "checkbox") {
      this.setState((prevState) => ({
        platforms: {
          ...prevState.platforms,
          [name]: checked,
        },
      }));
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  // Handle form submit: add movie to list and reset form
  handleSubmit = (e) => {
    e.preventDefault();

    // Prepare platforms list string
    const { platforms } = this.state;
    const platformNames = [];
    if (platforms.netflix) platformNames.push("Netflix");
    if (platforms.amazonPrime) platformNames.push("Amazon Prime");
    if (platforms.disneyPlus) platformNames.push("Disney+");
    if (platforms.others) platformNames.push("Others");

    // Create movie object
    const newMovie = {
      title: this.state.title,
      director: this.state.director,
      releaseYear: this.state.releaseYear,
      genre: this.state.genre,
      rating: this.state.rating,
      description: this.state.description,
      platforms: platformNames.join(", "),
    };

    // Add movie to list & reset form fields
    this.setState((prevState) => ({
      movies: [...prevState.movies, newMovie],
      title: "",
      director: "",
      releaseYear: "",
      genre: "Action",
      rating: "",
      description: "",
      platforms: {
        netflix: false,
        amazonPrime: false,
        disneyPlus: false,
        others: false,
      },
    }));
  };

  // Toggle form visibility (to demonstrate componentWillUnmount)
  toggleForm = () => {
    this.setState((prevState) => ({ showForm: !prevState.showForm }));
  };

  render() {
    console.log("render executed");
    const {
      title,
      director,
      releaseYear,
      genre,
      rating,
      description,
      platforms,
      movies,
      showForm,
    } = this.state;

    return (
      <div className="container mt-5">
        <button
          className="btn btn-warning mb-3"
          onClick={this.toggleForm}
        >
          {showForm ? "Hide Form" : "Show Form"}
        </button>

        {/* Conditionally render form */}
        {showForm && (
          <div className="card p-4 mb-4">
            <h3>Add Movie</h3>
            <form onSubmit={this.handleSubmit}>

              {/* Movie Title */}
              <div className="mb-3">
                <label className="form-label">Movie Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={title}
                  onChange={this.handleChange}
                  required
                />
              </div>

              {/* Director */}
              <div className="mb-3">
                <label className="form-label">Director</label>
                <input
                  type="text"
                  name="director"
                  className="form-control"
                  value={director}
                  onChange={this.handleChange}
                  required
                />
              </div>

              {/* Release Year */}
              <div className="mb-3">
                <label className="form-label">Release Year</label>
                <input
                  type="number"
                  name="releaseYear"
                  className="form-control"
                  value={releaseYear}
                  onChange={this.handleChange}
                  required
                />
              </div>

              {/* Genre Dropdown */}
              <div className="mb-3">
                <label className="form-label">Genre</label>
                <select
                  name="genre"
                  className="form-select"
                  value={genre}
                  onChange={this.handleChange}
                  required
                >
                  <option>Action</option>
                  <option>Comedy</option>
                  <option>Drama</option>
                  <option>Sci-Fi</option>
                  <option>Horror</option>
                </select>
              </div>

              {/* Rating Radio Buttons */}
              <div className="mb-3">
                <label className="form-label d-block">Rating</label>
                {[1, 2, 3, 4, 5].map((num) => (
                  <div
                    key={num}
                    className="form-check form-check-inline"
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rating"
                      value={num}
                      checked={rating === num.toString()}
                      onChange={this.handleChange}
                      required
                    />
                    <label className="form-check-label">{num}</label>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  name="description"
                  className="form-control"
                  value={description}
                  onChange={this.handleChange}
                />
              </div>

              {/* Streaming Platforms */}
              <div className="mb-3">
                <label className="form-label d-block">
                  Available on Streaming Platforms
                </label>

                <div className="form-check form-check-inline">
                  <input
                    type="checkbox"
                    name="netflix"
                    checked={platforms.netflix}
                    onChange={this.handleChange}
                    className="form-check-input"
                    id="netflix"
                  />
                  <label className="form-check-label" htmlFor="netflix">
                    Netflix
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    type="checkbox"
                    name="amazonPrime"
                    checked={platforms.amazonPrime}
                    onChange={this.handleChange}
                    className="form-check-input"
                    id="amazonPrime"
                  />
                  <label className="form-check-label" htmlFor="amazonPrime">
                    Amazon Prime
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    type="checkbox"
                    name="disneyPlus"
                    checked={platforms.disneyPlus}
                    onChange={this.handleChange}
                    className="form-check-input"
                    id="disneyPlus"
                  />
                  <label className="form-check-label" htmlFor="disneyPlus">
                    Disney+
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    type="checkbox"
                    name="others"
                    checked={platforms.others}
                    onChange={this.handleChange}
                    className="form-check-input"
                    id="others"
                  />
                  <label className="form-check-label" htmlFor="others">
                    Others
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Add Movie
              </button>
            </form>
          </div>
        )}

        {/* Movie List Table */}
        {movies.length > 0 && (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Title</th>
                <th>Director</th>
                <th>Release Year</th>
                <th>Genre</th>
                <th>Rating</th>
                <th>Available on Streaming Platforms</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie, i) => (
                <tr key={i}>
                  <td>{movie.title}</td>
                  <td>{movie.director}</td>
                  <td>{movie.releaseYear}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.rating}</td>
                  <td>{movie.platforms}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default MovieForm;
