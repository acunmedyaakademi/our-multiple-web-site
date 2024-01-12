document.addEventListener('DOMContentLoaded', function () {
    // Sayfa yüklendiğinde localStorage'dan veriyi al ve görüntüle
    const kayitliVeriler = JSON.parse(localStorage.getItem('kayitliVeriler')) || [];

    kayitliVeriler.forEach(function (formData) {
        gosterKayitliVeri(formData);
    });

    // Submit butonuna tıklandığında veriyi kaydet ve ekrana göster
    document.getElementById('submitBtn').addEventListener('click', function () {
        veriyiKaydet();
    });
});

function veriyiKaydet() {
    let kullaniciAdi = document.getElementById('kullaniciAdi').value;
    let sifre = document.getElementById('sifre').value;
    let email = document.getElementById('email').value;
    let kullaniciMesaji = document.getElementById('kullaniciMesaji').value;

    if (kullaniciAdi === '' || sifre === '' || email === '' || kullaniciMesaji === '') {
        alert('Lütfen tüm alanları doldurun.');
        return;
    }

    const formData = {
        'kullaniciAdi': kullaniciAdi,
        'kullaniciMesaji': kullaniciMesaji
    };

    // localStorage'a kaydetme işlemi
    kaydetLocalStorage(formData);

    // Yeniden yüklenen veriyi ekrana göster
    gosterKayitliVeri(formData);

    document.getElementById('kullaniciAdi').value = '';
    document.getElementById('kullaniciMesaji').value = '';
}

function kaydetLocalStorage(formData) {
    // localStorage'da daha önce kaydedilmiş verileri al
    let kayitliVeriler = JSON.parse(localStorage.getItem('kayitliVeriler')) || [];

    // Yeni veriyi ekle
    kayitliVeriler.push(formData);

    // localStorage'a güncellenmiş veriyi tekrar kaydet
    localStorage.setItem('kayitliVeriler', JSON.stringify(kayitliVeriler));
}

function gosterKayitliVeri(formData) {
    const veriGosterDiv = document.getElementById('veriGoster');

    const veriHTML = `
        <div>
            <p><strong>Kullanıcı Adı:</strong> ${formData.kullaniciAdi}</p>
            <p><strong>Mesaj:</strong> ${formData.kullaniciMesaji}</p>
            <button onclick="silVeriyi(this, '${formData.kullaniciAdi}')">Sil</button>
        </div>
    `;

    const yeniElement = document.createElement('div');
    yeniElement.innerHTML = veriHTML;

    veriGosterDiv.appendChild(yeniElement);
}

function silVeriyi(button, kullaniciAdi) {
    // Sil butonunun üstündeki div elementini bul
    const silinecekElement = button.parentElement;

    // Eğer bulunduysa, bu elementi ekrandan kaldır
    if (silinecekElement) {
        silinecekElement.remove();

        // localStorage'dan veriyi silme
        let kayitliVeriler = JSON.parse(localStorage.getItem('kayitliVeriler')) || [];

        kayitliVeriler = kayitliVeriler.filter(formData => formData.kullaniciAdi !== kullaniciAdi);
        localStorage.setItem('kayitliVeriler', JSON.stringify(kayitliVeriler));
    }
}
