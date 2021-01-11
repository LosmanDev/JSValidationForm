let button = document.querySelector("#button");
let clearBg1 = document.querySelector("#hide-after1");
let clearBg2 = document.querySelector("#hide-after2");

button.addEventListener("click", () => {
  let d = document.getElementById("myDialog");
  let o = 0.0;
  d.style.opacity = 0;
  d.style.display = "block";
  setInterval(function () {
    o += 0.01;
    d.style.opacity = o;
    d.style.top = o;
  }, 10);

  clearBg1.classList.add("hide");
  clearBg2.classList.add("hide");
});
