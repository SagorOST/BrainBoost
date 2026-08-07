import "../styles/CTA.css";

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta-content">
        <span>READY TO START?</span>

        <h2>
          Turn Your Curiosity
          <br />
          Into <span>Knowledge.</span>
        </h2>

        <p>
          Start practicing today and take your learning
          to the next level with BrainBoost.
        </p>

        <button className="cta-btn">
          Start Learning →
        </button>
      </div>
    </section>
  );
}