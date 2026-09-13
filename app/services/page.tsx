import { ButtonService } from "../componants/buttons"
import Footer from "../componants/Footer"
import { Navbar } from "../componants/Navbar"
import { ServiceDiv, ServiceSpecial } from "../componants/services"
import Image from "next/image"

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
                    <h1 className="titlemain text-center text-8xl! my-24">Nos Services</h1>
                    {serviceList.slice(0, 2).map((serv, i) => (
                         <ServiceDiv key={i} {...serv} />
                    ))}

                    <ServiceSpecial>
                         <div className="relative">
                              <div className="relative h-120 w-120 z-10">
                                   <Image
                                        src={"https://placehold.co/400x400"}
                                        alt={`Enduits réalisé par StylHome à Lille`}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                   />
                              </div>

                              <div
                                   className={`h-120 w-120 bg-transparent border-sec absolute -left-10 border z-11 top-10 `}
                              ></div>
                         </div>

                         <div className={`flex flex-col text-left `}>
                              <p className="text-3xl lg:w-150">
                                   Un peu de texte ici ça fera pas de mal et ça sera sympa
                              </p>
                              <div className="flex justify-between my-20">
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
                              <div className="relative h-120 w-120 z-10">
                                   <Image
                                        src={"https://placehold.co/400x400"}
                                        alt={`Enduits réalisé par StylHome à Lille`}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                   />
                              </div>

                              <div
                                   className={`h-120 w-120 bg-transparent border-sec absolute -left-10 border z-11 top-10 `}
                              ></div>
                         </div>

                         <div className={`flex flex-col text-left `}>
                              <h2 className="font-play text-7xl italic">Enduits</h2>
                              <p className="text-3xl lg:w-150 my-20">
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
