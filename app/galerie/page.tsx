import Image from "next/image"
import { MobileNav, Navbar } from "../componants/Navbar"
import Footer from "../componants/Footer"
import { ButtonGalerie } from "../componants/buttons"
import { Metadata } from "next"

export const metadata: Metadata = {
     title: "Nos Réalisations : Chantiers de Peinture & Enduit",
     description:
          "Découvrez nos chantiers de peinture, enduit décoratif et rénovation intérieure réalisés à Lille et dans les environs.",
     alternates: { canonical: "/galerie" },
     openGraph: {
          title: "Nos Réalisations | Styl'Home",
          description:
               "Chantiers de peinture, enduit décoratif et rénovation intérieure réalisés à Lille et alentours.",
          url: "/galerie",
     },
}
const images = [
     { src: "https://placehold.co/400x400", alt: "Oui", className: "lg:col-start-1 lg:row-start-1 lg:row-span-3" },
     { src: "https://placehold.co/400x400", alt: "Oui", className: "lg:col-start-2 lg:row-start-4 lg:row-span-2" },
     { src: "https://placehold.co/400x400", alt: "Oui", className: "lg:col-start-3 lg:row-start-2 lg:row-span-2" },
     { src: "https://placehold.co/400x400", alt: "Oui", className: "lg:col-start-1 lg:row-start-6 lg:row-span-2" },
     { src: "https://placehold.co/400x400", alt: "Oui", className: "lg:col-start-2 lg:row-start-6 lg:row-span-2" },
     { src: "https://placehold.co/400x400", alt: "Oui", className: "lg:col-start-1 lg:row-start-12 lg:row-span-2" },
     {
          src: "https://placehold.co/400x400",
          alt: "Oui",
          className: "lg:col-start-1 lg:col-span-2 lg:row-start-10 lg:row-span-2",
     },
     { src: "https://placehold.co/400x400", alt: "Oui", className: "lg:col-start-2 lg:row-start-12 lg:row-span-2" },
     { src: "https://placehold.co/400x400", alt: "Oui", className: "lg:col-start-3 lg:row-start-6 lg:row-span-4" },
]

const textes = [
     {
          title: "Galerie",
          date: "09/09/2026",
          texte: "Petit texte qui récapitule un peu la photo qu'il y a sur le coté...",
          className: "lg:col-start-2 lg:col-span-2 lg:row-start-1 lg:row-span-2",
          main: true,
     },
     {
          title: "Titre",
          date: "09/09/2026",
          texte: "Petit texte qui récapitule un peu la photo qu'il y a sur le coté...",
          className: "lg:col-start-1 lg:col-span-1 lg:row-start-4 lg:row-span-2",
     },
     {
          title: "Petit Titre",
          date: "09/09/2026",
          texte: "Petit texte qui récapitule un peu la photo qu'il y a sur le coté...",
          className: "lg:col-start-3 lg:col-span-1 lg:row-start-5 lg:row-span-1",
     },
     {
          title: "Titre",
          date: "09/09/2026",
          texte: "Petit texte qui récapitule un peu la photo qu'il y a sur le coté...",
          className: "lg:col-start-3 lg:col-span-1 lg:row-start-10 lg:row-span-2",
     },
]

export default function Page() {
     return (
          <>
               <Navbar />
               <main>
                    <MobileNav />
                    <section className="flex flex-col lg:grid grid-cols-1 gap-4 lg:grid-cols-3 lg:auto-rows-48 lg:grid-flow-dense py-24">
                         <h1 className="lg:hidden block titlemain mx-auto pb-12">Galerie</h1>
                         {images.map((image, index) => (
                              <figure
                                   key={`${image.src}-${index}`}
                                   className={`relative overflow-hidden rounded-2xl aspect-4/3 lg:aspect-auto mx-4 lg:mx-0 ${image.className}`}
                              >
                                   <Image src={image.src} alt={image.alt} fill unoptimized className="object-cover" />
                              </figure>
                         ))}
                         {textes.map((texte, i) => (
                              <article key={i} className={`hidden lg:block ${texte.className}`}>
                                   {texte.main ? (
                                        <h1 className="font-play italic text-3xl lg:text-5xl hidden lg:block">
                                             {texte.title}
                                        </h1>
                                   ) : (
                                        <h3 className="font-play italic font-bold text-3xl">{texte.title}</h3>
                                   )}
                                   <p className="opacity-60 text-2xl font-play italic mt-5">{texte.date}</p>
                                   <p className="text-2xl w-[70%]">{texte.texte}</p>
                              </article>
                         ))}

                         {/* Special One */}
                         <article className={`hidden lg:block col-start-1 col-span-2 row-start-8 row-span-2 `}>
                              <h3 className="font-play italic font-bold text-3xl">Titre spécial 1</h3>

                              <p className="opacity-60 text-2xl font-play italic mt-5">09/09/2026</p>
                              <p className="text-2xl w-[70%]">
                                   Petit texte qui récapitule un peu la photo qu'il y a sur le coté...
                              </p>
                              <ButtonGalerie text="Réaliser un devis ->" href="/contact" />
                         </article>
                         {/* Special Two */}
                         <article className={`text-center lg:text-left col-start-3 col-span-1 row-start-12 row-span-2`}>
                              <h3 className="font-play italic font-bold text-3xl">Titre spécial 1</h3>

                              <p className="opacity-60 text-2xl font-play italic mt-5">09/09/2026</p>
                              <p className="text-2xl lg:w-[70%] py-8 lg:py-0">
                                   Petit texte qui récapitule un peu la photo qu'il y a sur le coté...
                              </p>
                              <ButtonGalerie text="Réaliser un devis ->" href="/contact" />
                         </article>
                    </section>
               </main>
               <Footer />
          </>
     )
}
