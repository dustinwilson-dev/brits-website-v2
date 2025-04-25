import React from 'react'

const page = () => {
  return (
    <>
        <div className='flex flex-col justify-center items-center w-full gap-6 my-6'>
            <p className='text-2xl font-light'>Log In To Connect With Members</p>
            <p className='font-light'>View and follow other members, leave comments & more.</p>
            <button className='bg-red-700 text-white px-12 py-3 rounded-3xl hover:cursor-pointer hover:bg-red-500'>Log In</button>
        </div>
    </>
  )
}

export default page