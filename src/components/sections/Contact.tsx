import { FormEvent, useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send, ShieldCheck } from "lucide-react";
import { personal } from "../../data/personal";
import { buildEmailComposeUrl } from "../../utils/helpers";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

const contactCards = [
  {
    label: "Email",
    value: personal.email,
    href: buildEmailComposeUrl(personal.email),
    icon: Mail,
  },
  {
    label: "Téléphone",
    value: personal.phone,
    href: `tel:${personal.phone}`,
    icon: Phone,
  },
  {
    label: "Localisation",
    value: personal.location,
    href: "#contact",
    icon: MapPin,
  },
  {
    label: "LinkedIn",
    value: personal.linkedinLabel,
    href: personal.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: personal.githubLabel,
    href: personal.github,
    icon: Github,
  },
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Envoi du message en cours...");

    const subject = form.subject || "Message depuis le portfolio";

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject,
          message: form.message,
          _captcha: "false",
          _template: "table",
        }),
      });

      if (!response.ok) {
        throw new Error("Message non envoyé");
      }

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setStatus("Message envoyé avec succès. Merci pour votre contact.");
    } catch {
      setStatus(
        "Impossible d’envoyer le message automatiquement pour le moment. Réessayez dans quelques instants.",
      );
    }
  }

  return (
    <section id="contact" className="section-shell overflow-hidden">
      <img
        src={personal.logo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-12 top-12 hidden h-80 w-80 object-contain opacity-[0.045] lg:block"
      />
      <div className="absolute left-0 top-80 h-56 w-56 bg-dotted opacity-60" />
      <div className="absolute right-4 top-8 h-52 w-52 bg-dotted opacity-60" />

      <div className="relative grid gap-10 xl:grid-cols-[0.9fr_1.05fr_0.52fr]">
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-brand-600 sm:text-base">
            Contactez-moi
          </p>
          <h2 className="text-balance text-5xl font-black leading-tight text-ink sm:text-6xl lg:text-7xl">
            Travaillons ensemble
          </h2>
          <p className="mt-7 text-lg leading-8 text-muted">
            Vous avez un projet, une opportunité de stage ou souhaitez collaborer ? N’hésitez pas à
            me contacter, je serai ravi d’échanger avec vous.
          </p>
          <div className="mt-8 space-y-4">
            {contactCards.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                    <Icon className="h-7 w-7" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-black text-brand-700">{item.label}</span>
                    <span className="block break-words font-semibold text-ink">{item.value}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <Card className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <label className="block">
              <span className="font-black text-ink">Nom complet</span>
              <input
                type="text"
                required
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                placeholder="Votre nom complet"
                className="mt-3 w-full rounded-xl border border-line bg-white px-5 py-4 text-ink outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
              />
            </label>
            <label className="block">
              <span className="font-black text-ink">Email</span>
              <input
                type="email"
                required
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                placeholder="votre.email@exemple.com"
                className="mt-3 w-full rounded-xl border border-line bg-white px-5 py-4 text-ink outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
              />
            </label>
            <label className="block">
              <span className="font-black text-ink">Sujet</span>
              <input
                type="text"
                required
                value={form.subject}
                onChange={(event) => setForm({ ...form, subject: event.target.value })}
                placeholder="Sujet de votre message"
                className="mt-3 w-full rounded-xl border border-line bg-white px-5 py-4 text-ink outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
              />
            </label>
            <label className="block">
              <span className="font-black text-ink">Votre message</span>
              <textarea
                required
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                placeholder="Décrivez votre projet ou votre demande..."
                rows={6}
                className="mt-3 w-full resize-y rounded-xl border border-line bg-white px-5 py-4 text-ink outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
              />
            </label>
            <Button type="submit" className="w-full" icon={<Send className="h-5 w-5" />}>
              Envoyer le message
            </Button>
            {status ? (
              <p className="rounded-xl bg-brand-50 px-4 py-3 text-sm font-bold text-brand-700">
                {status}
              </p>
            ) : null}
            <p className="flex items-center gap-3 text-sm font-medium text-muted">
              <ShieldCheck className="h-5 w-5 text-brand-600" />
              Vos informations sont confidentielles et ne seront jamais partagées.
            </p>
          </form>
        </Card>

        <div className="flex items-center xl:justify-center">
          <Card className="w-full max-w-xs text-center">
            <img src={personal.logo} alt="NI" className="mx-auto h-20 w-20 object-contain" />
            <h3 className="mt-7 text-3xl font-black leading-tight text-brand-700">
              Discutons de votre projet !
            </h3>
            <p className="mt-6 leading-7 text-muted">
              Je suis à l’écoute de vos idées et prêt à vous accompagner dans leur réalisation.
            </p>
            <span className="mx-auto mt-8 block h-1.5 w-16 rounded-full bg-brand-600" />
          </Card>
        </div>
      </div>
    </section>
  );
}
