import Link from "next/link"

interface Button {
     text: string
     href: string
     orientation?: "right" | "left"
}

export function ButtonService({ text, href, orientation = "left" }: Button) {
     return (
          <Link href={href} className="inline-block">
               <div className={`relative inline-flex`}>
                    <div className="relative z-20 flex w-fit items-center justify-center rounded-lg bg-main px-6 py-2">
                         <p className="font-play text-4xl italic text-bg">{text}</p>
                    </div>
                    <div
                         className={`absolute top-3 h-14 w-110 border border-sec rounded-lg ${
                              orientation === "right" ? "-left-9" : "left-10"
                         } z-10`}
                    ></div>
               </div>
          </Link>
     )
}
