import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do you accept insurance?",
    a: "Yunshan is an out-of-network provider. Many clients with PPO plans are reimbursed for a meaningful portion of each session, and she will provide monthly superbills along with clear guidance on submitting them.",
  },
  {
    q: "How long is each session?",
    a: "Standard individual and couples sessions run 50 minutes. Extended sessions can occasionally be arranged when clinically indicated.",
  },
  {
    q: "Are sessions virtual or in person?",
    a: "All sessions are conducted online via a secure, HIPAA-compliant video platform. This makes consistent care possible for clients across New York and New Jersey.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Sessions cancelled with less than 24 hours' notice are charged at the full rate. We will always do our best to reschedule within the same week when possible.",
  },
  {
    q: "How do I know if we're a good fit?",
    a: "The free 15-minute consultation is designed exactly for that. You'll get a feel for her style, ask any questions, and decide together whether to move forward.",
  },
  {
    q: "How long does therapy usually take?",
    a: "It varies. Some clients work together for a focused several months, others continue longer-term as new chapters unfold. We'll review progress and goals at regular intervals.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="container grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">FAQ</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-balance">
            Considered answers to the questions most clients ask first.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Don't see your question? Reach out and we'll get back to you within one business day.
          </p>
        </div>

        <div className="lg:col-span-7">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border/60 rounded-2xl px-6 shadow-soft"
              >
                <AccordionTrigger className="font-serif text-xl text-foreground hover:no-underline py-5 text-left">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
