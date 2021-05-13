import React, { useState } from "react";
import "./App.css";
import { InputText } from "./componentes/InputText";
import { TableReact } from "./componentes/TableReact";

function App() {
  const [lista, setLista] = useState([]);

  const addTabela = () => {
    const llist = [
      ...lista,
      {
        id: lista.length,
        nome: document.getElementById("nome").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("email").value
      }
    ];

    setLista(llist);
  };

  const limpar = () => {
    setLista([]);
  };

  return (
    <div className="App">
      <header className="App-header">
        Tabela em React
        <div>
          <InputText label="Nome" id="nome" key="nome" />
        </div>
        <div>
          <InputText label="Telefone" id="telefone" key="telefone" />
        </div>
        <div>
          <InputText label="E-mail" email="email" key="email" id="email" />
        </div>
        <button id="add" onClick={addTabela}>
          Adicionar
        </button>
        <button id="add" onClick={limpar}>
          Limpar
        </button>
      </header>
      <body>
        <p>
          <TableReact lista={lista} />
        </p>
      </body>
      <footer>
        Aluno: Sadu Toledo de Souza - Curso: DFS - Disciplina: REA - Professor:
        Raphael Gomide
      </footer>
    </div>
  );
}

export default App;
