import { Row, Col, Card } from "react-bootstrap";
import { Laptop, Layers, MapPin, Settings } from "lucide-react";

function KpiCards({ stats }) {
  return (
    <Row className="g-3 mb-4 text-center">
      <Col md={3}>
        <Card className="shadow-lg border-0 bg-dark-subtle p-3">
          <Laptop size={26} className="text-success mb-2" />
          <h6 className="text-muted">Total Cadastrados</h6>
          <h2 className="fw-bold text-success">{stats.total}</h2>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="shadow-lg border-0 bg-dark-subtle p-3">
          <Layers size={26} className="text-info mb-2" />
          <h6 className="text-muted">Modelos Distintos</h6>
          <h2 className="fw-bold text-info">{Object.keys(stats.porModelo).length}</h2>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="shadow-lg border-0 bg-dark-subtle p-3">
          <MapPin size={26} className="text-warning mb-2" />
          <h6 className="text-muted">Localizações</h6>
          <h2 className="fw-bold text-warning">{Object.keys(stats.porLocalizacao).length}</h2>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="shadow-lg border-0 bg-dark-subtle p-3">
          <Settings size={26} className="text-primary mb-2" />
          <h6 className="text-muted">Carcaças OK</h6>
          <h2 className="fw-bold text-primary">{stats.porCarcaça.true || 0}</h2>
        </Card>
      </Col>
    </Row>
  );
}

export default KpiCards;
