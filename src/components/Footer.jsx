import React from 'react'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonBadgeFill } from "react-icons/bs"


const Footer = () => {

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
                    Linkedin <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com',
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:foo@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonBadgeFill size={30} />
                </>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-br-md'
        },
    ]

  return (
    <div className="text-center bg-gray-800 text-white" >
        <div px-6 pt-6>
            <div className="flex justify-center mb-6">

                {
                    links.map((id, child, href, style) => (
                        <a key={id} href={href} type="button" className="rounded-full border-2 border-white text-white uppercase hover:bg-black hover:bg-opacity-5 focous:outline-none transition duration-150 ease-in-out w-9 h-9 m-1">{child}</a>
                    ))
                }

            </div>
        </div>
    </div>
  )
}

export default Footer