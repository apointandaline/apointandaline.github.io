import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Yunshan helped me see patterns I had been repeating for years without realizing it. Six months in, my anxiety is quieter and my relationships feel different in the best way.",
    author: "Individual client, Manhattan",
  },
  {
    quote:
      "We came in burned out from the same fight on repeat. Her work helped us actually hear each other again — and stay there long after the session ended.",
    author: "Couples clients, Brooklyn",
  },
  {
    quote:
      "She is brilliant, warm, and refreshingly direct. I always leave with something concrete to think about and a deeper sense of myself.",
    author: "Individual client, Jersey City",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-soft">
      <div className="container">
        <div className="max-w-3xl">
          <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">Client experiences</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance">
            Quiet, considered work — and the changes that follow.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="bg-card rounded-3xl p-8 border border-border/60 shadow-soft flex flex-col"
            >
              <div className="flex gap-1 text-accent mb-5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="font-serif text-xl text-foreground leading-snug flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border/60 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
