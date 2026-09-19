import Link from "next/link"

interface Button {
     text: string
     href: string
     orientation?: "right" | "left"
}

export function ButtonService({ text, href, orientation = "left" }: Button) {
     return (
          <Link href={href} className="inline-block">
               <div className={`relative inline-flex ml-2 lg:ml-0`}>
                    <div className="relative z-20 flex w-fit items-center justify-center rounded-lg bg-main px-6 py-2 buttonmain text-center">
                         <p className="font-play text-3xl lg:text-4xl italic text-bg text-center">{text}</p>
                    </div>
                    <div
                         className={`absolute top-3 h-14 w-90 lg:w-110 border border-sec rounded-lg ${
                              orientation === "right" ? "-left-9" : "left-10"
                         } z-10`}
                    ></div>
               </div>
          </Link>
     )
}

export function ButtonGalerie({ text, href }: Button) {
     return (
          <Link href={href} className="inline-text bg-main mx-auto lg:mx-0">
               <p className="mx-auto lg:mx-0 font-play text-2xl italic text-bg bg-main w-fit rounded-lg px-12 py-2 buttonmain">
                    {text}
               </p>
          </Link>
     )
}
