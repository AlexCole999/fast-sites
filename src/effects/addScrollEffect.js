export default function addScrollEffect() {
  document.addEventListener('wheel', scroll, { passive: false })
}

function scroll(event) {
  event.preventDefault();
  if (event.wheelDelta > 0) {
    if (window.pageYOffset > window.innerHeight * 2.5 && window.pageYOffset < window.innerHeight * 3.5) {
      window.scroll({
        top: window.innerHeight * 2,
        behavior: 'smooth'
      })
    }
    if (window.pageYOffset > window.innerHeight * 1.5 && window.pageYOffset < window.innerHeight * 2.5) {
      window.scroll({
        top: window.innerHeight * 1,
        behavior: 'smooth'
      })
    }
    if (window.pageYOffset > window.innerHeight * 0.5 && window.pageYOffset < window.innerHeight * 1.5) {
      window.scroll({
        top: window.innerHeight * 0,
        behavior: 'smooth'
      })
    }
  }
  if (event.wheelDelta < 0) {
    console.log(1);
    if (window.pageYOffset >= window.innerHeight * 0 && window.pageYOffset < window.innerHeight * 1) {
      window.scroll({
        top: window.innerHeight * 1,
        behavior: 'smooth'
      })
    }
    if (window.pageYOffset >= window.innerHeight * 1 && window.pageYOffset < window.innerHeight * 2) {
      window.scroll({
        top: window.innerHeight * 2,
        behavior: 'smooth'
      })
    }
    if (window.pageYOffset >= window.innerHeight * 2 && window.pageYOffset < window.innerHeight * 3) {
      window.scroll({
        top: window.innerHeight * 3,
        behavior: 'smooth'
      })
    }
  }
}