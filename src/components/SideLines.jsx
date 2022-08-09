import React from 'react'

const SideLines = () => {
  return (
    <div>
        {/* Left Line */}
        <div className="md:fixed ml-10 w-0.5 h-1/3 top-[5%] bg-white"></div>
        <div className="md:fixed left-10 w-0.5 h-1/3 bottom-[5%] bg-white"></div>
        {/* Right Line */}
        <div className="md:fixed right-10 w-0.5 h-[90%] bottom-[5%] bg-white"></div>
    </div>
  )
}

export default SideLines