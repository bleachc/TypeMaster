var temp = document.querySelector(".time");
    var words = document.querySelector(".words");
    var button = document.querySelector(".nes-btn is-primary");
    var scoreDiv = document.querySelector(".score");
    var timerDiv = document.querySelector(".time");
    var points = 0;
    var spans;
    var typed;
    var seconds = 60;


const apiURL = "https://random-word-api.herokuapp.com/home/word?number=200/?swear=1";

function httpGet(apiURL)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", apiURL, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

/* function fetchWords() {
    return fetch(apiURL)
        .then( response => response.json())
}

async function getWords(){
    const messages = await response.json().parse();
    var wordsArray = [];
    for (var i in messages){
        wordsArray.push(messages[i]);
    }
} */

function timer(){
    points = 0;
    var timer = setInterval(function(){
        button.disabled = true;
        seconds--;
        temp.innerHTML = seconds;
        if (seconds === 0) {
            alert("Game over! Your score is " + points);
            scoreDiv.innerHTML = "0";
            words.innerHTML = "";
            button.disabled = false;
            clearInterval(timer);
            seconds = 60;
            timerDiv.innerHTML = "60";
            button.disabled = false;	
        }
    }, 1000);
}

function wordSpitter() {
    words.innerHTML = "";
    var random = Math.floor(Math.random() * (1943 - 0 + 1)) + 0;
    var wordArray = list[random].split("");
    for (var i = 0; i < wordArray.length; i++) { //building the words with spans around the letters
        var span = document.createElement("span");
        span.classList.add("span");
        span.innerHTML = wordArray[i];
        words.appendChild(span);
    }
    spans = document.querySelectorAll(".span");
}

button.addEventListener("click", function(buttonClickEvent) {
    buttonClickEvent.preventDefault();
    httpGet();
  });