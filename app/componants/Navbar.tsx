import Image from "next/image"
import Link from "next/link"

export function Navbar() {
     return (
          <nav className="hidden p-4 lg:flex gap-6 w-full items-center font-play  text-3xl italic text-main">
               <Image src={"/logoaa.png"} alt="Logo de StylHome" width={120} height={60} className="border-3" />
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
