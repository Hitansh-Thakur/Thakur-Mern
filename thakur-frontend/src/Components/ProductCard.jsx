import React from 'react'
import { useRef } from 'react'
import { gsap } from "gsap"
import { Flip } from 'gsap/all'

const ProductCard = ({productName,productDesc,Details}) => {
    gsap.registerPlugin(Flip);

    

    const imgContainerRef = useRef()
    const activeImgIndicator = useRef()
    const AnimateContainer = useRef(null)

    function animate(e) {
        const clickedImg = e.target;
        const prevImg = AnimateContainer.current.firstChild;
        
        // Get initial state and dimensions
        const state = Flip.getState(clickedImg);
        const bounds = prevImg.getBoundingClientRect();
        
        // Clone the clicked image and set initial properties
        const clone = clickedImg.cloneNode(true);
        clone.style.width = bounds.width + 'px';
        clone.style.height = bounds.height + 'px';
        clone.style.objectFit = 'cover';
        
        // Replace main image with clone
        AnimateContainer.current.replaceChild(clone, prevImg);
        
        // Move original clicked image to thumbnail container
        // imgContainerRef.current.insertBefore(prevImg, clickedImg);
        // imgContainerRef.current.removeChild(clickedImg);
        
        // Animate the transition
        Flip.from(state, {
            targets: clone,
            // scale:true,
            duration: 0.25,
            ease: "power2.inOut",
            absolute: true
        });
        
        console.log(e.target.previousElementSibling == activeImgIndicator.current);
        if(!e.target.nextElementSibling){
            gsap.to(activeImgIndicator.current,{
                x:2 * 100 + '%'
            })
        }
        else if(e.target.previousElementSibling == activeImgIndicator.current){
            
            gsap.to(activeImgIndicator.current,{
                x:0
            })
        }
        else{
            gsap.to(activeImgIndicator.current,{
                x:100 + '%'
            })
        }
    }

    return (
        <>
            <div className='w-full flex h-[30rem] p-5 gap-7 rounded-xl bg-[#d3c0d2] my-5'>
                <div ref={AnimateContainer} className='h-full w-full flex-[3] flex flex-col gap-4'>
                    <img className='img-a h-full w-full object-cover rounded-xl' src="./images/1.jpeg" alt="product" />
                    <div className='flex gap-2 h-20 mt-auto relative' ref={imgContainerRef}>
                        <span ref={activeImgIndicator} className='w-1/3 rounded-md h-1 bottom-0 -my-3 bg-orange-500 absolute'></span>
                        <img onClick={animate} className='img-a m-h-full w-full aspect-video object-cover rounded-lg cursor-pointer' src="./images/1.jpeg" alt="product" />
                        <img onClick={animate} className='img-a m-h-full w-full aspect-video object-cover rounded-lg cursor-pointer' src="./images/2.jpg" alt="product" />
                        <img onClick={animate} className='img-a m-h-full w-full aspect-video object-cover rounded-lg cursor-pointer' src="./images/3.jpeg" alt="product" />
                    </div>
                </div>
                <div className='flex flex-col justify-between h-full flex-[2]'>
                    <div>
                        <h3 className='secondary-heading'>{productName || 'Machine Name'}</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex cum totam exercitationem quae facere, dolorem voluptatum nostrum sequi rem ad?</p>
                        <h5 className='text-lg font-semibold'>Details</h5>
                        <table className='w-full leading-8'>
                            <tbody>
                                <tr>
                                    <td>{Details}Product Name</td>
                                    <td>Product 1</td>
                                </tr>
                                <tr>
                                    <td>Product Name</td>
                                    <td>Product 1</td>
                                </tr>
                                <tr>
                                    <td>Product Name</td>
                                    <td>Product 1</td>
                                </tr>
                                <tr>
                                    <td>Product Name</td>
                                    <td>Product 1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button className='primary-btn' type="button">Yes I am Interested!</button>
                </div>
            </div>
        </>
    )
}

export default ProductCard