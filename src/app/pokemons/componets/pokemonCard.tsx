import Link from "next/link"
import { SimplePokemon } from "../interfaces/simple-pokemons"
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";




interface Props {
    pokemonn: SimplePokemon;

}


export const PokemonCard = ({ pokemonn }: Props) => {


    const { id, name } = pokemonn


    return (

        <div className="mx-auto right-0 mt-2 w-60">
            <div className="bg-white rounded overflow-hidden shadow-lg">
                <div className="text-center p-6 bg-gray-800 border-b flex flex-col items-center ">

                    <Image
                        key={id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        width={100}
                        height={100}
                        alt={name}
                        priority={false}
                    />




                    <p className="pt-2 text-lg font-semibold text-gray-50">{name} </p>

                    <div className="mt-5">
                        <a href={`pokemonDetails/${id}`}
                        // "

                        // // pokemon/${id}
                        // "
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Mas información
                        </a>
                    </div>
                </div>
                <div className="border-b">
                    <Link className="px-4 py-2 hover:bg-gray-100 flex" href="/dashboard/main" >

                        <div className="text-red-600">

                            <IoHeartOutline size={20} />

                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                No es favorito
                            </p>
                            <p className="text-xs text-gray-500">View your campaigns</p>
                        </div>

                    </Link>

                </div>


            </div>
        </div>

    )
}


