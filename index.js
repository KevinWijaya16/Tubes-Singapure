// cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

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
    elemenTanggal.textContent = tanggalSGT.replace(/\./g, ' - '); // Menambahkan spasi di sekitar tanda hubung
  }
}
setInterval(JamDigitalSingapura, 1000);
JamDigitalSingapura(); // Panggil sekali untuk menampilkan jam segera saat halaman dimuat