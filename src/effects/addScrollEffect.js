export default function addScrollEffect() {
  document.addEventListener('wheel', scroll, { passive: false })
}

function scroll(event) {
  event.preventDefault();
  if (event.wheelDelta > 0) {
    window.scroll({
      top: window.pageYOffset - window.innerHeight,
      behavior: 'smooth'
    })
  }
  if (event.wheelDelta < 0) {
    window.scroll({
      top: window.pageYOffset + window.innerHeight,
      behavior: 'smooth'
    })
  }
}