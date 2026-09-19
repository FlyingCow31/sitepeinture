import Image from "next/image"
import Link from "next/link"

export default function Footer() {
     return (
          <footer className="bg-main flex lg:flex-row gap-4 lg:gap-0 flex-col-reverse text-bg text-xl items-center text-center lg:text-left justify-around p-4 italic">
               <Image src={"/icone-stylhome-footer.webp"} alt="Icone Stylhome Footer" height={150} width={150} />

               <div className="text-center lg:text-left">
                    <h3 className="font-play text-sec text-4xl">Légal</h3>
                    <Link href={"/mentions"}>
                         <p className="texthover">Mentions Légales</p>
                    </Link>
               </div>
               <div>
                    <h3 className="font-play text-sec text-4xl">Pages</h3>
                    <Link href={"/services"}>
                         <p className="texthover">Services</p>
                    </Link>
                    <Link href={"/galerie"}>
                         <p className="texthover">Galerie</p>
                    </Link>
                    <Link href={"/contact"}>
                         <p className="texthover">Contact</p>
                    </Link>
               </div>
          </footer>
     )
}
