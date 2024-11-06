// script.js
function toggleContent(index) {
    const content = document.getElementById(`content${index + 1}`);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}