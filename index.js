// Initialize pointer on page load
window.addEventListener('load', updatePointer);
window.addEventListener('resize', updatePointer); // reposition if window changes
window.scrollTo({ top: 0, behavior: "smooth" });


  // Save scroll position
  window.addEventListener("beforeunload", () => {
    sessionStorage.setItem("scrollY", window.scrollY);
  });

  // Restore scroll position
window.addEventListener("load", () => {
  const y = sessionStorage.getItem("scrollY");
  if (y !== null) {
    window.scrollTo({ top: parseInt(y), behavior: "smooth" });
  }
});

  function saveScroll() {
    sessionStorage.setItem("portfolioScroll", window.scrollY);
  }

  window.addEventListener("load", () => {
    const y = sessionStorage.getItem("portfolioScroll");
    if (y !== null) {
      window.scrollTo(0, parseInt(y));
    }
  });

const video = document.querySelector('.project-video');

if (video) {
  // Video exists → safe to use
  video.play().catch(err => {
    console.warn('Autoplay failed:', err);
  });
}


  