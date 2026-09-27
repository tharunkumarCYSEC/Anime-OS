let currentIndex = 0;
const cards = document.querySelectorAll('.card');
const displayBox = document.getElementById('content-display');

const vaultContent = [
    `<h3>// 01. SYSTEM HOME</h3>
     <p>Welcome back, user. This miniature anime OS runs entirely on keyboard inputs because mouse clicks are too mainstream. Explore the Uchiha reality logs below.</p>`,
    
    `<h3>// 02. OBITO UCHIHA - WAKE UP TO REALITY</h3>
     <p>"Wake up to reality... Nothing ever goes as planned in this accursed world. The longer you live, the more you realize that the only things that truly exist in this reality are merely pain, suffering and futility."[cite: 1]</p>`,
    
    `<h3>// 03. MADARA UCHIHA - THE PATH OF POWER</h3>
     <p>"In this world, wherever there is light, there are also shadows. As long as the concept of winners exists, losers must also exist. The selfish intent of wanting to preserve peace initiates wars."</p>`,
    
    `<h3>// 04. LOVE & ILLUSION LESSONS</h3>
     <p>"People cannot show each other their true feelings. Fear, suspicion, and resentment never subside." True strength means transcending these illusions and forging your own absolute path.</p>`
];

function updateActiveCard() {
    cards.forEach((card, idx) => {
        if (idx === currentIndex) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'd' || e.key === 's' || e.key === 'D' || e.key === 'S') {
        currentIndex = (currentIndex + 1) % cards.length;
        updateActiveCard();
        console.log("Navigated right to index:", currentIndex);
    } 
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'a' || e.key === 'w' || e.key === 'A' || e.key === 'W') {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateActiveCard();
        console.log("Navigated left to index:", currentIndex);
    } 
    else if (e.key === 'Enter') {
        displayBox.innerHTML = vaultContent[currentIndex];
        console.log("Loaded content for index:", currentIndex);
    } 
    else if (e.key === 'Escape') {
        currentIndex = 0;
        updateActiveCard();
        displayBox.innerHTML = vaultContent[0];
        console.log("Reset back to home screen via Esc.");
    }
});

console.log("Anime OS fully initialized. Ready for deployment.");