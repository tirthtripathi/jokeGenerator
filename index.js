const btnE1 = document.getElementById("btn");
const apikey = "w7hpBRby3ygGJoH6hr4H8g==zCpIBAVsafnXexP1";
const jokeE1 = document.getElementById("joke");
const options = {
    method: "GET",
    headers:{
        "X-Api-Key" : apikey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1";

async function getJoke(){
    try {
        jokeE1.textContent = "Updating...";
        btnE1.disabled = true;
        btnE1.textContent = "Loading...";
        const response = await fetch(apiURL, options);
        const data = await response.json();
     
        btnE1.disabled = false;
        btnE1.textContent = "Tell Me Joke";
    
        jokeE1.textContent = data[0].joke;
    } catch (error) {
        jokeE1.innerHTML = "an error happened, try again later";
        jokeE1.style.color = "red";
    }
  
}

btnE1.addEventListener("click",getJoke);