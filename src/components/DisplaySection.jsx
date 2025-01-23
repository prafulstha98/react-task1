import React from 'react'
import LottieAnimation from './LottieAnimation'

const DisplaySection = () => {
  return (
    <div className='grid grid-cols-2 items-center md:grid-cols-1 justify-center'>

      <div>
        <LottieAnimation/>
      </div>

      <div>
        <h1 className='font-bold text-4xl mb-3'>Hello i am scamster</h1>
        <p className='text-blue-600 mb-3'>Developer, Freelancer and a Fraud</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi quibusdam quod eos, laudantium, incidunt repellendus, ad aperiam adipisci fuga quisquam ex reiciendis nam ipsum sit iste alias! Molestiae, maiores?</p>
      </div>

    </div>
  )
}

export default DisplaySection
