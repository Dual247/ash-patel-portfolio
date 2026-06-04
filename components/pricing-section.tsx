import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Home, Building2, Sparkles } from "lucide-react";

const residentialPackages = [
  {
    name: "Essential",
    price: "15,000",
    priceNote: "Starting at",
    description: "Perfect for golfers wanting a quality home setup without the premium price tag.",
    features: [
      "Quality impact screen & frame",
      "Entry-level launch monitor",
      "Standard projector setup",
      "Basic turf hitting mat",
      "Professional installation",
      "1-year warranty",
    ],
    popular: false,
  },
  {
    name: "Performance",
    price: "35,000",
    priceNote: "Starting at",
    description: "Our most popular package for serious golfers seeking accuracy and immersion.",
    features: [
      "Premium Carl's Place screen",
      "Garmin R10 or SkyTrak+ monitor",
      "4K short-throw projector",
      "Premium turf & stance mat",
      "Full room lighting design",
      "Software package included",
      "Professional installation",
      "3-year warranty",
    ],
    popular: true,
  },
  {
    name: "Tour Pro",
    price: "65,000",
    priceNote: "Starting at",
    description: "The ultimate home golf experience with tour-level technology and finishes.",
    features: [
      "Custom curved screen enclosure",
      "Trackman or Full Swing Kit",
      "Dual 4K laser projectors",
      "Custom flooring & buildout",
      "Acoustic treatment",
      "Full software suite",
      "Smart home integration",
      "Professional installation",
      "5-year warranty",
    ],
    popular: false,
  },
];

const commercialPackages = [
  {
    name: "Single Bay",
    price: "45,000",
    priceNote: "Starting at",
    description: "Ideal for sports bars, small clubs, or corporate entertainment spaces.",
    features: [
      "Commercial-grade screen system",
      "Foresight GC3 or equivalent",
      "Commercial projector",
      "Durable commercial turf",
      "POS integration ready",
      "Professional installation",
      "2-year commercial warranty",
    ],
    popular: false,
  },
  {
    name: "Multi-Bay Setup",
    price: "120,000",
    priceNote: "Starting at",
    description: "Complete 3-bay installation for entertainment venues and training facilities.",
    features: [
      "3 commercial bay enclosures",
      "Premium launch monitors",
      "Networked software system",
      "Central management console",
      "League & tournament software",
      "Custom branding options",
      "Full design & buildout",
      "Professional installation",
      "3-year commercial warranty",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceNote: "Pricing",
    description: "Large-scale installations for resorts, country clubs, and training academies.",
    features: [
      "5+ bay installations",
      "Tour-level technology",
      "Full facility design",
      "Custom construction",
      "F&B integration",
      "Booking & membership systems",
      "Ongoing support contracts",
      "Staff training included",
      "Extended warranty options",
    ],
    popular: false,
  },
];

function PricingCard({ 
  pkg, 
  type 
}: { 
  pkg: typeof residentialPackages[0]; 
  type: "residential" | "commercial";
}) {
  return (
    <Card 
      className={`relative border-border/50 bg-background flex flex-col ${
        pkg.popular ? "ring-2 ring-primary shadow-lg" : ""
      }`}
    >
      {pkg.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
            <Sparkles className="h-3 w-3" />
            Most Popular
          </span>
        </div>
      )}
      <CardHeader className="pb-4 pt-8">
        <div className="flex items-center gap-2 mb-2">
          {type === "residential" ? (
            <Home className="h-5 w-5 text-primary" />
          ) : (
            <Building2 className="h-5 w-5 text-primary" />
          )}
          <h3 className="font-serif text-xl">{pkg.name}</h3>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-sm text-muted-foreground">{pkg.priceNote}</span>
          <span className="font-serif text-4xl tracking-tight">
            {pkg.price === "Custom" ? "" : "$"}
            {pkg.price}
          </span>
        </div>
        <p className="text-muted-foreground text-sm mt-2">
          {pkg.description}
        </p>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <ul className="space-y-3 flex-1">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm">
              <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          className="w-full mt-6" 
          variant={pkg.popular ? "default" : "outline"}
          asChild
        >
          <a href="#contact">
            {pkg.price === "Custom" ? "Contact Us" : "Get a Quote"}
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Transparent Pricing
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-4 text-balance">
            Investment Estimates
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Quality golf simulator installations are an investment. Here are ballpark figures 
            to help you plan your budget. Final pricing depends on room specifications and equipment choices.
          </p>
        </div>

        {/* Residential Pricing */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Home className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-serif text-2xl">Residential Packages</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {residentialPackages.map((pkg) => (
              <PricingCard key={pkg.name} pkg={pkg} type="residential" />
            ))}
          </div>
        </div>

        {/* Commercial Pricing */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Building2 className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-serif text-2xl">Commercial Packages</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {commercialPackages.map((pkg) => (
              <PricingCard key={pkg.name} pkg={pkg} type="commercial" />
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            * All prices are estimates and may vary based on your specific requirements, 
            room dimensions, and equipment selections. Contact us for a detailed, 
            no-obligation quote tailored to your project.
          </p>
        </div>
      </div>
    </section>
  );
}
