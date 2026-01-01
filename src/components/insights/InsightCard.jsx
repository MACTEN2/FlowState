import "./InsightCard.css";

export default function InsightCard({ text }) {
  if (!text) {
    return (
      <div className="insight-card">
        <h3>Flow Insight</h3>
        <p>Add a few days of data to unlock insights.</p>
      </div>
    );
  }

  return (
    <div className="insight-card">
      <h3>Flow Insight</h3>
      <p>{text}</p>
    </div>
  );
}
