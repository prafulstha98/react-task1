import React from 'react'
import { FaReact,FaPython } from "react-icons/fa6";
import { FaJava,FaCss3 } from "react-icons/fa"; 
import { SiHtml5,SiKotlin } from "react-icons/si";


const Tech = () => {
  return (
    <div>

    <h1 className='text-4xl text-center font-bold'>Technologies I use</h1>

    <div className='grid grid-cols-4 gap-y-20 my-10 justify-items-center lg:grid-cols-3'>
<FaReact size={125} className='animate-spin'/>
<FaJava size={125} className=''/>
<SiHtml5  size={125}/>
<FaPython  size={125}/>
<FaCss3  size={125}/>
<SiKotlin  size={125}/>
    </div>

    </div>
  )
}

export default Tech
