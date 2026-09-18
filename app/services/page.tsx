import { Metadata } from "next"
import { ButtonService } from "../componants/buttons"
import Footer from "../componants/Footer"
import { MobileNav, Navbar } from "../componants/Navbar"
import { ServiceDiv, ServiceSpecial } from "../componants/services"
import Image from "next/image"

export const metadata: Metadata = {
     title: "Nos Services : Enduits, Peinture & Pose de Sol",
     description:
          "Enduits décoratifs à la chaux, peinture intérieure et extérieure, pose de sol et finitions. Un savoir-faire artisanal à Lille depuis 34 ans.",
     alternates: { canonical: "/services" },
     openGraph: {
          title: "Nos Services : Enduits, Peinture & Pose de Sol | Styl'Home",
          description:
               "Découvrez nos trois savoir-faire : enduits décoratifs, peinture intérieure & extérieure, pose de sol et finitions.",
          url: "/services",
     },
}
const serviceList = [
     {
          imgSrc: "https://placehold.co/400x400",
          title: "Enduits",
          text: "Textes enduits, lorem ipsum et je sais plus le texte en latin mais en gros ça sera celui la, je sais que c'est pas pro.",
          side: "left" as const,
          side2: "left" as const,
     },
     {
          imgSrc: "https://placehold.co/400x400",
          title: "Enduits",
          text: "Textes enduits, lorem ipsum et je sais plus le texte en latin mais en gros ça sera celui la, je sais que c'est pas pro.",
          side: "right" as const,
          side2: null,
     },
     {
          imgSrc: "https://placehold.co/400x400",
          title: "Enduits",
          text: "Textes enduits, lorem ipsum et je sais plus le texte en latin mais en gros ça sera celui la, je sais que c'est pas pro.",
          side: "left" as const,
     },
]

export default function Page() {
     return (
          <>
               <Navbar />
               <main>
                    <MobileNav />
                    <h1 className="titlemain text-center text-4xl lg:text-8xl! my-24">Nos Services</h1>
                    {serviceList.slice(0, 2).map((serv, i) => (
                         <ServiceDiv key={i} {...serv} />
                    ))}

                    <ServiceSpecial>
                         <div className="relative mx-auto lg:mx-0">
                              <div className="relative h-80 w-80 lg:h-120 lg:w-120 z-10">
                                   <Image
                                        src={"https://placehold.co/400x400"}
                                        alt={`Enduits réalisé par StylHome à Lille`}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                   />
                              </div>

                              <div
                                   className={`h-80 w-80 lg:h-120 lg:w-120 bg-transparent border-sec absolute -left-10 border z-11 top-10 `}
                              ></div>
                         </div>

                         <div className={`flex flex-col text-left mt-12 lg:mt-0`}>
                              <p className="text-3xl lg:w-150 p-4 lg:p-0">
                                   Un peu de texte ici ça fera pas de mal et ça sera sympa
                              </p>
                              <div className="flex justify-around lg:justify-between my-20">
                                   <Image
                                        src={"https://placehold.co/100x100"}
                                        alt={`Icone 1`}
                                        height={100}
                                        width={100}
                                        unoptimized
                                        className="rounded-lg"
                                   />
                                   <Image
                                        src={"https://placehold.co/100x100"}
                                        alt={`Icone 1`}
                                        height={100}
                                        width={100}
                                        unoptimized
                                        className="rounded-lg"
                                   />
                                   <Image
                                        src={"https://placehold.co/100x100"}
                                        alt={`Icone 1`}
                                        height={100}
                                        width={100}
                                        unoptimized
                                        className="rounded-lg"
                                   />
                              </div>
                              <div className="flex items-center justify-left">
                                   <ButtonService
                                        text="Réaliser un devis gratuit ->"
                                        href="/contact"
                                        orientation="left"
                                   />
                              </div>
                         </div>
                    </ServiceSpecial>
                    {serviceList.slice(2, 3).map((serv, i) => (
                         <ServiceDiv key={i} {...serv} />
                    ))}

                    <ServiceSpecial className={"py-20"}>
                         <div className="relative">
                              <div className="relative h-80 w-80 lg:h-120 lg:w-120 z-10 mx-auto lg:mx-0">
                                   <Image
                                        src={"https://placehold.co/400x400"}
                                        alt={`Enduits réalisé par StylHome à Lille`}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                   />
                              </div>

                              <div
                                   className={`h-80 w-80 lg:h-120 lg:w-120 bg-transparent border-sec absolute -left-10 border z-11 top-10 `}
                              ></div>
                         </div>

                         <div className={`flex flex-col text-center lg:text-left mt-12 lg:mt-0`}>
                              <h2 className="font-play text-7xl italic">Enduits</h2>
                              <p className="text-3xl lg:w-150 my-20 p-4 lg:p-0">
                                   Un peu de texte ici ça fera pas de mal et ça sera sympa
                              </p>
                              <div className="flex items-center justify-left">
                                   <ButtonService
                                        text="Réaliser un devis gratuit ->"
                                        href="/contact"
                                        orientation="left"
                                   />
                              </div>
                         </div>
                    </ServiceSpecial>
                    <Footer />
               </main>
          </>
     )
}
