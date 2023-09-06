import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function About() {
  const { movies } = useSelector((state) => state);
  return (
    <section>
      <h1>About</h1>
      <p>Ini About</p>
      <Link to="/">Back</Link>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </section>
  );
}
