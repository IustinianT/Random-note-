var interval_ms = 1000;
function randomNote() {
    note_element = document.getElementById("note_generated");
    note_check = document.getElementById("note_check");
    notes = ["A", "B", "C", "D", "E", "F", "G"];
    if (note_check.checked) {
        note = notes[Math.floor(Math.random()*notes.length)];
        note_element.innerText = note;
    }
    setTimeout(randomNote, interval_ms);
}
setTimeout(randomNote, interval_ms);

function set_delay() {
    delay = document.getElementById("current_delay").value;
    interval_ms = delay * 1000;
    text_delay = document.getElementById("current_delay_text");
    text_delay.innerText = "Current delay: " + interval_ms/1000;
}
