// src/pages/AboutPage.jsx
import React from "react";

export default function AboutPage() {
  return (
    <main className="about-page fade-in">
      <section className="about-hero">
        <h1>Who the Flock Are We?</h1>
        <p>
          Born in Bahrain, raised by wolves (okay, artists), <strong>The Odd Sheep</strong> is
          the misfit brand your closet warned you about.
        </p>
      </section>

      <section className="about-story">
        <h2>Dark. Witty. Unapologetically Weird.</h2>
        <p>
          We blend sarcasm with shadows, humor with horror, and fashion with rebellion.
          Every tee, hoodie, and sock comes infused with just the right amount of existential dread.
        </p>
      </section>

      <section className="about-creed">
        <h2>Not for the Faint of Fleece 🐑</h2>
        <p>
          We’re not here to please your grandma (unless she’s into skulls and punchlines).
          We’re here for the outcasts, the rebels, the night owls with good taste and bad intentions.
        </p>
      </section>

      <section className="about-footer-cta">
        <p>
          So go ahead — be odd. Be loud. Be you.<br />
          The flock is overrated anyway.
        </p>
      </section>
    </main>
  );
}
