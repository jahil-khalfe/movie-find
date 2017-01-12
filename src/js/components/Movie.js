import React, {Component} from 'react'
import AppActions from '../actions/AppActions'
import AppStore from '../stores/AppStores'




class Movie extends Component {
    render(){
        var link = `http://www.imdb.com/title/${this.props.movie.imdbID}`       
        return(
                <div className="well">
                  <h3 className="lead">{this.props.movie.Title}</h3>
                  <hr />
                  <img src={this.props.movie.Poster} />
                  <p>Year: {this.props.movie.Year}</p>
                  <p>imdbID: <a href={link}>{this.props.movie.imdbID}</a></p>
                </div>
            )
    }
}

export default Movie