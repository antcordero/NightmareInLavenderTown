/*********************************************************
 * js functions for Nightmare Before Crhistmas exercise
 * author: Antonio Cordero Molina
 * version: 1.0
 * date november 2023
 * comment: my first exercise with JavaScript
 * *******************************************************/

function show(element) {
    document.getElementById(element).style.visibility="visible";
}
function hide(element) {
    document.getElementById(element).style.visibility="hidden";
}

function sound(element){
    document.getElementById(element).play();
}
function silence(element){
    document.getElementById(element).pause();
}