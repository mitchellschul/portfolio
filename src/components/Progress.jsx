import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { Link } from "react-scroll";

const Progress = () => {


    let calcScrollValue = () => {
        let scrollProgress = document.getElementById("progress");
        // let progressValue = document.getElementById("progress-value");
        let pos = document.documentElement.scrollTop;
        let calcHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / calcHeight);
        if (pos > 0) {
            scrollProgress.style.display = "grid";
        } else {
            scrollProgress.style.display = "none";
        }
        scrollProgress.addEventListener("click", () => {
            // document.documentElement.to = 0;
        });
        scrollProgress.style.background = `conic-gradient(#39603D ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    };
    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;

    return (
        <div id='progress' className='flex fixed bottom-5 right-5 h-[70px] w-[70px] items-center text-center rounded-full cursor-pointer z-[20] hover:w-[200px] duration-300'>
            <Link id='progressValue' to='home' smooth={true} duration={500} className='relative block h-[85%] w-[85%] bg-[#d7d7d7] rounded-full ml-[8%] text-[#001a2e] items-center'>
                <FaArrowUp className="relative left-5 top-5 scale-150" />
                <p className="relative left-12 text-sm opacity-0 hover:opacity-100 duration-100 hover:text-lg flex">Scroll To Top</p>
            </Link>
        </div >
    )
}

export default Progress