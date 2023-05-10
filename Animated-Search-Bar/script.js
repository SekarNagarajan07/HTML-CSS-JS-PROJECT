const SearchBarContainer = document.querySelector(".search-bar-container");

const Magnifier = document.querySelector(".magnifier");

Magnifier.addEventListener("click", () =>{
    SearchBarContainer.classList.toggle("active");
})