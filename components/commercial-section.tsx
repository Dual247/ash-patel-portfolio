import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
  "Multi-bay installations",
  "Booking and management software",
  "Point-of-sale integration",
  "Custom branding options",
  "League and tournament software",
  "Professional staff training",
];

export function CommercialSection() {
  return (
    <section id="commercial" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              For Businesses
            </p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-4 text-balance">
              Elevate Your Business With Golf
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Create a destination that draws customers year-round. From sports bars 
              and restaurants to country clubs and corporate facilities, our commercial 
              solutions are designed for maximum engagement and revenue.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button asChild>
              <Link href="#contact">Discuss Your Project</Link>
            </Button>
          </div>

          <div className="relative aspect-[4/3] rounded-lg overflow-hidden order-1 lg:order-2">
            <Image
              src="/images/commercial-setup.jpg"
              alt="Commercial golf simulator installation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
