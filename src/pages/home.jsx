
import { useState } from "react";
import trizhaPhoto from "./me.png";

const donationOptions = [
  {
    name: "Food & Groceries",
    icon: "🥫",
    description: "Help provide everyday food essentials.",
  },
  {
    name: "Education",
    icon: "📚",
    description: "Support school supplies and learning materials.",
  },
  {
    name: "Clothing",
    icon: "👕",
    description: "Share wearable clothes and basic necessities.",
  },
  {
    name: "Community Care",
    icon: "💛",
    description: "Help families access essential resources.",
  },
];

const amounts = [100, 250, 500, 1000];

const impactMessages = {
  100: "A small contribution toward essential everyday needs.",
  250: "A helping hand toward food or basic necessities.",
  500: "More support for learning materials and family essentials.",
  1000: "A bigger contribution toward community support efforts.",
};

export default function Home() {
  const [amount, setAmount] = useState(250);
  const [customAmount, setCustomAmount] = useState("");
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorMessage, setDonorMessage] = useState("");
  const [donationMethod, setDonationMethod] = useState("Money");
  const [error, setError] = useState("");

  const selectedAmount =
    customAmount !== "" ? Number(customAmount) || 0 : amount;

  function openDonation(type = "Money") {
    setDonationMethod(type);
    setSubmitted(false);
    setError("");
    setShowDonationForm(true);
  }

  function closeDonation() {
    setShowDonationForm(false);
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!donorName.trim() || !donorEmail.trim()) {
      setError("Please enter your name and email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donorEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (donationMethod === "Money" && selectedAmount < 1) {
      setError("Please enter a valid donation amount.");
      return;
    }

    setError("");
    setSubmitted(true);
  }

  return (
    <main>
      {/* HERO */}
      <section className="av-hero">
        <div className="av-hero-copy">
          <div className="av-pill">
            <span>✳</span> A LITTLE KINDNESS GOES A LONG WAY
          </div>

          <h1>
            Your blessings can change someone's{" "}
            <span>tomorrow.</span>
          </h1>

          <p className="av-hero-description">
            Project Avanti is a non-profit donation initiative built
            around one simple belief: everyone has something to share.
            Whether it's money, food, clothes, school supplies, or your
            time, your generosity can bring hope to someone who needs it.
          </p>

          <div className="av-hero-buttons">
            <button
              className="av-button av-button-primary"
              onClick={() => openDonation("Money")}
            >
              Share Your Blessings <span>↗</span>
            </button>

            <a className="av-button av-button-outline" href="#ways-to-give">
              Ways to Give ↓
            </a>

            <a className="av-button av-button-outline" href="#how-it-works">
              How It Works ↓
            </a>
          </div>

          <div className="av-trust-note">
            <span className="av-heart">♡</span>
            <p>
              <strong>Giving comes in many forms.</strong>
              <br />
              Give what you can, when you can.
            </p>
          </div>
        </div>

        <div className="av-hero-art">
          <div className="av-sun" />
          <div className="av-photo-frame">
            <img
              src="/heart-community.svg"
              alt="A haloed heart surrounded by people supporting one another"
            />
          </div>

        </div>
      </section>

      {/* PURPOSE STRIP */}
      <section className="av-purpose-strip">
        <div>
          <span>01</span>
          <p>Share what you have</p>
        </div>
        <span className="av-strip-divider">✳</span>
        <div>
          <span>02</span>
          <p>Support someone's needs</p>
        </div>
        <span className="av-strip-divider">✳</span>
        <div>
          <span>03</span>
          <p>Pass the kindness forward</p>
        </div>
      </section>

      {/* MISSION */}
      <section className="av-mission av-section" id="our-mission">
        <div className="av-mission-art">
          <div className="av-mission-circle">
            <span>♡</span>
            <p>Kindness<br />starts here.</p>
          </div>
          <span className="av-mission-flower">✿</span>
        </div>

        <div className="av-mission-copy">
          <span className="av-eyebrow">WHY PROJECT AVANTI?</span>
          <h2>
            We believe hope grows when we <span>share.</span>
          </h2>

          <p>
            Not everyone has the same opportunities or access to basic
            needs. Project Avanti aims to create a space where people
            who want to help can connect with charitable efforts and
            people who need support.
          </p>

          <p>
            Our vision is to encourage generosity, make giving easier
            to understand, and inspire a community where no act of
            kindness is considered too small.
          </p>

          <a href="#how-it-works" className="av-text-link">
            Discover how it works <span>→</span>
          </a>
        </div>
      </section>

      {/* DONATION CATEGORIES */}
      <section className="av-giving av-section" id="ways-to-give">
        <div className="av-section-heading">
          <span className="av-eyebrow">THERE ARE MANY WAYS TO CARE</span>
          <h2>
            What would you like <span>to share?</span>
          </h2>
          <p>
            Your blessings don't have to come in the form of money.
            Choose a way to help that feels right for you.
          </p>
        </div>

        <div className="av-giving-grid">
          {donationOptions.map((option, index) => (
            <article className="av-giving-card" key={option.name}>
              <div className={`av-giving-icon av-giving-icon-${index + 1}`}>
                {option.icon}
              </div>

              <span className="av-card-index">
                0{index + 1} / SHARE THE LOVE
              </span>

              <h3>{option.name}</h3>
              <p>{option.description}</p>

              <button
                className="av-card-action"
                onClick={() => openDonation(option.name)}
              >
                I want to help <span>↗</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* DONATION CALCULATOR */}
      <section className="av-calculator av-section" id="donation-calculator">
        <div className="av-calculator-copy">
          <span className="av-eyebrow">YOUR GIFT, YOUR CHOICE</span>
          <h2>
            Every amount can be a <span>beginning.</span>
          </h2>
          <p>
            Choose a sample donation amount and explore how it could
            contribute to a charitable effort. Every example is
            illustrative, not a guarantee of a particular outcome.
          </p>
          <div className="av-calculator-reminder">
            <span>✳</span>
            <p>
              Give within your means. You don't need to give a lot
              to show that you care.
            </p>
          </div>
        </div>

        <div className="av-calculator-box">
          <label className="av-form-label">CHOOSE YOUR AMOUNT</label>

          <div className="av-amount-grid">
            {amounts.map((value) => (
              <button
                key={value}
                type="button"
                className={
                  customAmount === "" && amount === value
                    ? "av-amount-option selected"
                    : "av-amount-option"
                }
                onClick={() => {
                  setAmount(value);
                  setCustomAmount("");
                }}
              >
                ₱{value.toLocaleString("en-PH")}
              </button>
            ))}
          </div>

          <label className="av-form-label" htmlFor="customAmount">
            OR ENTER A CUSTOM AMOUNT (PHP)
          </label>

          <div className="av-custom-amount">
            <span>₱</span>
            <input
              id="customAmount"
              type="number"
              min="1"
              max="1000000"
              placeholder="Enter any amount"
              value={customAmount}
              onChange={(event) => setCustomAmount(event.target.value)}
            />
          </div>

          <div className="av-impact-preview" aria-live="polite">
            <span className="av-impact-heart">♡</span>
            <div>
              <small>YOUR POTENTIAL CONTRIBUTION</small>
              <strong>
                ₱
                {selectedAmount.toLocaleString("en-PH", {
                  maximumFractionDigits: 2,
                })}
              </strong>
              <p>
                {impactMessages[selectedAmount] ||
                  "A contribution toward a charitable effort, depending on actual needs and available resources."}
              </p>
            </div>
          </div>

          <button
            className="av-button av-button-primary av-full-button"
            onClick={() => openDonation("Money")}
            disabled={!Number.isFinite(selectedAmount) || selectedAmount < 1}
          >
            Continue with this amount <span>↗</span>
          </button>

          <p className="av-small-note">
            This is a preview only. No payment is collected here.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="av-how av-section" id="how-it-works">
        <div className="av-section-heading">
          <span className="av-eyebrow">SIMPLE, THOUGHTFUL, TRANSPARENT</span>
          <h2>
            Giving should feel <span>meaningful.</span>
          </h2>
          <p>
            Here's how Project Avanti is designed to help people
            participate in charitable giving.
          </p>
        </div>

        <div className="av-steps">
          <article className="av-step">
            <span className="av-step-number">01</span>
            <div className="av-step-icon">♡</div>
            <h3>Choose how to help</h3>
            <p>
              Decide whether you'd like to offer a monetary contribution,
              useful goods, or your time as a volunteer.
            </p>
          </article>

          <article className="av-step">
            <span className="av-step-number">02</span>
            <div className="av-step-icon">✉</div>
            <h3>Send an inquiry</h3>
            <p>
              Share your contact details and the kind of support you
              want to offer so the next steps can be discussed.
            </p>
          </article>

          <article className="av-step">
            <span className="av-step-number">03</span>
            <div className="av-step-icon">✓</div>
            <h3>Confirm the details</h3>
            <p>
              Before any real donation, confirm the recipient,
              collection process, and how your contribution will be used.
            </p>
          </article>

          <article className="av-step">
            <span className="av-step-number">04</span>
            <div className="av-step-icon">☀</div>
            <h3>Pass on the hope</h3>
            <p>
              Once a real donation process is established, contributions
              can be documented and shared through appropriate updates.
            </p>
          </article>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section className="av-transparency">
        <div className="av-transparency-symbol">✳</div>
        <div>
          <span className="av-eyebrow">KINDNESS WITH ACCOUNTABILITY</span>
          <h2>Your trust matters as much as your generosity.</h2>
          <p>
            Project Avanti is a website concept for charitable giving.
            Before accepting real donations, the organizer must verify
            recipients, establish a secure collection method, and explain
            how contributions are handled. We believe giving should be
            guided by both compassion and transparency.
          </p>
        </div>
        <a href="#contact" className="av-button av-button-outline">
          Ask a question ↗
        </a>
      </section>

      {/* CONTACT CTA */}
      <section className="av-contact av-section" id="contact">
        <div className="av-contact-decoration">♡</div>
        <span className="av-eyebrow">THERE'S A PLACE FOR YOU HERE</span>
        <h2>
          You have something to give. <span>Let's begin.</span>
        </h2>
        <p>
          Want to volunteer, offer essential goods, suggest a charitable
          activity, or learn more about Project Avanti? We'd love to hear
          from you.
        </p>

        <div className="av-contact-actions">
          <button
            className="av-button av-button-primary"
            onClick={() => openDonation("Volunteering")}
          >
            Become a Volunteer ↗
          </button>

          <a className="av-button av-button-outline" href="#ways-to-give">
            Explore ways to give
          </a>
        </div>

        <p className="av-contact-email">
          Prefer email?{" "}
          <a href="mailto:projectavanti@example.com">
            Contact Project Avanti
          </a>
        </p>
      </section>

      {/* FOUNDER */}
      <section className="av-founder av-section" aria-labelledby="av-founder-title">
        <div className="av-founder-photo-frame">
          <img src={trizhaPhoto} alt="Trizha, founder of Project Avanti" />
        </div>

        <div className="av-founder-copy">
          <span className="av-eyebrow">A NOTE FROM THE FOUNDER</span>
          <h2 id="av-founder-title">
            Hi, I’m <span>Trizha.</span>
          </h2>
          <p>
            <strong>Avanti</strong> is an Italian word meaning “forward” or
            “ahead.” I created Project Avanti around one simple idea: a
            blessing becomes even more meaningful when we pass it forward.
          </p>
          <p>
            A little kindness can travel a long way. Together, we can turn
            what we have to give into hope, support, and brighter beginnings
            for someone else.
          </p>
          <a className="av-text-link" href="#ways-to-give">
            Pass a blessing forward <span>→</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="av-footer">
        <a className="av-footer-brand" href="#top">
          <span className="av-logo" aria-hidden="true">
            <svg viewBox="0 0 48 48">
              <ellipse className="av-logo-halo" cx="24" cy="3" rx="8" ry="2.5" />
              <path
                className="av-logo-heart"
                d="M24 44C19 40 5 29 5 20 5 10 18 7 24 17 30 7 43 10 43 20 43 29 29 40 24 44Z"
              />
            </svg>
          </span>
          <span>
            <strong>Project Avanti</strong>
            <small>SHARE YOUR BLESSINGS</small>
          </span>
        </a>

        <p>Little acts of love. A world of hope.</p>

        <div className="av-footer-links">
          <a href="#our-mission">Our Mission</a>
          <a href="#ways-to-give">Ways to Give</a>
          <a href="#contact">Contact</a>
        </div>

        <span className="av-copyright">
          © {new Date().getFullYear()} Project Avanti
        </span>
      </footer>

      {/* INTERACTIVE DONATION / VOLUNTEER FORM */}
      {showDonationForm && (
        <div
          className="av-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeDonation();
          }}
        >
          <section
            className="av-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="av-modal-title"
          >
            <button
              className="av-modal-close"
              onClick={closeDonation}
              aria-label="Close form"
            >
              ×
            </button>

            {!submitted ? (
              <>
                <span className="av-eyebrow">A LITTLE GOOD STARTS HERE</span>
                <h2 id="av-modal-title">
                  {donationMethod === "Volunteering"
                    ? "Let's volunteer together."
                    : "Share your blessings."}
                </h2>

                <p className="av-modal-description">
                  Tell us a little about yourself and how you'd like
                  to help. This form currently prepares an inquiry only.
                </p>

                <form className="av-donation-form" onSubmit={handleSubmit}>
                  <label className="av-form-label" htmlFor="donorName">
                    YOUR NAME
                  </label>
                  <input
                    id="donorName"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    value={donorName}
                    onChange={(event) => setDonorName(event.target.value)}
                    required
                  />

                  <label className="av-form-label" htmlFor="donorEmail">
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="donorEmail"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={donorEmail}
                    onChange={(event) => setDonorEmail(event.target.value)}
                    required
                  />

                  <label className="av-form-label" htmlFor="donationMethod">
                    HOW WOULD YOU LIKE TO HELP?
                  </label>
                  <select
                    id="donationMethod"
                    value={donationMethod}
                    onChange={(event) => setDonationMethod(event.target.value)}
                  >
                    <option>Money</option>
                    <option>Food & Groceries</option>
                    <option>Education</option>
                    <option>Clothing</option>
                    <option>Community Care</option>
                    <option>Volunteering</option>
                  </select>

                  {donationMethod === "Money" && (
                    <div className="av-modal-amount">
                      <span className="av-form-label">SELECTED AMOUNT</span>
                      <strong>
                        ₱
                        {selectedAmount.toLocaleString("en-PH", {
                          maximumFractionDigits: 2,
                        })}
                      </strong>
                    </div>
                  )}

                  <label className="av-form-label" htmlFor="donorMessage">
                    MESSAGE (OPTIONAL)
                  </label>
                  <textarea
                    id="donorMessage"
                    rows="3"
                    placeholder="Tell us how you would like to help..."
                    value={donorMessage}
                    onChange={(event) => setDonorMessage(event.target.value)}
                  />

                  {error && (
                    <p className="av-form-error" role="alert">
                      {error}
                    </p>
                  )}

                  <button
                    className="av-button av-button-primary av-full-button"
                    type="submit"
                  >
                    Review my inquiry <span>↗</span>
                  </button>

                  <p className="av-small-note">
                    This demo does not process payments or transmit your
                    details to a server.
                  </p>
                </form>
              </>
            ) : (
              <div className="av-success" aria-live="polite">
                <div className="av-success-icon">♡</div>
                <span className="av-eyebrow">INQUIRY PREPARED</span>
                <h2 id="av-modal-title">Thank you, {donorName}!</h2>
                <p>
                  Your sample inquiry is ready for review. You selected{" "}
                  <strong>{donationMethod}</strong>
                  {donationMethod === "Money" &&
                    ` with a proposed contribution of ₱${selectedAmount.toLocaleString("en-PH")}`}
                  .
                </p>

                <div className="av-review-card">
                  <span>CONTACT</span>
                  <strong>{donorEmail}</strong>
                  {donorMessage.trim() && (
                    <>
                      <span>YOUR MESSAGE</span>
                      <p>{donorMessage}</p>
                    </>
                  )}
                </div>

                <p className="av-small-note">
                  Nothing has been sent or paid. Connect this form to a
                  backend or verified contact process before accepting
                  actual inquiries.
                </p>

                <button
                  className="av-button av-button-primary av-full-button"
                  onClick={closeDonation}
                >
                  Done ✓
                </button>
              </div>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
