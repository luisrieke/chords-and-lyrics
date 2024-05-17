let scrollSpeed = 50;
let scrollInterval;
let isScrolling = false;

function toggleScroll() {
  if (isScrolling) {
    stopScroll();
  } else {
    startScroll();
  }
}

function startScroll() {
  clearInterval(scrollInterval);
  scrollInterval = setInterval(() => {
    window.scrollBy(0, 1);
  }, scrollSpeed);
  document.getElementById("scrollButton").innerText = "Stopp";
  isScrolling = true;
}

function stopScroll() {
  clearInterval(scrollInterval);
  document.getElementById("scrollButton").innerText = "Scroll";
  isScrolling = false;
}

function increaseSpeed() {
  if (scrollSpeed > 10) {
    scrollSpeed -= 10;
    if (isScrolling) {
      startScroll();
    }
  }
}

function decreaseSpeed() {
  scrollSpeed += 10;
  if (isScrolling) {
    startScroll();
  }
}

function toggleMode() {
  const body = document.body;
  const modeButton = document.getElementById("modeButton");
  if (body.classList.contains("day-mode")) {
    body.classList.remove("day-mode");
    modeButton.innerText = "🌞";
  } else {
    body.classList.add("day-mode");
    modeButton.innerText = "🌜";
  }
}
