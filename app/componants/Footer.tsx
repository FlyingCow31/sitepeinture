import Image from "next/image"
import Link from "next/link"

export default function Footer() {
     return (
          <footer className="bg-main flex lg:flex-row gap-4 lg:gap-0 flex-col-reverse text-bg text-3xl items-center text-center lg:text-left justify-around p-4 italic">
               <Image src={"https://placehold.co/150x150"} alt="Placeholder" height={150} width={150} unoptimized />

               <div className="text-center lg:text-left">
                    <h3 className="font-play text-sec text-4xl">Légal</h3>
                    <Link href={"/mentions"}>
                         <p>Mentions Légales</p>
                    </Link>
                    <Link href={"/cgv"}>
                         <p>CGV</p>
                    </Link>
               </div>
               <div>
                    <h3 className="font-play text-sec text-4xl">Pages</h3>
                    <Link href={"/services"}>
                         <p>Services</p>
                    </Link>
                    <Link href={"/galerie"}>
                         <p>Galerie</p>
                    </Link>
                    <Link href={"/contact"}>
                         <p>Contact</p>
                    </Link>
               </div>
          </footer>
     )
}
