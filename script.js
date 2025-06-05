function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modal-nadella");
    if (modal && event.target === modal) {
        modal.style.display = "none";
    }
}