import ListMovie from "./ListMovie"

const MovieCard = (props) => {
    const movie = props.movies;
    return (
        <div className="movies">
            {movie.map((ele, idx) => (
                <ListMovie key={idx} moviesList={ele} />
            ))}
        </div>
    )
}

export default MovieCard