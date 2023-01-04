const pomodoroBtn = document.getElementById("pomodoro");
const pausaBtn = document.getElementById("pausa");
const botao = document.getElementById('botao')
const progresso = document.querySelector('.progresso')
const controlador = {
  pomodoroTimer: true,
  pomodoro: 25,
  pausa: 5,
  segundos: "00"
}

window.onload = () => {
  document.getElementById('min').innerHTML = controlador.pomodoro
  document.getElementById('sec').innerHTML = controlador.segundos
  pomodoroBtn.classList.add("ativado")
}

function comecar(){
  progressBar()
  configbtn.style.display = 'none'

  if(botao.innerHTML == 'Reiniciar!'){
    location.reload()
  }
  botao.innerHTML = 'Reiniciar!'
  controlador.segundos = 59
  let pomoMin = controlador.pomodoro - 1
 
  var contador = () =>{
  document.getElementById('min').innerHTML = pomoMin
  document.getElementById('sec').innerHTML = controlador.segundos
  controlador.segundos = controlador.segundos - 1

  if(controlador.pomodoroTimer == true && controlador.segundos === -1){
    pomoMin = pomoMin -1
    if(pomoMin == -1){
        controlador.pomodoroTimer = false
        pomodoroBtn.classList.remove('ativado')
        pausaBtn.classList.add('ativado')
        pomoMin = controlador.pausa -1
    }
    controlador.segundos = 59
  }

  if(controlador.pomodoroTimer == false && controlador.segundos === -1){
    pomoMin = pomoMin -1
    if(pomoMin == -1){
        controlador.pomodoroTimer = true
        pomodoroBtn.classList.add('ativado')
        pausaBtn.classList.remove('ativado')
        pomoMin = controlador.pomodoro -1
    }
    controlador.segundos = 59
  }
}
setInterval(contador,1000)

}

function progressBar(){
    let pomodoroSecs = controlador.pomodoro * 60
    let pomomili = pomodoroSecs * 1000
    let interval = pomomili/100
    var i = 0;
      if (i == 0) {
        i = 1;
        var width = 1;
        var id = setInterval(frame, interval);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            width = 1
            progressBarPause()
            i = 0;
          } else {
            width++;
            progresso.style.width = width + "%";
          }
        }
      }

      let progressBarPause = () =>{
        let pomodoroSecs = controlador.pausa * 60
        let pomomili = pomodoroSecs * 1000
        let interval = pomomili/100
        var i = 0;
          if (i == 0) {
            i = 1;
            var width = 1;
            var id = setInterval(frame, interval);
            function frame() {
              if (width >= 100) {
                clearInterval(id);
                width = 1
                progressBar()
                i = 0;
              } else {
                width++;
                progresso.style.width = width + "%";
              }
            }
          }
      }
}

const configbtn = document.getElementById('configbtn')
const inputacao = document.getElementById('inputAcao')
const inputpausa = document.getElementById('inputPausa')
const box = document.querySelector('.box')
const boxconfig = document.querySelector('.box-config')


function mostrarConfig(){
    box.style.display = 'none'
    boxconfig.style.display = 'block'
}

function voltar(){
    var mudarPomo = Number(inputacao.value)
    var mudarPausa = Number(inputpausa.value)
    if(mudarPomo == 0 || mudarPausa == 0){
      mudarPomo = 25
      mudarPausa = 5
      alert('Não é permitido campos vazios!')
    }
    controlador.pomodoro = mudarPomo
    controlador.pausa = mudarPausa
    document.getElementById('min').innerHTML = controlador.pomodoro
    document.getElementById('sec').innerHTML = controlador.segundos
    box.style.display = 'block'
    boxconfig.style.display = 'none'
}

