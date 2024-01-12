document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitBtn').addEventListener('click', veriyiKaydet);
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

    gosterKayitliVeri(formData);

    document.getElementById('kullaniciAdi').value = '';
    document.getElementById('kullaniciMesaji').value = '';
}

function gosterKayitliVeri(formData) {
    const veriGosterDiv = document.getElementById('veriGoster');

    const veriHTML = `
        <p><strong>Kullanıcı Adı:</strong> ${formData.kullaniciAdi}</p>
        <p><strong>Mesaj:</strong> ${formData.kullaniciMesaji}</p>
    `;

    veriGosterDiv.innerHTML = veriHTML;
}
