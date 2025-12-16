window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const recipient = urlParams.get('to');

    if (recipient) {
        document.getElementById('recipient-name').innerText = recipient;
        document.title = "Untuk " + recipient + " - Selamat Natal!";
    }
};

function openEnvelope() {
    const envelope = document.getElementById('envelopeWrapper');
    const card = document.getElementById('card');
    const music = document.getElementById('bgMusic');

    envelope.classList.add('open');

    music.volume = 0.5;
    music.play().catch(e => console.log("Audio play failed"));

    setTimeout(() => {
        envelope.classList.add('fade-out'); 
        setTimeout(() => {
            envelope.style.display = 'none'; 
            card.classList.add('active');
            startSnow(); 
        }, 500);
    }, 1000);
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    const size = Math.random() * 5 + 2 + 'px';
    snowflake.style.width = size;
    snowflake.style.height = size;
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(snowflake);
    setTimeout(() => snowflake.remove(), 5000);
}

function startSnow() {
    setInterval(createSnowflake, 100);

}
