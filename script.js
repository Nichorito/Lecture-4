document.getElementById("submitButton").addEventListener("click", function () {
    const numberInput = document.getElementById("number").value;
  
    if (parseInt(numberInput, 10) === 42) {
      alert("YOU WON!  CONGRATULATIONS");
      window.open("https://www.instagram.com/nichorito/", "_blank");
    } else {
      alert("Sorry you lost the game");
      window.open("https://pornhub.com", "_blank");
    }
  });