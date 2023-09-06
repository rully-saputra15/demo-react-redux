import { useEffect, useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovies,
  decrementCounter,
  incrementCounter,
} from "../store/actions";
import { Link } from "react-router-dom";

export default function Home() {
  const { counter, movies } = useSelector((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const getFetchMovies = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3000/movies");
      if (!response.ok) throw new Error("Error");
      const jsonData = await response.json();
      dispatch(addMovies(jsonData));
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (movies.length === 0) {
      getFetchMovies();
    }
  }, [movies]);

  return (
    <section>
      <h1>Home</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Link to="/about">About</Link>
      <h1 onClick={() => dispatch(incrementCounter())}>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(incrementCounter())}>
          count is {counter}
        </button>
        <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {isLoading && <p>Loading....</p>}
      <ul>
        {!isLoading &&
          movies.length > 0 &&
          movies.map((movie) => <li key={movie.id}>{movie.title}</li>)}
      </ul>
    </section>
  );
}
