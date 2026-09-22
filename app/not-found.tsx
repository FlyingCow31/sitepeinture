import Link from "next/link"
import { MobileNav, Navbar } from "./componants/Navbar"
import Footer from "./componants/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
     title: "404 | Styl'Home",
     description: "404 - Page introuvable.",
}

export default function NotFound() {
     return (
          <>
               <Navbar />
               <main>
                    <MobileNav />
                    <section className="flex flex-col items-center justify-center text-center px-6 py-24 lg:py-40 min-h-[70dvh]">
                         <p className="font-play italic text-sec display-number">404</p>

                         <h1 className="titlemain mt-4">Page introuvable</h1>

                         <p className="font-man text-main/70 mt-6 max-w-md regular-text text-pretty">
                              Cette page n&apos;existe pas ou plus. Elle a peut-être été déplacée, ou l&apos;adresse
                              comporte une erreur.
                         </p>

                         <Link
                              href="/"
                              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-main px-8 py-3 font-play italic text-bg buttonmain regular-text"
                         >
                              Retour à l&apos;accueil
                         </Link>
                    </section>
               </main>
               <Footer />
          </>
     )
}
