import React from "react";
import Palavras from "./Palavras";

function print(x) {
  console.log(x);
}

export default function App() {

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const [letrasClicadas, setLetrasClicadas] = React.useState(alfabeto);

  const [underlines, setUnderlines] = React.useState("Sorteie a primeira palavra");
  const [erros, setErros] = React.useState(0);
  const [palavra, setPalavra] = React.useState("");

  function atualizarForca() {
    if (erros !== 6) setErros(erros + 1);
  }

  function mostrarPalavraNaTela(p) {
    const palavraArr = [...p];
    setUnderlines(palavraArr.map(() => "_"));
  }

  function verificarLetra(letra) {
    const palavraArr = [...palavra];
    const newPalavra = palavraArr.map((l, i) => {
      if (underlines[i] === l) return l;
      if (letra === l) return l;
      return "_";
    })

    print(newPalavra);
    setUnderlines(newPalavra);
  }

  function iniciarJogo() {
    const novaPalavra = Palavras();

    setErros(0);
    setLetrasClicadas([]);
    setPalavra(novaPalavra);
    mostrarPalavraNaTela(novaPalavra);
    print(novaPalavra);
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
          <img src={`assets/forca${erros}.png`} alt="forca" />
        </div>
        <div className="direita">
          <button className="escolher-palavra" onClick={iniciarJogo}>Escolher palavra</button>
          <p>{underlines}</p>
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
      verificarLetra(letra);
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

