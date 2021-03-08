"use strict";

window.addEventListener("DOMContentLoaded", start);

const coolText = document.querySelector("#cooltext");
let animateText = Array.from(coolText.textContent);


function start() {
 clearText();
}


function clearText() {
    //Remove the existing text
    document.querySelector(".cooltext").textContent = null;
    
    writeText();
}


function writeText() {
    //For each character in the text:
    animateText.forEach((letter, index) => {

        //create a <span> element
        const animateLetter = document.createElement("span");

        //add css classes and proberty
        animateLetter.style.setProperty("--letter", index);
        animateLetter.classList.add("letterfadein-bottom");
    
        //make 
        if (letter === " ") {
            animateLetter.innerHTML = "&nbsp;";
        } else {
            animateLetter.textContent = letter;
        }

        //put the character inside that element, and append the element to the HTML
        coolText.append(animateLetter);
    });
}