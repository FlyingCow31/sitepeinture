export function JsonLd() {
     return (
          <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                         "@context": "https://schema.org",
                         "@type": "HomeAndConstructionBusiness",
                         name: "Styl'Home",
                         image: "https://stylhome.fr/og-image.jpg",
                         url: "https://stylhome.fr",
                         telephone: "+33-X-XX-XX-XX-XX",
                         address: {
                              "@type": "PostalAddress",
                              streetAddress: "229 Rue de Solférino",
                              addressLocality: "Lille",
                              postalCode: "59000",
                              addressCountry: "FR",
                         },
                         areaServed: "Lille et environs",
                         priceRange: "€€",
                    }),
               }}
          />
     )
}
