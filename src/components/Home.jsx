import React from 'react'
import HeroImage from '../assets/images/heroimage.JPEG';
// import { Link } from "react-scroll";
import { useTypewriter, Cursor } from 'react-simple-typewriter';


const Home = () => {

    const { text } = useTypewriter({
        words: ['Designer', 'Programmer', 'Student', 'Developer', 'Coffee Addict'],
        cursor: true,
        loop: 0,
        typeSpeed: 70,
        deleteSpeed: 70,
        delaySpeed: 1100,
    })

    return (
        <div>
            <div name='home' className="h-full w-full relative pb-10 px-6 bg-tanly xl:px-0">
                <div className="pt-32 min-w-screen-2xl sm:items-center md:flex justify-between items-center justify-content relative z-10 container mx-auto">

                    <div role="contentinfo" className="w-full lg:w-1/2">
                        <h1 tabIndex="0" className="text-browngray text-4xl md:text-[44px] lg:text-6xl font-black mb-4">Hi, My name is <br />Mitchell Schuldinger</h1>

                        <h2 tabIndex="0" className="text-browngray font-regular mb-4 text-2xl sm:text-4xl">
                            I am a
                            <span className="text-greenleaf font-bold pl-2">
                                {text}
                            </span>
                            <Cursor />
                        </h2>
                    </div>
                    <div className="w-full justify-center md:w-1/2 lg:w-1/3 h-full lg:pr-10 xl:pr-0">
                        <img className="mx-auto rounded-2xl" src={HeroImage} alt="Me! w-1/4" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home