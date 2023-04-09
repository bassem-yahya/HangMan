// letters 
const letters = "abcdefghijkslmnopqrdtuvwxyz";
// get arry from letters
const lettersArry = Array.from(letters);
//select letters contenar 
let letterscontenar = document.querySelector(".letters");


// generatge letters 
lettersArry.forEach(letter => {
    // create span
    let span = document.createElement("span");

    // create letter text node
    let theletter = document.createTextNode(letter);

    // append the letter to span
    span.appendChild(theletter);

    // add class name to span
    span.className = "letter-box";

    // append span to the letters contenar
    letterscontenar.appendChild(span);
});

// opject of words + categoris
let words = {
    programing: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movis: ["prestige", "inception", "parasite", "interstellar", "whiplash", "coco", "up"],
    pepole: ["albert Einstein", "hitchcock", "Alexander", "cleopatar", "mahatma ghandi"],
    countries: ["syria", "palestine", "yemen", "eygpt", "Bahrain", "Qatar"],
}

// get random property
let allkeys = Object.keys(words);

// random naumber depend on keys length
let randomproprtynumber = Math.floor(Math.random() * allkeys.length);

// category
let randomproprtyname = allkeys[randomproprtynumber];

// category words
let randomproprtyvalue = words[randomproprtyname];

// random number Depend on words
let randomvaluenumber = Math.floor(Math.random() * randomproprtyvalue.length);

// thr chosen words
let randomvaluevalue = randomproprtyvalue[randomvaluenumber];

// set category Info
document.querySelector(".game-info .category span").innerHTML = randomproprtyname;

// select letters guess Element
let lettersguess = document.querySelector(".letters-guess");

// convert chosen word to array 
let lettersandspace = Array.from(randomvaluevalue);

// creat span depend on word 
lettersandspace.forEach(letter => {

    // create Empty span 
    let emptyspan = document.createElement("span");

    // if letters of speace
    if (letter === " ") {
        // add classe to the span 
        emptyspan.className = "has-space";
    }

    //append span to the lettrs guess contenar 
    lettersguess.appendChild(emptyspan);
})

// slecte duess span

let guessSpan = document.querySelectorAll(".letters-guess span");


//  set wrong attempts

let wrongattempts = 0;

// slecte the draw Element
let thedraw = document.querySelector(".hangman-draw");

// handel clicking on letters 
document.addEventListener("click", (e) => {

    // set the chosen status
    let thestatus = false;

    if (e.target.className === "letter-box") {

        e.target.classList.add("clicked");

        // get clicked letter
        let theclickedletter = e.target.innerHTML;

        // the chosen word
        let thechosenword = Array.from(randomvaluevalue);

        thechosenword.forEach((wordletter, wordindex) => {
            // if the clicked letter equle to one of the chosen word letter
            if (theclickedletter === wordletter) {

                thestatus = true;

                // lop on all mguess span
                guessSpan.forEach((span, spanIndex) => {
                    if (wordindex === spanIndex) {
                        span.innerHTML = theclickedletter;
                    }
                })
            }
        })
        console.log(thestatus)
        // outside loop
    }
    // if letter is wrong 
    if (thestatus !== true) {
        // increase the wrong attempts
        wrongattempts++;
        //add class wrong on the draw Elelment
        thedraw.classList.add(`wrong-${wrongattempts}`);
        document.getElementById("fail").play();

        if (wrongattempts === 8) {
            letterscontenar.classList.add("finished");
            endgeam();
        }
    } else {
        document.getElementById("success").play();
    }
})

function endgeam() {

    // cerat popup Div
    let div = document.createElement("div");

    // creat text 
    let divtext = document.createTextNode(`game over, the wrod is ${randomvaluevalue}`);

    // append text to div 
    div.appendChild(divtext);

    // add class on div 
    div.className = "popup";

    // append div to body
    document.body.appendChild(div);

}
