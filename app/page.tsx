import Image from "next/image"

import { MobileNav, Navbar } from "./componants/Navbar"
import Link from "next/link"
import Footer from "./componants/Footer"

const ServicesMain = [
     {
          title: "Enduits + Peinture",
          text: "Textes enduits + peintures et tout le tintouin à écrire tout ça la. Textes enduits + peintures et tout le tintouin à écrire tout ça la.Textes enduits + peintures et tout le tintouin à écrire tout ça la.Textes enduits + peintures et tout le tintouin à écrire tout ça la.Textes enduits + peintures et tout le tintouin à écrire tout ça la ",
     },
     { title: "Enduits + Peinture", text: "Textes enduits + peintures et tout le tintouin à écrire tout ça la " },
     { title: "Enduits + Peinture", text: "Textes enduits + peintures et tout le tintouin à écrire tout ça la " },
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
                              className="hidden lg:object-cover z-0"
                         />
                         <div className="flex flex-col lg:inset-0 lg:absolute lg:grid grid-cols-2 p-4 gap-6 lg:gap-0 lg:p-12">
                              <h1 className="lg:col-start-1 text-5xl lg:text-7xl font-play text-sec font-bold italic">
                                   Rénovation Intérieure à Lille et alentours
                              </h1>
                              <p className="lg:col-start-2 row-start-2 text-2xl lg:text-3xl font-bold font-play">
                                   Depuis plus de 4 ans, nous mettons nos 34 ans d'experience dans la peinture en
                                   batiment, l'enduit,la pose de sol et les finitions décoratives.
                              </p>
                              <Link href={"/services"} className="lg:col-start-2 row-start-3">
                                   <p className="px-24 py-3 text-xl lg:text-3xl bg-main text-bg font-play font-bold italic w-fit rounded-lg">
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
                                   <p className="bg-sec px-24 py-2 text-3xl lg:text-7xl rounded-lg font-play italic text-main ">
                                        Galerie
                                   </p>
                              </Link>
                         </div>
                    </section>
                    <section>
                         <h2 className="titlemain pl-10 lg:pl-30">Nos services</h2>
                         <div className="flex lg:flex-row flex-col lg:gap-0 gap-6 justify-around py-12">
                              {ServicesMain.map((art, i) => (
                                   <article key={i} className="flex-1 text-center">
                                        <h3 className="text-3xl font-play italic text-main">{art.title}</h3>
                                        <p className="font-man text-center">{art.text}</p>
                                   </article>
                              ))}
                         </div>
                    </section>
                    <Footer />
               </main>
          </>
     )
}
