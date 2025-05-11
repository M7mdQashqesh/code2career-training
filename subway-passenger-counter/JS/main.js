let counter = document.getElementById("counter");
let increment = document.getElementById("increment");
let clear = document.getElementById("clear");
let cnt = 0;

increment.addEventListener("click", function () {
  counter.innerHTML = ++cnt;
});

clear.addEventListener("click", function () {
  cnt = 0;
  counter.innerHTML = cnt;
});
