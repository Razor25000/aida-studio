import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-[var(--color-line)]">
      <div className="container-x py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <p className="eyebrow">Studio</p>
          <p className="text-lg leading-snug mt-4 max-w-md text-ink/80">
            Un atelier pluridisciplinaire qui pense l&rsquo;espace comme un système&nbsp;: structure, usage, matière.
          </p>
        </div>

        <div>
          <p className="eyebrow">Paris</p>
          <p className="mt-4 text-sm leading-relaxed">
            40 rue des Blancs Manteaux<br />
            75004 Paris<br />
            <a href="tel:+33764847571" className="hover:text-accent">+33 7 64 84 75 71</a>
          </p>
        </div>

        <div>
          <p className="eyebrow">Activité</p>
          <p className="mt-4 text-sm leading-relaxed">
            France, Singapour,<br />
            Asie &amp; Moyen-Orient<br />
            <a href="/contact" className="hover:text-accent">Demander un RDV →</a>
          </p>
        </div>
      </div>

      <div className="border-t border-[var(--color-line)]">
        <div className="container-x py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} A&rsquo;IDA · Atelier d&rsquo;Ingénieurs, Designers et Architectes · SIREN 884119843</p>
          <ul className="flex gap-6">
            <li><Link href="/contact" className="hover:text-ink">Contact</Link></li>
            <li><Link href="/publication" className="hover:text-ink">Presse</Link></li>
            <li><a href="https://instagram.com/aida.paris" className="hover:text-ink">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}