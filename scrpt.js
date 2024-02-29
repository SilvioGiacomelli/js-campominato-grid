const gridContainer = document.querySelector(".grid-container")
const btnStart = document.querySelector(".btn-start");


///Bottone start
btnStart.addEventListener("click", inizio)


///////////////////////////////////////////////
////////////////Ciclo 100lementi///////////////
///////////////////////////////////////////////

function inizio(){
  reset()

  for(let i = 1; i <= 100; i++){
  const square = inserisciRiquadro(i)

  gridContainer.append(square)
}
}

// Definizione della funzione inserisciRiquadro che crea un quadrato (div) con un numero associato
function inserisciRiquadro(numero){
  
  // Crea un nuovo elemento div e lo assegna alla variabile 'sq'
  const sq = document.createElement("div")

  // Imposta la classe dell'elemento a "square"
  sq.className = "square"; 

  // Imposta una proprietà personalizzata '_sqID' con il valore del 'numero' passato alla funzione
  sq._sqID = numero
  

  /////////////////////////////
  //////Funzione///Click///////
  /////////////////////////////
  
  sq.addEventListener("click", 
  
    function(){
      
      // Se l'elemento non ha la classe 'clicked', mostra il numero all'interno dell'elemento

      if (!this.classList.contains("clicked")) {
        this.innerHTML = this._sqID;
      } else {
        this.innerHTML = "";
      }
      
      this.classList.toggle("clicked");

      console.log(this._sqID)
  })
  // Restituisce l'elemento 'sq' così che possa essere aggiunto al codice
  return sq
}

///////////////////////
/////////RESET/////////
///////////////////////

function reset(){

  console.log(this)
  gridContainer.innerHTML = ""; 
}
