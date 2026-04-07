import { useState } from 'react';
import './ListMovie.css';
import { Heart } from "lucide-react";

const ListMovie = (props) => {
    const movie = props.moviesList;
    const [isLiked, setIsLiked] = useState(false);
    const handleLike = () => {
        setIsLiked(!isLiked);
    }
    return (
        <section className="card">
            <div className="card-poster">
                <p className="card-categorie" style={{ position: 'absolute', top: 10, left: 10, backgroundColor: movie.published ? 'green' : 'red' }}>
                    {movie.published ? 'published' : 'comming soon'}
                </p>
                <Heart
                    onClick={handleLike}
                    size={28}
                    color={isLiked ? 'red' : 'white'}
                    fill={isLiked ? 'red' : 'white'}
                    style={{
                        position: 'absolute', top: 10, right: 10, transition: "transform 0.2s ease",
                        transform: isLiked ? "scale(1.2)" : "scale(1)"
                    }}
                />

                <img src={movie.poster} alt={movie.title} onError={(e) => {
                    e.target.src = "https://placehold.co/280x340?text=No+Poster";
                }} />

            </div>
            <div className="card-information">
                <h4 className="card-title">{movie.title}</h4>
                <p className="card-description">{movie.description}</p>
                <p className="card-rating">{movie.rating}/10</p>
                <div className='bottom'>
                    <p className="card-categorie">{movie.categorie}</p>
                    <a href='#'>watch now</a>
                </div>
            </div>
        </section>
    )
}

export default ListMovie