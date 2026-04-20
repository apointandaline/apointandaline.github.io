import { Calendar } from "lucide-react";

export const StickyCTA = () => {
  return (
    <a
      href="#contact"
      className="lg:hidden fixed bottom-5 inset-x-5 z-40 h-14 rounded-full bg-gradient-gold text-accent-foreground shadow-gold flex items-center justify-center gap-2 font-medium text-base"
      aria-label="Book a free consultation"
    >
      <Calendar className="h-4 w-4" />
      Book Free Consultation
    </a>
  );
};
