"use client"

import { FocusTrap } from "focus-trap-react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function Navbar() {
     return (
          <nav className="hidden p-4 lg:flex gap-6 w-full items-center font-play text-3xl italic text-main ">
               <Link href={"/"}>
                    <Image src={"/logo-stylhome.webp"} alt="Logo de StylHome" width={200} height={100} />
               </Link>
               <Link href={"/services"} className="ml-auto">
                    <p className="hover:bg-darker rounded-lg px-8">Services</p>
               </Link>
               <Link href={"/galerie"}>
                    <p className="hover:bg-darker rounded-lg px-8">Galerie</p>
               </Link>
               <Link href={"/contact"}>
                    <p className="bg-sec px-12 py-1 rounded-lg hover:bg-sechover">Contact</p>
               </Link>
          </nav>
     )
}

export function MobileNav() {
     const pathname = usePathname()
     const [status, setStatus] = useState(false)

     useEffect(() => {
          if (status) {
               const scrollY = window.scrollY
               document.body.style.position = "fixed"
               document.body.style.top = `-${scrollY}px`
               document.body.style.width = "100%"
          } else {
               const scrollY = document.body.style.top
               document.body.style.position = ""
               document.body.style.top = ""
               document.body.style.width = ""
               if (scrollY) {
                    window.scrollTo(0, parseInt(scrollY || "0") * -1)
               }
          }
     }, [status])
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
                         className={`fixed inset-y-0 right-0 z-100 flex h-screen w-full  flex-col gap-12 bg-bg p-4 items-start *:text-5xl transition-transform duration-200 ease-out font-play ${
                              status ? "translate-x-0" : "translate-x-full pointer-events-none"
                         }`}
                    >
                         <div className="flex justify-between w-full items-center p-4">
                              <Image
                                   src={"/logo-stylhome.webp"}
                                   alt="Logo Stylhome"
                                   width={200}
                                   height={50}
                                   className="border"
                              />
                              <button
                                   type="button"
                                   onClick={() => setStatus(false)}
                                   className=""
                                   aria-label="Fermer le menu"
                              >
                                   <X size={60} color="#06172c" className="cursor-pointer" />
                              </button>
                         </div>

                         <Link href={"/"}>
                              <p
                                   className={`${pathname == "/" ? "text-sec" : ""} hover:text-sec rounded-lg px-6 py-2 `}
                              >
                                   Accueil
                              </p>
                              {pathname == "/" && <hr className="mx-6 w-[30%] border border-sec bg-sec" />}
                         </Link>
                         <Link href={"/services"}>
                              <p
                                   className={`${pathname == "/services" ? "text-sec" : ""} hover:text-sec rounded-lg px-6 py-2`}
                              >
                                   Services
                              </p>
                              {pathname == "/services" && <hr className="mx-6 w-[30%] border border-sec bg-sec" />}
                         </Link>
                         <Link href={"/galerie"}>
                              <p
                                   className={`${pathname == "/galerie" ? "text-sec" : ""} hover:text-sec rounded-lg px-6 py-2`}
                              >
                                   Galerie
                              </p>
                              {pathname == "/galerie" && <hr className="mx-6 w-[30%] border border-sec bg-sec" />}
                         </Link>
                         <Link href={"/contact"} className="mx-auto w-[90%] py-2">
                              <p className={`bg-sec w-full text-center text-2xl text-bg py-2 rounded-lg`}>
                                   Demander un devis
                              </p>
                         </Link>
                         <div className="w-full mt-auto mb-20">
                              <hr className="w-[90%] border opacity-30 mx-auto" />
                              <p className="opacity-30 text-center text-sm mt-5">
                                   Rénovation intérieure à Lille et alentours
                              </p>
                         </div>
                    </div>
               </FocusTrap>
          </>
     )
}
