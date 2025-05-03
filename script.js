let noBtn = document.getElementById('noBtn');
let noBtn2 = document.getElementById('noBtn2');
let yesBtn = document.getElementById('yesBtn');
let yesBtn2 = document.getElementById('yesBtn2');
let questionContainer = document.getElementById('question-container');
let nextQuestion = document.getElementById('next-question');
let noClicks = 0;

function handleYes() {
    questionContainer.style.display = 'none';
    nextQuestion.style.display = 'block';
}

function handleNo() {
    noClicks++;

    if (noClicks >= 10) {
        noBtn.style.opacity = 0;
    } else {
        noBtn.style.opacity = 1 - noClicks * 0.30; // Dim the opacity by 10% with each click
    }


}

function showMessage() {
    alert("Excellent choix ! 😊");
}
