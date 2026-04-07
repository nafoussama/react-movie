

const movieListAPI = (props) => {
    const movie = props.movies;

    return (

        <section className="card">
            <div className="card-poster">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} onError={(e) => {
                    e.target.src = "https://placehold.co/280x340?text=No+Poster";
                }} />
            </div>
            <div className="card-information">
                <h4 className="card-title">{movie.title}</h4>
                <p className="card-rating">{movie.vote_average}/10</p>
                <div className='bottom'>
                    <p className="card-categorie">release:{movie.release_date}</p>
                    <a href='#'>watch now</a>
                </div>
            </div>
        </section>
    )
}

export default movieListAPI