const wishes = [
      "Wishing you a day full of love, joy, and cake!",
      "May your smile 😇 shine as bright as the candles on your cake!",
      "🕊️ Hope all your dreams come true this year!",
      "🫵You're not getting older, you're getting more fabulous👌!",
      "A birthday as special as your smile deserves the most beautiful surprises!",
      "Here's to laughter😂, happiness😊, and unforgettable memories!",
      "Keep glowing, birthday queen👸!",
      "May your year ahead sparkle ✨ with magic and joy!"
    ];
    let index = 0;
    const wishElement = document.getElementById('wish');

    setInterval(() => {
      wishElement.style.opacity = 0;
      setTimeout(() => {
        index = (index + 1) % wishes.length;
        wishElement.textContent = wishes[index];
        wishElement.style.opacity = 2;
      }, 500);
    }, 4000);

    // Fireworks confetti
    function createFirework() {
      const fw = document.createElement('div');
      fw.classList.add('firework');
      fw.style.left = Math.random() * window.innerWidth + 'px';
      fw.style.top = Math.random() * window.innerHeight + 'px';
      fw.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;

      // random direction
      const x = `${-50 + Math.random() * 100}px`;
      const y = `${-50 + Math.random() * 100}px`;
      fw.style.setProperty('--x', x);
      fw.style.setProperty('--y', y);

      fw.style.animationDuration = `${0.5 + Math.random()}s`;
      document.body.appendChild(fw);

      setTimeout(() => fw.remove(), 1000);
    }

    setInterval(createFirework, 100);