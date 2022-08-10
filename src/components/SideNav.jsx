import React from 'react'
import { BsLaptop, BsTelephone, BsFillFileEarmarkPersonFill, } from 'react-icons/bs'
import { BiHomeAlt } from "react-icons/bi"
import { BsFillFileCodeFill } from 'react-icons/bs'
import { Link } from "react-scroll";


const SideNav = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    Home <BiHomeAlt size={30} />
                </>
            ),
            link: 'home',
        },
        {
            id: 2,
            child: (
                <>
                    About <BsFillFileEarmarkPersonFill size={30} />
                </>
            ),
            link: 'about',


        },
        {
            id: 3,
            child: (
                <>
                    Portfolio <BsLaptop size={30} />
                </>
            ),
            link: 'portfolio',
        },
        {
            id: 4,
            child: (
                <>
                    Skills <BsFillFileCodeFill size={30} />
                </>
            ),
            link: 'skills',

        },
        {
            id: 5,
            child: (
                <>
                    Contact < BsTelephone size={30} />
                </>
            ),
            link: 'contact',
        },
    ]

    return (


        <div className="hidden lg:flex flex-col top-[39%] left-0 fixed">
            <ul>

                {links.map(({ id, child, link, }) => (
                    <Link key={id} to={link} smooth duration={500} className={"flex justify-between items-center w-40 h-14 px-3 ml-[-93px] hover:ml-[-0px] hover:rounded-md duration-300 cursor-pointer"}>
                        <div className="flex justify-between items-center w-full text-browngray">
                            {child}
                        </div>
                    </Link>
                ))}


            </ul>
            <div className="md:fixed left-10 w-0.5 h-1/3 mt-[15%] bg-browngray"></div>
            {/* <div className="absolute left-1/2 -ml-0.5 w-0.5 h-screen bg-white"></div> */}
        </div>

    )

}

export default SideNav