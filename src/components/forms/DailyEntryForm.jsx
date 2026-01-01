import { useState } from "react";
import "./DailyEntryForm.css";

export default function DailyEntryForm({ setEntries }) {
  const [form, setForm] = useState({
    date : "",
    sleep: "",
    water: "",
    caffeine: "",
    study: "",
    mood: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEntries(prev => [...prev, { ...form, ...Object.fromEntries(
      Object.entries(form).map(([k,v]) => [k, k === "date" ? v : Number(v)])
    )}]);
    setForm({ date:"", sleep:"", water:"", caffeine:"", study:"", mood:"" });
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>Daily Entry</h2>
      <div className="form-grid">
        {Object.keys(form).map(key => (
          <input
            key={key}
            name={key}
            value={form[key]}
            onChange={handleChange}
            placeholder={key}
            required
          />
        ))}
        <button>Add Entry</button>
      </div>
    </form>
  );
}
