import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants  from '../constants/AppConstants'


let AppActions = {
    searchMovies(movie){
        console.log('Searching for movie')
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH_MOVIES,
            movie: movie
        })
    },
    
    recieveMovieResults(movies){
        console.log(movies)
        AppDispatcher.handleViewAction({
            actionType: AppConstants.RECIEVE_MOVIE_RESULTS,
            movies: movies
        })
    }
}

export default AppActions