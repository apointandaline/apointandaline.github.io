import { User, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: User,
    title: "Individual Therapy",
    description:
      "A focused space to understand what is shaping your inner life and to build the awareness, tools, and resilience to move forward with intention.",
    items: [
      "Anxiety & overthinking",
      "Depression & low mood",
      "Self-esteem & self-worth",
      "Stress & burnout",
      "Life transitions",
      "Identity & self-discovery",
    ],
  },
  {
    icon: Heart,
    title: "Couples Therapy",
    description:
      "Emotionally Focused work that helps partners move out of recurring conflict and back into the kind of connection that feels secure, honest, and alive.",
    items: [
      "Recurring relationship conflict",
      "Communication breakdowns",
      "Rebuilding emotional connection",
      "Premarital & long-term partnership work",
      "Trust & repair",
      "Life-stage transitions together",
    ],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container">
        <div className="max-w-3xl">
          <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">Services</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight text-balance">
            Personalized care for <em className="gold-text not-italic">individuals</em> and{" "}
            <em className="gold-text not-italic">couples</em>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Every engagement begins with a careful conversation about what brought you here and what a meaningful
            outcome would look like. From there, your work together is designed around you.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-6 lg:gap-8">
          {services.map(({ icon: Icon, title, description, items }) => (
            <article
              key={title}
              className="group relative bg-card rounded-3xl p-8 lg:p-10 border border-border/60 shadow-soft hover:shadow-elegant transition-all duration-500 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary-soft/40 blur-3xl group-hover:bg-accent/15 transition-colors duration-700" />

              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <span className="h-14 w-14 rounded-2xl bg-gradient-sage text-primary-foreground inline-flex items-center justify-center shadow-soft">
                    <Icon className="h-6 w-6" />
                  </span>
                </div>

                <h3 className="font-serif text-3xl text-foreground">{title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>

                <ul className="mt-8 grid sm:grid-cols-2 gap-y-3 gap-x-6">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant="ghost"
                  className="mt-8 -ml-3 text-primary hover:text-primary hover:bg-primary-soft/40 rounded-full"
                >
                  <a href="#contact">
                    Inquire about this service
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
