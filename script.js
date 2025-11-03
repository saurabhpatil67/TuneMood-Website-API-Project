const moodBtn = document.querySelectorAll('.mood-btn');
const cardRow = document.querySelector('.card-row');

const infoShow = (data) => {
  cardRow.innerHTML = '';

  data.data.forEach((song) => {
    const { title, preview, artist: { name: artistName }, album: { cover_medium: cover } } = song;

    const div = document.createElement('div');
    div.classList.add('card');
    
    const img = document.createElement('img');
    img.src = cover;
    img.alt = title;

    const h3 = document.createElement('h3');
    h3.textContent = `Title: ${title}`;

    const p = document.createElement('p');
    p.textContent = `Artist: ${artistName}`;

    const audio = document.createElement('audio');
    audio.controls = true;
    audio.src = preview;
    // audio.type = 'audio/mpeg';
    // audio.style.width = '100%';
  
    div.append(img, h3, p, audio);
    cardRow.appendChild(div);

  })


};

const giveTuneMood = (mood) => {
  const url = `https://api.deezer.com/search?q=${mood}`;
  // const proxy = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;

  const proxy = `https://api.codetabs.com/v1/proxy/?quest=${encodeURIComponent(url)}`;



  fetch(proxy)
    .then((response) => response.json())
    .then((data) =>  infoShow(data))
    .catch((error) => {
      console.error("Error fetching data:", error);
    })
}


moodBtn.forEach((button) => {
  // console.log(button);    
  button.addEventListener('click', () => {
    const mood = button.textContent.toLowerCase();
    console.log(mood)
    giveTuneMood(mood);
  });

});





















// Emoji Animation Script


const emojiContainer = document.querySelector(".emoji-container");

function createEmojis(emoji) {
  for (let i = 0; i < 40; i++) {
    const span = document.createElement("span");
    span.classList.add("emoji");
    span.textContent = emoji;
    span.style.left = Math.random() * 100 + "vw";
    span.style.fontSize = Math.random() * 1.5 + 1 + "rem";
    emojiContainer.appendChild(span);

    // Remove after animation ends
    setTimeout(() => span.remove(), 3000);
  }
}

// Button click listeners
document.getElementById("happyBtn").addEventListener("click", () => createEmojis("😊"));
document.getElementById("sadBtn").addEventListener("click", () => createEmojis("😢"));
document.getElementById("romanticBtn").addEventListener("click", () => createEmojis("❤️"));
document.getElementById("energyBtn").addEventListener("click", () => createEmojis("⚡"));
document.getElementById("relaxBtn").addEventListener("click", () => createEmojis("🍁"));
document.getElementById("thoughtBtn").addEventListener("click", () => createEmojis("💭"));
document.getElementById("motivationBtn").addEventListener("click", () => createEmojis("💪"));
document.getElementById("rainBtn").addEventListener("click", () => createEmojis("🌈"));




































































// const url = "https://itunes.apple.com/search?term=happy&entity=musicTrack&limit=3";

// fetch(url)
// .then((response) => response.json())
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.error("Error fetching data:", error);
// });


