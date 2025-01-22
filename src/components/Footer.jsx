import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black w-full h-60 mt-12 flex justify-center items-end p-12'
    style={{
     clipPath: 'polygon(0 24%, 100% 54%, 100% 100%, 0 100%)' 
    }}>

      <footer className='text-white'>
        <p>Developed By</p>
        <p>A Group of Black Hat Hackers</p>
      </footer>

    </div>
  )
}

export default Footer
