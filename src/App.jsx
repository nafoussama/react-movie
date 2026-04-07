import Header from "./components/Header"
import MovieCard from "./components/MovieCard"
import Test from "./components/test";

const App = () => {
  const cardsData = [
    {
      poster: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
      title: "Inception",
      description: "A skilled thief leads a team into dreams to steal secrets.",
      published: true,
      rating: 8.8,
      categorie: "Sci-Fi"
    },
    {
      poster: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
      title: "Interstellar",
      description: "Explorers travel through a wormhole to save humanity.",
      published: true,
      rating: 8.6,
      categorie: "Adventure"
    },
    {
      poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
      title: "The Dark Knight",
      description: "Batman faces the Joker, a criminal mastermind.",
      published: false,
      rating: 9.0,
      categorie: "Action"
    },
    {
      poster: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/adbaf737073205.5733861d5935b.png",
      title: "The mask",
      description: "A man gains powers from a magical mask, with comedy action",
      published: true,
      rating: 6.9,
      categorie: "Comedy"
    },
    {
      poster: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
      title: "Toy Story",
      description: "Toys come to life when humans are not around.",
      published: false,
      rating: 8.3,
      categorie: "Animation"
    },
  ];

  return (
    <main>
      <Header />
      <MovieCard movies={cardsData} />
      {/* <Test /> */}
    </main>
  )
}

export default App