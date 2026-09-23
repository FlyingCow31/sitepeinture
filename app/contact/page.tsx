import Image from "next/image"
import Link from "next/link"
import Footer from "../componants/Footer"
import Form from "../componants/form"
import { Metadata } from "next"
import { MobileNav } from "../componants/Navbar"

export const metadata: Metadata = {
     title: "Contact & Devis Gratuit",
     description: "Demandez votre devis gratuit pour vos travaux de peinture, enduit ou rénovation intérieure à Lille.",
     alternates: { canonical: "/contact" },
     openGraph: {
          title: "Contact & Devis Gratuit | Styl'Home",
          description: "Demandez votre devis gratuit pour vos travaux de peinture et rénovation intérieure à Lille.",
          url: "/contact",
     },
}
export default function Page() {
     return (
          <>
               <div className="hidden">
                    <MobileNav />
               </div>
               <main>
                    <div className="flex lg:flex-row flex-col gap-6 relative lg:min-h-[calc(100vh-120px)]">
                         <div className="relative h-50 w-full lg:h-auto lg:w-1/2 lg:min-h-[calc(100vh-120px)]">
                              <Image
                                   src={"/images/finissionsdecorativesetsolbois.jpg"}
                                   alt="alt"
                                   fill
                                   className="object-cover"
                              />
                         </div>
                         <div className="lg:w-[40%] p-4 lg:p-0 lg:flex lg:flex-col lg:justify-center">
                              <Link href={"/"} className="inline-block w-fit">
                                   <p className="font-man pt-5 opacity-50 texthover w-fit regular-text">
                                        {"<- Accueil"}
                                   </p>
                              </Link>
                              <h1 className="titlemain text-2xl! lg:text-3xl! mt-5">Réalisez un devis gratuitement</h1>
                              <p className="opacity-50 mt-5 regular-text">
                                   Ou contactez-nous à{"\u00A0"}
                                   <a href="mailto:contact@stylhome.fr" className="text-blue-900">
                                        contact@stylhome.fr
                                   </a>
                              </p>
                              <Form />
                         </div>
                    </div>
               </main>
               <div className="mt-10">
                    <Footer />
               </div>
          </>
     )
}
