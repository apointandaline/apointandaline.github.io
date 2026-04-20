export const SiteFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-14">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="font-serif text-2xl">Yunshan Gao, LCSW</div>
            <div className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mt-1">
              Psychotherapy · NY & NJ
            </div>
            <p className="mt-5 text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
            </p>
          </div>
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-4">Practice</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#approach" className="hover:text-accent transition-colors">Approach</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-4">Contact</div>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:9299306339" className="hover:text-accent">(929) 930-6339</a></li>
              <li><a href="mailto:yunshangaolcsw@gmail.com" className="hover:text-accent">yunshangaolcsw@gmail.com</a></li>
              <li className="text-primary-foreground/60">Online sessions · NY & NJ</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row gap-3 justify-between text-xs text-primary-foreground/60">
          <span>© {new Date().getFullYear()} Yunshan Gao, LCSW. All rights reserved.</span>
          <span>If you are in crisis, please call or text 988 for immediate support.</span>
        </div>
      </div>
    </footer>
  );
};
