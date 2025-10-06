import { Sun, Moon, MonitorSmartphone } from "lucide-react";
import { Button } from "react-bootstrap";

function Header({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div className="text-center flex-grow-1">
        <h1 className="fw-bold text-info mb-1">
          <MonitorSmartphone size={36} className="me-2 text-info" />
          Painel de Notebooks Cadastrados
        </h1>
        <p className="text-secondary mb-0">Resumo dos cadastros registrados</p>
      </div>

      <div className="ms-3">
        <Button
          variant={theme === "dark" ? "light" : "dark"}
          onClick={toggleTheme}
          className="rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "40px", height: "40px" }}
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
      </div>
    </div>
  );
}

export default Header;
