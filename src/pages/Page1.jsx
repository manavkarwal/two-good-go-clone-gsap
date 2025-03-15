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
            left: dets.screenX,
            top: dets.screenY - 90,
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
        <div className="md:min-h-[100vh] sm:min-h-[80vh] w-[100%] px-5 relative pt-[10vh] md:pt-[35vh]">
            <div ref={textRef}>
                <h1 className="md:text-[13vw] text-[6vh]  md:leading-40 blend-difference font-[Futura]">
                    CHANGE
                </h1>
                <h1 className="md:text-[14.9vw] text-[6vh] leading-3 md:leading-40 blend-difference font-[Futura]">
                    THE COURSE
                </h1>
            </div>

            <div
                onMouseEnter={mouseEnter}
                onMouseLeave={MouseLeave}
                onMouseMove={mouseMoved}
                ref={videoRef}
                className="video-container h-[50vh] sm:h-full  md:h-screen md:my-8 w-full sm:w-[100%] relative"
            >
                <div
                    ref={playRef}
                    className="fixed px-5 z-10 opacity-0 scale-0 py-2 md:py-6 font-[Futura] bg-black text-white rounded-full"
                >
                    Play
                </div>
                <video
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
