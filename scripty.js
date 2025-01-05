
// onkeydown :-
// the function triggers when user presses the key on keyboard.
// and document bcoz we want it to happen inside document.

// e :-
// keyboard event.


audio = new Audio("back_muzik.mp3");
audiogo = new Audio("game_over.mp3");

setTimeout(() => {
    audio.play();
}, 1000)



score = 0;
cross = true;

document.onkeydown = function(e) {
    console.log("key code is: ", e.keyCode)

    if (e.keyCode == 38) {
        dino = document.querySelector(".dino");

        // Adding class :-
        // so whenever this happens we will add a class to the .dino
        // and the name of this new class will be .animateDino
        // so whenever this class gets added our dino will jump

        dino.classList.add("animateDino");

        // Removing class :-
        // but we also need to remove this class because when next time
        // the obstacle will occur then we would need to add this class again
        // becuase if anything jumps then it eventua;;y falls down on land

                
        setTimeout(() => {
            dino.classList.remove("animateDino");
        }, 700);
    }

    if (e.keyCode == 39) {
        dino = document.querySelector(".dino");
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        dino.style.left = dinoX + 60+"px";
    }

    if (e.keyCode == 37) {
        dino = document.querySelector(".dino");
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
        dino.style.left = dinoX - 60+"px";
    }

    // Forward movement :-
    // it means whatever would be the value of dino on x axis it would get
    // with 112 px. so it can move right from any position on viewport.
};


// Arrow codes :-
// for up arrow button the keycode = 38;
// for right arrow the key code = 39;
// for left arrow the key code = 37;


// for colission
// check after each interval of 10 mili seconds

val = true;
dino = document.querySelector('.dino');
gameOver = document.querySelector('.gameOver');
obstacle = document.querySelector(".obstacle")
setInterval(() => {

    // collision concept :-
    // so now we will check for the x value of dino and obstacle
    // if the differnece b/w both x values is 0 then its colission

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("left"));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("top"));

    // Math.abs() :-
    // absolute value of difference
    // and by default we will keep game over = hidden

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);

    // ParseInt :-
    // but values off offset are in pixels right now and we not get it
    // into integers so uwe used ParseInt

    console.log(offsetX, offsetY);

    // collision :-
    if (offsetX <= 130 && offsetY == 108) {
        


        if (val) {
            dino = document.querySelector(".dino");
            dino.classList.add("droping");

            audiogo.play();
            setTimeout(() => {
                audiogo.pause();
                dino.classList.remove("droping")
            }, 4000)

            val = false;
        }


        // gameOver.style.visibility = 'visible';
        gameOver.innerHTML = "Game Over"
        obstacle.classList.remove("obstacleAni");

        console.log("yeeeeeeeeee");

        setTimeout( () => {
            audio.pause();
        },1)
    
        // conditional values :-
        // and by default we will keep game over = hidden
        // conditional values for offset values in if loop are
        // taken from console window (inspect -> console)
        // by trial and error and camera use by you

        // yeee :-
        // yeeeee is helping us to find it bcoz speed of 100 milisecond
        // for function to check is very fast for user even though values
        // are printed in console window.

        // offsetY :-
        // offset value of Y will be always 78 while collision.
        // only while jumpping it will change. Thats why == 78.
    }


    // else if :-
    // it means else if will be executed only if the value of 
    // cross is true

    // offsetX :-
    // the value of offset will never be less than 130 if the game is over 
    // bcoz then ditance between runman and munster will be same.
     
    // score :-
    // score will update by 1 for every 1 second.
    
    else if (offsetX <= 120 && cross && val) {
        score+=1;
        updateScore(score);
        cross = false;

        setTimeout (() => {
            cross = true;
        }, 1000);

        // increase speed of obstacle :-
        // If you want the speed of obstacle to decrease to increase the
        // float bcoz we want exact value
        // difficulty level. then use below given code.

        // unlinearness :-
        // but we want the speed to change at each interval and not at any 
        // random time otherwise in between we may die to sudden increase in
        // speed of obstacle.
        // thats why we will increase the speed after every 0.5 seconds.

        // constant speed after a limit :-
        // but decreasing of speed should stop at some interval, isnt it.
        // so once the animation speed of obstacle reaches 1.8 seconds.
        // then further it cant be reduced more.


        // the code :-

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue("animation-duration"));
            if (aniDur >= 1.8) {
                newDur = aniDur - 0.1;
                obstacle.style.animationDuration = newDur + "s";
                console.log("new animation duration: ", newDur);
            }
        }, 500);

        // as the score increases, increase in speed will occur
    }
}, 10);

function updateScore(score) {
    scoreCount.innerHTML = "Your Score : " + score;
}


