import AppActions from '../actions/AppActions'



export default {
    searchMovies:function(movie){
        $.ajax({
            url: 'https://www.omdbapi.com/?s=' + movie.title,
            datatype: 'json',
            cache: false,
            success: function(data){
                AppActions.recieveMovieResults(data.Search)
            }.bind(this),
            error: function(xhr, status, err){
                alert(err)
            }.bind(this)
        })
    }
}