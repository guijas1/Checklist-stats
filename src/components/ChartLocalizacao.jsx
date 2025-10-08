import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
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
      ? ["#20c997", "#6610f2", "#fd7e14", "#0dcaf0", "#ffc107", "#6c757d"]
      : ["#198754", "#6f42c1", "#ff922b", "#087990", "#e67700", "#495057"];

  return (
    <Card className="shadow-lg p-3 bg-dark-subtle border-0 h-100">
      <h5 className="text-center text-warning mb-4">
        📍 Localização dos Equipamentos
      </h5>
      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={localizacao}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              innerRadius={45}
              labelLine={false}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(1)}%`
              }
            >
              {localizacao.map((entry, i) => (
                <Cell key={i} fill={cores[i % cores.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => [value, "Qtd."]}
              contentStyle={{
                backgroundColor:
                  theme === "dark" ? "#212529" : "#f8f9fa",
                border: "none",
                borderRadius: "8px"
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

export default ChartLocalizacao;