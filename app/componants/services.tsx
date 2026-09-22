import Image from "next/image"
import { ReactNode } from "react"

interface ServiceDiv {
     imgSrc: string
     title: string
     text: string
     side: "left" | "right"
     side2?: "left" | "right" | null
}
interface ServiceSpecial {
     children: ReactNode
     className?: string
}

export function ServiceDiv({ imgSrc, title, text, side, side2 = "left" }: ServiceDiv) {
     return (
          <article
               className={`flex flex-col lg:flex-row ${side === "right" ? "lg:flex-row-reverse" : ""} justify-around mt-16`}
          >
               <div className="relative mx-auto lg:mx-0">
                    <div className="relative h-80 w-80 lg:h-120 lg:w-120 z-10">
                         <Image
                              src={imgSrc}
                              alt={`${title} réalisé par StylHome à Lille`}
                              fill
                              className="object-cover"
                         />
                    </div>
                    {side2 != null && (
                         <div
                              className={` h-80 w-80 lg:h-120 lg:w-120 bg-transparent border-sec absolute ${side2 == "right" ? "-left-10 border z-11" : "left-10 border-3"} top-10 `}
                         ></div>
                    )}
               </div>

               <div
                    className={`flex flex-col mt-12 lg:mt-0 text-left px-4 lg:px-0 ${side === "right" ? "lg:text-left lg:pl-10" : "lg:text-right lg:pr-10"} lg:w-[60%] lg:gap-10 `}
               >
                    <h2 className="secondary-title break">{title}</h2>
                    <p className={`regular-text lg:w-[80%] ${side === "right" ? "" : "lg:self-end"}`}>{text}</p>
               </div>
          </article>
     )
}

export function ServiceSpecial({ children, className = "" }: ServiceSpecial) {
     return (
          <article
               className={`flex flex-col lg:flex-row-reverse lg:mx-12 lg:justify-between justify-around mt-16 ${className}`}
          >
               {children}
          </article>
     )
}
