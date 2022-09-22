import React from "react";
import Palavras from "./Palavras";

export default function App() {

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const [letrasClicadas, setLetrasClicadas] = React.useState(alfabeto);
  let palavra = "";
  const [resposta, setResposta] = React.useState("Sorteie a primeira palavra");
  const [erros, setErros] = React.useState(0);

  function atualizarForca() {
    if (erros !== 6) setErros(erros + 1);
  }

  function verificarPalavra(palavra) {
    setResposta([...palavra].map(() => "_"));
  }

  function iniciarJogo() {
    setErros(0);
    setLetrasClicadas([]);
    verificarPalavra(Palavras());
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

  function Jogo() {
    return (
      <div className="jogo">
        <div className="forca">
          <img src={`assets/forca${erros}.png`} alt="forca" onClick={iniciarJogo} />
        </div>
        <div className="direita">
          <button className="escolher-palavra" onClick={iniciarJogo}>Escolher palavra</button>
          <p>{resposta}</p>
        </div>
      </div >
    )
  }

  function Alfabeto() {

    return (
      <div className="letras">
        <ul>
          {alfabeto.map((l, i, arr) => <Letra letra={l} key={i} arr={arr} />)}
        </ul>
      </div>

    )
  }

  function Letra(props) {

    const { letra, index } = props;

    function desativar() {
      setLetrasClicadas([...letrasClicadas, letra]);
    }

    return (
      <li key={index} className={letrasClicadas.includes(letra) ? "desativado" : ""} onClick={desativar}>{letra.toUpperCase()}</li>
    )
  }

  return (
    <div className="container" >
      <div>
        <Jogo />
        <div className="controles">
          <Alfabeto />
          <Chute />
        </div>
      </div >
    </div>
  )
}

