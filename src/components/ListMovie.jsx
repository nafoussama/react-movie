import { useState } from 'react';
import './ListMovie.css';
import { Heart } from "lucide-react";

const ListMovie = (props) => {
    const movie = props.moviesList;
    const [isLiked, setIsLiked] = useState(false);
    const [likeCounter, setLikeCounter] = useState(0);

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikeCounter((prev) => isLiked ? prev - 1 : prev + 1)
        props.totalLikes((prev) => isLiked ? prev - 1 : prev + 1);
    }
    return (
        <section className="card">
            <div className="card-poster">
                <p className="card-categorie" style={{ position: 'absolute', top: 10, left: 10, backgroundColor: movie.published ? 'green' : 'red' }}>
                    {movie.published ? 'published' : 'comming soon'}
                </p>

                <img src={movie.poster} alt={movie.title} onError={(e) => {
                    e.target.src = "https://placehold.co/280x340?text=No+Poster";
                }} />
            </div>
            <div className="card-information">
                <h4 className="card-title">{movie.title}</h4>
                <div style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    zIndex: 10
                }}>
                    <Heart
                        onClick={handleLike}
                        size={28}
                        color={isLiked ? 'red' : 'black'}
                        fill={isLiked ? 'red' : 'none'}
                    />
                    <span>({likeCounter})</span>
                </div>
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