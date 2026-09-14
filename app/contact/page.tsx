import Image from "next/image"
import { Navbar } from "../componants/Navbar"
import Link from "next/link"

export default function Page() {
     return (
          <>
               <main className="lg:flex gap-6">
                    <div className="relative h-screen w-1/2">
                         <Image
                              src={"https://placehold.co/400x400"}
                              alt="alt"
                              fill
                              unoptimized
                              className="object-cover"
                         />
                    </div>
                    <div>
                         <Link href={"/"}>
                              <p className="font-play italic text-2xl">{"<- Accueil"}</p>
                         </Link>
                         <h1>Réalisez un devis gratuitement</h1>
                         <p>Ou contactez-nous à contact@stylhome.fr</p>
                         <form></form>
                    </div>
               </main>
          </>
     )
}
