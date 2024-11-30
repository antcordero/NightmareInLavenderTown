/*********************************************************
 * js functions exercise
 * author: Antonio Cordero Molina
 * version: 1.0
 * date 30/11/2024
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
