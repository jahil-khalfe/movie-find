import React, {
    Component
}
from 'react'

import AppActions from '../actions/AppActions'
import AppStore   from '../stores/AppStores'
import SearchForm from './SearchForm'
import MovieResults from './MovieResults'

function getAppState(){
    return {
        movies: AppStore.getMovieResults()
    }
}

class App extends Component {
    // getInitialState(){
    //     return getAppState()
    // }
    
    constructor(props, context) {
    super(props, context);
    this.setState = this.setState.bind(this)
    this.state = getAppState()
    
  };
    
    componentDidMount(){
        AppStore.addChangeListener(this.onChange)
    }
    
     componentWillUnmount(){
        AppStore.removeChangeListener(this.onChange)
    }
    render() {
        if(this.state.movies == ''){
            var movieResults  = ''
        } else {
            var movieResults = <MovieResults movies={this.state.movies} />
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="well">
                            <SearchForm />
                            <a className="btn btn-primary" href="/app">Reset</a>

                             {movieResults}
                        </div>        
                    </div>
                </div>
            </div>
        )
    }
    
    onChange = () => {
        this.setState(getAppState())
    }
}

export default App