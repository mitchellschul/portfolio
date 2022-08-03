import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { BiCoffeeTogo } from 'react-icons/bi'
import { BsFillPersonLinesFill } from "react-icons/bs"


const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin <FaLinkedin size={30} />
                </>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md'
        },
        {   
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com',
            
            
        },
        {
            id: 3,
            child: (
                <>
                    Instagram <FaInstagram size={30} />
                </>
            ),
            href: 'https://instagram.com',
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: 'https://linkedin.com',
           
        },
        {
            id: 5,
            child:(
                <>
                    Coffee? < BiCoffeeTogo size={30} />
                </>
            ) ,
            href: 'https://www.buymeacoffee.com/mitchellschul',
            style: 'rounded-br-md'
        },
    ]

    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>

                {links.map(({ id, child, href, style }) => (
                    <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500"}>
                        <a href={href} className="flex justify-between items-center w-full text-white" target='_blank' rel="noreferrer">
                            {child}
                        </a>
                    </li>
                ))}


            </ul>
        </div>
    )
}

export default SocialLinks