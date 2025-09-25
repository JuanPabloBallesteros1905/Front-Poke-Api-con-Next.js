import { SimplePokemon } from "../interfaces/simple-pokemons";
import Image from "next/image";
import { PokemonCard } from "./pokemonCard";


interface Props {
    pokemon: SimplePokemon[];
}


export const PokemonGrid = ({ pokemon }: Props) => {


    return (


        
        <div className="flex flex-wrap justify-center items-center gap-10"> 


            {
                pokemon.map((pokemon) => (
                    <PokemonCard pokemonn={pokemon} key={pokemon.id}  />
                ))
            }
        
        
        </div>
 


    )
}


