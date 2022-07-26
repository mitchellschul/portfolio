import React from 'react'

const Contact = () => {
    return (
        <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">   

            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                    <p className="py-6">Sent me a message through the form below</p>
                </div>

                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/e3705b01-403c-4c5b-89e6-f8d474a2a956" method="POST" className="flex flex-col w-full md:w-1/2">
                        <input type="text" name="name" placeholder="Enter Your Name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                        <input type="text" name="email" placeholder="Enter Your Email" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4" />
                        <textarea name="message" rows="10" placeholder="Enter Your Message" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-100 duration-300">Lets get started</button>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Contact