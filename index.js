const cursor = document.querySelector('.cursor');

if (cursor) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
  });
}

const elemenTahun = document.getElementById('tahun-automatic');
if (elemenTahun) {
  elemenTahun.textContent = new Date().getFullYear();
}
function JamDigitalSingapura() {
  const elemenJam = document.getElementById('jam-singapura');
  const elemenTanggal = document.getElementById('tanggal-singapura');
  
  if (elemenJam) {
    const opsiWaktu = { 
      timeZone: 'Asia/Singapore', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit', 
      hour12: false
    };
    const SGT = new Intl.DateTimeFormat('en-US', opsiWaktu).format(new Date());
    elemenJam.textContent = SGT.replace(/\//g, ' : ');
  }
  if (elemenTanggal) {
    const opsiTanggal = { 
      timeZone: 'Asia/Singapore', 
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    };
    const tanggalSGT = new Intl.DateTimeFormat('en-US', opsiTanggal).format(new Date());
    elemenTanggal.textContent = tanggalSGT.replace(/\//g, ' - ');
  }
}
setInterval(JamDigitalSingapura, 1000);
JamDigitalSingapura();

document.addEventListener("DOMContentLoaded", function () {
    
    const dropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item');
    
    dropdownItems.forEach(function (item) {
        item.addEventListener('click', function () {
            
            const dropdownEl = document.querySelector('.dropdown-toggle');
            const bootstrapDropdown = bootstrap.Dropdown.getInstance(dropdownEl);
            
            if (bootstrapDropdown) {
                bootstrapDropdown.hide();
            }

            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bootstrapCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bootstrapCollapse) {
                    bootstrapCollapse.hide();
                }
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let halamanSekarang = window.location.pathname.split("/").pop();

    if (halamanSekarang === "") {
        halamanSekarang = "index.html";
    }

    const navLink = document.querySelectorAll(".navbar-nav .nav-link");

    navLink.forEach(link => {
        let linkHalaman = link.getAttribute("href");

        if (linkHalaman === halamanSekarang) {
            link.classList.add("active");
        }
    });
});