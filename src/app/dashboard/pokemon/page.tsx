import { get } from "http";




const getPokemon = async (limit = 20, offset = 0  ) => {

  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(
    res => res.json()

  )

  console.log(data);

  return data;
  
  

} 



export default async function PokemonPage() {
  const pokemon = await getPokemon(10, 0);
  return (
    
    <div>{JSON.stringify(pokemon)}</div>
  )
}
