var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;

hole.addEventListener('animationiteration',() => {
 var random = -((Math.random() * 300)+150)
 hole.style.top = random + "px";
});

// block.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},
// ${Math.floor(Math.random() * 255)} , ${Math.floor(Math.random() * 255)}
// )`



setInterval(function() {
    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
          if (jumping == 0) {
            character.style.top = (characterTop+3)+"px";
          }

          var blockLeft = 
          parseInt(window.getComputedStyle(block).getPropertyValue("left"));
          var holeTop = 
          parseInt(window.getComputedStyle(hole).getPropertyValue("top"));

          var cTop = -(500-characterTop);
          if((characterTop>480) || ((blockLeft < 20)&&(blockLeft > -50)&&((cTop<holeTop)||(cTop>holeTop +130)))){
              alert(`Game over! your score is ${score}`)
              character.style.top = 100 +"px";
              score = 0;
          }
}, 10);

let score = 0;
let displayScore = document.getElementById('score')

function showscore() {
    score++;
    displayScore.innerText = score;
}

setInterval(showscore,100)

function jump(){
    jumping = 1;
    jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = 
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop > 6)&&(jumpCount < 15)){
        character.style.top = (characterTop-2)+"px";
        }
        
        if(jumpCount > 20){
        clearInterval(jumpInterval);
        jumping = 0;
        jumpCount = 0;
        }
           jumpCount++;
    },10)

}





































// let char = document.querySelector("#characters");
// let moveBy = 10;
// window.addEventListener('load', () => {
//     char.style.position = 'absolute';
//     char.style.left = '0';
//     char.style.top = '0';
// });
// window.addEventListener('keyup', (e) => {
//     switch(e.key) {
//         case 'ArrowLeft':
//             char.style.left = parseInt(char.style.left) - moveBy + 'px';
//             break;
//         case 'ArrowRight':
//             char.style.left = parseInt(char.style.left) + moveBy + 'px';
//             break;
//         case 'ArrowUp':
//             char.style.top = parseInt(char.style.top) - moveBy + 'px';
//             break;
//         case 'ArrowDown':
//             char.style.top = parseInt(char.style.top) + moveBy + 'px';
//             break;
//     }
// });



