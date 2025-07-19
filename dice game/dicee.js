let randomNum = Math.floor(Math.random() * 6 + 1)
let change = "images/dice" + randomNum + ".png";
document.querySelectorAll("img")[0].setAttribute("src", change);






let randomNum2 = Math.floor(Math.random() * 6 + 1)
let change2 = "images/dice" + randomNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", change2)


if (randomNum > randomNum2){
    document.querySelector("h1").innerHTML = "🏴‍☠️ PLAYER 1 WINS"
}
else if (randomNum2 > randomNum){
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS 🏴‍☠️"

}
else {
    document.querySelector("h1").innerHTML = "DRAW!"
}








// let randomNum = Math.floor(Math.random() * 6 ) + 1;
// let changesrc = "images/dice" + randomNum + ".png";
// document.querySelectorAll("img")[0].setAttribute("src", changesrc);

// let randomNum2 = Math.floor(Math.random()* 6 ) + 1;
// let changesrc2 = "images/dice" + randomNum2 + ".png";
// document.querySelectorAll("img")[1].setAttribute("src", changesrc2)



// if (randomNum > randomNum2){
//     document.querySelector("h1").innerHTML = "🏴‍☠️ PLAYER 1 WINS"
// }
// else if (randomNum2 > randomNum){
//     document.querySelector("h1").innerHTML = "PLAYER 2 WINS 🏴‍☠️"

// }
// else{
//     document.querySelector("h1").innerHTML = "DRAW!!!" 
// }
