

import Image from 'next/image'
import { } from 'react-icons'
import { IoBrowsersOutline, IoCalculator, IoFootball, IoLogoReact } from 'react-icons/io5'
import SideBarItem from './SideBarItem'



const itemsSideBar = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline />,
        title: 'Dashboard',
        subtitle: 'Data Overview'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator />,
        title: 'Counter',
        subtitle: 'View Counter'
    },
    {
        path: '/dashboard/pokemon',
        icon: <IoFootball />,
        title: 'Pokemons',
        subtitle: 'Show the pokemons'
    }
]

export const SideBar = () => {
    return (
        <div id="menu"
            style={{ width: "400px" }}
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64   left-0 h-screen overflow-y-scroll">
            <div id="logo" className="my-4 px-6">

                <h1 className="text-lg flex items-center md:text-2xl font-bold text-white">

                    <IoLogoReact className='mr-2' />

                    <span>

                        Dash


                    </span>


                    <span className="text-blue-500">8</span>.</h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image
                            width={40}
                            height={40}
                            className="rounded-full w-8 h-8" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" alt="" />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Juan Pablo Ballesteros
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">


                {
                    itemsSideBar.map((item) => (
                        <SideBarItem
                            key={item.path}
                            {...item} />
                    ))
                }

                {/* <SideBarItem path='#' icon={<IoLogoReact />} title='Dashboard' subtitle='Data Overview' /> */}




            </div>
        </div>

    )
}
