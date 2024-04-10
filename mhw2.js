function topFunction() {
    // Scorrimento fluido fino alla cima della pagina
    document.body.scrollTop = 0; // Per browser Safari
    document.documentElement.scrollTop = 0; // Per altri browser
  }
  
  // Mostra o nasconde il bottone "Torna in cima" in base allo scrolling
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("backToTopBtn").style.display = "block";
    } else {
      document.getElementById("backToTopBtn").style.display = "none";
    }
  }