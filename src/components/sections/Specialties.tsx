const primary = ["Anxiety", "Relationship Issues", "Life Transitions"];
const additional = [
  "Depression",
  "Family Conflict",
  "Career Challenges",
  "Emotional Regulation",
  "LGBTQ+ Affirming",
  "Women's Issues",
  "Self-Esteem",
  "Identity Exploration",
];

export const Specialties = () => {
  return (
    <section id="specialties" className="py-24 lg:py-32 bg-gradient-soft">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">Specialties</span>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance">
              Areas where her work makes the deepest difference.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Most clients arrive at one of three crossroads — and stay because the work goes far beyond symptom relief.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {primary.map((s, i) => (
                <div
                  key={s}
                  className="relative bg-card rounded-2xl p-6 border border-border/60 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="font-serif text-5xl text-accent/30">0{i + 1}</div>
                  <div className="mt-3 font-serif text-2xl text-foreground">{s}</div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-background/60 backdrop-blur-sm p-6 border border-border/40">
              <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">Also working with</div>
              <ul className="flex flex-wrap gap-2">
                {additional.map((s) => (
                  <li
                    key={s}
                    className="px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground/85"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
