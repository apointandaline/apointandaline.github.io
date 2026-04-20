import approachImage from "@/assets/approach.jpg";

const modalities = [
  {
    name: "Psychodynamic Therapy",
    summary:
      "Tracing the patterns and early experiences that quietly shape how you relate, react, and protect yourself today.",
  },
  {
    name: "Cognitive Behavioral Therapy",
    summary:
      "Practical tools and structured frameworks for shifting unhelpful thought loops and behaviors that keep you stuck.",
  },
  {
    name: "Emotionally Focused Therapy",
    summary:
      "A research-backed map for couples to move out of conflict cycles and back into secure, responsive connection.",
  },
];

export const Approach = () => {
  return (
    <section id="approach" className="py-24 lg:py-32">
      <div className="container grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elegant">
            <img
              src={approachImage}
              alt="Soft sage botanical close-up symbolizing growth and calm"
              width={1600}
              height={1200}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">Approach</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance">
            An integrative method, tailored to <em className="gold-text not-italic">your</em> story.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            No two clients are alike, and no single modality is enough. I blend three evidence-based traditions
            into one cohesive approach — calibrated to the way you think, feel, and grow.
          </p>

          <div className="mt-10 space-y-5">
            {modalities.map((m, i) => (
              <div
                key={m.name}
                className="group flex gap-5 p-6 rounded-2xl bg-card border border-border/60 hover:border-accent/40 hover:shadow-soft transition-all duration-500"
              >
                <div className="font-serif text-4xl text-accent/50 leading-none w-10 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-foreground">{m.name}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{m.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
