import React from 'react'
import HeroImage from '../assets/images/heroimage.JPEG';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { useTypewriter, Cursor } from 'react-simple-typewriter';


const Home = () => {

    const { text } = useTypewriter({
        words: ['Designer', 'Programmer', 'Student', 'Developer', 'Coffee Addict'],
        cursor: true,
        loop: 0,
        typeSpeed: 70,
        deleteSpeed: 70,
        delaySpeed: 1000,
    })

    return (
        <div name="home" className="h-screen w-full bg-tanly">

            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row">

                <div className="flex flex-col justify-center h-full w-max">
                    <h2 className="text-2xl sm:text-7xl font-medium-500 text-browngray">Hello! My name is,<br /> Mitchell Schuldinger</h2>
                    <div>
                        <div className="flex">
                            <h2 className="text-2xl sm:text-4xl text-browngray py-4 max-w-md">
                                I am a
                                <span className="text-greenleaf font-bold pl-2">
                                    {text}
                                </span>
                                <Cursor />
                            </h2>
                        </div>

                        <Link to="portfolio" smooth duration={500} className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-800 to-greenleaf cursor-pointer">
                            Let's Get Started
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