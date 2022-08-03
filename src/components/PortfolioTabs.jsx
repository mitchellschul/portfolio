import React, { useEffect } from 'react'
import placeholder from '../assets/portfolio/placeholder.png';
import accafellas from '../assets/portfolio/accafellas.png';
import lakepointe from '../assets/portfolio/lakepointe.png'


import AOS from 'aos';
import "aos/dist/aos.css";



const PortfolioTabs = () => {
    const [openTab, setOpenTab] = React.useState(1);

    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);

    const tabs = [
        {
            id: 1,
            title: 'Web',
            projects: [placeholder, accafellas, lakepointe]
        },
        {
            id: 2,
            title: 'UI/UX',
            projects: [placeholder, accafellas]
        },
        {
            id: 3,
            title: 'Mobile',
            projects: [placeholder, accafellas]
        },
        {
            id: 4,
            title: 'Other',
            projects: [placeholder, placeholder]
        },
    ]



    return (
        <>
            <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full h-screen">

                <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                    <div className="pb-8 text-white">
                        <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                        <p className="py-6">Check out my work</p>
                    </div>
                    <div className="flex flex-wrap align-center">
                        <div className="w-full">
                            <ul
                                className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                                role="tablist"
                            >
                                {
                                    tabs.map(({ id, title, projects }) => (
                                        <li key={id} className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                            <a
                                                className={
                                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                                    (openTab === id
                                                        ? "text-white bg-gray-600"
                                                        : "text-gray-600 bg-white")
                                                }
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab(id);
                                                }}
                                                data-toggle="tab"
                                                href="#link1"
                                                role="tablist"
                                            >
                                                {title}
                                            </a>
                                        </li>
                                    ))
                                }

                            </ul>
                            {tabs.map((tab, index) => (
                                <div key={index} className={openTab === tab.id ? "block" : "hidden"} id="link1" transition-opacity ease-in duration-700 opacity-100 >

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-0 md:px-12">
                                    {
                                        tab.projects.map((project, index) => (
                                            <div key={index} className="shadow-md shadow-gray-600 rounded-lg ">
                                                <img src={project} alt="yagga" className="rounded-md duration-200 w-full h-full hover:scale-105 " />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioTabs