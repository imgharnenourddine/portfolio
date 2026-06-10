import { Dot } from "lucide-react";
import type { Certification } from "../../types/certification";
import { Card } from "../ui/Card";

type CertificationCardProps = {
  certification: Certification;
};

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <Card className="flex items-center gap-6">
      <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-brand-50 p-5 ring-1 ring-brand-100">
        <img
          src={certification.image}
          alt={certification.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div>
        <h3 className="text-2xl font-black text-ink">{certification.title}</h3>
        <ul className="mt-4 space-y-2 text-muted">
          {certification.items.map((item) => (
            <li key={`${certification.title}-${item}`} className="flex gap-2 leading-7">
              <Dot className="mt-1 h-5 w-5 shrink-0 text-brand-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
