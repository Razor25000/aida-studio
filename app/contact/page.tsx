import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — Paris & Singapour",
  description:
    "Contactez A'IDA pour un projet d'architecture, design ou ingénierie. Bureaux à Paris 11ème et Singapour (Tanjong Pagar). Réponse sous 48 heures ouvrées.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact A'IDA — Paris & Singapour",
    description:
      "Bureaux à Paris 11ème et Singapour. Brief, budget, planning : écrivez-nous, réponse sous 48 heures.",
    url: "https://a-ida.fr/contact",
    type: "website",
  },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://a-ida.fr/contact#contact",
  url: "https://a-ida.fr/contact",
  name: "Contact A'IDA",
  description:
    "Page de contact de l'atelier A'IDA — architectes, designers et ingénieurs à Paris et Singapour.",
  inLanguage: "fr-FR",
  about: { "@id": "https://a-ida.fr/#organization" },
  mainEntity: { "@id": "https://a-ida.fr/#business" },
};

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <section className="container-x pt-20 pb-12 md:pt-32 md:pb-16">
        <p className="eyebrow reveal">Contact · Paris & Singapour</p>
        <h1 className="h-display mt-6 reveal">Parlons-en.</h1>
        <p className="mt-8 max-w-2xl text-lg reveal">
          Brief, budget, planning, ou simple question&nbsp;: écrivez-nous, on
          revient sous 48 heures ouvrées.
        </p>
      </section>

      <section className="container-x pb-24 md:pb-32 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <ContactForm />
        </div>

        <aside className="md:col-span-4 md:col-start-9 space-y-10 reveal">
          <div>
            <p className="eyebrow">Paris · Siège</p>
            <p className="mt-3 text-sm leading-relaxed">
              40 rue des Blancs Manteaux<br />
              75004 Paris<br />
              <a href="tel:+33764847571" className="hover:text-accent">
                +33 7 64 84 75 71
              </a>
            </p>
          </div>
          <div>
            <p className="eyebrow">Zone d’activité</p>
            <p className="mt-3 text-sm leading-relaxed">
              France, Singapour,<br />
              Asie &amp; Moyen-Orient
            </p>
          </div>
          <div>
            <p className="eyebrow">E-mail</p>
            <p className="mt-3 text-sm">
              <a href="mailto:studio@a-ida.fr" className="hover:text-accent">
                studio@a-ida.fr
              </a>
            </p>
          </div>
          <div>
            <p className="eyebrow">Identité</p>
            <p className="mt-3 text-sm leading-relaxed">
              SAS · SIREN 884 119 843<br />
              Architecte &amp; urbaniste (APE 7111Z)
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
