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
     {
          src: "toilettespapierpeintpremium.jpg",
          alt: "Pose de papier peint à Tressin",
          className: "lg:col-start-1 lg:row-start-1 lg:row-span-3",
     },
     {
          src: "salledebainbleue.JPG",
          alt: "Salle de bain finissions murales à Mérignies",
          className: "lg:col-start-2 lg:row-start-4 lg:row-span-2",
     },
     {
          src: "chambrepeinturebois.jpg",
          alt: "Peinture bois réalisée à Lille",
          className: "lg:col-start-3 lg:row-start-2 lg:row-span-2",
     },
     {
          src: "peinturemarronetbois.jpg",
          alt: "Peinture intérieure salle à manger à Sainghin-en-Mélantois",
          className: "lg:col-start-1 lg:row-start-6 lg:row-span-2",
     },
     {
          src: "peinturejauneetsols.jpg",
          alt: "Peinture intérieure bureau à Mérignies",
          className: "lg:col-start-2 lg:row-start-6 lg:row-span-2",
     },
     {
          src: "finitionsetpeinture.jpg",
          alt: "Finissions décoratives et peinture en plein coeur de Lille",
          className: "lg:col-start-1 lg:row-start-12 lg:row-span-2",
     },
     {
          src: "peinturedebois.webp",
          alt: "Peinture sur bois à Gruson",
          className: "lg:col-start-1 lg:col-span-2 lg:row-start-10 lg:row-span-2",
     },
     {
          src: "finissionsdecorativesetsolbois.jpg",
          alt: "Finissions décoratives de salle de réception à Lille",
          className: "lg:col-start-2 lg:row-start-12 lg:row-span-2",
     },
     {
          src: "solenbois.jpg",
          alt: "Pose de sol en bois à Bouvines",
          className: "lg:col-start-3 lg:row-start-6 lg:row-span-4",
     },
     {
          src: "maisonpeintureexterieure.jpg",
          alt: "Peinture exterieure à Ennevelin",
          className: "lg:col-start-1 lg:col-span-1 lg:row-start-4 lg:row-span-2",
     },
     {
          src: "murpeinturebicolore.jpg",
          alt: "Peinture murale bicolore noire et blanche à Genech",
          className: "lg:col-start-3 lg:col-span-1 lg:row-start-10 lg:row-span-2",
     },
]

const textes = [
     {
          title: "Galerie",
          date: "Mise à jour le 21/09/2026",
          texte: "Bienvenue sur notre page galerie! Découvrez nos précédentes créations, toutes réalisées à Lille et dans les alentours.",
          className: "lg:col-start-2 lg:col-span-2 lg:row-start-1 lg:row-span-2",
          main: true,
     },
     {
          title: "Finission et Sol",
          date: "23/06/2025",
          texte: "Mur décoratif de salle de bain, avec sol boisé, réalisé à Genech.",
          className: "lg:col-start-3 lg:col-span-1 lg:row-start-5 lg:row-span-1",
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
                                   <Image src={`/images/${image.src}`} alt={image.alt} fill className="object-cover" />
                              </figure>
                         ))}
                         {textes.map((texte, i) => (
                              <article key={i} className={`hidden lg:block px-4 ${texte.className}`}>
                                   {texte.main ? (
                                        <h1 className="titlemain hidden lg:block">{texte.title}</h1>
                                   ) : (
                                        <h3 className="secondary-title">{texte.title}</h3>
                                   )}
                                   <p className="opacity-60 subtitle mt-5">{texte.date}</p>
                                   <p className="regular-text w-[70%]">{texte.texte}</p>
                              </article>
                         ))}

                         {/* Special One */}
                         <article className={`hidden px-4 lg:block col-start-1 col-span-2 row-start-8 row-span-2 `}>
                              <h3 className="secondary-title">Collection de peinture murale</h3>

                              <p className="opacity-60 subtitle mt-5">17/11/2024</p>
                              <p className="regular-text w-[70%]">
                                   Découvrez notre collection de peinture murale, réalisées à Sainghin-en-Mélantois, à
                                   Mérignies et à Lompret.
                              </p>
                              <ButtonGalerie text="Réaliser un devis ->" href="/contact" />
                         </article>
                         {/* Special Two */}
                         <article
                              className={`text-left px-4 lg:text-left col-start-3 col-span-1 row-start-12 row-span-2`}
                         >
                              <h3 className="secondary-title">(Re)Découvrez votre bâtisse</h3>
                              <p className="regular-text lg:w-[70%] py-8 lg:py-0">
                                   Accordez à votre bâtisse un nouveau look, réalisez un devis gratuit.
                              </p>
                              <ButtonGalerie text="Réaliser un devis ->" href="/contact" />
                         </article>
                    </section>
               </main>
               <Footer />
          </>
     )
}
