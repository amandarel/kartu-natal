// 1. CEK URL PARAMETER (Untuk Nama Penerima)
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const recipient = urlParams.get('to');

    if (recipient) {
        document.getElementById('recipient-name').innerText = recipient;
        document.title = "Untuk " + recipient + " - Selamat Natal!";
    }
};

// 2. FUNGSI BUKA AMPLOP
function openEnvelope() {
    const envelope = document.getElementById('envelopeWrapper');
    const card = document.getElementById('card');
    const music = document.getElementById('bgMusic');

    // Tambahkan class 'open' untuk memicu animasi CSS amplop terbuka
    envelope.classList.add('open');

    // Play Musik
    music.volume = 0.5;
    music.play().catch(e => console.log("Audio play failed"));

    // Tunggu 1 detik (waktu animasi amplop), lalu hilangkan amplop & munculkan kartu
    setTimeout(() => {
        envelope.classList.add('fade-out'); // Amplop menghilang pelan-pelan
        setTimeout(() => {
            envelope.style.display = 'none'; // Hapus amplop dari layar
            card.classList.add('active'); // Munculkan kartu
            startSnow(); // Mulai salju
        }, 500);
    }, 1000);
}

// 3. EFEK SALJU
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