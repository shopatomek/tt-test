import React from 'react'
import SignInButton from './SignInButton'

const Appbar = () => {
  return (
    <header className='flex float-right max-w-sm gap-4 p-4'>
        <SignInButton/>
    </header>
  )
}

export default Appbar