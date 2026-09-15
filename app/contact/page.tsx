import Image from "next/image"
import Link from "next/link"
import Footer from "../componants/Footer"
import Form from "../componants/form"

export default function Page() {
     return (
          <>
               <main className="flex lg:flex-row flex-col gap-6 ">
                    <div className="relative w-screen h-50 lg:h-screen lg:w-1/2">
                         <Image
                              src={"https://placehold.co/400x400"}
                              alt="alt"
                              fill
                              unoptimized
                              className="object-cover"
                         />
                    </div>
                    <div className="w-full lg:w-[40%] lg:h-screen p-4 lg:p-0">
                         <Link href={"/"}>
                              <p className="font-man text-2xl">{"<- Accueil"}</p>
                         </Link>
                         <h1 className="titlemain text-3xl! mt-10">Réalisez un devis gratuitement</h1>
                         <p className="opacity-50 mt-5">
                              Ou contactez-nous à{" "}
                              <a href="mailto:contact@stylhome.fr" className="text-blue-900">
                                   contact@stylhome.fr
                              </a>
                         </p>
                         <Form />
                    </div>
               </main>
               <div className="lg:hidden">
                    <Footer />
               </div>
          </>
     )
}
