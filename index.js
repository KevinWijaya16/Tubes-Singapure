// const cursor = document.querySelector('.cursor');

// if (cursor) {
//   document.addEventListener('mousemove', (e) => {
//     cursor.style.top = e.clientY + 'px';
//     cursor.style.left = e.clientX + 'px';
//   });
// }

const elemenTahun = document.getElementById('tahun-automatic');
if (elemenTahun) {
  elemenTahun.textContent = new Date().getFullYear();
}
function JamDigitalSingapura() {
  const elemenJam = document.getElementById('jam-singapura');
  const elemenTanggal = document.getElementById('tanggal-singapura');
  
  if (elemenJam) {
    // Pengaturan zona waktu khusus untuk Asia/Singapore
    const opsiWaktu = { 
      timeZone: 'Asia/Singapore', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit', 
      hour12: false // Ubah ke true jika ingin format AM/PM
    };
    const SGT = new Intl.DateTimeFormat('en-US', opsiWaktu).format(new Date());
    elemenJam.textContent = SGT.replace(/\//g, ' : '); // Menambahkan spasi di sekitar titik dua
  }
  if (elemenTanggal) {
    const opsiTanggal = { 
      timeZone: 'Asia/Singapore', 
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    };
    const tanggalSGT = new Intl.DateTimeFormat('en-US', opsiTanggal).format(new Date());
    elemenTanggal.textContent = tanggalSGT.replace(/\//g, ' - '); // Menambahkan spasi di sekitar tanda hubung
  }
}
setInterval(JamDigitalSingapura, 1000);
JamDigitalSingapura(); // Panggil sekali untuk menampilkan jam segera saat halaman dimuat

// Memastikan semua elemen halaman sudah siap sebelum skrip berjalan
document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Ambil semua link pilihan di dalam dropdown (Tionghoa, Melayu, dll)
    const dropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item');
    
    dropdownItems.forEach(function (item) {
        item.addEventListener('click', function () {
            
            // 2. Cari tombol dropdown utamanya ("Budaya")
            const dropdownEl = document.querySelector('.dropdown-toggle');
            // Ambil fungsi bawaan Bootstrap dari tombol tersebut
            const bootstrapDropdown = bootstrap.Dropdown.getInstance(dropdownEl);
            
            // 3. Perintahkan Bootstrap untuk langsung menutup menu dropdown-nya
            if (bootstrapDropdown) {
                bootstrapDropdown.hide();
            }

            // 4. KHUSUS LAYAR HP: Jika menu navbar sedang terbuka, otomatis tutup juga
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