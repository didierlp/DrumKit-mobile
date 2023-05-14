window.alert("Crea un ritmo presionando los pads!!");

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
    const pad = document.querySelector(`.pad[data-key="${this.dataset.key}"]`);
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    pad.classList.add("playing");
  }
  
  function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
  }
  
  const pads = document.querySelectorAll(".pad");
  pads.forEach(pad => pad.addEventListener("click", playSound));
  pads.forEach(pad => pad.addEventListener("transitionend", removeTransition));
  
