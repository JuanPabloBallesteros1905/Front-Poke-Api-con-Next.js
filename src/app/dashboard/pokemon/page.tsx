import { PokeResponse } from "@/app/pokemons/interfaces/pokeResponse";
import { SimplePokemon } from "@/app/pokemons/interfaces/simple-pokemons";




const getPokemon = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {

  const data: PokeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(
    res => res.json()

  );


  const pokemons: SimplePokemon[] = data.results.map(pokeModal => ({
    id: pokeModal.url.split('/').at(-2)!,
    name: pokeModal.name,
  }));


  return pokemons









}



export default async function PokemonPage() {

  const pokemon: SimplePokemon[] = await getPokemon(10, 0);








  return (

    <div>{

      pokemon.map(pokemon => <div key={pokemon.id}>{pokemon.name}</div>)
      // JSON.stringify(pokemon)
    }


    </div>
  )
}
