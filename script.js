document.addEventListener('DOMContentLoaded', function() {
    let title = document.getElementById("title");
    let note = document.getElementById("note");
    let status = document.getElementById("status");

    function updateUI() {
        title.textContent = browser.i18n.getMessage("title");
        note.placeholder = browser.i18n.getMessage("placeholder");
        console.log("Textes mis à jour : ", title.textContent, note.placeholder); // Diagnostic
    }

    updateUI();

    browser.storage.local.get("note", function(data) {
        if (data.note) {
            note.value = data.note;
        }
        console.log("Note chargée : ", data.note); // Diagnostic
    });

    note.addEventListener("input", function() {
        browser.storage.local.set({note: note.value}, function() {
            status.textContent = browser.i18n.getMessage("saved");
            setTimeout(function() {
                status.textContent = "";
            }, 2000);
        });
    });
});
