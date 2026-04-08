import { useState } from "react";
import ListMovie from "./ListMovie"

const MovieCard = (props) => {
    const [likes, setLikes] = useState(0);
    const movie = props.movies;

    const handleTotalLikes = () => {
        setLikes(() => likes + 1);
    }
    return (
        <>
            <div className="header-card">
                <p className="total-like">Total of likes : {likes} </p>
                <button className="btn-filter">Filter : { } </button>
            </div>
            <div className="movies">
                {movie.map((ele, idx) => (
                    <ListMovie key={idx} moviesList={ele} totalLikes={handleTotalLikes} />
                ))}
            </div>
        </>

    )
}

export default MovieCard