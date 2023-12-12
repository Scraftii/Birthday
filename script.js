const innerPolygon = document.getElementById("inner-polygon");
const outer = document.getElementById("outer");
const closeBtn = document.getElementById("close-btn");
const message1 = document.getElementById("message-1");
const message2 = document.getElementById("message-2");
const cakeBtn = document.getElementById("cake-btn");
const pngImage = document.getElementById("png-image");


function toggleEnvelope() {
  
  innerPolygon.classList.toggle("inner-open");
  outer.classList.toggle("outer-open");
  cakeBtn.classList.toggle("hide");
  closeBtn.classList.toggle("show");
  message1.classList.toggle("hide");
  message2.classList.toggle("show");
  pngImage.classList.toggle("show");
}

pngImage.addEventListener("onmouseover", () => {
  const pngImageRect = pngImage.getBoundingClientRect();
  const maxX = window.innerWidth - pngImageRect.width;
  const maxY = window.innerHeight - pngImageRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  pngImage.style.left = randomX + "px";
  pngImage.style.top = randomY + "px";
});

