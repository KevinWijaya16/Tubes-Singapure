document.addEventListener('DOMContentLoaded', function () {
  const scrollContainer = document.getElementById('scrollWisataLainnya');
  const btnLeft = document.getElementById('btnScrollLeft');
  const btnRight = document.getElementById('btnScrollRight');
  const btnLeftL = document.getElementById('btnScrollLeftLawat');
  const btnRightR = document.getElementById('btnScrollRightLawat');

  if (scrollContainer) {
    // Logika Tombol Geser Satu Persatu
    if (btnLeft && btnRight) {
      btnLeft.addEventListener('click', function () {
        scrollContainer.scrollBy({ left: -324, behavior: 'smooth' });
      });

      btnRight.addEventListener('click', function () {
        scrollContainer.scrollBy({ left: 324, behavior: 'smooth' });
      });
    }

    // Logika Tombol Langsung Pojok
    if (btnLeftL && btnRightR) {
      btnLeftL.addEventListener('click', function () {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      });

      btnRightR.addEventListener('click', function () {
        scrollContainer.scrollTo({ left: scrollContainer.scrollWidth, behavior: 'smooth' });
      });
    }

    // Update efek pudar
    const updateButtons = () => {
      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      
      const isAtStart = scrollContainer.scrollLeft <= 1;
      const isAtEnd = scrollContainer.scrollLeft >= maxScrollLeft - 1;

      if (btnLeft) {
        btnLeft.disabled = isAtStart;
        btnLeft.style.opacity = isAtStart ? '0.5' : '1';
        btnLeft.style.cursor = isAtStart ? 'default' : 'pointer';
      }
      if (btnLeftL) {
        btnLeftL.disabled = isAtStart;
        btnLeftL.style.opacity = isAtStart ? '0.5' : '1';
        btnLeftL.style.cursor = isAtStart ? 'default' : 'pointer';
      }

      if (btnRight) {
        btnRight.disabled = isAtEnd;
        btnRight.style.opacity = isAtEnd ? '0.5' : '1';
        btnRight.style.cursor = isAtEnd ? 'default' : 'pointer';
      }
      if (btnRightR) {
        btnRightR.disabled = isAtEnd;
        btnRightR.style.opacity = isAtEnd ? '0.5' : '1';
        btnRightR.style.cursor = isAtEnd ? 'default' : 'pointer';
      }
    };

    updateButtons();
    scrollContainer.addEventListener('scroll', updateButtons);
    window.addEventListener('resize', updateButtons);
  }
});