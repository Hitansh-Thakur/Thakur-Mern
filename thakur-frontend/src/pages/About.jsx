import React from 'react'
import {useRef} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const About = () => {
  gsap.registerPlugin(useGSAP);

  let para = useRef([])
  let mainImg = useRef()

  useGSAP(()=>{
    const tl = gsap.timeline({defaults:{duration:1,ease:'power2.out'}})
    tl.from(para.current,{
      y:-20,
      opacity:0,
      stagger:.2,
    })
    // .to('.cover',{
    //   x:-100+'%',
    //   opacity:0
    // },'-=1')
    .from(mainImg.current,{
      // x:-20,
      scale:.9,
      opacity:.5
    },'-=1.5')
  },{})

  return (
    <>
      <main className=''>
        <h1 className='page-title'>About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 h-full my-4 ">
          <div ref={mainImg} className='relative' >
            {/* <div  className="cover w-full h-full z-10 bg-white absolute"></div> */}
            <img  className='h-full object-cover w-full md:h64' src="./images/about-img.png" alt="Thakur Industries" />
          </div>
          <div className='md:col-span-2'>
            <h2  className=' lg:!text-5xl md:!text-3xl secondary-heading w-full md:w-3/4 pb-3 !text-slate-700'><span>Leading industrial &</span> <span>manufacturing company,</span><span> serving since 1982</span></h2>
            <div className="container text-xl text-justify grid gap-3">
              <p ref={(e) => para.current[0] = e} >Established as a Partnership firm in the year 1982, we “Thakur Industries” are a leading Manufacturer of a wide range of Cutting Machine, Welding SPM, Drilling Machine, etc. Thakur Industries is a leading supplier of automated welding, cutting and machining systems and components.</p>
              <p ref={(e) => para.current[1] = e}>From the early days the company pioneered the development of automated welding methods and machines for the all engineering industries. The experience gained in the welding machine manufacturing enabled Thakur Industries to apply the know-how to the design and manufacturing of automated welding systems. Today Thakur Industries serves a very diverse customer base, including many multinational manufacturing companies, offering them a wide range of welding automation products.</p>
              <p ref={(e) => para.current[2] = e}>Thakur Industries Engineering specializes in the manufacture and supply of equipment for automated arc welding in MIG, TIG, SAW, SPOT. Our mission is to provide our customers with a complete solution: on the individual control or component level or to design and build a total turnkey solution.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default About