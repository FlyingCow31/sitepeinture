import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { MobileNav, Navbar } from "./componants/Navbar"
import Link from "next/link"
import Footer from "./componants/Footer"
import { Metadata } from "next"
export const metadata: Metadata = {
     title: "Peintre en Bâtiment à Lille | Enduits & Rénovation",
     description:
          "Styl'Home réalise vos travaux de peinture, enduit décoratif et rénovation intérieure à Lille et dans les environs. Devis gratuit!",
     alternates: { canonical: "/" },
     openGraph: {
          title: "Peintre en Bâtiment à Lille | Styl'Home",
          description:
               "Enduits décoratifs, peinture intérieure & extérieure, pose de sol. Devis gratuit, Lille et environs.",
          url: "/",
     },
}

const ServicesMain = [
     {
          number: "01",
          title: "Enduit et peinture",
          text: "Travaux d'enduit et de peinture intérieure/extérieure sur murs, plafonds, portes, bâtis, encadrements, moulures et boiseries. Avant toute mise en peinture, nous contrôlons l'état du support et identifions les trous, fissures, défauts et irrégularités. Selon son état et la finition recherchée, nous réalisons les préparations nécessaires : rebouchage, reprises d'enduit, ponçage, etc. La peinture apporte ensuite la couleur et l'aspect final, sur un support correctement préparé pour obtenir un résultat propre, régulier et durable.",
     },
     {
          number: "02",
          title: "Pose et rénovation de sols",
          text: "Pose et rénovation de sols, après contrôle de la planéité, de la stabilité et de l'humidité du support existant. Un ragréage peut être réalisé avant la pose d'un sol stratifié, d'un parquet contrecollé ou d'un parquet massif, en pose flottante ou collée. Nous réalisons également la rénovation de parquet, avec ponçage progressif puis application d'une nouvelle finition vitrifiée ou huilée.",
     },
     {
          number: "03",
          title: "Finitions décoratives",
          text: "Stucco, Marmorino, béton ciré et pose de papier peint. Ces techniques permettent d'obtenir des effets de matière, des nuances et de la profondeur difficiles à reproduire avec une peinture classique. Comme pour toute prestation, la préparation du support reste essentielle avant l'application du primaire, de la sous-couche adaptée ou de la finition décorative.",
     },
]
export default function Home() {
     return (
          <>
               <Navbar />

               <main>
                    <MobileNav />
                    <div className="flex flex-col lg:block lg:relative lg:h-140 w-full overflow-hidden">
                         <Image
                              src={"/images/largeherophoto.webp"}
                              alt="Rénovation intérieure Styl'Home à Lille"
                              fill
                              className="hidden lg:block lg:object-cover z-0"
                         />
                         <div className="hidden lg:block absolute inset-0 z-1 bg-linear-to-r from-main/70 via-main/45 to-main/65" />
                         <div className="hidden lg:grid absolute inset-0 grid-cols-2 p-12 z-10">
                              <h1 className="col-start-1 text-bg! titlemain text-6xl! leading-normal!">
                                   Rénovation Intérieure à Lille et alentours
                              </h1>
                              <p className="col-start-2 row-start-2 text-2xl! font-semibold mb-2 text-bg!">
                                   Depuis plus de 4 ans, nous mettons nos 34 ans d'experience dans la peinture en
                                   batiment, l'enduit, la pose de sol et les finitions décoratives, à Lille et aux
                                   alentours.
                              </p>
                              <Link href={"/services"} className="col-start-2 row-start-3">
                                   <p className="px-24 py-3 bg-main text-bg font-play font-bold italic w-fit rounded-lg buttonmain">
                                        {"Nos Services ->"}
                                   </p>
                              </Link>
                         </div>

                         <div className="lg:hidden">
                              <div className="relative w-full h-70">
                                   <Image
                                        src={"/images/largeherophoto.webp"}
                                        alt="Rénovation intérieure Styl'Home à Lille"
                                        fill
                                        className="object-cover"
                                   />
                              </div>
                              <div className="flex flex-col gap-4 p-6 bg-main">
                                   <h1 className="text-bg! titlemain text-4xl! leading-normal! decoration-6! underline-offset-8!">
                                        Rénovation Intérieure à Lille et alentours
                                   </h1>
                                   <p className="text-lg! text-bg/90">
                                        Depuis plus de 4 ans, nous mettons nos 34 ans d'experience dans la peinture en
                                        batiment, l'enduit, la pose de sol et les finitions décoratives, à Lille et aux
                                        alentours.
                                   </p>
                                   <Link href={"/services"}>
                                        <p className="px-8 py-3 bg-sec text-main font-play font-bold italic w-fit rounded-lg buttonsec">
                                             {"Nos Services ->"}
                                        </p>
                                   </Link>
                              </div>
                         </div>
                    </div>

                    <section className="py-12">
                         <h2 className="secondary-title pl-10 lg:pl-30 pt-10">Pourquoi Nous ?</h2>
                         <article className="flex flex-col lg:flex-row gap-12 lg:gap-24 p-4 lg:p-10 justify-around mt-12">
                              <p className="lg:text-left text-left regular-text lg:w-[50%]">
                                   <strong>De père en fils</strong>, nous avons appris que la qualité de notre travail
                                   ne se juge pas uniquement au résultat final. Pour chaque prestation, nous commençons
                                   par <strong>analyser l'état du support</strong> et déterminer le résultat recherché.
                                   Murs, plafonds, boiseries, sols ou autres surfaces : chaque support demande une
                                   préparation adaptée. Nous réalisons ensuite les{" "}
                                   <strong>travaux préparatoires</strong> nécessaires : rebouchage, reprises d'enduit,
                                   ratissage, ponçage, égrenage ou autres préparations selon l'état du support, avant de
                                   réaliser l'ouvrage et d'apporter la finition. C'est cette préparation qui permet
                                   d'obtenir un <strong>travail propre, régulier et durable</strong> dans le temps.
                              </p>
                              <Image
                                   src={"/images/Depereenfils.webp"}
                                   alt="Photo des deux gérants de l'entreprise, père et fils"
                                   height={400}
                                   width={400}
                                   className="md:mx-auto"
                              />
                         </article>
                    </section>
                    <section className="bg-main py-12">
                         <h2 className="secondary-title lg:text-right pl-10 lg:pr-30 pt-10 text-bg!">
                              Nos réalisations
                         </h2>
                         <p className="lg:text-right pl-4 lg:pr-30 lg:w-[80%] lg:ml-auto pt-5 text-bg subtitle">
                              De la planification et de la préparation du chantier jusqu'à la réalisation et aux
                              finitions, découvrez un aperçu de nos travaux à Lille, Bondues ou Verlinghem, ainsi que du
                              résultat attendu.
                         </p>
                         <div className="flex lg:flex-row flex-col justify-center mt-12">
                              <div className="px-4 lg:px-0 md:mx-auto">
                                   <h3 className="secondary-title text-sec ml-10">Avant</h3>
                                   <Image
                                        src={"/images/beforephotobaievitree.jpg"}
                                        alt="Baie vitrée en rénovation"
                                        height={500}
                                        width={500}
                                   />
                              </div>
                              <p className="self-center text-sec font-play rotate-90 mt-4 lg:mt-0 lg:rotate-0 lg:mx-6 text-8xl lg:text-9xl">
                                   {"->"}
                              </p>
                              <div className="flex flex-col px-4 lg:px-0 md:mx-auto">
                                   <h3 className="secondary-title text-sec self-end mr-10">Après</h3>
                                   <Image
                                        src={"/images/squareherophoto.webp"}
                                        alt="Baie Vitrée rénovée"
                                        height={500}
                                        width={500}
                                   />
                              </div>
                         </div>
                         <div className="flex flex-col gap-6 lg:gap-0 px-4 lg:px-0 lg:grid grid-cols-6 grid-rows-4  items-center py-24">
                              <Image
                                   src={"/images/salledebainbleue.JPG"}
                                   alt="Salle de bain finissions murales à Mérignies"
                                   height={500}
                                   width={500}
                                   className="col-start-2 col-span-2 row-start-1 row-span-2 border-2 border-sec"
                              />
                              <Image
                                   src={"/images/peinturejauneetsols.jpg"}
                                   alt="Peinture intérieure et sol en bois à Gruson"
                                   height={500}
                                   width={500}
                                   className="col-start-3 col-span-2 row-start-2 row-span-2 border-2 border-sec"
                              />
                              <Image
                                   src={"/images/finitionsetpeinture.jpg"}
                                   alt="Finitions décoratives et peinture en plein coeur de Lille"
                                   height={500}
                                   width={500}
                                   className="col-start-4 col-span-2 row-start-3 row-span-2 border-2 border-sec"
                              />
                              <Link href={"/galerie"} className="w-fit row-start-4 col-start-2 col-span-1 mt-12">
                                   <p className="bg-sec px-24 py-2 lg:px-32 rounded-lg font-play italic text-main buttonsec secondary-title">
                                        Galerie
                                   </p>
                              </Link>
                         </div>
                    </section>
                    <section className="py-12">
                         <h2 className="secondary-title pl-10 lg:pl-30">Nos services</h2>

                         <ol className="mt-16 px-4 lg:px-30 divide-y divide-main/25 border-t border-b border-main/25">
                              {ServicesMain.map((serv) => (
                                   <li key={serv.number} className="group">
                                        <Link
                                             href="/services"
                                             className="flex w-full min-w-0 flex-col lg:flex-row lg:items-center gap-4 lg:gap-12 py-10 lg:py-12 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-main"
                                        >
                                             <span className="font-play italic text-main/50 lg:w-24 shrink-0 secondary-title">
                                                  {serv.number}
                                             </span>

                                             <div className="min-w-0 flex-1">
                                                  <h3 className="subtitle text-main text-balance transition-transform duration-300 group-hover:translate-x-2">
                                                       {serv.title}
                                                  </h3>
                                                  <p className="regular-text text-main/70 mt-2 w-full max-w-[65ch] text-pretty">
                                                       {serv.text}
                                                  </p>
                                             </div>

                                             <span className="flex items-center gap-2 font-play italic text-main shrink-0 lg:ml-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300 regular-text">
                                                  Découvrir
                                                  <ArrowRight
                                                       size={18}
                                                       className="transition-transform duration-300 group-hover:translate-x-1"
                                                  />
                                             </span>
                                        </Link>
                                   </li>
                              ))}
                         </ol>
                    </section>
                    <Footer />
               </main>
          </>
     )
}
