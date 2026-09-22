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
                         <p className="font-play regular-text italic text-bg text-center">{text}</p>
                    </div>
                    <div
                         className={`absolute top-5 h-10 w-60 lg:w-70 border border-sec rounded-lg ${
                              orientation === "right" ? "-left-9" : "left-6"
                         } z-10`}
                    ></div>
               </div>
          </Link>
     )
}

export function ButtonGalerie({ text, href }: Button) {
     return (
          <Link href={href} className="inline-text bg-main">
               <p className="font-play regular-text italic text-bg bg-main w-fit rounded-lg px-12 py-2 buttonmain">
                    {text}
               </p>
          </Link>
     )
}
