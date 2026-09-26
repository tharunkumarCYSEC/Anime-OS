let activeIdx = 0;
const totalCards = 4;

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        activeIdx++; 
    } else if (e.key === 'ArrowLeft') {
        activeIdx--; 
    }
    
    console.log("Moved index to:", activeIdx);
    
    document.querySelectorAll('.card').forEach((card, idx) => {
        if (idx === activeIdx) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
});

console.log("Commit 3: Keydown listener active.");
258