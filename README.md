# 📊 Dashboard KPI – Front-End

## 🧩 Descrição

Este projeto é o **front-end** de um sistema desenvolvido para exibir **indicadores de desempenho (KPIs)** e **status gerais** dos notebooks que retornam do processo de *rollout* de sistemas operacionais e hardware.

Ele fornece uma **interface moderna, responsiva e interativa** que apresenta os principais dados operacionais de forma visual e intuitiva, integrando-se diretamente à API do back-end (projeto **Checklist Dell / Rollout**).

---

## 🚀 Funcionalidades

- 📈 Exibição de KPIs e métricas globais do processo de rollout
- 🧠 Gráficos dinâmicos e responsivos utilizando **Recharts**
- 🎨 Interface moderna com **React Bootstrap** e **Framer Motion**
- ⚡ Atualização automática via API REST
- 🌙 Modo de tema claro/escuro (se habilitado)
- 📱 Layout totalmente responsivo

---

## 🛠️ Tecnologias Utilizadas

| Categoria                | Tecnologias                                    |
| ------------------------ | ---------------------------------------------- |
| **Front-end**      | React 19, React DOM, React Scripts             |
| **Visualização** | Recharts                                       |
| **Estilização**  | Bootstrap 5.3, React Bootstrap, Framer Motion  |
| **Ícones**        | Lucide React                                   |
| **Testes**         | Testing Library (React, Jest, DOM, User Event) |
| **Performance**    | Web Vitals                                     |

---

## ⚙️ Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Inicia o app em modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

### `npm run build`

Cria uma versão de produção do app no diretório `build/`.

### `npm test`

Executa os testes configurados.

---

## 🧱 Estrutura do Projeto

```
dashborard-kpi/
├── src/
│   ├── components/        # Componentes reutilizáveis (gráficos, cards, etc.)
│   ├── pages/             # Páginas principais do painel
│   ├── services/          # Conexão com a API backend
│   ├── assets/            # Ícones, imagens e estilos adicionais
│   └── App.js             # Componente raiz da aplicação
├── package.json           # Configurações e dependências do projeto
└── README.md              # Documentação do projeto
```

---

## 🔗 Integração com o Back-End

O front-end se conecta a uma **API REST** externa, responsável por fornecer os dados dos notebooks e status operacionais.

Para configurar o ambiente local, crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
REACT_APP_API_URL=http://localhost:8080/api
```

---

## 🧰 Instalação e Execução

1. **Clone o repositório**

   ```bash
   git clone https://github.com/guijas1/dashborard-kpi.git
   ```
2. **Acesse a pasta do projeto**

   ```bash
   cd dashborard-kpi
   ```
3. **Instale as dependências**

   ```bash
   npm install
   ```
4. **Execute o projeto**

   ```bash
   npm start
   ```

---

## 📊 Futuras Implementações

- 🔍 Filtros avançados (por localidade, modelo, patrimônio)
- 🧮 Novos tipos de gráficos e indicadores personalizados
- 👤 Autenticação de usuários (login/admin)
- 🌗 Modo escuro persistente
- 📤 Exportação de relatórios

---

## 👨‍💻 Autor

**Guijas1**
📍 *Quality Software S/A – Projeto Rollout*
🔗 [LinkedIn](https://www.linkedin.com/in/guilherme-tavares-guijas/) | [GitHub](https://github.com/guijas1)
