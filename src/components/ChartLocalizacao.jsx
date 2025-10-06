import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Card } from "react-bootstrap";

function ChartLocalizacao({ data, theme }) {
  const safeData = data ? Object.entries(data) : [];
  if (safeData.length === 0) {
    return (
      <Card className="shadow-lg p-3 bg-dark-subtle border-0 text-center h-100">
        <p>Sem dados de localização</p>
      </Card>
    );
  }

  const localizacao = safeData.map(([name, value]) => ({
    name: name || "Não informado",
    value
  }));

  const cores =
    theme === "dark"
      ? ["#20c997", "#6610f2", "#fd7e14", "#0dcaf0"]
      : ["#198754", "#6f42c1", "#ff922b", "#087990"];

  return (
    <Card className="shadow-lg p-3 bg-dark-subtle border-0 h-100">
      <h5 className="text-center text-warning mb-3">📍 Localização dos Equipamentos</h5>
      <div className="d-flex justify-content-center">
        <PieChart width={400} height={250}>
          <Pie
            data={localizacao}
            dataKey="value"
            nameKey="name"
            outerRadius={110}
            label
          >
            {localizacao.map((entry, i) => (
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

export default ChartLocalizacao;
