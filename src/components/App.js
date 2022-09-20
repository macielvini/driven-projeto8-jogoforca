export default function App() {
  return (
    <div class="container" >
      <div>

        <div class="topo">
          <div class="forca">
            <img src="assets/forca0.png" alt="forca" />
          </div>
          <div class="direita">
            <button class="escolher-palavra">Escolher palavra</button>
            <p>______________</p>
          </div>
        </div>

        <div class="controles">

          <div class="letras">
            <ul>
              <li> <button>A</button></li>
              <li> <button>B</button></li>
              <li><button disabled="disabled">C</button></li>

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