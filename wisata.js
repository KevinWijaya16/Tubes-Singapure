document.addEventListener('DOMContentLoaded', function() {
          const scrollContainer = document.getElementById('scrollWisataLainnya');
          const btnLeft = document.getElementById('btnScrollLeft');
          const btnRight = document.getElementById('btnScrollRight');

          if (scrollContainer && btnLeft && btnRight) {
            btnLeft.addEventListener('click', function() {
              scrollContainer.scrollBy({ left: -324, behavior: 'smooth' });
            });
            btnRight.addEventListener('click', function() {
              scrollContainer.scrollBy({ left: 324, behavior: 'smooth' });
            });
          }
        });