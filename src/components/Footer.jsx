import React from 'react'

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { BsFillPersonLinesFill } from "react-icons/bs"
import { BiCoffeeTogo } from 'react-icons/bi'

const Footer = () => {

    const icons = [
        {
            id: 1,
            icon: <FaLinkedin size={30} />,
            href: 'https://linkedin.com',
        },
        {
            id: 2,
            icon: <FaGithub size={30} />,
            href: 'https://github.com',
        },
        {
            id: 3,
            icon: <FaInstagram size={30} />,
            href: 'https://instagram.com',
        },
        {
            id: 4,
            icon: <BsFillPersonLinesFill size={30} />,
            href: 'https://linkedin.com',
        },
        {
            id: 5,
            icon: < BiCoffeeTogo size={30} />,
            href: 'https://www.buymeacoffee.com/mitchellschul',
        },
    ]

    return (
        <div className="text-center bg-gray-800 text-white" >
            <div px-6 pt-6 flex flex-col>

                <div className="flex justify-center pb-4">

                    {
                        icons.map(({ id, icon, href }) => (
                            <a key={id} href={href} className="flex mx-5 text-white hover:scale-125 duration-200" target='_blank' rel='noreferrer'>{icon}</a>
                        ))
                    }


                </div>
                <div className="pb-6 text-gray-500">
                    &copy; {new Date().getFullYear()} Mitchell Schuldinger
                </div>
            </div>
        </div>
    )
}

export default Footer