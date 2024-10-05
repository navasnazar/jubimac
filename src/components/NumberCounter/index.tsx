"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import React, { useEffect, useState } from 'react'
type NumberCounterProps = {
    endCount :number,
    id:string
}

const NumberCounter = ({endCount,id}:NumberCounterProps) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: `#${id}`,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(`#${id}`, {
          innerText: endCount,
          duration: 2,
          ease: 'power2.out',
          snap: { innerText: 1 },
          onUpdate: function () {
            const newValue = Math.round(this.progress() * endCount);
            setCounter(newValue);
          },
        });
      },
      onLeave: () => {
        // Optionally reset the counter when the element leaves the viewport
        // setCounter(0);
      },
    });

    return () => {
      trigger.kill(); // Clean up the trigger on component unmount
    };
  }, [endCount, id]);
  const [counter,setCounter] = useState<number>(0)

  return (
    <span id={id}>{counter}</span>
  )
}

export default NumberCounter