"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We start with a thorough discussion of your goals, space requirements, and budget. Our experts will help you understand the options available and recommend the best solution for your needs.",
  },
  {
    number: "02",
    title: "Site Assessment",
    description:
      "Our team visits your location to assess the space, take measurements, evaluate electrical requirements, and identify any structural considerations for your installation.",
  },
  {
    number: "03",
    title: "Custom Design",
    description:
      "Based on our assessment, we create a detailed design proposal including equipment recommendations, room layout, lighting plans, and a comprehensive quote.",
  },
  {
    number: "04",
    title: "Professional Installation",
    description:
      "Our certified technicians handle every aspect of the installation, from construction and electrical work to equipment setup and calibration.",
  },
  {
    number: "05",
    title: "Training & Support",
    description:
      "Once complete, we provide comprehensive training on your new system and ongoing technical support to ensure you get the most out of your investment.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              How It Works
            </p>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-4 text-balance">
              Our Installation Process
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              From first contact to final swing, we guide you through every step 
              of your golf simulator journey.
            </p>
          </div>

          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {steps.map((step, index) => (
              <AccordionItem
                key={step.number}
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <span className="text-primary font-mono text-sm">{step.number}</span>
                    <span className="font-serif text-lg">{step.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-12 text-muted-foreground leading-relaxed">
                  {step.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
