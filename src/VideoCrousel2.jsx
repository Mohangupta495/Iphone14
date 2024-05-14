import React from 'react'
import { hightlightsSlides } from './constants'

const VideoCrousel2 = () => {
  return (
    <>
      <div className="flex items-center mt-10">
        {hightlightsSlides.map((slide,index)=>(
            <div key={index} id="slider" className='pr-10 sm:pr-20'>
                <div className='video-carousel_container'>
                <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                    <video id={"video"} playsInline={true} preload='auto' muted>
                        <source src={slide.video} type='video/mp4'/>
                    </video>
                </div>
                <div className='absolute top-12 left-[5%]'>
                    {slide.textLists.map((text,index)=>(
                        <p className='md:text-2xl text-xl font-medium' key={index}>{text}</p>
                    ))}
                </div>
                </div>
            </div>
        ))}
      </div>
    </>
  )
}

export default VideoCrousel2
