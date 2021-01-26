let counter = 0
let remainingTime = 60
let countdown = document.getElementById("countdown");
let interval = setInterval(timeIt, 1000)
    
function secondsToMinutes(seconds) {
        let min = floor(seconds / 60);
        let sec = seconds % 60;
        return `${nf(min,2)}:${nf(sec,2)}`
    }

function timeIt(){
        counter++;
        countdown.innerHTML = `Countdown: ${secondsToMinutes(remainingTime - counter)}`;
        if (counter == remainingTime) {
            clearInterval(interval);
            if (game.player.score >= 25){
                alert(`TIMES UP! Congratulations, you have built a collection worth $${game.player.score},000,000!`);
            } else { alert(`TIMES UP! Better luck next time`)}
        } 
        
       
    }





