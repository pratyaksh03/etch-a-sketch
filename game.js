function createGrid() {
    var gridSq = document.getElementsByClassName("box");
    while (gridSq.length > 0) {
      gridSq[0].remove();
    }
  
    const container = document.querySelector('.container');
  
    const x = parseInt(prompt('Enter number of rows/columns: '));
  
    if (x <= 100) {
      const y = 500 / x;
      for (let i = 1; i <= x; i++) {
        for (let j = 1; j <= x; j++) {
          const div = document.createElement('div');
          div.classList.add('box');
          div.style.width = `${y}px`;
          div.style.height = `${y}px`;
          container.appendChild(div);
          div.addEventListener("mouseover", fillGrid);
        }
      }
    } else {
      alert("Enter a number less than or equal to 100");
    }
  }
  
function fillGrid(event) {
    event.target.style.backgroundColor = "black";
  }
  