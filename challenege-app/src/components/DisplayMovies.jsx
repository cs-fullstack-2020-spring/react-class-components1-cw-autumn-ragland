import React, { Component } from 'react';

class DisplayMovies extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>My Movie</h1>
                <p>Movie Name : {this.props.movieList.movieName}</p>
                <p>Year Released :{this.props.movieList.yearReleased}</p>
                <p>Genre : {this.props.movieList.genre}</p>
            </div>
        );
    }
}
export default DisplayMovies;