import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-simulator.jpg"
          alt="Premium golf simulator installation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Premium Golf Simulator Installation
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 text-balance">
            Transform Any Space Into Your Personal Golf Paradise
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Expert installation of world-class golf simulators for homes and businesses. 
            Play the greatest courses year-round, rain or shine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" asChild>
              <Link href="#contact">
                Request a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>

          <div className="flex gap-12 pt-8 border-t border-border/50">
            <div>
              <p className="font-serif text-3xl text-foreground">500+</p>
              <p className="text-sm text-muted-foreground">Installations</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-foreground">50+</p>
              <p className="text-sm text-muted-foreground">Courses Available</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-foreground">5 Year</p>
              <p className="text-sm text-muted-foreground">Warranty</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
