import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Header from "./components/Header";
import KpiCards from "./components/KpiCards";
import ChartModelos from "./components/ChartModelos";
import ChartLocalizacao from "./components/ChartLocalizacao";
import ChartStatus from "./components/ChartStatus";
import ChartCarcaca from "./components/ChartCarcaca";

function App() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:8080/api/KPI/geral");
        const data = await res.json();

        setStats({
          ...data,
          porModelo: data.porModelo || {},
          porLocalizacao: data.porLocalizacao || {},
          porStatus: data.porStatus || {},
          porCarcaça: data.porCarcaça || {}
        });
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
  }, [theme]);

  if (loading) return <p className="text-center mt-5">⏳ Carregando...</p>;
  if (!stats) return <p className="text-center mt-5">Nenhum dado encontrado.</p>;

  return (
    <Container fluid className="py-4" data-bs-theme={theme}>
      {/* Cabeçalho */}
      <Header theme={theme} setTheme={setTheme} />

      {/* KPIs resumidos */}
      <KpiCards stats={stats} />

      {/* Gráficos organizados */}
      <Row className="g-4 mt-2">
        <Col md={6}>
          <ChartModelos data={stats.porModelo} theme={theme} />
        </Col>
        <Col md={6}>
          <ChartLocalizacao data={stats.porLocalizacao} theme={theme} />
        </Col>
      </Row>

      <Row className="g-4 mt-2">
        <Col md={6}>
          <ChartStatus data={stats.porStatus} theme={theme} />
        </Col>
        <Col md={6}>
          <ChartCarcaca data={stats.porCarcaça} theme={theme} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;