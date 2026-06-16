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

    // ==========================================
    // LOGIKA MEMORI URL UNTUK SEMUA MODAL
    // ==========================================
    
    // 1. Cek apakah ada Hash (contoh: #modalMRT) di URL saat halaman dimuat
    if (window.location.hash) {
      const hash = window.location.hash;
      const targetModal = document.querySelector(hash);
      
      // Jika elemen dengan hash tersebut ada dan merupakan modal, buka otomatis
      if (targetModal && targetModal.classList.contains('modal')) {
        const myModal = new bootstrap.Modal(targetModal);
        myModal.show();
      }
    }

    // 2. Tambahkan event listener ke SEMUA modal yang ada di halaman ini
    const allModals = document.querySelectorAll('.modal');
    allModals.forEach(function (modal) {
      
      // Saat modal apa pun dibuka, tambahkan ID-nya ke URL
      modal.addEventListener('show.bs.modal', function () {
        window.history.pushState(null, null, '#' + modal.id);
      });

      // Saat modal ditutup, bersihkan URL agar rapi kembali
      modal.addEventListener('hidden.bs.modal', function () {
        window.history.pushState(null, null, window.location.pathname);
      });
      
    });

    updateButtons();
    scrollContainer.addEventListener('scroll', updateButtons);
    window.addEventListener('resize', updateButtons);
  }
});