document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Logic
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // 2. Confetti Surprise Logic
    const surpriseBtn = document.getElementById('surpriseBtn');
    const confettiContainer = document.getElementById('confetti');

    if (surpriseBtn) {
        surpriseBtn.addEventListener('click', () => {
            triggerConfetti();
            surpriseBtn.textContent = "You are Loved! ❤️";
            surpriseBtn.style.background = "#fff";
            surpriseBtn.style.color = "#000";
            surpriseBtn.disabled = true;
        });
    }

    function triggerConfetti() {
        const colors = ['#ffffff', '#f8fafc', '#e2e8f0', '#94a3b8'];
        for (let i = 0; i < 200; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = Math.random() * 5 + 5 + 'px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.zIndex = '9999';
            confetti.style.borderRadius = '2px';
            confetti.style.opacity = Math.random();
            confetti.style.pointerEvents = 'none';

            confettiContainer.appendChild(confetti);

            const animation = confetti.animate([
                { transform: `translate3d(0, 0, 0) rotate(0deg)`, opacity: 1 },
                { transform: `translate3d(${(Math.random() - 0.5) * 300}px, 110vh, 0) rotate(${Math.random() * 720}deg)`, opacity: 0 }
            ], {
                duration: Math.random() * 4000 + 3000,
                easing: 'cubic-bezier(0, .9, .57, 1)'
            });

            animation.onfinish = () => confetti.remove();
        }
    }
});
