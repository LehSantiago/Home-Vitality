"use client";

import React from "react";
import "./editar.css";

function EditarItem() {
  return (
    <div className="container">
      <header>
        <h1>Vitality</h1>
        <h2>Editar Item</h2>
      </header>

      <div className="corpo">
        <label htmlFor="title">Título</label>
        <input type="texto" id="grupo" name="titulo" />

        <label htmlFor="date">Data</label>
        <input type="texto" id="grupo" name="data" />
      </div>

      <div className="p-corpo">
        <p>
          Lue. In nulla posuere sollicitudin aliquam ultrices. Diam maecenas sed
          enim ut sem. Elit sed vulputate mi sit amet mauris commodo. In nisl
          nisi scelerisque eu ultrices vitae auctor eu augue. Pellentesque massa
          placerat duis ultricies lacus. Volutpat commodo sed egestas egestas
          fringilla phasellus faucibus. Eget est lorem ipsum dolor sit amet
          consectetur adipiscing elit. Et malesuada fames ac turpis egestas.
          Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.
          Cras semper auctor neque vitae tempus quam. Nibh mauris cursus mattis
          molestie a. Id diam vel quam elementum pulvinar etiam non quam lacus.
          Ut ornare lectus sit amet est placerat. Aenean et tortor at risus
          viverra adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. condimentum lacinia
        </p>
      </div>

      <div className="button-corpo">
        <button>Apagar</button>
        <button>Editar</button>
        <button>Salvar</button>
      </div>
    </div>
  );
}

export default EditarItem;
