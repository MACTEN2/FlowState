import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

/**
 * DualAxisChart
 * Left Y-axis  -> Study Hours
 * Right Y-axis -> Caffeine (mg)
 * X-axis       -> Date
 */
export default function DualAxisChart({ data }) {
  if (!data || data.length === 0) {
    return (
      <div style={{ textAlign: "center", color: "#94a3b8" }}>
        Add entries to see your trends.
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>
        Study Duration vs Caffeine Intake
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 10, bottom: 5 }}
        >
          {/* Grid */}
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#1e293b"
          />

          {/* X Axis */}
          <XAxis
            dataKey="date"
            stroke="#94a3b8"
            tick={{ fontSize: 12 }}
          />

          {/* Left Y Axis (Study Hours) */}
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

          {/* Right Y Axis (Caffeine) */}
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

          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              backgroundColor: "#020617",
              border: "1px solid #1e293b",
              borderRadius: "8px",
              color: "#e5e7eb"
            }}
            labelStyle={{ color: "#38bdf8" }}
          />

          {/* Lines */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="study"
            stroke="#4ade80"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
            name="Study Hours"
          />

          <Line
            yAxisId="right"
            type="monotone"
            dataKey="caffeine"
            stroke="#facc15"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
            name="Caffeine (mg)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
