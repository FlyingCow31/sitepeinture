import { Metadata } from "next"
import { ButtonService } from "../componants/buttons"
import Footer from "../componants/Footer"
import { MobileNav, Navbar } from "../componants/Navbar"
import { ServiceDiv, ServiceSpecial } from "../componants/services"
import Image from "next/image"
import { Search, Hammer, BadgeCheck } from "lucide-react"

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
          text: "Avant toute mise en peinture, nous contrôlons l'état du support : murs, plafonds, portes, bâtis, moulures et boiseries, en intérieur comme en extérieur. Les trous, fissures, défauts et problèmes de planéité sont identifiés puis corrigés. Selon l'état du support et la finition recherchée, différentes préparations peuvent être nécessaires : rebouchage, reprises d'enduit, ratissage, ponçage, égrenage et impression. Nous réalisons ensuite les travaux de peinture intérieure ou extérieure, avec des produits et des finitions adaptés au support et au résultat souhaité. La peinture apporte la couleur et l'aspect final, mais elle ne corrige pas les défauts du support : c'est pourquoi la préparation reste une étape essentielle.",
          side: "left" as const,
          side2: "left" as const,
     },
     {
          imgSrc: "/images/enduitcreation.JPEG",
          title: "Enduits",
          text: "L'enduit répare, corrige et remets à niveau les murs ou plafonds pour obtenir un support correspondant à la finition recherchée. Selon l'état des lieux, nous procédons au rebouchage, au dégrossissage ou au ratissage, partiel ou complet. Chaque passe est ensuite poncée et contrôlée afin de corriger progressivement les défauts et les irrégularités du support. Plus la finition souhaitée est exigeante, plus cette préparation doit être importante pour obtenir une surface lisse, régulière et prête à recevoir les travaux de peinture.",
          side: "right" as const,
          side2: null,
     },
     {
          imgSrc: "/images/Solenboispageservices.jpg",
          title: "Pose et Rénovation de sols",
          text: "Sol stratifié, parquet contrecollé ou parquet massif, en pose flottante ou collée. Avant toute pose, nous contrôlons la planéité, la stabilité et l'humidité du support existant. Un ragréage peut être réalisé si nécessaire. Nous réalisons également la rénovation des parquets existants. Le parquet est poncé progressivement afin de retirer l'ancienne finition et de retrouver un bois propre et régulier. Il reçoit ensuite une nouvelle finition, vitrifiée ou huilée, afin de protéger le bois et de lui redonner son aspect.",
          side: "left" as const,
     },
]

export default function Page() {
     return (
          <>
               <Navbar />
               <main className="overflow-x-hidden">
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
                                   className={`h-70 w-70 lg:h-110 lg:w-110 bg-transparent border-sec absolute -left-5 border z-11 top-15 `}
                              ></div>
                         </div>

                         <div className={`flex flex-col text-left mt-12 lg:mt-0`}>
                              <p className="regular-text lg:w-150 p-4 lg:p-0">
                                   Le point commun entre tous nos services est la préparation. Nous cherchons d'abord à
                                   comprendre l'état de l'existant, le résultat souhaité, puis les travaux nécessaires
                                   pour l'obtenir. Murs, plafonds, boiseries ou sols peuvent nécessiter des préparations
                                   différentes : réparation, rebouchage, enduit, etc. C'est cette préparation adaptée
                                   qui permet d'obtenir un résultat propre, régulier et durable.
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
                                   className={`h-70 w-70 lg:h-110 lg:w-110 bg-transparent border-sec absolute left-5 border z-11 top-15 `}
                              ></div>
                         </div>

                         <div className={`flex flex-col text-left lg:text-left mt-12 lg:mt-0 px-4`}>
                              <h2 className="secondary-title">Finissions Décoratives</h2>
                              <p className="regular-text lg:w-150 p-4 lg:my-20 lg:p-0">
                                   Le Stucco, le Marmorino, le béton ciré et le papier peint permettent d'obtenir des
                                   effets de matière, des nuances et de la profondeur impossibles à reproduire avec une
                                   peinture classique. Ces finitions demandent une mise en œuvre soignée et, comme pour
                                   toute prestation, la préparation du support reste essentielle. Selon l'état du
                                   support et la finition choisie, nous réalisons les préparations nécessaires avant
                                   l'application du primaire ou de la sous-couche adaptée, puis des différentes passes
                                   de finition. L'objectif est d'obtenir un résultat harmonieux, esthétique et durable.
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
