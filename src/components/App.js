import React from "react";
import Palavras from "./Palavras";

export default function App() {
  const [letrasAtivado, setLetrasAtivado] = React.useState("desativado");

  return (
    <div className="container" >
      <div>
        <Jogo setLetrasAtivado={setLetrasAtivado} />
        <div className="controles">
          <Letras status={letrasAtivado} />
          <Chute />
        </div>
      </div >
    </div>
  )
}

function Chute() {
  return (
    <div className="chutar">
      <label htmlFor="chute">Já sei palavra: </label>
      <input type="text" name="" id="chute" />
      <button>Chutar</button>
    </div>
  )
}

function Jogo(props) {

  let palavra = "";
  const [underlines, setUnderlines] = React.useState("Sorteie a primeira palavra");

  function sortearPalavra() {
    palavra = Palavras().toUpperCase();

    let palavraArr = [...palavra];
    setUnderlines(palavraArr.map(() => "_"));
    props.setLetrasAtivado("ativado");
  }

  return (
    <div className="jogo">
      <div className="forca">
        <img src="assets/forca0.png" alt="forca" />
      </div>
      <div className="direita">
        <button className="escolher-palavra" onClick={sortearPalavra}> Escolher palavra</button>
        <p>{underlines}</p>
      </div>
    </div >
  )
}

function Letras(props) {

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


  return (
    <div className="letras">
      <ul>
        {alfabeto.map((l, i) => <Letra letra={l} key={i} status={props.status} />)}
      </ul>
    </div>

  )
}


function Letra(props) {
  const { letra, status } = props;

  return (
    <li className={status}>{letra.toUpperCase()}</li>
  )
}