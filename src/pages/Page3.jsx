import gsap from 'gsap';
import React, { useRef } from 'react';

const Page3 = () => {

    const cursorRef = useRef(null)

    const mouseEnter = () => {
        gsap.to(cursorRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.1,
        });
    };

    const MouseLeave = () => {
        gsap.to(cursorRef.current, {
            opacity: 0,
            scale: 0,
            duration: 0.1,
        });
    };

    const mouseMoved = (dets) => {
        gsap.to(cursorRef.current, {
            left: dets.screenX - 70,
            top: dets.screenY - 150,
            ease: 'power3.out',


        });
    };


    return (
        <div onMouseMove={mouseMoved} className='md:relative md:mt-0 mt-370  '>
            <div ref={cursorRef} className="fixed   -z-10 opacity-0 scale-0 h-38 w-38 bg-amber-100 rounded-full"></div>
            <div className="flex flex-wrap px-40 py-10 md:mt-10 md:gap-20 items-center justify-between">
                <div onMouseEnter={mouseEnter} onMouseLeave={MouseLeave} className="md:h-130  md:w-110  flex items-center justify-center  overflow-hidden">
                    <img
                        className=" md:h-[80%] object-cover"
                        src="https://cdn.sanity.io/images/w8f1ak3c/production/ff380ebfee344ff98d24d4156ded6b9dc22a2a2a-5000x5000.png/Change-The-Course-Cookbook-Two-Good-Co.png?w=1024&h=1024&auto=format"
                        alt=""
                    />
                </div>
                <div onMouseEnter={mouseEnter} onMouseLeave={MouseLeave} className="md:h-130 md:w-110 flex items-center justify-center  overflow-hidden">
                    <img
                        className=" h-[80%] object-cover"
                        src="https://cdn.sanity.io/images/w8f1ak3c/production/ff38add7e1688478b9265cc2f1c252db0ff61158-5000x5000.png/68.png?w=1024&h=1024&auto=format"
                        alt=""
                    />
                </div>
                <div onMouseEnter={mouseEnter} onMouseLeave={MouseLeave} className="md:h-130   md:w-110 flex items-center justify-center  overflow-hidden">
                    <img
                        className="  h-[80%] object-cover"
                        src="https://cdn.sanity.io/images/w8f1ak3c/production/ff380ebfee344ff98d24d4156ded6b9dc22a2a2a-5000x5000.png/Change-The-Course-Cookbook-Two-Good-Co.png?w=1024&h=1024&auto=format"
                        alt=""
                    />
                </div>
                <div onMouseEnter={mouseEnter} onMouseLeave={MouseLeave} className="md:h-130  md:w-110 flex items-center justify-center  overflow-hidden">
                    <img
                        className=" h-[80%] object-cover"
                        src="https://cdn.sanity.io/images/w8f1ak3c/production/ff38add7e1688478b9265cc2f1c252db0ff61158-5000x5000.png/68.png?w=1024&h=1024&auto=format"
                        alt=""
                    />
                </div>
            </div>

        </div>
    );
};

export default Page3;
