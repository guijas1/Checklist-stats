import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Card } from "react-bootstrap";

function ChartCarcaca({ data, theme }) {
  const safeData = data ? Object.entries(data) : [];
  if (safeData.length === 0) {
    return (
      <Card className="shadow-lg p-3 bg-dark-subtle border-0 text-center h-100">
        <p>Sem dados de carcaça</p>
      </Card>
    );
  }

  const carcaca = safeData
    .map(([name, value]) => ({
      name: name === "true" ? "Carcaça OK" : "Carcaça Ruim",
      value
    }))
    .sort((a, b) => (a.name > b.name ? 1 : -1));

  const cores =
    theme === "dark"
      ? ["#28a745", "#dc3545"] // verde e vermelho
      : ["#198754", "#ff4444"];

  return (
    <Card className="shadow-lg p-3 bg-dark-subtle border-0 h-100">
      <h5 className="text-center text-primary mb-3">💠 Estado da Carcaça</h5>
      <div className="d-flex justify-content-center">
        <PieChart width={400} height={250}>
          <Pie
            data={carcaca}
            dataKey="value"
            nameKey="name"
            outerRadius={110}
            label
          >
            {carcaca.map((entry, i) => (
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

export default ChartCarcaca;