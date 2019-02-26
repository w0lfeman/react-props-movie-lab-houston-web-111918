import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  // generateMovieCards = () => {
  //   console.log("i gor invoked")
  //   let moviesMapped = movieData.map(movie => {
  //     return  <MovieCard movie={movie}/>
  //   })
  //   return moviesMapped
  // }

  render() {
    return (
      <div id="movie-showcase">
        {/* {this.generateMovieCards()} */}
        {movieData.map(movie => 
          <MovieCard key={movie.title} movie={movie}/>)}
          {/* {movieData.map(movie => 
          <MovieCard {...movie}/>)} */}
      </div>
    )
  }
}
