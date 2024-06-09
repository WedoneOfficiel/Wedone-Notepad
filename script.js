document.addEventListener('DOMContentLoaded', function() {
    let title = document.getElementById("title");
    let note = document.getElementById("note");

    function updateUI() {
        title.textContent = browser.i18n.getMessage("title");
        note.placeholder = browser.i18n.getMessage("placeholder");
        console.log("Textes mis à jour : ", title.textContent, note.placeholder); // Diagnostic
    }

    updateUI();

    browser.storage.sync.get("note", function(data) {
        if (data.note) {
            note.value = data.note;
        }
        console.log("Note chargée : ", data.note); // Diagnostic
    });

    note.addEventListener("input", function() {
        browser.storage.sync.set({note: note.value});
    });
});
