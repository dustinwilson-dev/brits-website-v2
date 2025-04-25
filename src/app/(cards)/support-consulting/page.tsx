import Hero from '@/components/Hero'
import React from 'react'

const page = () => {
  return (
    <>
        <Hero 
            headerText="hi in progress"
            xoffset={29}
            image="/test"
            outline
        />
    </>
  )
}

export default page