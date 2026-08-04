export default function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h1 style={{ fontSize: "48px" }}>Welcome to BrainBoost</h1>

      <p style={{ fontSize: "20px" }}>
        Learn Smarter, Grow Faster.
      </p>

      <button
        style={{
          padding: "12px 24px",
          marginTop: "20px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </section>
  );
}
