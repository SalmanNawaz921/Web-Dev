//Declaring Variables
let nasheedIndex = 0;
let progressBar = document.getElementById("progressBar");
let nasheedElement = new Audio("audios/1.mp3");
let gif = document.getElementById("gif");
let nasheedValue = nasheedElement.value;
let forwardBtn = document.getElementById("forwardBtn");
let backwardBtn = document.getElementById("backwardBtn");
let playSong = Array.from(document.querySelectorAll(".playSong"));
let nameNasheed = document.getElementById("nasheedName");
// nasheedElement.play()
let playButton = document.getElementById("playBtn");
let nasheeds = [
  {
    nasheedName: "Ya Rehman Ya Rehman",
    pathFile: "/audios/1.mp3",
    pathThumbnail: "./thumbnails/img.jpg",
  },
  {
    nasheedName: "Mustafa Mustafa SAW",
    pathFile: "/audios/2.mp3",
    pathThumbnail: "./thumbnails/img1.jpg",
  },
  {
    nasheedName: "Jaane Rehmat",
    pathFile: "/audios/3.mp3",
    pathThumbnail: "./thumbnails/img2.jpg",
  },
  {
    nasheedName: "Salam Ya Omar R.A",
    pathFile: "/audios/4.mp3",
    pathThumbnail: "./thumbnails/img3.jpg",
  },
  {
    nasheedName: "Reith Tarish",
    pathFile: "/audios/5.mp3",
    pathThumbnail: "./thumbnails/img4.jpg",
  },
  {
    nasheedName: "Ahwaru Ahwaru",
    pathFile: "/audios/6.mp3",
    pathThumbnail: "./thumbnails/img5.jpg",
  },
];
playButton.addEventListener("click", () => {
  if (nasheedElement.paused || nasheedElement <= 0) {
    nasheedElement.play();
    playButton.classList.remove("fa-circle-play");
    playButton.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    nasheedElement.pause();
    playButton.classList.add("fa-circle-play");
    playButton.classList.remove("fa-circle-pause");
    gif.style.opacity = 0;
  }
});
//Events Listening
nasheedElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  progress = parseInt(
    (nasheedElement.currentTime / nasheedElement.duration) * 100
  );
  progressBar.value = progress;
});
progressBar.addEventListener("change", () => {
  nasheedElement.currentTime =
    (progressBar.value * nasheedElement.duration) / 100;
});

const playAll = () => {
  playSong.forEach((element) => {
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
    playButton.classList.add("fa-circle-play");
    playButton.classList.remove("fa-circle-pause");
    nasheedElement.pause();
    gif.style.opacity = 0;
  });
};

playSong.forEach((e) => {
  e.addEventListener("click", (p) => {
    if (nasheedElement.paused) {
      // console.log(p.target)
      nasheedIndex = parseInt(p.target.id);
      p.target.classList.remove("fa-circle-play");
      p.target.classList.add("fa-circle-pause");
      nasheedElement.src = `audios/${nasheedIndex + 1}.mp3`;
      nameNasheed.innerText = nasheeds[nasheedIndex].nasheedName;
      nasheedElement.currentTime = 0;
      nasheedElement.play();
      playButton.classList.remove("fa-circle-play");
      playButton.classList.add("fa-circle-pause");
      gif.style.opacity = 1;
    } else {
      playAll();
    }
  });
});
forwardBtn.addEventListener("click", (e) => {
  if (nasheedIndex >= 5) {
    nasheedIndex = 0;
  } else {
    nasheedIndex += 1;
  }
  nasheedElement.src = `audios/${nasheedIndex + 1}.mp3`;
  nasheedElement.currentTime = 0;
  nameNasheed.innerText = nasheeds[nasheedIndex].nasheedName;
  nasheedElement.play();
  playButton.classList.remove("fa-circle-play");
  playButton.classList.add("fa-circle-pause");
});
backwardBtn.addEventListener("click", (e) => {
  if (nasheedIndex <= 0) {
    nasheedIndex = 0;
  } else {
    nasheedIndex -= 1;
  }
  nasheedElement.src = `audios/${nasheedIndex + 1}.mp3`;
  nasheedElement.currentTime = 0;
  nameNasheed.innerText = nasheeds[nasheedIndex].nasheedName;
  nasheedElement.play();
  playButton.classList.remove("fa-circle-play");
  playButton.classList.add("fa-circle-pause");
});
