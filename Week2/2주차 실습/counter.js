let count = 0;

function increase() {
  count++;
  document.getElementById("counter").innerText = count;
  document.getElementById("maruImage").src = "maru1.png";
}

function decrease() {
  count--;
  document.getElementById("counter").innerText = count;
  document.getElementById("maruImage").src = "maru2.png";
}

function reset() {
  count = 0;
  document.getElementById("counter").innerText = count;
  document.getElementById("maruImage").src = "maru3.png";
}
