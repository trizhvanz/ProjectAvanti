export default function About() {
  return (
    <main>
      <section className="av-hero">
        <div className="av-hero-copy">
          <div className="av-pill">
            <span>✳</span> ABOUT PROJECT AVANTI
          </div>

          <h1>
            A community where <span>kindness moves forward.</span>
          </h1>

          <p className="av-hero-description">
            Project Avanti is a charitable giving initiative built on the
            belief that everyone has something meaningful to share. We want
            to help people connect their generosity with the needs around
            them.
          </p>

          <div className="av-trust-note">
            <span className="av-heart">♡</span>
            <p>
              <strong>Small acts can make a real difference.</strong>
              <br />
              Every contribution begins with care.
            </p>
          </div>
        </div>

        <div className="av-hero-art" aria-hidden="true">
          <div className="av-sun" />
          <div className="av-mission-circle">
            <span>♡</span>
            <p>
              Give what
              <br />
              you can.
            </p>
          </div>
          <span className="av-spark av-spark-one">✳</span>
          <span className="av-spark av-spark-two">✦</span>
        </div>
      </section>

      <section className="av-section av-mission">
        <div className="av-mission-art" aria-hidden="true">
          <div className="av-mission-circle">
            <span>✿</span>
            <p>
              Hope grows
              <br />
              when we share.
            </p>
          </div>
          <span className="av-mission-flower">✳</span>
        </div>

        <div className="av-mission-copy">
          <span className="av-eyebrow">OUR PURPOSE</span>
          <h2>
            Making it easier to <span>help one another.</span>
          </h2>
          <p>
            We believe support can take many forms: food, clothing, school
            supplies, money, time, or simply connecting someone with help.
            Project Avanti aims to make giving approachable and encourage
            people to support charitable efforts in their communities.
          </p>
          <p>
            We also believe generosity should go hand in hand with
            transparency. Any real donation activity should clearly explain
            who is being supported and how contributions are handled.
          </p>
        </div>
      </section>

      <section className="av-purpose-strip" aria-label="Our values">
        <div>
          <span>01</span>
          <p>Lead with compassion</p>
        </div>
        <span className="av-strip-divider" aria-hidden="true">✳</span>
        <div>
          <span>02</span>
          <p>Give in many ways</p>
        </div>
        <span className="av-strip-divider" aria-hidden="true">✳</span>
        <div>
          <span>03</span>
          <p>Act with transparency</p>
        </div>
      </section>
    </main>
  );
}