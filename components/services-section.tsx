import { Card, CardContent } from "@/components/ui/card";
import { 
  Home, 
  Building2, 
  Wrench, 
  Monitor, 
  ShieldCheck, 
  GraduationCap 
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Installation",
    description: "Transform your basement, garage, or spare room into a premium golf experience.",
  },
  {
    icon: Building2,
    title: "Commercial Installation",
    description: "Complete solutions for country clubs, sports bars, hotels, and training facilities.",
  },
  {
    icon: Wrench,
    title: "Custom Build-Outs",
    description: "Full room design and construction including lighting, flooring, and acoustics.",
  },
  {
    icon: Monitor,
    title: "Technology Integration",
    description: "Launch monitors, projectors, screens, and software from leading brands.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Warranty",
    description: "Comprehensive support packages with 5-year extended warranty options.",
  },
  {
    icon: GraduationCap,
    title: "Training & Setup",
    description: "Complete training on your new system and ongoing technical support.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-4 text-balance">
            Complete Golf Simulator Solutions
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From initial consultation to final installation, we handle every aspect 
            of your golf simulator project with precision and care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="border-border/50 bg-background hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
