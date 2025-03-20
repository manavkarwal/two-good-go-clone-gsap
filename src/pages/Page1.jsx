import React, { useRef } from 'react';
import videoFile from '../assets/video.mp4'; // Import the video file
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Page1 = () => {
    const playRef = useRef(null);
    const textRef = useRef(null);
    const videoRef = useRef(null);

    const mouseEnter = () => {
        gsap.to(playRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.1,
        });
    };

    const MouseLeave = () => {
        gsap.to(playRef.current, {
            opacity: 0,
            scale: 0,
            duration: 0.1,
        });
    };

    const mouseMoved = (dets) => {
        gsap.to(playRef.current, {
            x: dets.clientX ,
            y: dets.clientY ,
            ease: 'power3.out',
        });
    };

    useGSAP(() => {
        gsap.from(textRef.current.children, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.25,
            delay: 0.5,
        });
        gsap.from(videoRef.current, {
            scale: 0.8,
            y: 10,
            opacity: 0,
            duration: 1,
            delay: 1,
        });
    });

    return (
        <div  className="   w-[100%] px-5 relative pt-[20vh] md:pt-[35vh]">
          
            <div ref={textRef}>
                <h1 className="md:text-[14.9vw] text-[14vw] leading-20 md:leading-40 blend-difference font-[Futura]">
                    CHANGE
                </h1>
                <h1 className="md:text-[14.9vw] text-[14vw] leading-20  md:leading-40  blend-difference font-[Futura]">
                    THE COURSE
                </h1>
            </div>

            <div
                onMouseEnter={mouseEnter}
                onMouseLeave={MouseLeave}
                
                ref={videoRef}
                className="video-container  md:h-screen h-[300px] md:mt-8 w-full relative"
            >
                <div
                    ref={playRef}
                    className="fixed px-5 z-10 opacity-0 scale-0  py-6 font-[Futura] bg-black text-white rounded-full"
                >
                    Play
                </div>
                <video onMouseMove={mouseMoved}
                    className="h-[100%] w-[100%] absolute cover"
                    src={videoFile}
                    autoPlay
                    loop
                    muted
                ></video>
            </div>
        </div>
    );
};

export default Page1;
