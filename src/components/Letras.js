export default function Letras() {

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  function Letra(props) {
    const { estaAtivado, letra } = props;

    return (
      <li> <button>{letra.toUpperCase()}</button></li>
    )
  }

  return (
    <div class="letras">
      <ul>
        {alfabeto.map((l) => <Letra letra={l} />)}
      </ul>
    </div>

  )
}