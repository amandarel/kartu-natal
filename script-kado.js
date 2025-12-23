createSnow();

const giftBox = document.getElementById('giftBox');
const card = document.getElementById('christmasCard');
const audio = document.getElementById('bgMusic');

if(giftBox) {
    giftBox.addEventListener('click', (e) => {
        createParticles(e.clientX, e.clientY);
        giftBox.style.transition = "transform 0.5s, opacity 0.5s";
        giftBox.style.transform = "scale(0) rotate(180deg)";
        giftBox.style.opacity = "0";
        setTimeout(() => {
            giftBox.style.display = 'none';
            card.classList.remove('hidden');
            card.classList.add('active');
            if(audio) {
                audio.volume = 0.5;
                audio.play().catch(() => {});
            }
        }, 500);
    });
}

function createSnow() {
    const container = document.getElementById('snow-container');
    if(!container) return;
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * 100 + 'vw';
        const size = Math.random() * 3 + 2;
        snowflake.style.width = size + 'px';
        snowflake.style.height = size + 'px';
        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(snowflake);
    }
}

function createParticles(x, y) {
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        document.body.appendChild(particle);
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        const tx = (Math.random() - 0.5) * 200;
        const ty = (Math.random() - 0.5) * 200;
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        const colors = ['#f1c40f', '#ffffff', '#e74c3c'];
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        setTimeout(() => { particle.remove(); }, 1000);
    }
}
