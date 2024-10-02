import { ChangeEvent, useEffect, useState } from "react";
import { getAllPokemon, getPokemonByName } from "./api";
import "./App.css";
import { Pokemon } from "./types";

/**
 * 1. get all pokemon and render their name in
 * <ul><li>Pikachu</li>.....</ul>
 *
 * 2. make search input and a search button
 *
 */

function App() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // initial fetch
    setIsLoading(true);
    getAllPokemon().then((resp) => {
      setPokemon(resp);
      setIsLoading(false);
    });
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClick = () => {
    setIsLoading(true);
    getPokemonByName(query).then((poke) => {
      setPokemon(poke);
      setIsLoading(false);
    });
  };

  return (
    <div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="pokemon?"
          ></input>
          <button type="button" onClick={handleClick}>
            search
          </button>
        </form>
        {isLoading ? (
          <p>loading...</p>
        ) : (
          <table>
            {pokemon.length > 0 ? (
              pokemon.map((poke) => {
                return (
                  <tr>
                    <td>{poke.id}</td>
                    <td>
                      <img src={poke.sprites.front_default} />
                    </td>
                    <td>{poke.name}</td>
                    <td>
                      {poke.types
                        .map((types) => {
                          return types.type.name;
                        })
                        .join(", ")}
                    </td>
                  </tr>
                );
              })
            ) : (
              <p> no results </p>
            )}
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
