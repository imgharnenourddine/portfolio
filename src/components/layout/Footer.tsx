import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "../../data/personal";
import { buildEmailComposeUrl } from "../../utils/helpers";

const links = [
  { label: "GitHub", href: personal.github, icon: Github },
  { label: "LinkedIn", href: personal.linkedin, icon: Linkedin },
  { label: "Email", href: buildEmailComposeUrl(personal.email), icon: Mail },
];

export function Footer() {
  return (
    <footer className="px-4 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 rounded-3xl border border-line bg-white px-6 py-7 shadow-card sm:flex-row">
        <div className="flex items-center gap-4">
          <img src={personal.logo} alt="NI" className="h-12 w-12 object-contain" />
          <p className="text-center font-semibold text-muted sm:text-left">
            © 2026 Noureddine Imgharn. Tous droits réservés.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition hover:-translate-y-0.5 hover:bg-brand-600 hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
