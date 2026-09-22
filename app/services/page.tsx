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
          imgSrc: "/images/peintureverte.jpg",
          title: "Peinture Intérieure et Extérieure",
          text: "Avant toute mise en peinture, nous contrôlons l'état du support : murs, plafonds, portes, bâtis, moulures et boiseries, en intérieur comme en extérieur. Trous,et défauts de planéité sont identifiés, et corrigés. La peinture apporte la couleur et l'aspect final, mais elle ne corrige pas les défauts du support.",
          side: "left" as const,
          side2: "left" as const,
     },
     {
          imgSrc: "/images/enduitcreation.JPEG",
          title: "Enduits",
          text: "L'enduit répare, corrige et remet à niveau les murs ou plafonds pour obtenir le support correspondant à la finition recherchée. Selon l'état des lieux, nous procédons au rebouchage, au dégrossissage ou au ratissage, partiel ou complet. Chaque passe est ensuite poncée et contrôlée : plus la finition souhaitée est exigeante, plus cette préparation doit être importante.",
          side: "right" as const,
          side2: null,
     },
     {
          imgSrc: "/images/Solenboispageservices.jpg",
          title: "Pose et Rénovation de sols",
          text: "Avant toute pose, nous contrôlons la planéité, la stabilité et l'humidité du support existant. Un ragréage peut être réalisé si nécessaire, avant l'installation d'un sol stratifié, d'un parquet contrecollé ou massif, en pose flottante ou collée. Pour une rénovation, le parquet est poncé progressivement puis reçoit une nouvelle finition, vitrifiée ou huilée.",
          side: "left" as const,
     },
]

export default function Page() {
     return (
          <>
               <Navbar />
               <main>
                    <MobileNav />
                    <h1 className="titlemain text-center my-24">Nos Services</h1>
                    {serviceList.slice(0, 2).map((serv, i) => (
                         <ServiceDiv key={i} {...serv} />
                    ))}

                    <ServiceSpecial>
                         <div className="relative mx-auto lg:mx-0">
                              <div className="relative h-80 w-80 lg:h-120 lg:w-120 z-10">
                                   <Image
                                        src={"/images/escalierphotoenduits.JPG"}
                                        alt={`Peinture en escalier réalisés à Lille`}
                                        fill
                                        className="object-cover"
                                   />
                              </div>

                              <div
                                   className={`h-80 w-80 lg:h-120 lg:w-120 bg-transparent border-sec absolute -left-10 border z-11 top-10 `}
                              ></div>
                         </div>

                         <div className={`flex flex-col text-left mt-12 lg:mt-0`}>
                              <p className="regular-text lg:w-150 p-4 lg:p-0">
                                   Le point commun entre tous nos services est la préparation. Nous cherchons d'abord à
                                   comprendre l'état de l'existant, le résultat souhaité, puis les travaux nécessaires.
                                   C'est cette préparation adaptée qui garantit un résultat propre et durable.
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
                                        src={"/images/finissionsdecorativesetsolbois.jpg"}
                                        alt={`Enduits réalisé par StylHome à Lille`}
                                        fill
                                        className="object-cover"
                                   />
                              </div>

                              <div
                                   className={`h-80 w-80 lg:h-120 lg:w-120 bg-transparent border-sec absolute -left-10 border z-11 top-10 `}
                              ></div>
                         </div>

                         <div className={`flex flex-col text-left lg:text-left mt-12 lg:mt-0 px-4`}>
                              <h2 className="secondary-title">Finissions Décoratives</h2>
                              <p className="regular-text lg:w-150 p-4 lg:my-20 lg:p-0">
                                   Le Stucco, le Marmorino, le béton ciré et le papier peint permettent d'obtenir des
                                   effets de matière, des nuances et de la profondeur impossibles à reproduire avec une
                                   peinture classique. Comme pour toute prestation, la préparation du support reste
                                   essentielle avant l'application du primaire ou de la sous-couche adaptée.
                              </p>
                              <div className="flex items-left justify-left">
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
