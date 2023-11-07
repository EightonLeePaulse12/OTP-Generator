const pin = document.querySelector(".pin");
const btn = document.querySelector(".generate");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("REACHED");
  let numbers = "0123456789";
  let otp = "";

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * numbers.length);
    otp += numbers[index];
  }

  console.log(otp);
  console.log(pin);
  pin.innerHTML = "";
  pin.innerHTML = otp;
});
