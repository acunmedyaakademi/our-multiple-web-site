document.addEventListener("DOMContentLoaded", function () {
    // DOM yüklendiğinde çalışacak kodlar
  
    // Günlük notlarını depolamak için bir dizi oluştur
    let diaryNotes = getDiaryNotesFromLocalStorage() || [];
  
    // Gerekli DOM öğelerini seç
    const dairyNoteTextarea = document.getElementById("dairyNote");
    const addBtn = document.getElementById("addBtn");
    const cardsContainer = document.querySelector(".cards");
  
    // Gönder düğmesine tıklandığında yeni günlük notu ekle
    addBtn.addEventListener("click", function () {
      // Textarea'dan notu al
      const newNote = dairyNoteTextarea.value;
  
      // Not boş değilse ekle
      if (newNote.trim() !== "") {
        // Notu diziye ekle
        diaryNotes.push({
          text: newNote,
          date: getCurrentDateTime(),
        });
  
        // Günlük notları ters sıraya çevir ve locale kaydet
        diaryNotes.reverse();
        saveDiaryNotesToLocalStorage(diaryNotes);
  
        // Günlük notlarını gösteren fonksiyonu çağır
        displayDiaryNotes();
  
        // Textarea'yı temizle
        dairyNoteTextarea.value = "";
      }
    });
  
    // Günlük notlarını sayfada gösteren fonksiyon
    function displayDiaryNotes() {
      // Cards bölgesini temizle
      cardsContainer.innerHTML = "";
  
      // Her bir günlük notunu döngü ile gez
      for (let i = 0; i < diaryNotes.length; i++) {
        // Yeni bir div oluştur
        const noteDiv = document.createElement("div");
        noteDiv.classList.add("card");
  
        // Notu içine yerleştir
        noteDiv.textContent = diaryNotes[i].text;
  
        // Tarih bilgisini gösteren bir span oluştur
        const dateSpan = document.createElement("span");
        dateSpan.textContent = "Tarih: " + diaryNotes[i].date;
  
        // Sil butonunu oluştur
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Sil";
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.addEventListener("click", function () {
          // Sil butonuna tıklandığında notu ekrandan ve locale'den sil
          diaryNotes.splice(i, 1);
          saveDiaryNotesToLocalStorage(diaryNotes);
          displayDiaryNotes();
        });
  
        // Düzenle butonunu oluştur
        const editBtn = document.createElement("button");
        editBtn.textContent = "Düzenle";
        editBtn.classList.add("editBtn");
        editBtn.addEventListener("click", function () {
          const editedNote = prompt("Notunuzu düzenleyin:", diaryNotes[i].text);
          if (editedNote !== null) {
            diaryNotes[i].text = editedNote;
            diaryNotes[i].date = getCurrentDateTime();
            saveDiaryNotesToLocalStorage(diaryNotes);
            displayDiaryNotes();
          }
        });
  
        // Div'e tarih bilgisini ve butonları ekle
        noteDiv.appendChild(dateSpan);
        noteDiv.appendChild(deleteBtn);
        noteDiv.appendChild(editBtn);
  
        // Cards bölgesine ekle
        cardsContainer.appendChild(noteDiv);
      }
    }
  
    // Locale'dan günlük notları al
    function getDiaryNotesFromLocalStorage() {
      const storedNotes = localStorage.getItem("diaryNotes");
      return storedNotes ? JSON.parse(storedNotes) : null;
    }
  
    // Günlük notlarını locale kaydet
    function saveDiaryNotesToLocalStorage(notes) {
      localStorage.setItem("diaryNotes", JSON.stringify(notes));
    }
  
    // Sayfa yüklendiğinde günlük notları göster
    displayDiaryNotes();
  
    // Şu anki tarih ve saat bilgisini döndüren yardımcı fonksiyon
    function getCurrentDateTime() {
      const now = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
      return now.toLocaleDateString('tr-TR', options);
    }
  });
  