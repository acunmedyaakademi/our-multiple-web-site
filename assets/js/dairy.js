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
        diaryNotes.push(newNote);
  
        // Günlük notlarını locale kaydet
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
        noteDiv.textContent = diaryNotes[i];
  
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
  
        // Div'e sil butonunu ekle
        noteDiv.appendChild(deleteBtn);
  
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
  });
  