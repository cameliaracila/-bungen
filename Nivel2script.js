function checkAnswer2() {
    correctAnswer='UFTKN'
    const userAnswer = document.getElementById('answer').value;
    if (userAnswer.toLowerCase() == correctAnswer.toLowerCase()) 
        {   
        saveScore(10);
        window.open('spike.png', '_blank');
        window.location.href = "Nivel3.html";
        } 
    else {
        alert('Falsche Antwort! Versuchen Sie es erneut!');
    }
}
function saveScore(score) {
    let totalScore = sessionStorage.getItem('totalScore');
    if (!totalScore) {
        totalScore = 100;
    }
    totalScore = parseInt(totalScore) + score;
    sessionStorage.setItem('totalScore', totalScore);
    
}


