import type { Pokemon } from "@/app/pokemons/interfaces/pokeDetailResponse";
import { Metadata } from "next";
import Image from "next/image";



interface Props {
    params: { id: string }
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id, name } = await getPokeminById(params.id)

    console.log(name);

    return {
        title: `Informacion sobre ${name}`,
        description: `Informacion sobre el pokemon ${name}`,
    }
}


const getPokeminById = async (id: string): Promise<Pokemon> => {


    console.log(`ID recibido ===> ${id}`);


    const poke: Pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        cache: 'force-cache'
    }).then(res => res.json())






    return poke





}



export default async function Pokemonpage({ params }: Props) {

    const pokeResponse = await getPokeminById(params.id)

    return (


        <div className="h-screen      flex flex-col justify-center items-center mb-200  ">



            <div className="mt-10" ></div>


            <Image
                className="w-70 h-70 border-4 border-white rounded-full  m-4"

                width={200}
                height={200}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeResponse.id}.svg`}
                alt={"Current Pokemon"}

            />
            <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-3">
                <div className="mt-2 mb-8 w-full">
                    <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-black">
                        General Information
                    </h4>
                    <p className="mt-2 px-2 text-base text-gray-600">
                        As we live, our hearts turn colder. Cause pain is what we go through
                        as we become older. We get insulted by others, lose trust for those
                        others. We get back stabbed by friends. It becomes harder for us to
                        give others a hand. We get our heart broken by people we love, even
                        that we give them all...
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 px-2 w-full">
                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p className="text-sm text-gray-600">Education</p>
                        <p className="text-base font-medium text-navy-700 dark:text-white">
                            Stanford University
                        </p>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p className="text-sm text-gray-600">Languages</p>
                        <p className="text-base font-medium text-navy-700 dark:text-white">
                            English, Spanish, Italian
                        </p>
                    </div>

                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p className="text-sm text-gray-600">Department</p>
                        <p className="text-base font-medium text-navy-700 dark:text-white">
                            Product Design
                        </p>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p className="text-sm text-gray-600">Work History</p>
                        <p className="text-base font-medium text-navy-700 dark:text-white">
                            English, Spanish, Italian
                        </p>
                    </div>

                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p className="text-sm text-gray-600">Organization</p>
                        <p className="text-base font-medium text-navy-700 dark:text-white">
                            Simmmple Web LLC
                        </p>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                        <p className="text-sm text-gray-600">Birthday</p>
                        <p className="text-base font-medium text-navy-700 dark:text-white">
                            20 July 1986
                        </p>
                    </div>
                </div>
            </div>

        </div>

    )
}
