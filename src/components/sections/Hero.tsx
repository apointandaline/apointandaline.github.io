import heroImage from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Sun-lit Manhattan therapy office with sage velvet armchair, brass accents, and a view of the city skyline"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      <div className="container grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-soft/60 border border-primary/10 text-primary text-xs tracking-[0.25em] uppercase mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Now accepting new clients · NY & NJ
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-foreground text-balance">
            Gain clarity. Strengthen your relationships.
            <span className="block italic gold-text font-medium mt-2">Move forward with confidence.</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-xl text-pretty leading-relaxed">
            Thoughtful, evidence-based therapy for individuals and couples navigating anxiety, relationships, and life
            transitions — from a licensed New York psychotherapist.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-gold text-accent-foreground hover:opacity-90 shadow-gold rounded-full h-14 px-8 text-base"
            >
              <a href="#contact">
                <Calendar className="h-4 w-4" />
                Book Free Consultation
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full h-14 px-8 text-base border-primary/30 text-primary hover:bg-primary-soft/40"
            >
              <a href="tel:9299306339">
                <Phone className="h-4 w-4" />
                (929) 930-6339
              </a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Licensed in NY & NJ
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Online sessions only
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary-glow" />
              10+ years of experience
            </div>
          </div>
        </div>

        {/* Floating quote card */}
        <div className="lg:col-span-5 hidden lg:block fade-in">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-accent/10 via-primary/5 to-transparent rounded-[2rem] blur-2xl" />
            <div className="relative bg-card/80 backdrop-blur-md rounded-[2rem] p-10 shadow-elegant border border-border/60">
              <div className="font-serif text-7xl leading-none text-accent/40">"</div>
              <p className="font-serif text-2xl leading-snug text-foreground -mt-6">
                Therapy is a space to understand yourself more deeply, develop new perspectives, and create meaningful,
                lasting change.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-px flex-1 bg-border" />
                <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Yunshan Gao, LCSW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
