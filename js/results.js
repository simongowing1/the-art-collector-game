let scoreTransfer = localStorage.getItem("score")
let finalScoreboard = document.querySelector("#finalScoreboard");
if (scoreTransfer >= 25){                    
    finalScoreboard.innerHTML = `TIMES UP! <br> Congratulations, you have built a collection worth $${scoreTransfer},000,000!`;
} else {
    finalScoreboard.innerHTML =`TIMES UP! Better luck next time`
}
