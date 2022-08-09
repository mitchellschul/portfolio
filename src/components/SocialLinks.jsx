import React from 'react'
import { BsLaptop, BsTelephone, BsFillFileEarmarkPersonFill, } from 'react-icons/bs'
import { BiHomeAlt } from "react-icons/bi"
import {BsFillFileCodeFill} from 'react-icons/bs'


const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    Home <BiHomeAlt size={30} />
                </>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    About <BsFillFileEarmarkPersonFill size={30} />
                </>
            ),
            href: 'https://github.com',


        },
        {
            id: 3,
            child: (
                <>
                    Portfolio <BsLaptop size={30} />
                </>
            ),
            href: 'https://instagram.com',
        },
        {
            id: 4,
            child: (
                <>
                    Skills <BsFillFileCodeFill size={30} />
                </>
            ),
            href: 'https://linkedin.com',

        },
        {
            id: 5,
            child: (
                <>
                    Contact < BsTelephone size={30} />
                </>
            ),
            href: 'https://www.buymeacoffee.com/mitchellschul',
            style: 'rounded-br-md'
        },
    ]

    return (


        <div className="hidden lg:flex flex-col top-[39%] left-0 fixed">
            <ul>

                {links.map(({ id, child, href, style }) => (
                    <li key={id} className={"flex justify-between items-center w-40 h-14 px-3 ml-[-93px] hover:ml-[-0px] hover:rounded-md duration-300 "}>
                        <a href={href} className="flex justify-between items-center w-full text-white" target='_blank' rel="noreferrer">
                            {child}
                        </a>
                    </li>
                ))}


            </ul>
            {/* <div className="absolute left-1/2 -ml-0.5 w-0.5 h-screen bg-white"></div> */}
        </div>

    )

}

export default SocialLinks