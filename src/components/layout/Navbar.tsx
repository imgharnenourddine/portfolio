import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { personal } from "../../data/personal";
import { cvPath, navLinks } from "../../utils/constants";
import { Button } from "../ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("accueil");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-line bg-white/88 px-4 py-3 shadow-card backdrop-blur-xl sm:px-6">
        <a href="#accueil" className="flex items-center gap-3" aria-label="Accueil">
          <img src={personal.logo} alt="NI" className="h-12 w-12 object-contain sm:h-14 sm:w-14" />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);

            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-bold transition hover:text-brand-700 ${
                  isActive ? "text-brand-700" : "text-ink"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center lg:flex">
          <Button href={cvPath} download icon={<Download className="h-5 w-5" />}>
            Télécharger CV
          </Button>
        </div>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-ink shadow-card lg:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-2xl border border-line bg-white p-4 shadow-soft lg:hidden">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 font-bold text-ink transition hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </a>
            ))}
            <Button
              href={cvPath}
              download
              className="mt-2 w-full"
              icon={<Download className="h-5 w-5" />}
            >
              Télécharger CV
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
