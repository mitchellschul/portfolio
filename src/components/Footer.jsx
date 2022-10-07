import React from 'react'

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { BiCoffeeTogo } from 'react-icons/bi'

const Footer = () => {

    const icons = [
        {
            id: 1,
            icon: <FaLinkedin size={30} />,
            href: 'https://www.linkedin.com/in/mitchell-schuldinger/',
        },
        {
            id: 2,
            icon: <FaGithub size={30} />,
            href: 'https://github.com/mitchellschul',
        },
        {
            id: 3,
            icon: <FaInstagram size={30} />,
            href: 'https://www.instagram.com/mitchell_schul/',
        },
        {
            id: 4,
            icon: < BiCoffeeTogo size={30} />,
            href: 'https://www.buymeacoffee.com/mitchellschul',
        },
    ]

    return (
        <>
            <div className="hidden md:flex pb-5 pt-4 justify-between items-center w-full px-4 bg-tanly" >
                <div className="flex justify-center">

                    {
                        icons.map(({ id, icon, href }) => (
                            <a key={id} href={href} className="flex mx-5 text-browngray hover:text-gray-600 hover:scale-125 duration-300 " target='_blank' rel='noreferrer'>{icon}</a>
                        ))
                    }

                </div>
                <div className="text-browngray">
                    &copy; {new Date().getFullYear()} Mitchell Schuldinger
                </div>
            </div>
            <div className="flex flex-col relative md:hidden items-center w-full px-4 py-4 bg-browngray" >
                <div className="flex justify-center">

                    {
                        icons.map(({ id, icon, href }) => (
                            <a key={id} href={href} className="flex mx-5 text-tanly hover:scale-125 duration-200 hover:text-white" target='_blank' rel='noreferrer'>{icon}</a>
                        ))
                    }

                </div>
                <div className="text-tanly mt-3 cursor-default">
                    &copy; {new Date().getFullYear()} Mitchell Schuldinger
                </div>
            </div>
        </>
    )
}

export default Footer