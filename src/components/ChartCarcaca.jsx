import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
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
      <h5 className="text-center text-primary mb-4">💠 Estado da Carcaça</h5>

      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={carcaca}
              dataKey="value"
              nameKey="name"
              innerRadius={45}
              outerRadius={100}
              labelLine={false}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(1)}%`
              }
            >
              {carcaca.map((entry, i) => (
                <Cell key={i} fill={cores[i % cores.length]} />
              ))}
            </Pie>

            <Tooltip
              formatter={(value) => [value, "Qtd."]}
              contentStyle={{
                backgroundColor: theme === "dark" ? "#212529" : "#f8f9fa",
                border: "none",
                borderRadius: "8px",
                color: theme === "dark" ? "#fff" : "#000"
              }}
            />

            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              wrapperStyle={{ marginTop: "20px" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export default ChartCarcaca;
