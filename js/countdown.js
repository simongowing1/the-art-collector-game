
let counter = 0
let remainingTime = 60
let countdown = document.getElementById("countdown");
    
function secondsToMinutes(seconds) {
        let min = floor(seconds / 60);
        let sec = seconds % 60;
        return `${nf(min,2)}:${nf(sec,2)}`
    }

function change_page(){
        window.location.href = "results.html";
    } 

//let interval = setInterval(timeIt, 1000);

            function timeIt() {
                let timesupHtml = document.querySelector(".timesup");
                let scoreboard = document.querySelector(".scoreboard")
                
                //console.log(scoreboard)
        
                counter++;
                //if (frameCount % 60 == 0 && frameCount > 0){
                //    remainingTime --
                //}
                //console.log(counter)
                countdown.innerHTML = `Countdown: ${secondsToMinutes(remainingTime - counter)}`;
        
                if (counter === remainingTime) {
                    //canvasHtml.classList.add("hidden");
                    //scoreboard.classList.add("hidden");
                    //timesupHtml.classList.remove("hidden");
                    localStorage.setItem("score", game.player.score);
                    game.backgroundMusic.stop();
                    change_page();
                } 
                
               
            }
        



    






