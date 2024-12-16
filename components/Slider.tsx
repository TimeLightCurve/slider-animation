'use client'

import { animate, AnimatePresence, motion, MotionConfig, useMotionValue } from 'motion/react'
import { Dispatch, SetStateAction, useState } from 'react'
import Image from 'next/image'
import image1 from '@/public/image1.webp'
import image2 from '@/public/image2.webp'
import image3 from '@/public/image3.webp'
import image4 from '@/public/image4.webp'
import image5 from '@/public/image5.webp'
import image6 from '@/public/image6.webp'
import image7 from '@/public/image7.webp'
import { delay } from 'motion'
import { MoveLeft, MoveRight } from 'lucide-react'



type SliderProps = {
  showSlider: boolean
  setShowSlider: Dispatch<SetStateAction<boolean>>
}

export default function Slider({ showSlider, setShowSlider }: SliderProps) {

    const [initAnimation, setInitAnimation] = useState(false)

    const [images, setImages] = useState([image1, image2, image3, image4, image5, image6, image7])

    const [ currentIndex , setCurrentIndex] = useState(3)

const x = useMotionValue(0)
    const nextImage = () => {
      animate(x, x.get() + 880, { duration: 0.5, type: 'spring', stiffness: 50 })
      setCurrentIndex((prev)=> prev-1)
    }

    const prevImage = () => {
      animate(x, x.get() - 880, { duration: 0.5, type: 'spring', stiffness: 50 })
      setCurrentIndex((prev) => prev + 1)
    }
  return (
    <AnimatePresence>
      {showSlider && (
        <>
          <motion.div
            initial={{ y: 700 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.8, duration: 1, type: 'spring', stiffness: 50 }}
            className={` relative flex gap-20 h-[30rem] w-max items-center justify-center `}
            style={{ x: initAnimation ? x : undefined }}
          >
            {images.map((image, index) => (
              <motion.div
                layout
                key={index}
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 4 * (images.length - index), 0] }}
                transition={{
                  delay: 1 + 0.05 * (images.length - index),
                  duration: 1,
                  times: [0, 0.5, 1],
                  ease: 'anticipate',
                  layout: { delay: 0, duration: 0.4, type: 'spring', stiffness: 50 },
                }}
                onAnimationComplete={() => index === images.length - 1 && setInitAnimation(true)}
                className={` ${
                  initAnimation ? ' relative w-[50rem] h-[30rem]' : 'absolute w-96 h-72'
                } ${ (initAnimation && index === currentIndex) ? 'w-[60rem] h-[35rem]' : ''}  bg-white border border-gray-500`}
              >
                <Image
                  src={image}
                  alt={`${image}${index}`}
                  height={1000}
                  width={1000}
                  className= {`h-full w-full object-contain`}
                />
              </motion.div>
            ))}
          </motion.div>
          <div className=" absolute flex w-screen h-screen justify-between items-end px-10 py-20">
            <button
              onClick={() => {
                prevImage()
              }}
            >
              <MoveLeft className=" size-20" />
            </button>
            <button
              onClick={() => {
                nextImage()
              }}
            >
              <MoveRight className=" size-20" />
            </button>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
