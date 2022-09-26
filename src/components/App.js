import React from "react";
import Palavras from "./Palavras";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";

function print(x) {
  console.log(x);
}

export default function App() {
  const alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const [letrasClicadas, setLetrasClicadas] = React.useState(alfabeto);

  const [underlines, setUnderlines] = React.useState("Comece o jogo");
  const [erros, setErros] = React.useState(0);
  const [palavra, setPalavra] = React.useState("");
  const [resultado, setResultado] = React.useState("");
  const [botao, setBotao] = React.useState("Começar");
  const [status, setStatus] = React.useState(false);

  function removerAcento(l) {
    return l.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function atualizarForca() {
    if (erros < 6) setErros(erros + 1);
    if (erros + 1 === 6) finalizarJogo("errou");
  }

  function finalizarJogo(resultado) {
    setResultado(resultado);
    setUnderlines(palavra);
    setLetrasClicadas(alfabeto);
    setBotao("Começar");
    setStatus(false);
    if (resultado === "errou") {
      setErros(6);
    }
  }

  function mostrarPalavraNaTela(p) {
    const palavraArr = [...p];
    setUnderlines(palavraArr.map(() => "_"));
  }

  function verificarLetra(letraClicada) {
    const palavraArr = [...palavra];

    if (removerAcento(palavra).includes(letraClicada) === false) {
      atualizarForca();
      return;
    }

    const newPalavra = palavraArr.map((l, i) => {
      if (underlines[i] === l) return l;
      if (letraClicada === removerAcento(l)) return l;
      return "_";
    });

    if (newPalavra.toString().replaceAll(",", "") === palavra) {
      finalizarJogo("acertou");
    }

    setUnderlines(newPalavra);
  }

  function iniciarJogo() {
    const novaPalavra = Palavras();

    setErros(0);
    setLetrasClicadas([]);
    setPalavra(novaPalavra);
    mostrarPalavraNaTela(novaPalavra);
    setResultado("");
    setBotao("Mudar palavra");
    setStatus(true);
    print(novaPalavra);
  }

  function Letra(props) {
    const { letra, index } = props;

    function desativar() {
      setLetrasClicadas([...letrasClicadas, letra]);
      verificarLetra(letra);
    }

    const Key = styled(Button)`
      width: 30px;
      height: 30px;
    `;

    return (
      <Key
        isActive={!letrasClicadas.includes(letra)}
        data-identifier="letter"
        key={index}
        onClick={desativar}
      >
        {letra.toUpperCase()}
      </Key>
    );
  }

  function Jogo() {
    const GameScreenWrapper = styled(Wrapper)`
      justify-content: space-between;
      height: 500px;
      width: 100%;

      img {
        height: 100%;
      }
    `;

    const UnderlinesWrapper = styled(Wrapper)`
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
      height: 100%;

      p {
        color: #1b1b1b;
        font-size: 30px;
        letter-spacing: 4px;
      }

      .errou {
        color: #ff5883;
        font-weight: 700;
      }

      .acertou {
        color: #39b89a;
        font-weight: 700;
        height: 500px;
      }
    `;

    const StartButton = styled.div`
      width: min-content;
      background-color: #39b89a;

      color: #fff;
      font-weight: 700;
      font-size: 20px;
      text-align: center;

      padding: 15px;
      border-radius: 8px;
      outline: none;
      cursor: pointer;

      transition: all 200ms ease;

      &:active {
        background-color: #2f927b;
      }
    `;

    return (
      <GameScreenWrapper>
        <img
          data-identifier="game-image"
          src={`assets/forca${erros}.png`}
          alt="forca"
        />
        <UnderlinesWrapper>
          <StartButton onClick={iniciarJogo} data-identifier="choose-word">
            {botao}
          </StartButton>
          <p className={resultado} data-identifier="word">
            {underlines}
          </p>
        </UnderlinesWrapper>
      </GameScreenWrapper>
    );
  }

  function Alfabeto() {
    const Keyboard = styled.ul`
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(13, auto);
    `;
    return (
      // <UserControlsWrapper>
      <Keyboard>
        {alfabeto.map((l, i, arr) => (
          <Letra letra={l} key={i} arr={arr} />
        ))}
      </Keyboard>
      /* </UserControlsWrapper> */
    );
  }

  function Chute() {
    const [inputChute, setInputChute] = React.useState("");

    function chutarPalavra() {
      if (removerAcento(inputChute) === removerAcento(palavra)) {
        finalizarJogo("acertou");
      } else {
        finalizarJogo("errou");
      }
      setInputChute("");
    }

    const GuessWrapper = styled(Wrapper)`
      gap: 20px;
    `;

    const GuessButton = styled(Button)`
      width: 80px;
      height: 30px;
      border-radius: 5px;
      transform: ${(props) => (props.isActive ? "translateY(-5px)" : "none")};
      box-shadow: ${(props) =>
        props.isActive ? `0 5px ${colors.primary}` : "none"};
      transition: all 200ms ease;

      &:active {
        transform: translateY(2px);
        box-shadow: 0 0px #39b89a;
      }
    `;

    const GuessInput = styled.input`
      outline: 1px solid
        ${(props) => (props.isActive ? colors.primary : colors.bgDisabled)};
      border-radius: 5px;
      padding: 10px;
      min-width: 50%;
    `;

    const InputLabel = styled.label`
      font-weight: 700;
      color: ${(props) =>
        props.isActive ? colors.primary : colors.bgDisabled};
    `;

    return (
      <GuessWrapper>
        <InputLabel isActive={status} htmlFor="chute">
          Já sei a palavra:
        </InputLabel>
        <GuessInput
          isActive={status}
          data-identifier="type-guess"
          id="chute"
          type="text"
          value={inputChute}
          onChange={(e) => setInputChute(e.target.value)}
        />
        <GuessButton
          isActive={status}
          // className={status}
          data-identifier="guess-Button"
          onClick={chutarPalavra}
        >
          Chutar
        </GuessButton>
      </GuessWrapper>
    );
  }

  const Container = styled(Wrapper)`
    flex-direction: column;
    margin: 30px auto;
    width: 800px;
  `;

  return (
    <>
      <GlobalStyle />
      <Container>
        <Jogo />
        <UserControlsWrapper>
          <Alfabeto />
          <Chute />
        </UserControlsWrapper>
      </Container>
    </>
  );
}

const colors = {
  primary: "#39b89a",
  secondary: "#b9eee1",
  bgDisabled: "gray",
  fcDisabled: "white",
};

const Button = styled.div`
  line-height: 30px;
  color: ${(props) => (props.isActive ? colors.primary : colors.fcDisabled)};
  font-weight: 700;

  text-align: center;

  background-color: ${(props) =>
    props.isActive ? colors.secondary : colors.bgDisabled};
  border-radius: 5px;
  outline: 1px solid ${(props) => (props.isActive ? colors.primary : "#000")};
  opacity: ${(props) => (props.isActive ? 1 : 0.7)};

  cursor: pointer;
  pointer-events: ${(props) => (props.isActive ? "all" : "none")};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const UserControlsWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 50px;
  margin: 50px 0;
`;
