let button = document.querySelector("#button");
let clearBg1 = document.querySelector("#hide-after1");
let clearBg2 = document.querySelector("#hide-after2");

button.addEventListener("click", () => {
  let d = document.getElementById("myDialog");
  d.innerHTML = `
  <div class="row">
  <div class="col-md-6 mx-auto">
    <h1 class="font-weight-bolder text-center mb-3 form-title">
      Sign Up <i class="fas fa-plane form-icon0"></i>
    </h1>
    <form>
      <div class="form-group mb-2">
        <label>First Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="First Name"
        />
      </div>
      <div class="form-group mb-2">
        <label> Last Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Last Name"
        />
      </div>
      <div class="form-group mb-2">
        <label>Email</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Email"
        />
      </div>
      <div class="form-group mb-2">
        <label>Phone Number</label>
        <input
          type="number"
          class="form-control"
          id="name"
          placeholder="Phone"
        />
      </div>
      <input
        type="submit"
        value="Submit"
        class="btn btn-primary btn-block mt-4 sign-btn"
      />
      <i class="fas fa-water form-icon1 mt-4 mr-1"></i>
      <i class="fas fa-umbrella-beach form-icon2 mt-4 ml-1"></i>
      <i class="fas fa-male form-icon3 mt-4"></i>
      <i class="fas fa-female form-icon3 mt-4"></i>
    </form>
  </div>
</div>
  `;
  let o = 0.0;
  d.style.opacity = 0;
  d.style.display = "block";
  setInterval(function () {
    o += 0.01;
    d.style.opacity = o;
    d.style.top = o;
  }, 10);
  clearBg1.style.opacity = 0;
  clearBg2.style.opacity = 0;
});
