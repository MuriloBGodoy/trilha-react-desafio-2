# Desafio 02 - GitHub Wiki / Repositórios com React

Projeto desenvolvido como parte da **Formação React Developer** na plataforma da **Digital Innovation One (DIO)**.

Nesta aplicação os usuários podem pesquisar repositórios públicos do GitHub através da API oficial (`api.github.com`), adicioná-los dinamicamente a uma lista interativa, visualizar detalhes e links diretos e remover repositórios da listagem.

---

## 🚀 Funcionalidades

- **Busca de Repositórios:**
  - Consulta assíncrona consumindo a API oficial do GitHub via **Axios**.
  - Suporta entrada no formato `usuario/repositorio` ou link completo do GitHub (`https://github.com/usuario/repositorio`).
  - Suporte a tecla **Enter** para busca rápida.
  - Indicador de carregamento (`Buscando...`) durante a requisição.
- **Validações e Tratamento de Erros:**
  - Validação de entrada vazia.
  - Prevenção de repositórios duplicados na lista.
  - Tratamento de exceções e alertas amigáveis caso o repositório não seja encontrado (HTTP 404).
- **Gerenciamento da Listagem:**
  - Exibição de título, caminho completo, descrição do repositório e link externo com abertura em nova aba (`target="_blank"`).
  - Remoção de repositórios individuais da lista utilizando o método imutável `.filter()`.
- **Testes Automatizados:** Testes unitários com `@testing-library/react` cobrindo renderização, busca com mock de API e remoção de itens.

---

## 🛠️ Tecnologias Utilizadas

- **React 18**
- **JavaScript (ES6+)**
- **Axios** (cliente HTTP)
- **Styled-Components** (CSS-in-JS)
- **Testing Library / Jest**
- **GitHub REST API**

---

## 📂 Estrutura do Projeto

```
trilha-react-desafio-2/
├── public/                 # HTML e ícones estáticos
├── src/
│   ├── assets/             # Logo do GitHub
│   ├── components/
│   │   ├── Button/         # Botão reutilizável com estados
│   │   ├── Input/          # Campo de texto customizado
│   │   └── ItemRepo/       # Card/item de cada repositório listado
│   ├── pages/
│   │   ├── App.js          # Lógica principal, estados e integração com a API
│   │   ├── App.test.js     # Testes automatizados com mocks
│   │   └── styles.js       # Estilos da página principal
│   ├── services/
│   │   └── api.js          # Instância configurada do Axios
│   ├── index.js            # Ponto de entrada do React DOM
│   └── styles.js           # Estilos globais (reset CSS)
├── package.json
└── README.md
```

---

## ⚙️ Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 16+)
- npm ou yarn

### 1. Clonar o repositório
```bash
git clone https://github.com/MuriloBGodoy/trilha-react-desafio-2.git
cd trilha-react-desafio-2
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Iniciar a aplicação
```bash
npm start
```
Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 🧪 Como Rodar os Testes

```bash
npm test -- --watchAll=false
```

Resultado:
```text
PASS src/pages/App.test.js
  ✓ renderiza o input e o botao de busca
  ✓ busca e exibe repositorio na lista
  ✓ remove repositorio da lista ao clicar em Remover

Tests: 3 passed, 3 total
```
