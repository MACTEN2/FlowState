import { useState, useEffect } from "react";
import DailyEntryForm from "../components/forms/DailyEntryForm";
import DualAxisChart from "../components/charts/DualAxisChart";
import InsightCard from "../components/insights/InsightCard";
import { useCorrelation } from "../hooks/useCorrelation";
import "./Dashboard.css";

export default function Dashboard() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("flowstate-entries"));
    if (saved) setEntries(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("flowstate-entries", JSON.stringify(entries));
  }, [entries]);

  const insights = useCorrelation(entries);

  return (
    <div className="dashboard">
      <header className="header">
        <h1>FlowState</h1>
        <p>Holistic Habit & Focus Dashboard</p>
      </header>

      <section className="top-grid">
        <DailyEntryForm setEntries={setEntries} />
        <InsightCard text={insights.caffeineInsight} />
      </section>

      <section className="chart-section">
        <DualAxisChart data={entries} />
      </section>
    </div>
  );
}
