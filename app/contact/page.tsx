import Image from "next/image"
import { Navbar } from "../componants/Navbar"
import Link from "next/link"

export default function Page() {
     return (
          <>
               <main className="lg:flex gap-6">
                    <div className="relative h-screen w-1/2">
                         <Image
                              src={"https://placehold.co/400x400"}
                              alt="alt"
                              fill
                              unoptimized
                              className="object-cover"
                         />
                    </div>
                    <div className="w-[40%]">
                         <Link href={"/"}>
                              <p className="font-man text-2xl">{"<- Accueil"}</p>
                         </Link>
                         <h1 className="titlemain mt-24">Réalisez un devis gratuitement</h1>
                         <p className="opacity-50 mt-5">
                              Ou contactez-nous à{" "}
                              <a href="mailto:contact@stylhome.fr" className="text-blue-900">
                                   contact@stylhome.fr
                              </a>
                         </p>
                         <form className="mt-8 flex flex-col gap-5">
                              <div className="flex items-center justify-between">
                                   <div className="flex flex-col w-[49%]">
                                        <label htmlFor="name" className="ml-10 -mb-1 text-2xl font-play italic">
                                             Nom
                                        </label>
                                        <input
                                             id="name"
                                             name="name"
                                             type="text"
                                             className="border-sec border-3 rounded-lg p-4"
                                             placeholder="Votre nom"
                                             required
                                        />
                                   </div>
                                   <div className="flex flex-col w-[49%]">
                                        <label htmlFor="prenom" className="ml-10 -mb-1 text-2xl font-play italic">
                                             Prénom
                                        </label>
                                        <input
                                             id="prenom"
                                             name="prenom"
                                             type="text"
                                             className="border-sec border-3 rounded-lg p-4"
                                             placeholder="Votre Prénom"
                                             required
                                        />
                                   </div>
                              </div>

                              <div className="flex flex-col">
                                   <label htmlFor="email" className="ml-10 -mb-1 text-2xl font-play italic">
                                        Email
                                   </label>
                                   <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="border-sec border-3 rounded-lg p-4"
                                        placeholder="votreemail@nomdedomaine.fr"
                                        required
                                   />
                              </div>

                              <div className="flex flex-col">
                                   <label htmlFor="objet" className="ml-10 -mb-1 text-2xl font-play italic">
                                        Objet
                                   </label>
                                   <input
                                        id="objet"
                                        name="objet"
                                        type="text"
                                        className="border-sec border-3 rounded-lg p-4 italic"
                                        placeholder="Peinture Murale"
                                   />
                              </div>

                              <div className="flex flex-col">
                                   <label htmlFor="message" className="ml-10 -mb-1 text-2xl font-play italic">
                                        Détaillez votre demande
                                   </label>
                                   <textarea
                                        id="message"
                                        name="message"
                                        className="border-sec border-3 rounded-lg p-4 italic"
                                        placeholder="J'ai 35m2 à refaire, je veux..."
                                        rows={5}
                                        required
                                   />
                              </div>
                              <button
                                   type="button"
                                   className="border py-2 bg-main text-bg rounded-lg text-2xl font-play italic"
                              >
                                   Envoyer
                              </button>
                         </form>
                    </div>
               </main>
          </>
     )
}
