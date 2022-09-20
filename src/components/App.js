import React from "react";
import Palavras from "./Palavras";

export default function App() {

  return (
    <div class="container" >
      <div>
        <Jogo />
        <div class="controles">
          <Letras />
          <Chute />
        </div>
      </div >
    </div>
  )
}
function Chute() {
  return (
    <div class="chutar">
      <label for="chute">Já sei palavra: </label>
      <input type="text" name="" id="chute" />
      <button>Chutar</button>
    </div>
  )
}

function Jogo() {

  let palavra = "";
  const [underlines, setUnderlines] = React.useState("Sorteie a primeira palavra");

  function sortearPalavra() {
    palavra = Palavras().toUpperCase();

    let palavraArr = [...palavra];
    setUnderlines(palavraArr.map(() => "_"));
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

function Letras() {

  return (
    <div class="letras">
      <ul>
        {alfabeto.map((l) => <Letra letra={l} />)}
      </ul>
    </div>

  )
}

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function Letra(props = "") {
  const { estaAtivado, letra } = props;

  return (
    <li> <button className={estaAtivado}>{letra.toUpperCase()}</button></li>
  )
}