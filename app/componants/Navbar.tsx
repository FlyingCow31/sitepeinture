"use client"

import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function Navbar() {
     return (
          <nav className="hidden p-4 lg:flex gap-6 w-full items-center font-play  text-3xl italic text-main">
               <Link href={"/"}>
                    <Image src={"/logoaa.png"} alt="Logo de StylHome" width={120} height={60} className="border-3" />
               </Link>
               <Link href={"/services"} className="ml-auto">
                    <p>Services</p>
               </Link>
               <Link href={"/galerie"}>
                    <p>Galerie</p>
               </Link>
               <Link href={"/contact"}>
                    <p className="bg-sec px-6 py-2 rounded-lg">Contact</p>
               </Link>
          </nav>
     )
}

export function MobileNav() {
     const pathname = usePathname()
     const [status, setStatus] = useState(false)
     return (
          <>
               <nav className="relative flex justify-between p-4 items-center lg:hidden bg-bg">
                    <Link href={"/"}>
                         <Image src={"/logo.png"} alt="Logo Stylhome" width={192} height={40} />
                    </Link>

                    <a onClick={() => setStatus(true)}>
                         <Menu size={50} color="#06172c" className="cursor-pointer" />
                    </a>

                    {status && (
                         <div
                              className="pr-20 fixed inset-y-0 right-0 z-100 flex h-screen flex-col gap-12 bg-bg p-4 pt-8 px-12 items-start *:text-2xl"
                              style={{ animation: "slideIn 200ms ease-out" }}
                         >
                              <a onClick={() => setStatus(false)} className="self-end">
                                   <Menu size={50} color="#06172c" className="cursor-pointer" />
                              </a>
                              <Link href={"/"}>
                                   <p
                                        className={` ${pathname == "/" ? "bg-sec border-3" : "hover:bg-darker"} rounded-lg px-6 py-2 `}
                                   >
                                        → Accueil
                                   </p>
                              </Link>
                              <Link href={"/services"}>
                                   <p
                                        className={` ${pathname == "/services" ? "bg-sec border-3  shadow-neo" : "hover:bg-darker"} rounded-lg px-6 py-2 `}
                                   >
                                        → Services
                                   </p>
                              </Link>
                              <Link href={"/assistance"}>
                                   <p
                                        className={` ${pathname == "/assistance" ? "bg-sec border-3  shadow-neo" : "hover:bg-darker"} rounded-lg px-6 py-2 `}
                                   >
                                        → Assistance
                                   </p>
                              </Link>

                              <Link href={"/contact"} className="mt-auto mb-20">
                                   <p className="bg-sec px-6 py-2 text-xl font-dm rounded-lg border-3 border-border shadow-neo lightbgtransition">
                                        Rendez-vous →
                                   </p>
                              </Link>
                         </div>
                    )}
               </nav>
          </>
     )
}
