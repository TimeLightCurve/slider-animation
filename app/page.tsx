'use client'

import { AnimatePresence, motion } from 'motion/react'
import MainContent from "@/components/MainContent";
import { useState } from 'react';
import Slider from '@/components/Slider';

export default function Home() {
  const [showSlider, setShowSlider] = useState(false)
  return (
    <AnimatePresence mode="popLayout">
      <motion.div className=" flex  h-screen w-screen bg-slate-200 justify-center items-center overflow-hidden">
        <MainContent
          showSlider={showSlider}
          setShowSlider={setShowSlider}
        />
        <Slider
          showSlider={showSlider}
          setShowSlider={setShowSlider}
        />
      </motion.div>
    </AnimatePresence>
  )
}
