function myfunc() {
  var rand1 = Math.random() * 6 + 1;
  rand1 = Math.floor(rand1);
  console.log(rand1);
  if (rand1 == 1) {
    document.getElementById("img1").setAttribute("src", "images/dice1.png");
  }
  if (rand1 == 2) {
    document.getElementById("img1").setAttribute("src", "images/dice2.png");
  }
  if (rand1 == 3) {
    document.getElementById("img1").setAttribute("src", "images/dice3.png");
  }
  if (rand1 == 4) {
    document.getElementById("img1").setAttribute("src", "images/dice4.png");
  }
  if (rand1 == 5) {
    document.getElementById("img1").setAttribute("src", "images/dice5.png");
  }
  if (rand1 == 6) {
    document.getElementById("img1").setAttribute("src", "images/dice6.png");
  }

  var rand2 = Math.random() * 6 + 1;
  rand2 = Math.floor(rand2);
  console.log(rand2);
  if (rand2 == 1) {
    document.getElementById("img2").setAttribute("src", "images/dice1.png");
  }
  if (rand2 == 2) {
    document.getElementById("img2").setAttribute("src", "images/dice2.png");
  }
  if (rand2 == 3) {
    document.getElementById("img2").setAttribute("src", "images/dice3.png");
  }
  if (rand2 == 4) {
    document.getElementById("img2").setAttribute("src", "images/dice4.png");
  }
  if (rand2 == 5) {
    document.getElementById("img2").setAttribute("src", "images/dice5.png");
  }
  if (rand2 == 6) {
    document.getElementById("img2").setAttribute("src", "images/dice6.png");
  }

  if (rand1 > rand2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
  }
  if (rand1 < rand2) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
  }
  if (rand1 == rand2) {
    document.querySelector("h1").innerHTML = "Draw";
  }

  // setTimeout(myfunc(), 5000);
}
