import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants  from '../constants/AppConstants'
import AppUtils      from '../utils/AppUtils'
import AppActions    from '../actions/AppActions'

import {EventEmitter} from 'events'
import assign from 'object-assign'

let CHANGE_EVENT = 'change'
let _movies = []
let _selected = ''

var AppStore = assign({}, EventEmitter.prototype, {
    setMovieResults:function(movies){
      _movies = movies  
    },
    getMovieResults:function(movies){
      return _movies   
    },
    emmitChange:function(){
        this.emit(CHANGE_EVENT)
    },
    addChangeListener:function(callback){
        this.on('change',callback)
    },
    removeChangeListener:function(callback){
        this.removeListener('change', callback)
    }
})

AppDispatcher.register(function(payload){
    
    var action = payload.action
    
    switch(action.actionType){
        
        case AppConstants.SEARCH_MOVIES:
            console.log('searching for movie ' + action.movie.title)
            AppUtils.searchMovies(action.movie)
            AppStore.emit(CHANGE_EVENT)
            break
            
        case AppConstants.RECIEVE_MOVIE_RESULTS:
            AppStore.setMovieResults(action.movies)
            AppStore.emit(CHANGE_EVENT)
            break    
    }
    
    return true;
})

export default AppStore