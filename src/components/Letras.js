export default function Letras(props) {

  const { estaAtivado, letra } = props;

  return (
    <li> <button>{letra.toUpperCase()}</button></li>
  )
}