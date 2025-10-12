import { PokemonGrid } from "@/app/pokemons/componets/pokemonGrid";
import { PokeResponse } from "@/app/pokemons/interfaces/pokeResponse";
import { SimplePokemon } from "@/app/pokemons/interfaces/simple-pokemons";
import Image from "next/image";

const getPokemon = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokeResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons: SimplePokemon[] = data.results.map((pokeModal) => ({
    id: pokeModal.url.split("/").at(-2)!,
    name: pokeModal.name,
  }));

  return pokemons;
};

export default async function PokemonPage() {
  const pokemon: SimplePokemon[] = await getPokemon(100, 0);

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-10 justify-center items-center ">
        <span>Listado estatico de pokemons</span>

        <PokemonGrid pokemon={pokemon} />
      </div>
    </div>
  );
}
