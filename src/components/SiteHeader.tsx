import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#process", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
];

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <a href="#top" className="flex flex-col" aria-label="Yunshan Gao, LCSW — Home">
          <span className="font-serif text-xl tracking-tight text-foreground">Yunshan Gao</span>
          <span className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">LCSW</span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/75 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="bg-gradient-gold text-accent-foreground hover:opacity-90 shadow-gold rounded-full px-6 h-11">
            <a href="#contact">Book Consultation</a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden h-11 w-11 inline-flex items-center justify-center rounded-full border border-border bg-background/80"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base text-foreground/80 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="bg-gradient-gold text-accent-foreground rounded-full h-12 mt-2">
              <a href="#contact" onClick={() => setOpen(false)}>Book Consultation</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
