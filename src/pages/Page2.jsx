import React from 'react'

const Page2 = () => {
    return (
        <div className='md:h-[100vh]  w-[100%] py-5   px-10 flex items-center justify-between relative '>
            <div className='h-[100%] w-[32%] overflow-hidden '>
                <img data-scroll data-scroll-speed='1' className='h-[100%]  scale-105  w-[100%]  cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/ee1c2e8894a4c47c4f4ce71b8973589f8a5045b2-902x1500.png/Rectangle%203.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format" alt="" />
            </div>
            <div className='h-[100%] w-[32%]  overflow-hidden '>
                <img data-scroll data-scroll-speed='1' className='h-[100%]  scale-105 w-[100%]  cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/bb84b7106e978c37f5aa92c8d5781751b2e9d9f2-900x1500.png/Rectangle%202.png?w=640&h=1067&auto=format" alt="" />
            </div>
            <div className='h-[100%] w-[32%]  overflow-hidden'>
                <img data-scroll data-scroll-speed='1' className='h-[100%] scale-105  w-[100%]  cover' src="https://cdn.sanity.io/images/w8f1ak3c/production/d3151106849ff2494d66916cf554c68a0603444d-902x1500.png/Rectangle%20220.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format" alt="" />
            </div>
        </div>
    )
}

export default Page2
