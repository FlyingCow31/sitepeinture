"use client"
import { useEffect, useRef, useState } from "react"

export default function Form() {
     const divRef = useRef<HTMLDivElement>(null)

     const [name, setName] = useState("")
     const [prenom, setPrenom] = useState("")
     const [email, setEmail] = useState("")
     const [phone, setPhone] = useState("")
     const [objet, setObjet] = useState("")
     const [message, setMessage] = useState("")
     const [website, setWebsite] = useState<string | null>(null)
     const [loading, setLoading] = useState(false)
     const [success, setSuccess] = useState(false)

     const [errors, setErrors] = useState<string | null>(null)
     const [formLoadedAt] = useState(() => Date.now())
     async function HandleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
          event.preventDefault()

          setLoading(true)
          setSuccess(false)
          setErrors(null)

          const payload = {
               formLoadedAt,
               website,
               name,
               prenom,
               email,
               phone,
               objet,
               message,
          }

          try {
               const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
               })

               const data = await response.json()

               if (response.ok) {
                    setEmail("")
                    setName("")
                    setPrenom("")
                    setObjet("")
                    setMessage("")
                    setSuccess(true)
                    setLoading(false)
               } else {
                    setErrors(data?.error ?? "Une erreur est survenue. Veuillez réessayer.")
                    setLoading(false)
               }
          } catch (error) {
               setErrors("Une erreur est survenue. Veuillez réessayer.")
               setLoading(false)
          }
     }

     useEffect(() => {
          if (loading) {
               divRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
               document.body.style.overflow = "hidden"
          } else {
               document.body.style.overflow = ""
          }

          return () => {
               document.body.style.overflow = ""
          }
     }, [loading])

     return (
          <form className="flex flex-col gap-2" onSubmit={HandleSubmit}>
               <div className="flex flex-col gap-4 ">
                    <input
                         type="text"
                         onChange={(e) => setWebsite(e.target.value)}
                         name="website"
                         tabIndex={-1}
                         autoComplete="off"
                         style={{ position: "absolute", left: "-9999px" }}
                    />
               </div>
               <div className="flex items-center justify-between ">
                    <div className="flex flex-col w-[49%]">
                         <label htmlFor="name" className="ml-10 -mb-1 font-play italic text-lg font-bold">
                              Nom
                         </label>
                         <input
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              id="name"
                              name="name"
                              type="text"
                              className="border-sec border-3 rounded-lg p-2"
                              placeholder="Votre nom"
                              required
                         />
                    </div>
                    <div className="flex flex-col w-[49%]">
                         <label htmlFor="prenom" className="ml-10 -mb-1 font-play italic text-lg font-bold">
                              Prénom
                         </label>
                         <input
                              value={prenom}
                              onChange={(e) => setPrenom(e.target.value)}
                              id="prenom"
                              name="prenom"
                              type="text"
                              className="border-sec border-3 rounded-lg p-2"
                              placeholder="Votre Prénom"
                              required
                         />
                    </div>
               </div>

               <div className="flex flex-col">
                    <label htmlFor="email" className="ml-10 -mb-1 font-play italic text-lg font-bold">
                         Email
                    </label>
                    <input
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         id="email"
                         name="email"
                         type="email"
                         className="border-sec border-3 rounded-lg p-2"
                         placeholder="votreemail@nomdedomaine.fr"
                         required
                    />
               </div>

               <div className="flex flex-col">
                    <label htmlFor="phone" className="ml-10 -mb-1 font-play italic text-lg font-bold">
                         Numéro de téléphone
                    </label>
                    <input
                         value={phone}
                         onChange={(e) => setPhone(e.target.value)}
                         id="phone"
                         name="phone"
                         type="phone"
                         className="border-sec border-3 rounded-lg p-2"
                         placeholder="0673429263"
                         required
                    />
               </div>

               <div className="flex flex-col">
                    <label htmlFor="objet" className="ml-10 -mb-1 font-play italic text-lg font-bold">
                         Objet
                    </label>
                    <input
                         value={objet}
                         onChange={(e) => setObjet(e.target.value)}
                         id="objet"
                         name="objet"
                         type="text"
                         className="border-sec border-3 rounded-lg p-2 italic"
                         placeholder="Peinture Murale"
                    />
               </div>

               <div className="flex flex-col">
                    <label htmlFor="message" className="ml-10 -mb-1 font-play italic text-lg font-bold">
                         Détaillez votre demande
                    </label>
                    <textarea
                         value={message}
                         onChange={(e) => setMessage(e.target.value)}
                         id="message"
                         name="message"
                         className="border-sec border-3 rounded-lg p-4 italic"
                         placeholder="J'ai 35m2 à refaire, je veux..."
                         rows={2}
                         required
                    />
               </div>
               <button type="submit" className="border py-2 bg-main text-bg rounded-lg secondary-title buttonmain">
                    Envoyer
               </button>
               {loading && (
                    <div
                         ref={divRef}
                         className="bg-tint/80 p-8 text-bg h-screen w-screen fixed inset-0 overflow-hidden"
                    >
                         <div className="flex min-h-65 flex-col items-center justify-center gap-4 rounded-2xl text-center">
                              <div className="h-14 w-14 animate-spin rounded-full border-4 border-white/20 border-t-white" />
                              <p className="secondary-title font-bold">Envoi en cours</p>
                              <p className="max-w-sm regular-text leading-relaxed text-white/75">
                                   Vous recevrez un mail de confirmation, vérifiez vos spams...
                              </p>
                         </div>
                    </div>
               )}
               {success && !loading && (
                    <div className="bg-tint/80 p-8 text-bg h-screen w-screen fixed inset-0 overflow-hidden">
                         <div className="flex min-h-65 flex-col items-center justify-center gap-4 rounded-2xl text-center">
                              <p className="secondary-title font-bold">Message envoyé</p>
                              <p className="max-w-sm regular-text leading-relaxed text-white/75">
                                   Merci pour votre message, nous vous répondrons bientôt.
                              </p>
                         </div>
                    </div>
               )}
               {errors && !loading && (
                    <div className="bg-tint/80 p-8 text-bg h-screen w-screen fixed inset-0 overflow-hidden">
                         <div className="flex min-h-65 flex-col items-center justify-center gap-4 rounded-2xl text-center">
                              <p className="secondary-title font-bold">Échec de l'envoi</p>
                              <p className="max-w-sm regular-text leading-relaxed text-white/75">{errors}</p>
                         </div>
                    </div>
               )}
          </form>
     )
}
