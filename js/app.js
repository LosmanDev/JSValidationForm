let button = document.querySelector("#button");

button.addEventListener("click", () => {
  let d = document.getElementById("myDialog");
  let o = 0.0;
  d.style.opacity = 0;
  d.style.display = "block";
  setInterval(function () {
    o += 0.01;
    d.style.opacity = o;
    d.style.top = `${o * 5}%`;
  }, 10);
});
