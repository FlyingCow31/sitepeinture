"use client"

import { FocusTrap } from "focus-trap-react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function Navbar() {
     return (
          <nav className="hidden p-4 lg:flex gap-6 w-full items-center font-play text-3xl italic text-main ">
               <Link href={"/"}>
                    <Image
                         src={"/logo-stylhome.webp"}
                         alt="Logo de StylHome"
                         width={200}
                         height={100}
                         className="border-3"
                    />
               </Link>
               <Link href={"/services"} className="ml-auto">
                    <p className="hover:bg-darker rounded-lg px-4">Services</p>
               </Link>
               <Link href={"/galerie"}>
                    <p className="hover:bg-darker rounded-lg px-4">Galerie</p>
               </Link>
               <Link href={"/contact"}>
                    <p className="bg-sec px-6 py-2 rounded-lg hover:bg-sechover">Contact</p>
               </Link>
          </nav>
     )
}

export function MobileNav() {
     const pathname = usePathname()
     const [status, setStatus] = useState(false)

     return (
          <>
               <nav className="font-play italic relative flex justify-between p-4 items-center lg:hidden bg-bg">
                    <Link href={"/"}>
                         <Image src={"/logo-stylhome.webp"} alt="Logo Stylhome" width={192} height={40} />
                    </Link>

                    <button
                         type="button"
                         onClick={() => setStatus(true)}
                         aria-label="Ouvrir le menu"
                         aria-expanded={status}
                    >
                         <Menu size={50} color="#06172c" className="cursor-pointer" />
                    </button>
               </nav>

               <FocusTrap
                    active={status}
                    focusTrapOptions={{
                         onDeactivate: () => setStatus(false),
                         escapeDeactivates: true,
                         clickOutsideDeactivates: false,
                         fallbackFocus: "#mobile-menu",
                    }}
               >
                    <div
                         id="mobile-menu"
                         tabIndex={-1}
                         inert={!status || undefined}
                         className={`fixed inset-y-0 right-0 z-100 flex h-screen w-full max-w-sm flex-col gap-12 bg-bg p-4 pt-8 px-12 items-start *:text-2xl transition-transform duration-200 ease-out ${
                              status ? "translate-x-0" : "translate-x-full pointer-events-none"
                         }`}
                    >
                         <button
                              type="button"
                              onClick={() => setStatus(false)}
                              className="self-end"
                              aria-label="Fermer le menu"
                         >
                              <X size={50} color="#06172c" className="cursor-pointer" />
                         </button>

                         <Link href={"/"}>
                              <p
                                   className={`${pathname == "/" ? "bg-sec border-3" : "hover:bg-darker"} rounded-lg px-6 py-2`}
                              >
                                   → Accueil
                              </p>
                         </Link>
                         <Link href={"/services"}>
                              <p
                                   className={`${pathname == "/services" ? "bg-sec border-3" : "hover:bg-darker"} rounded-lg px-6 py-2`}
                              >
                                   → Services
                              </p>
                         </Link>
                         <Link href={"/galerie"}>
                              <p
                                   className={`${pathname == "/galerie" ? "bg-sec border-3" : "hover:bg-darker"} rounded-lg px-6 py-2`}
                              >
                                   → Galerie
                              </p>
                         </Link>
                         <Link href={"/contact"} className="mt-auto mb-20">
                              <p className="bg-sec! px-6 py-2 text-xl font-man rounded-lg border-3 border-border hover:bg-sechover">
                                   Contact →
                              </p>
                         </Link>
                    </div>
               </FocusTrap>
          </>
     )
}
