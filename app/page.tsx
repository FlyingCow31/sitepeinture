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
          text: "Murs, plafonds, portes, bâtis, moulures et boiseries, en intérieur comme en extérieur. Selon l'état du support, nous procédons au rebouchage, au dégrossissage ou au ratissage, puis appliquons un enduit de finition poncé et contrôlé avant la mise en peinture. Car la peinture apporte la couleur et l'aspect final, mais ne corrige pas les défauts du support : c'est cette préparation qui détermine la qualité du résultat.",
     },
     {
          number: "02",
          title: "Pose et rénovation de sols",
          text: "Pose de sol stratifié, parquet contrecollé et parquet massif, ainsi que rénovation de parquet existant. Le support est contrôlé, ragréé si nécessaire, puis le parquet ancien est poncé et reçoit une nouvelle finition, vitrifiée ou huilée.",
     },
     {
          number: "03",
          title: "Finitions décoratives",
          text: "Stucco, Marmorino, béton ciré et papier peint pour des effets de matière et de profondeur impossibles à obtenir avec une peinture classique. Comme pour tout support, la préparation reste la première étape de la réussite.",
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
                              <h1 className="lg:col-start-1 text-main! titlemain">
                                   Rénovation Intérieure à Lille et alentours
                              </h1>
                              <p className="lg:col-start-2 row-start-2 text-2xl lg:text-3xl font-md font-man">
                                   Depuis plus de 4 ans, peinture, enduits, sols, menuiserie et finitions décoratives
                                   sont nos domaines d'expertise. Chaque prestation suit la même exigence : préparer le
                                   support avant d'apporter la finition, pour un résultat propre et durable.
                              </p>
                              <Link href={"/services"} className="lg:col-start-2 row-start-3">
                                   <p className="px-24 py-3 text-xl lg:text-3xl bg-main text-bg font-play font-bold italic w-fit rounded-lg buttonmain">
                                        {"Nos Services ->"}
                                   </p>
                              </Link>
                         </div>
                    </div>
                    <section className="py-12">
                         <h2 className="font-play italic text-3xl lg:text-5xl pl-10 lg:pl-30 pt-10">Pourquoi Nous ?</h2>
                         <article className="flex flex-col lg:flex-row gap-12 lg:gap-24 p-4 lg:p-10 justify-around mt-12">
                              <p className="lg:text-left text-justify text-2xl lg:w-[50%]">
                                   <strong>De père en fils</strong>, la qualité de notre travail ne se rapporte pas
                                   seulement au résultat final. Pour chaque prestation, nous <strong>analysons</strong>{" "}
                                   d'abord l'état de votre propriété, puis nous determinons le résultat que vous
                                   souhaitez obtenir. Nous réalisons ensuite les <strong>travaux préparatoires</strong>{" "}
                                   nécessaire au bon fonctionnement du chantier, avant de réaliser l'ouvrage et d'en
                                   apporter la finission. C'est cette préparation qui rends{" "}
                                   <strong>le travail propre</strong> et qui permet à notre ouvrage de durer dans le
                                   temps.
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
                    <section className="bg-main py-12">
                         <h2 className="tfont-play italic text-3xl lg:text-5xl lg:text-right pl-10 lg:pr-30 pt-10 text-bg!">
                              Nos réalisations
                         </h2>
                         <p className="lg:text-right pl-10 lg:pr-30 lg:w-[80%] lg:ml-auto pt-5 text-bg text-xl">
                              De la planification et la préparation du chantier, à la réalisation et aux finissions, à
                              Lille, Genech ou Mérignies, découvrez un aperçu du résultat obtenu.
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
                              <p className="lg:text-[200px] text-7xl lg:text-5xl self-center text-sec font-play rotate-90 mt-4 lg:mt-0 lg:rotate-0 lg:mx-6">
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
                                   <p className="bg-sec px-24 py-2 text-3xl lg:text-4xl lg:px-32 rounded-lg font-play italic text-main buttonsec">
                                        Galerie
                                   </p>
                              </Link>
                         </div>
                    </section>
                    <section className="py-12">
                         <h2 className="font-play italic text-3xl lg:text-5xl pl-10 lg:pl-30">Nos services</h2>

                         <ol className="mt-16 px-4 lg:px-30 divide-y divide-main/25 border-t border-b border-main/25">
                              {ServicesMain.map((serv) => (
                                   <li key={serv.number} className="group">
                                        <Link
                                             href="/services"
                                             className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-12 py-10 lg:py-12 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-main"
                                        >
                                             <span className="font-play italic text-4xl lg:text-5xl text-main/50 lg:w-24 shrink-0">
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
