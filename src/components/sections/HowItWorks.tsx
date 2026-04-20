const steps = [
  {
    number: "01",
    title: "Book a free consultation",
    description:
      "A complimentary 15-minute call to share what brought you here and ask anything about working together — no pressure, no commitment.",
  },
  {
    number: "02",
    title: "Discuss your goals",
    description:
      "Your first full session is a thoughtful intake: history, current concerns, and a clear picture of what meaningful change looks like for you.",
  },
  {
    number: "03",
    title: "Begin personalized therapy",
    description:
      "Weekly online sessions, designed around your life. We adjust the pace and approach as your needs evolve.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="process" className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-primary-glow blur-3xl" />
      </div>

      <div className="container relative">
        <div className="max-w-3xl">
          <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">How it works</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance">
            A simple, considered path into the work.
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
            Online therapy from anywhere in New York or New Jersey. The first conversation is always on us.
          </p>
        </div>

        <ol className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((s) => (
            <li
              key={s.number}
              className="relative bg-primary-foreground/5 backdrop-blur-sm rounded-3xl p-8 border border-primary-foreground/10 hover:border-accent/40 transition-colors duration-500"
            >
              <div className="font-serif text-6xl gold-text leading-none">{s.number}</div>
              <h3 className="mt-6 font-serif text-2xl">{s.title}</h3>
              <p className="mt-3 text-primary-foreground/75 leading-relaxed text-sm">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
