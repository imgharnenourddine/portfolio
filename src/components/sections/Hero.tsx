import { BarChart3, BrainCircuit, Cloud, Code2, Rocket, Send } from "lucide-react";
import { heroBadges, personal } from "../../data/personal";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { SocialLinks } from "../ui/SocialLinks";

const badgeIcons = [BrainCircuit, Code2, Cloud, BarChart3];

export function Hero() {
  return (
    <section id="accueil" className="section-shell overflow-hidden !py-12 sm:!py-14 lg:!py-16">
      <div className="relative grid items-center gap-14 lg:grid-cols-[1fr_0.86fr]">
        <div>
          <p className="mb-6 text-xl font-bold text-brand-700 sm:text-2xl">
            {personal.greeting}
          </p>
          <h1 className="text-balance text-5xl font-black leading-tight text-ink sm:text-7xl lg:text-8xl">
            {personal.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-black leading-tight text-brand-700 sm:text-xl lg:text-2xl">
            {personal.title}
          </p>
          <p className="mt-7 max-w-3xl text-lg leading-9 text-muted sm:text-xl">
            {personal.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {heroBadges.map((badge, index) => {
              const Icon = badgeIcons[index] ?? BrainCircuit;

              return (
                <Badge key={badge} icon={<Icon className="h-4 w-4" />}>
                  {badge}
                </Badge>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#projets" icon={<Rocket className="h-5 w-5" />}>
              Voir mes projets
            </Button>
            <Button href="#contact" variant="outline" icon={<Send className="h-5 w-5" />}>
              Me contacter
            </Button>
          </div>

          <div className="mt-10">
            <SocialLinks />
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[24rem] w-full max-w-xl items-end justify-center lg:-mt-10 lg:min-h-[32rem] lg:max-w-2xl">
          <div className="absolute bottom-0 right-0 h-[96%] w-[92%] rounded-[52%_48%_48%_52%] bg-brand-50/95" />
          <div className="absolute -right-6 bottom-4 h-[92%] w-[86%] rounded-[52%_48%_48%_52%] border border-brand-100" />
          <div className="absolute right-0 top-28 h-72 w-72 bg-dotted opacity-70" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-16 top-16 h-40 w-40 bg-contain bg-center bg-no-repeat opacity-[0.065]"
            style={{ backgroundImage: `url(${personal.logo})` }}
          />
          <img
            src={personal.profile}
            alt={personal.name}
            className="relative z-10 h-[24rem] w-auto max-w-full translate-y-12 object-contain object-bottom lg:h-[32rem] lg:translate-y-20"
          />
        </div>
      </div>
    </section>
  );
}
