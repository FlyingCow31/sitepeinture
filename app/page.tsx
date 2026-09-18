import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { MobileNav, Navbar } from "./componants/Navbar"
import Link from "next/link"
import Footer from "./componants/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
     title: "Peintre en Bâtiment à Lille | Enduits & Rénovation | Styl'Home",
     description:
          "Styl'Home réalise vos travaux de peinture, enduit décoratif et rénovation intérieure à Lille et dans les environs. Devis gratuit sous 48h.",
}

const ServicesMain = [
     {
          number: "01",
          title: "Enduits Décoratifs",
          text: "Enduits à la chaux, talochés ou cirés : nous révélons le caractère de vos murs, intérieurs comme façades, avec une finition sur mesure.",
     },
     {
          number: "02",
          title: "Peinture Intérieure & Extérieure",
          text: "Teintes choisies avec vous, finitions mates ou satinées, appliquées avec la précision d'un savoir-faire transmis depuis 34 ans.",
     },
     {
          number: "03",
          title: "Pose de Sol & Finitions",
          text: "Pose de sol et finitions décoratives pour parachever chaque pièce, du ratissage aux derniers détails qui font la différence.",
     },
]
export default function Home() {
     return (
          <>
               <Navbar />

               <main>
                    <MobileNav />
                    <div className="flex flex-col lg:block lg:relative lg:h-120 w-full lg:overflow-hidden">
                         <Image
                              src={"https://placehold.co/1200x400"}
                              alt="Placeholder"
                              fill
                              unoptimized
                              className="hidden lg:block lg:object-cover z-0"
                         />
                         <div className="flex flex-col lg:inset-0 lg:absolute lg:grid grid-cols-2 p-4 gap-6 lg:gap-0 lg:p-12">
                              <h1 className="lg:col-start-1 text-5xl lg:text-7xl font-play text-sec font-bold italic">
                                   Rénovation Intérieure à Lille et alentours
                              </h1>
                              <p className="lg:col-start-2 row-start-2 text-2xl lg:text-3xl font-bold font-man">
                                   Depuis plus de 4 ans, nous mettons nos 34 ans d'experience dans la peinture en
                                   batiment, l'enduit,la pose de sol et les finitions décoratives.
                              </p>
                              <Link href={"/services"} className="lg:col-start-2 row-start-3">
                                   <p className="px-24 py-3 text-xl lg:text-3xl bg-main text-bg font-play font-bold italic w-fit rounded-lg buttonmain">
                                        {"Nos Services ->"}
                                   </p>
                              </Link>
                         </div>
                    </div>
                    <section>
                         <h2 className="titlemain pl-10 lg:pl-30 pt-10">Pourquoi Nous ?</h2>
                         <article className="flex flex-col lg:flex-row gap-12 lg:gap-24 p-4 lg:p-10 justify-around mt-12">
                              <p className="lg:text-left text-justify text-3xl lg:w-[30%]">
                                   De père en fils, nous avons accumulés 34 ans d'experience dans la peinture en
                                   batiments. Cette entreprise est pour nous le projet le plus ambicieux de notre
                                   carrière. Nous réalisons tout sur mesure, tout est adapté à votre situation et à
                                   votre batiment.
                              </p>
                              <Image
                                   src={"https://placehold.co/400x400"}
                                   alt="Placeholder"
                                   height={400}
                                   width={400}
                                   unoptimized
                              />
                         </article>
                    </section>
                    <section className="bg-main">
                         <h2 className="titlemain lg:text-right pl-10 lg:pr-30 pt-10 text-bg!">Nos réalisations</h2>
                         <p className="lg:text-right pl-10 lg:pr-30 pt-5 text-bg text-xl">
                              {" "}
                              Petit texte introductif du avant après avec des mots clés de villes
                         </p>
                         <div className="flex lg:flex-row flex-col justify-center mt-12">
                              <div className="px-4 lg:px-0">
                                   <h3 className="text-4xl font-play italic font-bold text-sec ml-10">Avant</h3>
                                   <Image
                                        src={"https://placehold.co/500x500"}
                                        alt="Placeholder"
                                        height={500}
                                        width={500}
                                        unoptimized
                                   />
                              </div>
                              <p className="lg:text-[200px] text-7xl self-center text-sec font-play rotate-90 mt-4 lg:mt-0 lg:rotate-0">
                                   {"->"}
                              </p>
                              <div className="flex flex-col px-4 lg:px-0">
                                   <h3 className="text-4xl font-play italic font-bold text-sec self-end mr-10">
                                        Après
                                   </h3>
                                   <Image
                                        src={"https://placehold.co/500x500"}
                                        alt="Placeholder"
                                        height={500}
                                        width={500}
                                        unoptimized
                                   />
                              </div>
                         </div>
                         <div className="flex flex-col gap-6 lg:gap-0 px-4 lg:px-0 lg:grid grid-cols-6 grid-rows-4  items-center py-24">
                              <Image
                                   src={"https://placehold.co/500x500"}
                                   alt="Placeholder"
                                   height={500}
                                   width={500}
                                   unoptimized
                                   className="col-start-2 col-span-2 row-start-1 row-span-2"
                              />
                              <Image
                                   src={"https://placehold.co/500x500"}
                                   alt="Placeholder"
                                   height={500}
                                   width={500}
                                   unoptimized
                                   className="col-start-3 col-span-2 row-start-2 row-span-2"
                              />
                              <Image
                                   src={"https://placehold.co/500x500"}
                                   alt="Placeholder"
                                   height={500}
                                   width={500}
                                   unoptimized
                                   className="col-start-4 col-span-2 row-start-3 row-span-2"
                              />
                              <Link href={"/galerie"} className="w-fit row-start-4 col-start-2 col-span-1 mt-12">
                                   <p className="bg-sec px-24 py-2 text-3xl lg:text-7xl rounded-lg font-play italic text-main buttonsec">
                                        Galerie
                                   </p>
                              </Link>
                         </div>
                    </section>
                    <section className="py-24">
                         <h2 className="titlemain pl-10 lg:pl-30">Nos services</h2>

                         <ol className="mt-16 px-4 lg:px-30 divide-y divide-sec/25 border-t border-b border-sec/25">
                              {ServicesMain.map((serv) => (
                                   <li key={serv.number} className="group">
                                        <Link
                                             href="/services"
                                             className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-12 py-10 lg:py-12 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sec"
                                        >
                                             <span className="font-play italic text-4xl lg:text-5xl text-sec/50 lg:w-24 shrink-0">
                                                  {serv.number}
                                             </span>

                                             <div className="flex-1">
                                                  <h3 className="font-play italic text-3xl lg:text-4xl text-main text-balance transition-transform duration-300 group-hover:translate-x-2">
                                                       {serv.title}
                                                  </h3>
                                                  <p className="font-man text-main/70 mt-2 lg:w-[65ch] text-pretty">
                                                       {serv.text}
                                                  </p>
                                             </div>

                                             <span className="flex items-center gap-2 font-play italic text-lg text-main shrink-0 lg:ml-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300">
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
