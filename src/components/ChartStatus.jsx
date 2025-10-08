import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
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
      ? ["#198754", "#dc3545"] // verde e vermelho (modo escuro)
      : ["#28a745", "#ff4444"]; // verde e vermelho (modo claro)

  return (
    <Card className="shadow-lg p-3 bg-dark-subtle border-0 h-100">
      <h5 className="text-center text-success mb-4">
        ⚙️ Status (Liga / Não liga)
      </h5>

      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={status}
              dataKey="value"
              nameKey="name"
              innerRadius={45}
              outerRadius={100}
              labelLine={false}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(1)}%`
              }
            >
              {status.map((entry, i) => (
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
              wrapperStyle={{
                marginTop: "20px"
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

export default ChartStatus;
