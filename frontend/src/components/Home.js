// Home.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/heroes")
      .then((r) => {
        if (!r.ok) {
          throw new Error(`HTTP error! Status: ${r.status}`);
        }
        return r.json();
      })
      .then((data) => {
        console.log("Heroes data:", data);
        setHeroes(data);
      })
      .catch((error) => {
        console.error("Error fetching heroes:", error.message);
      });
  }, []);

  return (
    <section>
      <h2>All Heroes</h2>
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id}>
            <Link to={`/heroes/${hero.id}`}>{hero.super_name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
