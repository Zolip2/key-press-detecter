var  timer

document.addEventListener('keydown', (event) => {
  if (event.key == 'Enter') {
    $("#iras").html("Szép volt")
    timedText()
  }
});

function timedText() {
  setTimeout(myTimeout1, 5000) 
  setTimeout(myTimeout2, 10000) 
  setTimeout(myTimeout3, 15000) 
}
function myTimeout1() {
  document.getElementById("timer").innerHTML = "Öt másodperc telt el";
}
function myTimeout2() {
  document.getElementById("timer").innerHTML = "Tíz másodperc telt el";
}
function myTimeout3() {
  document.getElementById("timer").innerHTML = "15 másodperc telt el";
}