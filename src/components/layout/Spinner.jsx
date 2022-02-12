import React from 'react'

//image
import gif from './assets/spinner.gif'

export const Spinner = () => {
  return (
    <div className='w-100 mt-20'>
        <img src={gif} width={180} alt="Loading..." className='text-center mx-auto'/>
    </div>
  )
}
