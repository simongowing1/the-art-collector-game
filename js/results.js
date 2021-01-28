let scoreTransfer = localStorage.getItem("score")
let finalScoreboard = document.querySelector("#finalScoreboard");
if (scoreTransfer >= 25){                    
    finalScoreboard.innerHTML = `Congratulations, you have built a collection for the ages worth $${scoreTransfer},000,000!`;
} else {
    finalScoreboard.innerHTML =`Better luck next time`
}
