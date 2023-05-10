const btn1 = document.getElementById("btn");
const animeContainer = document.querySelector(".anime-container");
const animeImg = document.querySelector(".anime-img");
const animeName = document.querySelector(".anime-name");

btn1.addEventListener("click", async function(){
    try{
        btn1.disabled = true;
        btn1.innerText = "Loading...";
        animeName.innerText = "Updating...";
        animeImg.src = "spinner.svg";
        const response = await fetch ("https://api.catboys.com/img");
        const data = await response.json();
        btn1.disabled = false;
        btn1.innerText = "Get Anime";
        animeContainer.style.display = "block";
        animeImg.src = data.url;
        animeName.innerText = data.artist;
    }
    catch(error){
            console.log(error);
            btn1.disabled = false;
            btn1.innerText = "Get Anime";
            animeName.innerText = "An error happened, please try again";
        }
});

