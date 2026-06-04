import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
  "Custom room design and construction",
  "Premium turf flooring installation",
  "High-definition impact screens",
  "Professional-grade launch monitors",
  "Integrated sound systems",
  "Climate control solutions",
];

export function ResidentialSection() {
  return (
    <section id="residential" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/residential-setup.jpg"
              alt="Luxury residential golf simulator"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              For Homeowners
            </p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-4 text-balance">
              Your Dream Home Golf Experience
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Imagine stepping into your personal golf sanctuary any time you want. 
              Whether it&apos;s a quick practice session before work or a weekend round 
              with friends, your home simulator brings the course to you.
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
              <Link href="#contact">Schedule Home Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
