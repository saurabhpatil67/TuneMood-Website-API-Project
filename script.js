const moodBtn = document.querySelectorAll(".mood-btn");
const cardRow = document.querySelector(".card-row");
const message = document.getElementById("message");
const inputValue = document.querySelector(".input-value");
const searchBtn = document.querySelector(".serach-btn");

const infoShow = (songs) => {
  cardRow.innerHTML = "";

  songs.forEach((song) => {
    // const { title, preview, artist: { name: artistName }, album: { cover_medium: cover } } = song;
    const { trackName, artistName, artworkUrl100, previewUrl } = song;

    const div = document.createElement("div");
    div.classList.add("card");

    const img = document.createElement("img");
    img.src = artworkUrl100;
    img.alt = trackName;

    const h3 = document.createElement("h3");
    h3.textContent = `Title: ${trackName}`;

    const p = document.createElement("p");
    p.textContent = `Artist: ${artistName}`;

    const audio = document.createElement("audio");
    audio.controls = true;
    audio.src = previewUrl;
    // audio.type = 'audio/mpeg';
    // audio.style.width = '100%';

    // ✅ Stop other songs when this one plays
    audio.addEventListener("play", () => {
      const allAudios = document.querySelectorAll("audio");
      allAudios.forEach((a) => {
        if (a !== audio) a.pause();
      });
    });

    div.append(img, h3, p, audio);
    cardRow.appendChild(div);
  });
};

const fetchSong = (mood) => {
  // const url = `https://api.deezer.com/search?q=${mood}`;

  const url = `https://itunes.apple.com/search?term=${mood}&media=music&limit=12`;

  // show message before loading
  message.textContent = `Loading ${mood} songs... 🎵`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      message.textContent = "";
      infoShow(data.results);
    })
    .catch((error) => {
      message.textContent = "Something went wrong. Please try again 😢";
      console.error("Error fetching data:", error);
    });
};

// GET SONG WHEN CLICK ON MOOD BUTTON

moodBtn.forEach((button) => {
  // console.log(button);
  button.addEventListener("click", () => {
    const mood = button.textContent.toLowerCase();
    console.log(mood);
    fetchSong(mood);
  });
});

// GET SONG WHEN ENTER SONG NAME OR ARTIST NAME IN SEARCH BAR

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const userInput = inputValue.value.trim();
  if (userInput) {
    fetchSong(userInput);
    inputValue.value = ""; // clear input
  } else {
    message.textContent = "Please enter a song or artist name 😐";
  }
});

// Emoji Animation Script

const emojiContainer = document.querySelector(".emoji-container");

const createEmojis = (emoji) => {
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
document
  .getElementById("happyBtn")
  .addEventListener("click", () => createEmojis("😊"));
document
  .getElementById("sadBtn")
  .addEventListener("click", () => createEmojis("😢"));
document
  .getElementById("romanticBtn")
  .addEventListener("click", () => createEmojis("❤️"));
document
  .getElementById("energyBtn")
  .addEventListener("click", () => createEmojis("⚡"));
document
  .getElementById("relaxBtn")
  .addEventListener("click", () => createEmojis("🍁"));
document
  .getElementById("thoughtBtn")
  .addEventListener("click", () => createEmojis("💭"));
document
  .getElementById("motivationBtn")
  .addEventListener("click", () => createEmojis("💪"));
document
  .getElementById("rainBtn")
  .addEventListener("click", () => createEmojis("🌈"));
