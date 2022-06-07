let random = Math.floor(Math.random() * 100 +1) ;
let input = document.querySelector(".input");
let check = document.querySelector('.check');
let restart = document.querySelector('.restart');
let paragraf = document.querySelector('.para');
let life = 6;



const guessGame = function(){

    if(life > 1){
        if(input.value > 100 || input.value < 0){
            paragraf.innerText = "Please enter a valid number";
        } else{
            if(input.value > random){
                paragraf.innerHTML = 'Lower number please';
                life--;
                document.querySelector('.last').innerText = input.value;
                dow.play();
            } 

            else if(input.value < random){
                paragraf.innerHTML = 'Greater number please';
                life--;
                document.querySelector('.first').innerText = input.value;
                up.play();

            } else if(input.value == random){
                paragraf.innerHTML = 'Woaaww. Are you a mindreader?'
                life--;
                check.style.display = 'none';
                restart.style.display = 'block';
                applause.play();

                           
            }
        }
    
    } else {
        paragraf.innerHTML = 'Game Over';
        check.style.display = 'none';
        input.style.display = 'none';
        restart.style.display = 'block';
        life--;
        loser.play();
    }
    document.querySelector('.life-span').innerHTML = life;
    input.value = "";
    
}

check.addEventListener('click', guessGame);


input.addEventListener('keydown', (e) => {
    if(e.keyCode === 13){
        guessGame();
    }
})
