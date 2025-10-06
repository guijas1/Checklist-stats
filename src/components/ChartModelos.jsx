import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { Card } from "react-bootstrap";

function ChartModelos({ data, theme }) {
  if (!data || Object.keys(data).length === 0) {
    return (
      <Card className="shadow-lg p-3 bg-dark-subtle border-0 text-center h-100">
        <p>Sem dados de modelos</p>
      </Card>
    );
  }

  const modelos = Object.entries(data).map(([name, value]) => ({ name, value }));

  return (
    <Card className="shadow-lg p-3 bg-dark-subtle border-0 h-100">
      <h5 className="text-center text-info mb-3">📦 Notebooks por Modelo</h5>
      <div className="d-flex justify-content-center">
        <BarChart
          width={500}
          height={400}
          data={modelos}
          layout="vertical"
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={150} />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill={theme === "dark" ? "#0d6efd" : "#004085"} />
        </BarChart>
      </div>
    </Card>
  );
}

export default ChartModelos;
