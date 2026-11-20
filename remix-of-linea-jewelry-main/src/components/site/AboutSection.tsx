const AboutSection = () => {
  return (
    <section id="about" className="bg-background">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <header className="mx-auto max-w-3xl text-center">
          <span aria-hidden="true" className="mx-auto mb-7 block h-px w-16 bg-gold" />
          <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
            तोहफा – Curated by Vaani
          </h2>
          <h3 className="mt-5 font-serif text-2xl leading-snug text-gold sm:text-3xl">
            Every gift has a story. We help you tell yours.
          </h3>
        </header>

        <div className="mx-auto mt-12 max-w-3xl space-y-6 text-base font-light leading-8 text-foreground/80 sm:text-lg sm:leading-9">
          <p>
            Some feelings are too beautiful to be expressed in words. Some moments deserve more than just a celebration. And some people deserve something that says, <em>“I thought of you.”</em>
          </p>
          <p>That's where <strong>तोहफा – Curated by Vaani</strong> begins.</p>
          <p>
            Tohfa was born from a simple yet beautiful belief — <strong>a gift is never just an object; it's an emotion wrapped with love.</strong>
          </p>
          <p>
            What started from a passion for thoughtful gifting grew into a dream of making every occasion feel a little more special. We believe that gifting shouldn't be about how expensive something is, but about how meaningful it feels. It's in the little details, the colours, the personal touches and the thought behind every creation.
          </p>
          <p>
            At Tohfa, we turn ordinary gifts into extraordinary memories. From beautifully curated hampers and personalised surprises to festive gifting, birthday treats, shagun trays and thoughtful tokens of appreciation, every creation is thoughtfully put together with an eye for detail and a heart full of creativity.
          </p>
          <p className="border-y border-gold/40 py-6 text-center font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
            Our philosophy is simple: <strong>Elegant doesn't have to be expensive, and meaningful doesn't have to be extravagant.</strong>
          </p>
          <p>
            We bring together sophistication, personalisation and affordability to create gifts that look beautiful, feel special and leave lasting impressions.
          </p>
          <p>
            Whether it's a birthday, a wedding, a festival, a new beginning or simply a moment when you want to make someone smile, we want Tohfa to be a part of that happiness.
          </p>
          <p>
            Because behind every Tohfa is a thought, behind every thought is an emotion, and behind every emotion is a story waiting to be told.
          </p>
        </div>

        <footer className="mx-auto mt-12 max-w-3xl border-t border-gold/40 pt-8 text-center">
          <p className="font-serif text-2xl text-gold sm:text-3xl">
            A little thought. A lot of love. A beautiful Tohfa.
          </p>
          <p className="mt-5 text-base font-light leading-relaxed text-foreground/80">
            Welcome to our little world of thoughtful gifting.
          </p>
          <p className="mt-4 font-serif text-xl text-foreground">तोहफा – Curated by Vaani</p>
          <p className="mt-4 text-sm italic font-light text-foreground/70">
            Made with thought. Curated with love. Gifted with meaning.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default AboutSection;
