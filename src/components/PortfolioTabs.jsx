import React, { useEffect } from 'react'
import placeholder from '../assets/images/portfolio/soon.png';
import accafellas from '../assets/images/portfolio/accafellas.png';
import lakepointe from '../assets/images/portfolio/lakepointe.png'
import odenDash from '../assets/images/portfolio/odenDash.png';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AOS from 'aos';
import "aos/dist/aos.css";



const PortfolioTabs = () => {



    const [openTab, setOpenTab] = React.useState(1);

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    const tabs = [
        {
            id: 1,
            title: 'Web / Mobile Dev',
            projects: [accafellas, lakepointe, placeholder]
        },
        {
            id: 2,
            title: 'UI/UX',
            projects: [odenDash, accafellas, placeholder]
        },
        {
            id: 3,
            title: 'Other',
            projects: [placeholder]
        },
    ]



    return (
        <>
            <div name="portfolio" className="bg-tanly w-full h-full py-14">

                <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                    <div className="pb-8 text-browngray">
                        <p className="text-4xl font-bold inline border-b-4 border-olive">Check out my work</p>
                        <p className="py-2">Portfilo is under construction</p>
                    </div>
                    <div className="flex flex-wrap align-center pt-8">
                        <div className="w-full">
                            <ul
                                className="flex mb-0 list-none flex-wrap pb-4 flex-row "
                                role="tablist"
                            >
                                {
                                    tabs.map(({ id, title, projects }) => (
                                        <li key={id} className="-mb-px mr-2 last:mr-0 flex-auto text-center ">
                                            <a
                                                className={
                                                    "hover:bg-olive duration-200 ease-in-out text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" +
                                                    (openTab === id
                                                        ? "text-white bg-olive"
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

                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-0 md:px-10">
                                        {
                                            tab.projects.map((project, index) => (
                                                <div key={index} to='/aboutProject' className="shadow-md shadow-gray-600 rounded-lg ">
                                                    <a href="https://github.com/mitchellschul/projectRundown" target="_blank" rel="noopener noreferrer">
                                                        <img src={project} alt="yagga" className="rounded-md duration-200 w-full h-full hover:scale-105 " />
                                                    </a>
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