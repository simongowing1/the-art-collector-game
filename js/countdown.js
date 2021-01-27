let counter = 0
let remainingTime = 90
let countdown = document.getElementById("countdown");

    
function secondsToMinutes(seconds) {
        let min = floor(seconds / 60);
        let sec = seconds % 60;
        return `${nf(min,2)}:${nf(sec,2)}`
    }

//let interval = setInterval(timeIt, 1000);

            function timeIt() {
                let timesupHtml = document.querySelector(".timesup");
                let scoreboard = document.querySelector(".scoreboard")
                let finalScoreboard = document.getElementById("finalScoreboard");
                //console.log(scoreboard)
        
                counter++;
                //if (frameCount % 60 == 0 && frameCount > 0){
                //    remainingTime --
                //}
                //console.log(counter)
                countdown.innerHTML = `Countdown: ${secondsToMinutes(remainingTime - counter)}`;
        
                if (counter === remainingTime) {
                    canvasHtml.classList.add("hidden");
                    scoreboard.classList.add("hidden");
                    timesupHtml.classList.remove("hidden");
                    game.backgroundMusic.stop();
                    if (game.player.score >= 25){
                        finalScoreboard.innerHTML = `TIMES UP! <br> Congratulations, you have built a collection worth $${game.player.score},000,000!`;
                    } else {
                        finalScoreboard.innerHTML =`TIMES UP! Better luck next time`
                    }
                } 
                
               
            }
        



    






