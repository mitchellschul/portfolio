import React from 'react'

const About = () => {
    return (
        <div name="about" className="w-full h-full bg-tanly text-white pt-14" >
            <div className="max-w-screen-lg p-10 mx-auto flex flex-col justify-center w-[95%] h-full bg-greenleaf md:px-68 rounded-xl" >

                <div className="pb-3">
                    <p className="text-4xl font-bold inline border-b-4 border-tanly" >
                        About
                    </p>
                </div>

                <p className="text-lg md:text-xl mt-10" >
                    Hey, <br />   Thank you for checking out my website.
                </p>

                <br />

                <p className="text-lg md:text-xl">
                    I am in my third year at Michigan State University studying information science with a focus in human-centered technology, and a minor in computer science. I have always had a passion for learning new technologies and how they can help improve the daily life. My main interests include web and mobile design, artificial intelligence, graphic design, and data visualization.
                </p>

                <br />

                <p className="text-lg md:text-xl">
                    Outside of the computer, I am a member and website manager of the Michigan State Accafellas. I love to travel, cook, and collect unique watches.
                </p>
            </div>
        </div>
    )
}

export default About