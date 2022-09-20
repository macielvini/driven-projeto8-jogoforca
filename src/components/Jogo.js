import React from "react";
import Palavras from "./Palavras";

export default function Jogo() {

  const [palavra, setPalavra] = React.useState("teste");

  function sortearPalavra() {
    setPalavra(Palavras().toUpperCase());
  }

  return (
    <div class="jogo">
      <div class="forca">
        <img src="assets/forca0.png" alt="forca" />
      </div>
      <div class="direita">
        <button class="escolher-palavra" onClick={sortearPalavra}>Escolher palavra</button>
        <p>{palavra}</p>
      </div>
    </div>
  )
}