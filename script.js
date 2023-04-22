const joke=document.getElementById('joke');
const jokebtn=document.getElementById('jokebtn');

async function jokeapi(){
    joke.classList.remove('fadeout');
    const jokedata= await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single");
    const jokeinfo=await jokedata.json();
    joke.classList.add('fadeout');
    joke.textContent=jokeinfo.joke;
}

jokebtn.addEventListener('click',jokeapi);