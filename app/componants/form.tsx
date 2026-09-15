"use client"
import { useState } from "react"

export default function Form() {
     const [name, setName] = useState("")
     const [prenom, setPrenom] = useState("")
     const [email, setEmail] = useState("")
     const [objet, setObjet] = useState("")
     const [message, setMessage] = useState("")
     const [website, setWebsite] = useState<string | null>(null)

     const [errors, setErrors] = useState<string | null>(null)
     const [formLoadedAt] = useState(() => Date.now())
     async function HandleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
          event.preventDefault()

          // TODO Insert loading state here

          const payload = {
               formLoadedAt,
               website,
               name,
               prenom,
               email,
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
               }
          } catch (error) {
               // TODO Update the loading screen
          }
     }

     return (
          <form className="-mt-5 flex flex-col gap-2" onSubmit={HandleSubmit}>
               <div className="flex flex-col gap-4 p-5">
                    <input
                         type="text"
                         onChange={(e) => setWebsite(e.target.value)}
                         name="website"
                         tabIndex={-1}
                         autoComplete="off"
                         style={{ position: "absolute", left: "-9999px" }}
                    />
               </div>
               <div className="flex items-center justify-between">
                    <div className="flex flex-col w-[49%]">
                         <label htmlFor="name" className="ml-10 -mb-1 text-2xl font-play italic">
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
                         <label htmlFor="prenom" className="ml-10 -mb-1 text-2xl font-play italic">
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
                    <label htmlFor="email" className="ml-10 -mb-1 text-2xl font-play italic">
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
                    <label htmlFor="objet" className="ml-10 -mb-1 text-2xl font-play italic">
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
                    <label htmlFor="message" className="ml-10 -mb-1 text-2xl font-play italic">
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
               <button type="submit" className="border py-2 bg-main text-bg rounded-lg text-2xl font-play italic">
                    Envoyer
               </button>
          </form>
     )
}
