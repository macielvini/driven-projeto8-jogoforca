import React from "react";
import Palavras from "./Palavras";

export default function Jogo() {

  let palavra = "";
  const [underlines, setUnderlines] = React.useState();

  function sortearPalavra() {
    palavra = Palavras().toUpperCase();

    let palavraArr = [...palavra];
    setUnderlines(palavraArr.map(() => "_"))
  }

  return (
    <div class="jogo">
      <div class="forca">
        <img src="assets/forca0.png" alt="forca" />
      </div>
      <div class="direita">
        <button class="escolher-palavra" onClick={sortearPalavra}>Escolher palavra</button>
        <p>{underlines}</p>
      </div>
    </div>
  )
}