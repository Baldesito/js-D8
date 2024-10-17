document.addEventListener("DOMContentLoaded", () => {
  const boardContainer = document.getElementById("boardContainer");
  const drawNumberBtn = document.getElementById("drawNumberBtn");
  const drawnNumbers = new Set();

  // Creazione delle celle numerate da 1 a 76
  for (let i = 1; i <= 76; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.textContent = i;
    cell.id = `cell-${i}`;
    boardContainer.appendChild(cell);
  }

  // Funzione per generare un numero random da 1 a 76
  const drawNumber = () => {
    let number;
    do {
      number = Math.floor(Math.random() * 76) + 1;
    } while (drawnNumbers.has(number)); // Assicurarsi che il numero non sia già stato estratto

    drawnNumbers.add(number);
    document.getElementById(`cell-${number}`).classList.add("highlighted");
  };

  // Aggiungere l'evento click al bottone
  drawNumberBtn.addEventListener("click", drawNumber);
});
