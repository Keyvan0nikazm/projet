// Récupération des éléments
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const successMessage = document.getElementById('successMessage');
const question = document.querySelector('.question');
const buttonsContainer = document.querySelector('.buttons-container');
const bookContainer = document.getElementById('bookContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Variables pour suivre la taille des boutons
let yesSize = 1;
let noSize = 1;
const shrinkFactor = 0.85;
const growFactor = 1.15;
const minSize = 0.3;

// Variables pour le livre
let currentPage = 1;
const totalPages = 5;

// Fonction pour créer des cœurs flottants
function createFloatingHearts() {
    const hearts = ['💖', '💕', '💗', '💝', '💓', '💞', '❤️', '💘'];
    const heartCount = 100;
    
    for (let i = 0; i < heartCount; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (3 + Math.random() * 3) + 's';
            heart.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(heart);
        }, i * 100);
    }
}

// Fonction pour le bouton "Yes"
yesBtn.addEventListener('click', () => {
    // Cacher les boutons
    buttonsContainer.style.display = 'none';
    
    // Afficher le message de succès
    successMessage.classList.remove('hidden');
    
    // Créer des cœurs qui descendent
    createFloatingHearts();
});

// Fonction pour afficher une page du livre
function showPage(pageNumber) {
    currentPage = pageNumber;
    
    // Cacher toutes les pages
    for (let i = 1; i <= totalPages; i++) {
        const page = document.getElementById(`page${i}`);
        page.classList.remove('active', 'flipped');
    }
    
    // Afficher la page actuelle
    const currentPageElement = document.getElementById(`page${pageNumber}`);
    setTimeout(() => {
        currentPageElement.classList.add('active');
    }, 100);
    
    updateNavigationButtons();
}

// Fonction pour mettre à jour les boutons de navigation
function updateNavigationButtons() {
    // Désactiver le bouton précédent si on est sur la première page
    prevBtn.disabled = currentPage === 1;
    
    // Désactiver le bouton suivant si on est sur la dernière page
    nextBtn.disabled = currentPage === totalPages;
    
    // Changer le texte du bouton suivant sur la dernière page
    if (currentPage === totalPages) {
        nextBtn.textContent = '✨ Fin ✨';
    } else {
        nextBtn.textContent = 'Suivant →';
    }
}

// Événement pour le bouton "Suivant"
nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
        const currentPageElement = document.getElementById(`page${currentPage}`);
        currentPageElement.classList.remove('active');
        currentPageElement.classList.add('flipped');
        showPage(currentPage + 1);
    }
});

// Événement pour le bouton "Précédent"
prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        const currentPageElement = document.getElementById(`page${currentPage}`);
        currentPageElement.classList.remove('active');
        showPage(currentPage - 1);
    }
});

// Fonction pour le bouton "No"
noBtn.addEventListener('click', () => {
    // Réduire le bouton "No"
    noSize *= shrinkFactor;
    if (noSize < minSize) {
        noSize = minSize;
    }
    
    // Agrandir le bouton "Yes"
    yesSize *= growFactor;
    
    // Appliquer les nouvelles tailles
    noBtn.style.transform = `scale(${noSize})`;
    yesBtn.style.transform = `scale(${yesSize})`;
    
    // Petite animation de secousse
    noBtn.classList.add('shrink');
    yesBtn.classList.add('grow');
    
    setTimeout(() => {
        noBtn.classList.remove('shrink');
        yesBtn.classList.remove('grow');
    }, 300);
    
    // Messages amusants
    const messages = [
        "Are you sure? 🥺",
        "Really? Please reconsider! 💕",
        "The Yes button is getting bigger... 👀",
        "Just click Yes! 😊",
        "Come on, you know you want to! 💖",
        "The No button is disappearing... 😅"
    ];
    
    if (noSize > minSize + 0.1) {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        question.textContent = randomMessage;
    } else {
        question.textContent = "Fine, I'll make this easier for you... 😏";
    }
});
