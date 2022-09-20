import Jogo from "./Jogo";
import Letras from "./Letras";

export default function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  return (
    <div class="container" >
      <div>

        <Jogo />

        <div class="controles">

          <div class="letras">
            <ul>
              {alfabeto.map((l) => <Letras letra={l} />)}
            </ul>
          </div>

          <div class="chutar">
            <label for="chute">Já sei palavra: </label>
            <input type="text" name="" id="chute" />
            <button>Chutar</button>
          </div>

        </div>
      </div >
    </div>
  )
}