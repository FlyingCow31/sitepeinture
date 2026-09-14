import Image from "next/image"
import { Navbar } from "../componants/Navbar"
import Footer from "../componants/Footer"

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
          title: "Titre",
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
                    <section className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:auto-rows-48 lg:grid-flow-dense py-24">
                         {images.map((image, index) => (
                              <figure
                                   key={`${image.src}-${index}`}
                                   className={`relative overflow-hidden rounded-2xl aspect-4/3 lg:aspect-auto ${image.className}`}
                              >
                                   <Image src={image.src} alt={image.alt} fill unoptimized className="object-cover" />
                              </figure>
                         ))}
                         {textes.map((texte, i) => (
                              <article key={i} className={`${texte.className}`}>
                                   {texte.main ? <h1>{texte.texte}</h1> : <h3>{texte.texte}</h3>}
                              </article>
                         ))}
                    </section>
               </main>
               <Footer />
          </>
     )
}
