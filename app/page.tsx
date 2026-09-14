import Image from "next/image"

import { Navbar } from "./componants/Navbar"
import Link from "next/link"
import Footer from "./componants/Footer"
import Caroussel from "./componants/Caroussel"

export default function Home() {
     return (
          <>
               <Navbar />
               <main>
                    <div className="relative h-120 w-full overflow-hidden border">
                         <Image
                              src={"https://placehold.co/1200x400"}
                              alt="Placeholder"
                              fill
                              unoptimized
                              className="object-cover z-0"
                         />
                         <div className="inset-0 absolute lg:grid grid-cols-2 p-12">
                              <h1 className="col-start-1 text-7xl font-play text-sec font-bold italic">
                                   Rénovation Intérieure à Lille et alentours
                              </h1>
                              <p className="col-start-2 row-start-2 text-3xl font-bold font-play">
                                   Depuis plus de 4 ans, nous mettons nos 34 ans d'experience dans la peinture en
                                   batiment, l'enduit,la pose de sol et les finitions décoratives.
                              </p>
                              <Link href={"/services"} className="col-start-2 row-start-3">
                                   <p className="px-24 py-3 text-3xl bg-main text-bg font-play font-bold italic w-fit rounded-lg">
                                        {"Nos Services ->"}
                                   </p>
                              </Link>
                         </div>
                    </div>
                    <section>
                         <h2 className="titlemain pl-30 pt-10">Pourquoi Nous ?</h2>
                         <article className="flex gap-24 p-10 justify-around mt-12">
                              <p className="text-left text-3xl w-[30%]">
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
                         <h2 className="titlemain text-right pr-30 pt-10 text-bg!">Nos réalisations</h2>
                         <div className="flex justify-center mt-12">
                              <div>
                                   <h3 className="text-4xl font-play italic font-bold text-sec ml-10">Avant</h3>
                                   <Image
                                        src={"https://placehold.co/500x500"}
                                        alt="Placeholder"
                                        height={500}
                                        width={500}
                                        unoptimized
                                   />
                              </div>
                              <p className="text-[200px] self-center text-sec font-play mx-30">{"->"}</p>
                              <div className="flex flex-col">
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
                         <div className="grid grid-cols-6 grid-rows-4  items-center py-24">
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
                                   <p className="bg-sec px-24 py-2 text-7xl rounded-lg font-play italic text-main ">
                                        Galerie
                                   </p>
                              </Link>
                         </div>
                    </section>
                    <section>
                         <h2 className="titlemain pl-30">Nos Services</h2>
                         <Caroussel />
                    </section>
                    <Footer />
               </main>
          </>
     )
}
