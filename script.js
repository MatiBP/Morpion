let round = true;
let gameIsEnd = false;


function createCross(){
    const cross = document.createElement("span");
    cross.textContent = "X";
    cross.classList.add("cross");
    return cross;
}

function createcircle(){
    const circle = document.createElement("span");
    circle.textContent = "O";
    circle.classList.add("circle");
    return circle;
}

const cells = document.querySelectorAll('.cell');
for (const cell of cells) {
    cell.addEventListener('click', function() {
        if(checkFull()){
            gameIsEnd = true;
            document.querySelector("#endGameStatus").innerHTML = "Match NUL !";
            document.querySelector("h1").innerHTML = "Partie fini!";
            }
        if(!gameIsEnd && !cell.childNodes.length){
            if(round){
                const cross = createCross();
                cell.appendChild(cross);
                document.querySelector("h1").innerHTML = "Le Joueur 1 à toi !";
                if(verifWin("X")){
                    document.querySelector("#endGameStatus").innerHTML = "Joueur 1 a gagné!";
                    document.querySelector("h1").innerHTML = "Partie fini!";
                    gameIsEnd = true;
                }else{
                round = false
                }
            }else if(!round){
                const circle = createcircle();
                cell.appendChild(circle);
                document.querySelector("h1").innerHTML = "Le Joueur 2 à toi !";
                if(verifWin("O")){
                    document.querySelector("#endGameStatus").innerHTML = "Joueur 2 a gagné!";
                    document.querySelector("h1").innerHTML = "Partie fini!";
                    gameIsEnd = true;
                }else{
                round = true;
                }
            }
        }
        
    });

}

function verifWin(symbol) {
    // rows
    for (let i = 0; i <= 6; i = i + 3) {
      if (
        cells[i].textContent === symbol &&
        cells[i + 1].textContent === symbol &&
        cells[i + 2].textContent === symbol
      ) {
        return true;
      }
    }
  
    // columns
    for (let i = 0; i <= 2; i++) {
      if (
        cells[i].textContent === symbol &&
        cells[i + 3].textContent === symbol &&
        cells[i + 6].textContent === symbol
      ) {
        return true;
      }
    }
  
    // diagonals
    if (
      cells[0].textContent === symbol &&
      cells[4].textContent === symbol &&
      cells[8].textContent === symbol
    ) {
      return true;
    }
  
    if (
      cells[2].textContent === symbol &&
      cells[4].textContent === symbol &&
      cells[6].textContent === symbol
    ) {
      return true;
    }
  
    return false;
  }

  function checkFull(){
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent === '') {
          return false;
        }
      }
      return true;
    }

    function reloadGame(){
        window.location.reload();
    }