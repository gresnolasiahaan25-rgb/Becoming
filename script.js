const tombol = document.getElementById("tombol");
const tombolQuotes = document.getElementById("tombolQuotes");
const quotes = document.getElementById("quotes");

if (tombol) {
    tombol.addEventListener("click", function() {
        window.location.href = "./halaman2.html";
    });
}

if (tombolQuotes && quotes) {
    const daftarQuotes = [
        "You are allowed to grow at your own pace.",
        "Small steps are still progress.",
        "You have survived every difficult day so far.",
        "You don't need to be perfect to be worthy.",
        "Rest if you must, but don't give up on yourself.",
        "Your journey doesn't have to look like anyone else's.",
        "One day, you will thank yourself for not giving up.",
        "Be patient with yourself. You are still becoming."
    ];

    let nomorQuotes = 0;

    tombolQuotes.addEventListener("click", function() {
        nomorQuotes = (nomorQuotes + 1) % daftarQuotes.length;
        quotes.textContent = daftarQuotes[nomorQuotes];
    });
}


/* ===== SPARKLES & FLOATING FLOWERS ===== */

const magicLayer = document.createElement("div");
magicLayer.className = "magic-layer";
magicLayer.setAttribute("aria-hidden", "true");
document.body.appendChild(magicLayer);

// Membuat hujan sparkle
const sparkleSymbols = ["✦", "✧", "⋆", "·"];

for (let i = 0; i < 32; i++) {
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";
    sparkle.textContent =
        sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];

    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.animationDuration = (5 + Math.random() * 8) + "s";
    sparkle.style.animationDelay = (Math.random() * 10) + "s";
    sparkle.style.fontSize = (8 + Math.random() * 12) + "px";

    magicLayer.appendChild(sparkle);
}

// Membuat bunga dan bintang yang melayang
const flowerSymbols = ["✿", "❀", "✧", "♡"];

for (let i = 0; i < 8; i++) {
    const flower = document.createElement("span");
    flower.className = "floating-flower";
    flower.textContent =
        flowerSymbols[Math.floor(Math.random() * flowerSymbols.length)];

    flower.style.left = Math.random() * 100 + "%";
    flower.style.animationDuration = (12 + Math.random() * 12) + "s";
    flower.style.animationDelay = (Math.random() * 12) + "s";
    flower.style.fontSize = (14 + Math.random() * 12) + "px";
    flower.style.color = "#F0DEC2";

    magicLayer.appendChild(flower);
}
