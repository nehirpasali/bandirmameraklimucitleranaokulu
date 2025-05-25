document.addEventListener("DOMContentLoaded", () => {
  const contentMap = {
    kurucumuz: "<h2>Kurucumuz</h2><p>Kurucumuzun bilgileri burada yer alacak.</p>",
    kadromuz: "<h2>Kadromuz</h2><p>Öğretmen ve personel kadromuz burada tanıtılacak.</p>",
    okulHakkinda: "<h2>Okulumuz Hakkında</h2><p>Okulun misyonu, vizyonu ve detayları burada olacak.</p>",
    sabahci: "<h2>Sabahçı Sınıfı</h2><p>Sabahçı sınıfının etkinlikleri ve saatleri burada olacak.</p>",
    oglenci: "<h2>Öğlenci Sınıfı</h2><p>Öğlenci sınıfına dair bilgiler burada olacak.</p>"
  };

  const submenuLinks = document.querySelectorAll(".submenu a");
  const icerik = document.getElementById("icerik");

  submenuLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const contentKey = link.getAttribute("data-content");
      icerik.innerHTML = contentMap[contentKey] || "<p>İçerik bulunamadı.</p>";
    });
  });

  // Ana menü başlığına tıklanınca içerik değişmesin diye olay engelleniyor
  const anaMenuBasliklari = document.querySelectorAll(".menu > li > a");
  anaMenuBasliklari.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Alt başlığa tıklamadan içerik gelmesini engelle
    });
  });
});
