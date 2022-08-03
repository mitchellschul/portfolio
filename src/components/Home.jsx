import React from 'react'
import HeroImage from '../assets/heroimage.JPEG';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { useTypewriter, Cursor } from 'react-simple-typewriter';


const Home = () => {

    const { text } = useTypewriter({
        words: ['Designer', 'Programmer', 'Student', 'Developer', 'Coffee Addict'],
        Cursor: '_',
        loop: 0,
        typeSpeed: 70,
        deleteSpeed: 70,
        delaySpeed: 1000,
    })

    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">

            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row">

                <div className="flex flex-col justify-center h-full w-max">
                    <h2 className="text-2xl sm:text-7xl font-medium-500 text-white">Hello! My name is,<br /> Mitchell Schuldinger</h2>
                    <div>
                        <h2 className="text-2xl sm:text-4xl text-gray-500 py-4 max-w-md">
                            I am a
                            <span className="text-blue-500 font-bold pl-2">
                                {text}
                            </span>
                            <Cursor />
                        </h2>
                        <Link to="portfolio" smooth duration={500} className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} />
                            </span>
                        </Link>
                    </div>

                    
                </div>
                <div className="w-full">
                    <img src={HeroImage} alt="Me!" className="rounded-2xl mx-auto w-2/3 md:w-3/4" />
                </div>
                
            </div>


        </div>
    )
}

export default Home