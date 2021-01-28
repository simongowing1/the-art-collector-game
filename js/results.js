let scoreTransfer = localStorage.getItem("score")
let finalScoreboard = document.querySelector("#finalScoreboard");
if (scoreTransfer >= 25){                    
    finalScoreboard.innerHTML = `Congratulations, <br> you have built a collection said to be valued at<br> <b>$${scoreTransfer},000,000!</b>`;
} else {
    finalScoreboard.innerHTML =`Better luck next time`
}
