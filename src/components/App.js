import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./Chute";

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