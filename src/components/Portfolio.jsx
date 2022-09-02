import React from 'react';
import placeholder from '../assets/portfolio/placeholder.png';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: placeholder
        },
        {
            id: 2,
            src: placeholder
        },
        {
            id: 3,
            src: placeholder
        },
        {
            id: 4,
            src: placeholder
        },
        {
            id: 5,
            src: placeholder
        },
        {
            id: 6,
            src: placeholder
        },
    ]

    return (
        <div name="portfolio" className="h-full w-full text-white">

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">Check out my work</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {
                        portfolios.map(({ id, src }) => (

                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                <img src={src} alt="yagga" className="rounded-md duration-200 hover:scale-105" />
                                <div className="flex items-center justify-center">
                                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                        Demo
                                    </button>
                                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                        Code
                                    </button>
                                </div>
                            </div>


                        ))
                    }
                </div>



            </div>

        </div>
    )
}

export default Portfolio