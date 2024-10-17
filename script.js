function downloadImage(imageUrl) {
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = 'spike.png'; // Numele fișierului care va fi descărcat
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
function checkAnswers() {
    const correctAnswers = document.getElementById('answers').value;
    const message = document.getElementById('message');
    const minimumCorrect = 5;

    if (correctAnswers >= minimumCorrect) {
        message.style.color = 'green';
        message.textContent = "Glückwunsch! Ihr seid zum nächsten Level gekommen.";
        window.open('spike.png', '_blank');
        saveScore(10);
        window.location.href = "Nivel2.html";
        
    } else {
        alert('`Ihr braucht mindestens fünf richtige Antworten, um zum nächsten Level zu gelangen. `');
        
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

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;

    // Verifică dacă există un timer salvat în sessionStorage
    const savedTime = sessionStorage.getItem('timer');
    if (savedTime) {
        timer = parseInt(savedTime, 10);
    }

    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        // Salvează timpul rămas în sessionStorage
        sessionStorage.setItem('timer', timer);

        if (--timer < 0) {
            clearInterval(interval); // Oprește timer-ul când ajunge la 0
            sessionStorage.removeItem('timer'); // Șterge timer-ul din sessionStorage la final
        }
    }, 1000);
}

window.onload = function () {
    let totalScore = sessionStorage.getItem('totalScore');
    if (!totalScore) {
        totalScore = 0;
    }
    document.getElementById('message').textContent = "Die Gesamtpunktzahl: " + totalScore;
    const timerDisplay = document.getElementById('timer');
    const timeInMinutes = 5;  // Setează numărul de minute pentru timer
    const timeInSeconds = timeInMinutes * 60;

    // Pornește timer-ul folosind timpul rămas din sessionStorage sau timpul inițial
    startTimer(timeInSeconds, timerDisplay);
};
