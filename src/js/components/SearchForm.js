import React, {Component} from 'react'
import AppActions from '../actions/AppActions'

class SearchForm extends Component {
     onSubmit(e){
        e.preventDefault()
        let movie = {
            title: this.refs.title.value.trim()
        }
        
        AppActions.searchMovies(movie);
    }
    
    render(){
        return(
                <div className="search-form">
                    <h1 className="text-center">Search for a movie</h1>
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="form-group">
                            <input type="text" className="form-control" ref="title" placeholder="Return of the drunken JS-Objects........................"/>
                            <button className="btn btn-primary btn-block">Search Movies</button>
                        </div>
                    </form>
                </div>
            
            )
    }
}

export default SearchForm