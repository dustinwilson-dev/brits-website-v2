import React from 'react'
import Hero from '@/components/Hero'
import BackButton from '@/components/BackButton'

function WhyChooseUs() {
  return (
    <>
        <Hero 
        headerText='Why Choose Blue Ribbon IT Services?' 
        image='/images/Why Choose BRITS Image.webp'
        xoffset={75} 
        yoffset={-75} 
        height={45}
        width={900}
        />

        <div className="w-full flex justify-center mb-25">
            <div className="max-w-[70%] lg:max-w-[60%] flex flex-col items-center gap-12">
                <BackButton />
                <p className='text-lg font-light'>
                    <span className='text-xl font-medium'>Blue Ribbon IT Services, LLC, </span>
                    emerges as a forward-thinking providers of specialized IT solutions. 
                    Established by a team of seasoned professionals, each excels over 18 years of direct, hands-on 
                    experience as contractors, providing strategic IT consulting services in the government sector. 
                    We mobilize the right people, skills, and technologies to assist our clients in enhancing their 
                    performance and achieve their goals. Our commitment revolves by exceeding customer expectations 
                    through exceptional service and the creation of innovative, flexible solutions. With our team profound 
                    expertise, we are equipped to deliver comprehensive, end-to-end solutions that propel business success 
                    in today’s digital landscape.
                </p>
                <ol className='flex flex-col gap-7 list-[decimal-leading-zero] list-outside w-[85%] break-words font-style-5 marker:font-spinnaker marker:text-2xl marker:text-BRITS-blue-dark'>
                    <li><p className='font-light pl-6 tracking-wider text-lg'>
                        <span className='font-semibold'>Personalized IT Solutions: </span>
                        At Blue Ribbon IT Services, we tailor our solutions to meet the unique needs of your business, ensuring that you get the most efficient and effective IT support.
                    </p></li>
                    <li><p className='font-light pl-6 tracking-wider text-lg'>
                        <span className='font-semibold'>Expert Team: </span>
                        Our team is composed of certified IT professionals with extensive experience and a proven track record in solving complex technological challenges.
                    </p></li>
                    <li><p className='font-light pl-6 tracking-wider text-lg'>
                        <span className='font-semibold'>Business Hours Support with Emergency Response: </span>
                        Our dedicated team offers comprehensive IT support during business hours, ensuring your systems operate smoothly. For urgent issues outside these times, we have an emergency response protocol to address critical concerns, helping to minimize downtime and maintain productivity.
                    </p></li>
                    <li><p className='font-light pl-6 tracking-wider text-lg'>
                        <span className='font-semibold'>Proactive Approach: </span>
                        We don’t just fix problems—we prevent them. Our proactive maintenance can save your business from the hassle of IT-related setbacks.
                    </p></li>
                    <li><p className='font-light pl-6 tracking-wider text-lg'>
                        <span className='font-semibold'>Cutting-Edge Technology: </span>
                        Stay ahead of the curve with our commitment to the latest technologies, ensuring your business gains a competitive edge.
                    </p></li>
                    <li><p className='font-light pl-6 tracking-wider text-lg'>
                        <span className='font-semibold'>Security-Focused: </span>
                        With cybersecurity threats on the rise, our robust security protocols safeguard your data and protect your business from potential breaches.
                    </p></li>
                    <li><p className='font-light pl-6 tracking-wider text-lg'>
                        <span className='font-semibold'>Strategic IT Consulting: </span>
                        Our strategic consulting services can help align your IT infrastructure with your business objectives, leading to improved performance and productivity.
                    </p></li>
                    <li><p className='font-light pl-6 tracking-wider text-lg'>
                        <span className='font-semibold'>Customizable Service Packages: </span>
                        Whether you're a small start-up or a large enterprise, our service packages are designed to be flexible to fit your budget and business goals.
                    </p></li>
                    <li><p className='font-light pl-6 tracking-wider text-lg'>
                        <span className='font-semibold'>Cost-Effective Solutions: </span>
                        We offer competitive pricing without compromising on quality or service, ensuring you get the best value for your IT investment.
                    </p></li>
                    <li><p className='font-light pl-6 tracking-wider text-lg'>
                        <span className='font-semibold'>Excellent Customer Service: </span>
                        We place our clients at the heart of everything we do, dedicating ourselves to delivering unparalleled customer service that emphasizes a personalized and responsive approach.
                    </p></li>
                </ol>
                <BackButton />
            </div>
        </div>
    </>
  )
}

export default WhyChooseUs