const searchInput = document.querySelector("#search");
const apps = document.querySelectorAll("#app");

searchInput.addEventListener("keyup", function (event) {
   const textInput = event.target.value.toLowerCase();
   apps.forEach((item) => {
      item.querySelector("h4").textContent.toLowerCase().includes(textInput)
         ? (item.style.display = "block")
         : (item.style.display = "none");
   });
});
