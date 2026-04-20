import { useState } from "react";
import ctaImage from "@/assets/cta.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Request received. Yunshan will be in touch within one business day.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <>
      {/* Final CTA banner */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={ctaImage}
            alt="Sunlit window seat with white tulips and tea — a moment of calm"
            width={1920}
            height={1080}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        </div>
        <div className="container max-w-3xl">
          <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">Begin</span>
          <h2 className="mt-4 font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-balance">
            Start your <em className="gold-text not-italic">next chapter</em>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
            Reach out today for a free consultation and take the first step toward clarity, connection, and change.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-gold text-accent-foreground hover:opacity-90 shadow-gold rounded-full h-14 px-8"
            >
              <a href="#contact">
                <Calendar className="h-4 w-4" />
                Book Consultation
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full h-14 px-8 border-primary/30 text-primary hover:bg-primary-soft/40"
            >
              <a href="tel:9299306339">
                <Phone className="h-4 w-4" />
                Call (929) 930-6339
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="py-24 lg:py-32 bg-gradient-soft">
        <div className="container grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">Contact</span>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance">
              Request your complimentary consultation.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              All inquiries are handled personally and confidentially. You can expect a thoughtful response within one
              business day.
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-start gap-4">
                <span className="h-11 w-11 rounded-xl bg-primary-soft/60 text-primary inline-flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Phone</div>
                  <a href="tel:9299306339" className="font-serif text-2xl text-foreground hover:text-primary">
                    (929) 930-6339
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="h-11 w-11 rounded-xl bg-primary-soft/60 text-primary inline-flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Email</div>
                  <a
                    href="mailto:yunshangaolcsw@gmail.com"
                    className="font-serif text-2xl text-foreground hover:text-primary"
                  >
                    yunshangaolcsw@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="h-11 w-11 rounded-xl bg-primary-soft/60 text-primary inline-flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Serving</div>
                  <div className="font-serif text-2xl text-foreground">New York & New Jersey · Online</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="bg-card rounded-3xl p-8 lg:p-10 border border-border/60 shadow-elegant space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required placeholder="Your name" className="h-12 rounded-xl bg-background" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="h-12 rounded-xl bg-background"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="h-12 rounded-xl bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">What brings you to therapy?</Label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Share as much or as little as you'd like — anything you write is held in confidence."
                  className="rounded-xl bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full h-14 rounded-full bg-gradient-gold text-accent-foreground hover:opacity-90 shadow-gold text-base"
              >
                {submitting ? "Sending…" : "Request Appointment"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Your information is private and never shared. By submitting, you agree to be contacted regarding your
                inquiry.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
