import React from 'react'
import { BsLaptop, BsTelephone, BsFillFileEarmarkPersonFill, } from 'react-icons/bs'
import { BiHomeAlt } from "react-icons/bi"
import { BsFillFileCodeFill } from 'react-icons/bs'
import { Link } from "react-scroll";


const BottomNav = () => {

    const links = [
        {
            id: 1,
            icon: <BiHomeAlt size={30} />,
            link: 'home',
        },
        {
            id: 2,
            icon: <BsFillFileEarmarkPersonFill size={30} />,
            link: 'about',


        },
        {
            id: 3,
            icon: <BsLaptop size={30} />,
            link: 'portfolio',
        },
        {
            id: 4,
            icon: <BsFillFileCodeFill size={30} />,
            link: 'skills',

        },
        {
            id: 5,
            icon: <BsTelephone size={30} />,
            link: 'contact',
        },
    ]

    return (
        <div className="relative hidden md:flex ">
            <div className="flex w-full fixed bottom-[10%] justify-center" >

                {links.map(({ id, icon, link, }) => (
                    <Link key={id} to={link} smooth duration={500} className={"flex justify-center items-center w-20 h-14 py-3   hover:rounded-md duration-300 cursor-pointer"}>
                        <div className="text-browngray hover:text-white duration-200 ease-in-out">
                            {icon}
                        </div>
                    </Link>
                ))}
            </div>
        </div>

        // <div className="hidden md:flex mx-auto bottom-0 fixed">
        //     <div className="px-6 pt-6 flex flex-col">
        //         {links.map(({ id, icon, link, }) => (
        //             <Link key={id} to={link} smooth duration={500} className={"flex justify-center items-center w-40 h-14 py-3  hover:mb-[-3px] hover:rounded-md duration-300 cursor-pointer"}>
        //                 <div className="text-browngray">
        //                     {icon}
        //                 </div>
        //             </Link>
        //         ))}
        //     </div>

        // </div>

    )

}

export default BottomNav