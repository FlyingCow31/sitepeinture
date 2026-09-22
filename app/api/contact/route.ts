import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
     host: process.env.SMTP_HOST,
     port: Number(process.env.SMTP_PORT),
     secure: true,
     auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
     },
})

const schema = z.object({
     name: z.string().max(100).nonempty(),
     email: z
          .string({ message: "L'Email est obligatoire!" })
          .email({
               message: "L'email est obligatoire!",
          })
          .nonempty(),
     phone: z.string({ message: "Le numéro de téléphone est obligatoire!" }).nonempty(),
     prenom: z.string(),
     message: z.string({ message: "Vous devez décrire votre demande!" }).nonempty(),
     objet: z.string().max(100),
})

function escapeHtml(value: string) {
     return value.replace(/[&<>"']/g, (character) => {
          switch (character) {
               case "&":
                    return "&amp;"
               case "<":
                    return "&lt;"
               case ">":
                    return "&gt;"
               case '"':
                    return "&quot;"
               case "'":
                    return "&#39;"
               default:
                    return character
          }
     })
}

export async function POST(request: NextRequest) {
     try {
          const body = await request.json()
          if (body.website != null) {
               return NextResponse.json({ ok: true })
          }

          const timeFillingForm = Date.now() - body.formLoadedAt

          if (!body.formLoadedAt || timeFillingForm < 10000) {
               return NextResponse.json({ error: "Formulaire Invalide." }, { status: 400 })
          }

          const parsed = schema.safeParse(body)

          if (!parsed.success) {
               return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
          }

          const verified = parsed.data

          const clientEmail = body.email

          await transporter.sendMail({
               from: process.env.PRIV_EMAIL,
               to: process.env.PRIV_EMAIL,
               replyTo: clientEmail,
               subject: `Nouvelle demande de devis
               `,
               text: `${verified.objet}\n
               De la part de ${escapeHtml(verified.name)} ${verified.prenom} (${verified.email})\n
               \n
               Message: ${verified.message}
               `,
          })

          const clientMailHtml = `<div
     style="
          margin: 0 auto;
          max-width: 640px;
          padding: 24px;
          font-family: Arial, sans-serif;
          color: #1b4967;
          line-height: 1.6;
          background-color: #fbf8f3;
     "
>
     <div style="background-color: #ffffff; border: 3px solid #b8956a; border-radius: 16px; padding: 24px">
          <h1 style="margin: 0 0 16px; font-size: 24px; line-height: 1.2; font-weight: 700; color: #b8956a">
               ${escapeHtml(verified.name)}, merci pour votre message!
          </h1>
          <p style="margin: 0 0 16px; font-size: 16px">
               Ceci est un message automatique pour vous confirmer que votre message a bien été pris en compte.
          </p>
          <p style="margin: 0 0 16px; font-size: 16px">
               Nous reviendrons bien vite vers vous, aux coordonnés renseignées !
          </p>
          <p style="margin: 0 0 16px; font-size: 16px; white-space: pre-line">
               Vous nous avez transmis le message suivant: "${escapeHtml(verified.message)}"
          </p>
          <p style="margin: 0 0 16px; font-size: 16px">
               Si vous avez une question, vous pouvez nous contacter par mail à l'adresse contact@stylhome.fr
          </p>
          <p style="margin: 0; font-size: 16px">
               Très belle journée!
               <br />
               Styl'Home.
          </p>
     </div>
</div>

          `

          await transporter.sendMail({
               from: process.env.PRIV_EMAIL,
               to: clientEmail,
               subject: `Styl'Home | Nous avons bien reçu votre message ! `,
               html: clientMailHtml,
          })

          return NextResponse.json({ ok: true })
     } catch (err) {
          console.error("Contact API Error:", err)
          return NextResponse.json(
               {
                    error: "Le formulaire a eu une erreur.",
               },
               { status: 400 },
          )
     }
}
