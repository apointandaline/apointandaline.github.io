import therapistImage from "@/assets/therapist.jpg";
import { GraduationCap, Award, MapPin } from "lucide-react";

const credentials = [
  { icon: GraduationCap, label: "M.S.W., New York University" },
  { icon: Award, label: "Licensed Clinical Social Worker (LCSW)" },
  { icon: MapPin, label: "Licensed in New York & New Jersey" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-gradient-soft">
      <div className="container grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-accent/15 blur-2xl" />
            <div className="absolute -bottom-8 -right-4 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elegant">
              <img
                src={therapistImage}
                alt="Portrait of Yunshan Gao, LCSW — licensed psychotherapist in New York"
                width={1024}
                height={1280}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 lg:-right-10 lg:left-auto lg:w-72 bg-card rounded-2xl p-5 shadow-elegant border border-border">
              <div className="text-3xl font-serif text-primary">10+</div>
              <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">
                Years guiding clients toward clarity
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="text-xs tracking-[0.3em] uppercase text-accent font-medium">About</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight text-balance">
            A practice built on <em className="gold-text not-italic">insight</em>, warmth, and clinical depth.
          </h2>

          <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              Hi, I'm Yunshan Gao, a Licensed Clinical Social Worker (LCSW) dedicated to helping individuals navigate life's challenges with compassion, clarity, and care. I have been working with adult individuals and couples who live in New York and New Jersey.
            </p>
            <p>
              I believe that every person deserves a safe, nonjudgmental space to be heard and understood. My goal is to help you make sense of your own experience, understand your inner feelings, identify what you want, and remove the blocks that prevent you from getting there. I draw on evidence-based modalities including Cognitive Behavioral Therapy (CBT), mindfulness, and trauma-informed care.
            </p>
          </div>

          <ul className="mt-10 grid sm:grid-cols-2 gap-4">
            {credentials.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/60 shadow-soft"
              >
                <span className="h-10 w-10 shrink-0 rounded-lg bg-primary-soft/60 text-primary inline-flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm text-foreground/90 leading-snug pt-1.5">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
