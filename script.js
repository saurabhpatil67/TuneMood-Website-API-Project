// https://itunes.apple.com/search?term=happy&entity=musicTrack&linit=3

const url = "https://itunes.apple.com/search?term=happy&entity=musicTrack&limit=3";

fetch(url)
.then((response) => response.json())
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.error("Error fetching data:", error);
});



// rgb(99, 48, 5)
// rgb(252, 186, 4)
// rgb(155, 74, 7)