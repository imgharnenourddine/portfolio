import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "../../data/personal";
import { buildEmailComposeUrl } from "../../utils/helpers";

const links = [
  {
    label: "GitHub",
    href: personal.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: personal.linkedin,
    icon: Linkedin,
  },
  {
    label: "Email",
    href: buildEmailComposeUrl(personal.email),
    icon: Mail,
  },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink shadow-card ring-1 ring-line transition duration-200 hover:-translate-y-1 hover:text-brand-700 hover:shadow-soft"
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}
