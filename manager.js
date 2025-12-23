const htmlDefault = `
<audio id="bgMusic" loop>
    <source src="firstsnow.mp3" type="audio/mpeg">
</audio>
<div class="envelope-wrapper" id="envelopeWrapper" onclick="openEnvelope()">
    <div class="envelope">
        <div class="flap"></div>
        <div class="pocket"></div>
        <div class="letter">
            <div class="text">Kartu Ucapan Natal Untukmu</div>
        </div>
        <div class="wax-seal">
            <span class="seal-icon">🎄</span>
        </div>
    </div>
    <p class="click-hint">Ketuk untuk membuka</p>
</div>
<div class="card-container" id="card">
    <div class="ribbon"></div>
    <div class="tree-container">
        <div class="star">★</div>
        <div class="tree-layer layer-1"></div>
        <div class="tree-layer layer-2"></div>
        <div class="tree-layer layer-3"></div>
        <div class="trunk"></div>
        <div class="bauble b1"></div>
        <div class="bauble b2"></div>
        <div class="bauble b3"></div>
        <div class="bauble b4"></div>
    </div>
    <div class="message-content">
        <p class="to-text">Untuk yang tersayang,</p>
        <h2 id="recipient-name" class="handwritten-name"></h2>
        <h1 class="main-title">Selamat Natal!</h1>
        <p class="wish-text">
            Semoga kehangatan Natal memenuhi hatimu dengan damai, cinta, dan kebahagiaan yang tak berkesudahan.
            Selamat berkumpul bersama orang-orang tersayang.
        </p>
        <div class="footer">
            Love,<br>
            <strong class="sender-name">Adam's Family</strong> 
        </div>
    </div>
</div>
`;

const htmlKado = `
<div class="container-kado">
    <audio id="bgMusic" loop>
        <source src="firstsnow.mp3" type="audio/mpeg"> 
    </audio>
    <div id="snow-container"></div>
    <div class="gift-container" id="giftBox">
        <div class="gift-box">
            <div class="gift-lid">
                <div class="ribbon-bow">
                    <div class="bow-left"></div>
                    <div class="bow-right"></div>
                </div>
            </div>
            <div class="gift-body">
                <div class="ribbon-vertical"></div>
                <div class="ribbon-horizontal"></div>
            </div>
        </div>
        <div class="click-text">Klik untuk Buka 🎁</div>
        <div class="shadow"></div>
    </div>
    <div class="christmas-card hidden" id="christmasCard">
        <div class="card-content">
            <div class="tree-icon">🎄</div>
            <p style="margin-bottom: 5px; font-size: 0.9rem; opacity: 0.9;">Untuk yang tersayang,</p>
            <h2 id="recipient-name-kado" class="sub-title" style="color: #f1c40f; font-weight: bold; font-size: 1.5rem; margin-bottom: 10px; text-transform: capitalize;"></h2>
            <h1 class="title">Selamat Natal</h1>
            <p class="message">
                Semoga damai, sukacita, dan kebahagiaan Natal menyertai hari-harimu. <br>
                Kiranya terang Natal memberikan harapan baru di tahun yang akan datang. <br>
                Selamat berkumpul bersama orang-orang tersayang.
            </p>
            <div class="sender">
                <p>Love,</p>
                <b>Adam's Family</b>
            </div>
            <button class="close-btn" onclick="location.reload()">Tutup Kartu</button>
        </div>
    </div>
</div>
`;

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const tema = params.get('tema');
    const recipient = params.get('to');
    const app = document.getElementById('app');

    if (tema === 'kado') {
        loadCSS('style-kado.css');
        app.innerHTML = htmlKado;
        loadScript('script-kado.js');
        
        setTimeout(() => {
            if(recipient && document.getElementById('recipient-name-kado')) {
                document.getElementById('recipient-name-kado').innerText = recipient;
                document.title = "Untuk " + recipient + " - Selamat Natal!";
            }
        }, 100);
    } else {
        loadCSS('style-default.css');
        app.innerHTML = htmlDefault;
        loadScript('script-default.js');
        
        setTimeout(() => {
            if(recipient && document.getElementById('recipient-name')) {
                document.getElementById('recipient-name').innerText = recipient;
                document.title = "Untuk " + recipient + " - Selamat Natal!";
            }
        }, 100);
    }
});

function loadCSS(filename) {
    const link = document.createElement("link");
    link.href = filename;
    link.type = "text/css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
}

function loadScript(filename) {
    const script = document.createElement("script");
    script.src = filename;
    script.type = "text/javascript";
    document.body.appendChild(script);
}
