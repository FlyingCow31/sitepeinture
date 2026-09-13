import React from "react"
import Image from "next/image"

const Caroussel = () => {
     return (
          // Carousel container
          <div className="grid grid-cols-2 grid-rows-1 justify-between items-center">
               {/* Content container */}
               <div>
                    {/* Title container */}
                    <div>
                         <h3 className="font-play text-6xl italic text-sec">This is a Title</h3>
                    </div>
                    {/* Description container */}
                    <div>
                         <p className="py-4 text-3xl">This is a P tag</p>
                    </div>
                    {/* Button container */}
                    <div>
                         <button className="bg-sec px-12 py-2 rounded-lg text-3xl">Learn More</button>
                    </div>
               </div>
               {/* Images container */}
               <div className="image-container border">
                    {/* 1st */}
                    <div className="firstContainer">
                         <Image
                              src={"https://placehold.co/400x700"}
                              alt="Placeholder"
                              height={700}
                              width={400}
                              unoptimized
                              className="first"
                         />
                    </div>
                    {/* 2cd */}
                    <div className="secContainer">
                         <Image
                              src={"https://placehold.co/400x700"}
                              alt="Placeholder"
                              height={500}
                              width={500}
                              unoptimized
                              className="secondary"
                         />
                    </div>
                    {/* 3rd */}
                    <div className="thirdContainer">
                         <Image
                              src={"https://placehold.co/400x700"}
                              alt="Placeholder"
                              height={400}
                              width={700}
                              unoptimized
                              className="third"
                         />
                    </div>
                    {/* Controls */}
                    <div className="controls ">
                         <button className="previousContainer bg-red-500">{"<-"}</button>
                         <button className="nextContainer bg-red-500">{"->"}</button>
                    </div>
               </div>
          </div>
     )
}

export default Caroussel
