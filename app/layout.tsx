import type { Metadata } from "next"
import { Playfair_Display, Manrope } from "next/font/google"
import "./globals.css"
import { JsonLd } from "./componants/JsonLd"

const playfairDisplay = Playfair_Display({
     variable: "--font-playfair_display",
     subsets: ["latin"],
     style: ["normal", "italic"],
     weight: ["400", "500", "600", "700", "800", "900"],
})

const manrope = Manrope({
     variable: "--font-manrope",
     subsets: ["latin"],
})

export const metadata: Metadata = {
     metadataBase: new URL("https://stylhome.fr"),
     title: {
          default: "Styl'Home | Peintre en Bâtiment à Lille",
          template: "%s | Styl'Home",
     },
     description:
          "Styl'Home réalise vos travaux de peinture, enduit décoratif et rénovation intérieure à Lille et dans les environs. Devis gratuit sous 48h.",
     openGraph: {
          siteName: "Styl'Home",
          locale: "fr_FR",
          type: "website",
          images: [
               {
                    url: "/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Styl'Home - Peinture et rénovation intérieure à Lille",
               },
          ],
     },
     twitter: {
          card: "summary_large_image",
          images: ["/og-image.jpg"],
     },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
     return (
          <html lang="fr" className={`${playfairDisplay.variable} ${manrope.variable} font-man h-full antialiased`}>
               <body className="bg-bg">
                    <JsonLd />
                    {children}
               </body>
          </html>
     )
}
