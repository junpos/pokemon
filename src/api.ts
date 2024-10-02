import { Pokemon } from "./types";

const BASE_URL = "http://localhost:3000";

async function delay(time: number = 500) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, time);
  });
}

export const getAllPokemon = async (): Promise<Pokemon[]> => {
  const uri = `/pokemon`;
  await delay(1000);
  const response = await fetch(BASE_URL + uri);
  const json = await response.json();
  return json;
};

export const getPokemonByName = async (name: string): Promise<Pokemon[]> => {
  const pokemonList = await getAllPokemon();
  return pokemonList.filter((pokemon: { name: string }) => {
    return pokemon.name.toLowerCase().includes(name.toLowerCase());
  });
};
