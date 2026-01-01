import { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

// Format date like "Jan 12"
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  });
}

export default function DualAxisChart({ data }) {
  const [showStudy, setShowStudy] = useState(true);
  const [showCaffeine, setShowCaffeine] = useState(true);

  if (!data || data.length === 0) {
    return (
      <div style={{ textAlign: "center", color: "#94a3b8" }}>
        Add entries to see your trends.
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ marginBottom: "0.75rem" }}>
        Study Duration vs Caffeine Intake
      </h2>

      {/* Toggles */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "1rem",
          fontSize: "0.9rem",
          color: "#94a3b8"
        }}
      >
        <label>
          <input
            type="checkbox"
            checked={showStudy}
            onChange={() => setShowStudy(!showStudy)}
          />{" "}
          Study Hours
        </label>

        <label>
          <input
            type="checkbox"
            checked={showCaffeine}
            onChange={() => setShowCaffeine(!showCaffeine)}
          />{" "}
          Caffeine (mg)
        </label>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 10, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#1e293b"
          />

          {/* X Axis */}
          <XAxis
            dataKey="date"
            tickFormatter={formatDate}
            stroke="#94a3b8"
            tick={{ fontSize: 12 }}
          />

          {/* Study Axis */}
          {showStudy && (
            <YAxis
              yAxisId="left"
              stroke="#4ade80"
              tick={{ fontSize: 12 }}
              label={{
                value: "Study (hrs)",
                angle: -90,
                position: "insideLeft",
                fill: "#4ade80"
              }}
            />
          )}

          {/* Caffeine Axis */}
          {showCaffeine && (
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#facc15"
              tick={{ fontSize: 12 }}
              label={{
                value: "Caffeine (mg)",
                angle: 90,
                position: "insideRight",
                fill: "#facc15"
              }}
            />
          )}

          <Tooltip
            contentStyle={{
              backgroundColor: "#020617",
              border: "1px solid #1e293b",
              borderRadius: "8px"
            }}
            labelStyle={{ color: "#38bdf8" }}
          />

          {/* Study Line */}
          {showStudy && (
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="study"
              stroke="#4ade80"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
              animationDuration={600}
              name="Study Hours"
            />
          )}

          {/* Caffeine Line */}
          {showCaffeine && (
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="caffeine"
              stroke="#facc15"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
              animationDuration={600}
              name="Caffeine (mg)"
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}