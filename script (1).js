document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Formun otomatik olarak gönderilmesini engeller
  
    // Formun içeriğini al
    var formData = new FormData(this);
  
    // Form verilerini JSON formatına dönüştür
    var jsonData = {};
    formData.forEach(function(value, key) {
      jsonData[key] = value;
    });
  
    // Formun gönderildiğine dair mesajı göster
    document.getElementById("successMessage").classList.remove("hidden");
  });
  
  // Mesajı kapatma düğmesine tıklandığında
  document.getElementById("closeMessage").addEventListener("click", function() {
    document.getElementById("successMessage").classList.add("hidden"); // Mesajı gizle
  });


  // Menüyü açıp kapatmak için işlev
function toggleMenu(element) {
    // Tıklanan menü öğesinin üstündeki menüyü seç
    const menu = element.parentElement.parentElement;
    
    // Seçilen menüyü açıp kapat
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
    } else {
      menu.classList.add('active');
    }
  }