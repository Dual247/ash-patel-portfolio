import Link from "next/link";

const footerLinks = {
  services: [
    { label: "Residential", href: "#residential" },
    { label: "Commercial", href: "#commercial" },
    { label: "Custom Build-Outs", href: "#services" },
    { label: "Maintenance", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Our Process", href: "#process" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#" },
  ],
  support: [
    { label: "FAQ", href: "#" },
    { label: "Warranty", href: "#" },
    { label: "Technical Support", href: "#" },
    { label: "Training", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center">
                <span className="text-foreground font-serif text-sm font-bold">PG</span>
              </div>
              <span className="font-serif text-xl tracking-tight">Pro Golf Install</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Premium golf simulator installation for homes and businesses. 
              Bringing the course to you since 2015.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 text-sm hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 text-sm hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 text-sm hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            2026 Pro Golf Install. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-background/50 text-sm hover:text-background transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-background/50 text-sm hover:text-background transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
