const cookie = document.querySelector(".cookie");
const candy = document.querySelector(".candy");
const candyLife = document.querySelector(".candy-life");
const continuar = document.querySelector(".continue-flag");
const audio = document.querySelector("#player");
var qtd = 0;
var count = 0;

const jump = () => {
    cookie.classList.add('jump-cookie'); //add a class jump dentro da class do selector cookie     
   
    setTimeout( () => {
        cookie.classList.remove("jump-cookie");
    }, 500); //remove a classe jump depois de 500ms [500 é o tempo usado na classe do pulo]
   
};

//vai repetir a execução da função de tempos em tempos
const loopGame = setInterval(()=>{
    const candyPosition = candy.offsetLeft;
    const cookiePosition = +window
    .getComputedStyle(cookie)
    .bottom.replace("px", "");       
    qtd++;
    if(candyPosition <= 120 && candyPosition > 0 && cookiePosition < 80){
        candy.style.animation = "none";
        candy.style.left = `${candyPosition}px`;
    
        cookie.style.animation = "none";
        cookie.style.bottom = `${cookiePosition}px`;
    
        cookie.src = "./img/cookie-boy-over.png";
        cookie.style.width = "150px";
        cookie.style.marginLeft = "45px";
        
        //tirar vida quando perde
        candyLife.style.display = 'none';            

        clearInterval(loopGame);

        continuar.classList.remove('continue-flag');
        continuar.classList.add('continue');
        
        document.getElementById('player').pause();
        audio.src = "./audio/game-over.wav";
        audio.type = "audio/wav";
        audio.play();
        document.getElementById('player').removeAttribute('loop');
        
        
    } else if(candyPosition == 0){   //contador de pontos                        
        count++;
        document.querySelector('.count').innerHTML = count;
    }  
   
}, 10);

document.addEventListener("keydown", jump); //adiciona o evento, (tecla, funcao) [keydown = qualquer tecla]



