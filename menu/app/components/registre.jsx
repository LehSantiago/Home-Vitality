"use client";

import React, { useState } from "react";
import "./registre.css";

function Registrar() {
  const [titulo, setTitulo] = useState("");
  const [texto, setData] = useState("");
  const [sintomas, setSintomas] = useState("");

  const limparCampo = () => {
    setTitulo("");
    setData("");
    setSintomas("");
  };

  const itensSalvos = () => {};

  const gerarRelatorio = () => {
    alert("Funcionalidade ainda não implementada.");
  };

  return (
    <>
      <header>
        <h1>Vitality</h1>
        <h2>Registrar Sintomas</h2>
      </header>
      <div className="corpo">
        <label htmlFor="titulo">Título</label>
        <input
          type="text"
          id="grupo"
          name="titulo"
          value={titulo}
          onChange={() => setTitulo}
          required
        />
        <label htmlFor="text">Data</label>
        <input
          type="text"
          id="grupo"
          name="texto"
          value={texto}
          onChange={() => setData}
          required
        />
        <label htmlFor="sintomas">O que está sentindo?</label>
        <textarea
          id="sintomas"
          name="sintomas"
          value={sintomas}
          onChange={() => setSintomas}
          required
        />
        <div className="botao">
          <button type="button" className="branco" onClick={limparCampo}>
            Limpar Tudo
          </button>
          <button type="submit" className="branco">
            Salvar
          </button>
        </div>
        <button onClick={itensSalvos}>Ver Itens Salvos</button>
        <button onClick={gerarRelatorio}>Gerar Relatório</button>
      </div>
      <footer>
        <img src="" alt="Image 1" className="img1" />
        <img src="" alt="Image 2" className="img2" />
        <img src="" alt="Image 3" className="img3" />
        <img src="" alt="Image 4" className="img4" />
      </footer>
    </>
  );
}

export default Registrar;
