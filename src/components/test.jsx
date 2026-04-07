import { useEffect, useState } from 'react'
import axios from 'axios';
import MovieListAPI from './movieListAPI';
const Test = () => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${import.meta.env.VITE_BaseURL}?api_key=${import.meta.env.VITE_Secrect_Key}`);
            setMovie(response.data);
        }
        fetchData();
    }, []);
    if (!movie) return <p>Loading...</p>;

    return (
        // <div>
        //     {movie?.results?.map((m) => (
        //         <div key={m.id}>
        //             <p>{m.title}</p>
        //             <img src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`} alt={m.title} />
        //         </div>
        //     ))}
        // </div>

        <div className='movies'>
            {movie?.results?.map((m) => (
                <MovieListAPI key={m.id} movies={m} />
            ))
            }
        </div>
    )
}
export default Test