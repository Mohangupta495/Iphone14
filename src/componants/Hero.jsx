import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import { heroVideo, smallHeroVideo } from '../utils'

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet)
        return () => {
            window.removeEventListener("resize", handleVideoSrcSet)
        }
    }, [])
    const handleVideoSrcSet = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo)
        }
        else {
            setVideoSrc(heroVideo)
        }
    }
    useGSAP(() => {
        gsap.to('#hero', {
            opacity: 1,
            delay: 1.5

        })
        gsap.to('#cta', {
            opacity: 1,
            delay: 2,
            y:-50

        })
    }, [])
    return (
        <section className='w-full nav-height bg-black relative'>
            <div className='h-5/6 flex-center flex-col'>
                <p id="hero" className='hero-title'>iPhone 15 pro</p>
                <video autoPlay={true} muted playsInline={true} loop={true} key={"VideoSrc"} className='pointer-events-none'>
                    <source src={videoSrc} type='video/mp4' />
                </video>
            </div>
            <div id="cta" className='flex flex-col items-center opacity-0 translate-y-20'>
            <a href='#highlights' className='btn'>Buy</a>
            <p className='font-normal text-xl'>From $100/month or $99</p>
            </div>
        </section>
    )
}

export default Hero