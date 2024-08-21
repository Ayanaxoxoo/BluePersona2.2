var agreeEI_number = 0
var disagreeEI_number = 0

function eicounter(){
var selected_buttons_a = document.querySelectorAll('input[type="radio"]:checked[value="agree"]');
agreeEI_number= selected_buttons_a.length 


var selected_buttons_d =document.querySelectorAll('input[type="radio"]:checked[value="disagree"]');
disagreeEI_number= selected_buttons_d.length 

console.log(agreeEI_number)
console.log(disagreeEI_number)

localStorage.setItem("agreeEI",agreeEI_number)
localStorage.setItem("disagreeEI",disagreeEI_number)
}




var agreeSN_number = 0
var disagreeSN_number = 0
function SNcounter(){
var selected_buttonsSN = document.querySelectorAll('input[type="radio"]:checked[value="agreeSN"]');
agreeSN_number = selected_buttonsSN.length 

var selected_buttonsSN = document.querySelectorAll('input[type="radio"]:checked[value="disagreeSN"]');
disagreeSN_number = selected_buttonsSN.length 

var agreeEI = localStorage.getItem("agreeEI")
var disagreeEI = localStorage.getItem("disagreeEI")
console.log(agreeEI)
console.log(disagreeEI)
}

var imageId = ""
function selectimage(img){
imageId=img
console.log(imageId)
document.getElementById("outputimg").src= imageId+".png"

}