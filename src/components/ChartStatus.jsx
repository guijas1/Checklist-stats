import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Card } from "react-bootstrap";

function ChartStatus({ data, theme }) {
  const safeData = data ? Object.entries(data) : [];
  if (safeData.length === 0) {
    return (
      <Card className="shadow-lg p-3 bg-dark-subtle border-0 text-center h-100">
        <p>Sem dados de status</p>
      </Card>
    );
  }

  const status = safeData.map(([name, value]) => ({
    name: name === "true" ? "Liga" : "Não liga",
    value
  }));

  const cores =
    theme === "dark"
      ? ["#198754", "#dc3545"]
      : ["#28a745", "#ff4444"];

  return (
    <Card className="shadow-lg p-3 bg-dark-subtle border-0 h-100">
      <h5 className="text-center text-success mb-3">⚙️ Status (Liga / Não liga)</h5>
      <div className="d-flex justify-content-center">
        <PieChart width={400} height={250}>
          <Pie
            data={status}
            dataKey="value"
            nameKey="name"
            outerRadius={110}
            label
          >
            {status.map((entry, i) => (
              <Cell key={i} fill={cores[i % cores.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" align="center" />
        </PieChart>
      </div>
    </Card>
  );
}

export default ChartStatus;
