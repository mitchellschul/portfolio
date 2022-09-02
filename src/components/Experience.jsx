import React from 'react';
import html from '../assets/images/technologies/html.png';
import css from '../assets/images/technologies/css.png';
import javascript from '../assets/images/technologies/javascript.png';
import reactImg from '../assets/images/technologies/react.png';
import gitlab from '../assets/images/technologies/gitlab.png';
import github from '../assets/images/technologies/github.png';
import tailwind from '../assets/images/technologies/tailwind.png';
import python from '../assets/images/technologies/python.png';
import cpp from '../assets/images/technologies/c++.png';
import java from '../assets/images/technologies/java.png';
import ai from '../assets/images/technologies/ai.jpg';
import figma from '../assets/images/technologies/figma.png';
import jquery from '../assets/images/technologies/Jquery.png';
import ps from '../assets/images/technologies/ps.png';
import r from '../assets/images/technologies/r.png';
import swift from '../assets/images/technologies/swift.png';
import php from '../assets/images/technologies/php.png';

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 4,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 5,
            src: jquery,
            title: 'Jquery',
            style: 'shadow-blue-600'
        },
        {
            id: 6,
            src: reactImg,
            title: 'React',
            style: 'shadow-[#08d7fd]'
        },
        {
            id: 7,
            src: swift,
            title: 'Swift',
            style: 'shadow-[#d95e2e]'
        },
        {
            id: 8,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-500'
        },
        {
            id: 9,
            src: php,
            title: 'PHP',
            style: 'shadow-[#6281b6]'
        },
        {
            id: 10,
            src: cpp,
            title: 'C++',
            style: 'shadow-[#004283]'
        },
        {
            id: 11,
            src: java,
            title: 'Java',
            style: 'shadow-[#dc380f]'
        },
        {
            id: 12,
            src: r,
            title: 'R',
            style: 'shadow-blue-600'
        },
        {
            id: 13,
            src: ps,
            title: 'Photoshop',
            style: 'shadow-[#8fc2fb]'
        },
        {
            id: 14,
            src: ai,
            title: 'Illustrator',
            style: 'shadow-[#ff7c00]'
        },
        {
            id: 15,
            src: figma,
            title: 'Figma',
            style: 'shadow-[#ad00ff]'
        },
        {
            id: 16,
            src: gitlab,
            title: 'GitLab',
            style: 'shadow-orange-600'
        },
        {
            id: 17,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
    ]

    return (
        <div name="skills" className="bg-browngray to-black w-full h-full">

            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white" >

                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline" > Experience </p>
                    <p className="py-6" >Technologies I have worked with</p>
                </div>

                <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-2" >

                    {
                        techs.map(({ id, src, title, style }) => (
                            <div key={id} className={`md:shadow-md hover:scale-105 duration-500 py-2 rounded-lg !${style}`}>
                                <img src={src} alt="" className="w-20 mx-auto" />
                                <p className="hidden md:block mt-4" >{title}</p>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}

export default Experience