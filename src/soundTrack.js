const audioByStep = "./track.mp3";
const player = new Audio(audioByStep);
window.addEventListener("click", () => {
  player.volume = 0.3;
  player.play();
  player.addEventListener("ended", () => {
    player.play();
  });
});
