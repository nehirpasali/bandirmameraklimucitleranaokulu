<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Anaokulu Web Sitesi</title>
  <link rel="stylesheet" href="style.css">
  <script defer src="script.js"></script>
</head>
<body>
  <header>
    <div class="logo">
      <img src="meraklı mucit logo.jpg" alt="Logo">
    </div>
    <div class="header-content">
      <h1>MERAKLI MUCİTLER ANAOKULU</h1>
      <nav>
        <ul class="menu">
          <li>
            <a href="#">Okulumuz</a>
            <ul class="submenu">
              <li><a href="#" data-content="kurucumuz">Kurucumuz</a></li>
              <li><a href="#" data-content="kadromuz">Kadromuz</a></li>
              <li><a href="#" data-content="okulHakkinda">Okulumuz Hakkında</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Sınıflar</a>
            <ul class="submenu">
              <li><a href="#" data-content="sabahci">Sabahçı</a></li>
              <li><a href="#" data-content="oglenci">Öğlenci</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="container">
    <section class="slayt">
      <img src="slayt1.jpg" class="slide active" alt="Slayt 1">
      <img src="slayt2.jpg" class="slide" alt="Slayt 2">
      <img src="slayt3.jpg" class="slide" alt="Slayt 3">
    </section>

    <section id="icerik"></section>

    <section id="galeri">
      <h2>Öğrenci Galerisi</h2>
      <div class="gallery">
        <img src="galeri1.jpg" alt="Galeri 1">
        <img src="galeri2.jpg" alt="Galeri 2">
        <img src="galeri3.jpg" alt="Galeri 3">
      </div>
    </section>

    <section id="iletisim">
      <h2>İletişim Formu</h2>
      <form>
        <input type="text" name="isim" placeholder="Adınız Soyadınız" required>
        <input type="email" name="email" placeholder="E-posta" required>
        <textarea name="mesaj" rows="5" placeholder="Mesajınız"></textarea>
        <button type="submit">Gönder</button>
      </form>
    </section>
  </main>

  <footer>
    <p>İletişim: 0 (546) 249 02 44</p>
    <p>Adres: Yeni, Kıbrıs Cd. No:9 D:A, 10200 Bandırma/Balıkesir</p>
    <iframe 
      src="https://www.google.com/maps?q=Yeni,+Kıbrıs+Cd.+No:9+D:A,+10200+Bandırma/Balıkesir&output=embed" 
      allowfullscreen="" 
      loading="lazy">
    </iframe>
    <p>Made by Nehir PAŞALI</p>
  </footer>
        const slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
  index = (index + 1) % slides.length;
}

showSlide();
setInterval(showSlide, 3000);

</body>
</html>
