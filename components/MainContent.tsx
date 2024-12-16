'use client'

import Image from 'next/image'
import doctorImg from '@/public/image1.webp'
import { MoveDown } from 'lucide-react'
import { AnimatePresence, motion, MotionConfig } from 'motion/react'
import { Dispatch, SetStateAction } from 'react'

type MainProps = {
  showSlider: boolean
  setShowSlider: Dispatch<SetStateAction<boolean>>
}

export default function MainContent({ showSlider, setShowSlider }: MainProps) {
  return (
      <MotionConfig transition={{duration: 0.5 ,ease:'easeIn'}}>
    <AnimatePresence >
        {!showSlider && (
          <motion.div className=" flex  h-screen w-screen bg-slate-200 justify-center items-center overflow-hidden">
            <motion.div className=" relative basis-1/3 h-full ">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -500, opacity: 0 }}
                className="absolute right-0 -top-1/2 flex justify-end items-center bg-gray-600 h-[200vh] w-[100vw] rounded-[80rem] "
              >
                <div className="relative flex justify-center items-center h-96 w-96 rounded-full overflow-hidden -translate-x-1/2">
                  <Image
                    src={doctorImg}
                    alt="doctor"
                    width={500}
                    height={500}
                    className=" h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
            <div className=" flex flex-col basis-2/3 gap-3 justify-center items-start px-40">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 400, opacity: 0, transition: {duration:0.5 ,delay: 0.3 } }}
                className=" flex justify-center items-center py-2 px-4 border border-green-600 rounded-full"
              >
                {' '}
                <h3 className=" text-green-600">About us</h3>
              </motion.div>
              <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 400, opacity: 0, transition: {duration:0.5 ,delay: 0.2 } }}
                className=" text-3xl font-bold"
              >
                {' '}
                Personal, Compassionate, <br /> and Efficient Care
              </motion.h1>
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 400, opacity: 0, transition: {duration:0.5 ,delay: 0.1 } }}
                className=" mt-4 w-1/2"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </motion.p>
              <motion.button
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 400, opacity: 0, transition: {duration:0.5 ,delay: 0 } }}
                className=" flex justify-center items-center bg-neutral-950 px-4 py-2 mt-4 text-slate-200"
              >
                {' '}
                Book an appointment
              </motion.button>
              <motion.button
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                onClick={() => setShowSlider(true)}
                className="absolute bottom-10 flex justify-center items-center w-12 h-20 border-2 border-gray-600 rounded-full"
              >
                {' '}
                <MoveDown className=" text-gray-600 h-24 w-8" />{' '}
              </motion.button>
            </div>
          </motion.div>
        )}
    </AnimatePresence>
      </MotionConfig>
  )
}
