// Generate a random hex color
function getRandomColor(): string {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  
  // Change background color
  function changeColor(): void {
    document.body.style.backgroundColor = getRandomColor();
  }
  
  // Hook up button click
  const button = document.getElementById("colorBtn");
  button?.addEventListener("click", changeColor);
  