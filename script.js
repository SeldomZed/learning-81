let noBtn = document.getElementById('noBtn');
let noBtn2 = document.getElementById('noBtn2');
let yesBtn = document.getElementById('yesBtn');
let yesBtn2 = document.getElementById('yesBtn2');
let questionContainer = document.getElementById('question-container');
let nextQuestion = document.getElementById('next-question');
let noClicks = 0;

noBtn2.style.left = '50%';  // Initialisation au centre
noBtn2.style.top = '50%';
noBtn2.style.transform = 'translate(-50%, -50%)';  // Centré dans la fenêtre

let lastPosition = { x: 0, y: 0 }; // Store the last position of the button

// Fonction qui déplace le bouton "NON" dans des coordonnées valides
function moveButton2() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Dimensions du bouton
    const buttonWidth = noBtn2.offsetWidth;
    const buttonHeight = noBtn2.offsetHeight;

    // Marge de sécurité pour éviter que le bouton touche les bords
    const margin = 20;

    // Calculer les limites pour que le bouton reste visible
    const minX = margin; // Bord gauche avec marge
    const minY = margin; // Bord haut avec marge
    const maxX = windowWidth - buttonWidth - margin; // Bord droit avec marge
    const maxY = windowHeight - buttonHeight - margin; // Bord bas avec marge

    let randomX, randomY;

    // Générer des coordonnées aléatoires valides
    do {
        randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
        randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
    } while (
        randomX === lastPosition.x && randomY === lastPosition.y // Éviter la même position
    );

    // Mettre à jour la dernière position
    lastPosition = { x: randomX, y: randomY };

    // Appliquer les nouvelles coordonnées
    noBtn2.style.left = `${randomX}px`;
    noBtn2.style.top = `${randomY}px`;
}

function handleYes() {
    questionContainer.style.display = 'none';
    nextQuestion.style.display = 'block';
}

function handleNo() {
    noClicks++;
    if (noClicks >= 10) {
        noBtn.style.opacity = 0;
    } else {
        noBtn.style.opacity = 1 - noClicks * 0.30;
    }
}

function showMessage() {
    alert("Excellent choix ! 😊");
}
