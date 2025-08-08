import React from 'react'

function OurServices() {
  return (
    <div className="relative p-5 bg-BRITS-blue-dark min-h-[25vh]">
        <div className="ml-10 lg:max-w-[65%]">
            <h2 className='font-spinnaker text-white text-4xl mb-2'>Our Services</h2>
            <p className='text-white font-[300] text-md mb-10'>
                Our team of experts with more than 25 years experience are committed to delivering exceptional 
                IT services that drive business growth and innovation. By leveraging our expertise, clients can 
                focus on their core operations with confidence, knowing that their IT infrastructure is in capable hands.
            </p>
            <a className='text-white border-2 p-4 rounded-3xl hover:bg-BRITS-blue-light' href="/images/BRITSCapabilitiesStatement.pdf" target="_blank" rel="noopener noreferrer">Capabilities Statement</a>

        </div>
    </div>
  )
}

export default OurServices