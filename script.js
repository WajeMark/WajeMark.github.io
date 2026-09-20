const textToType = "IT-Network Administration Student.";
const typingElement = document.getElementById("typing-text");
let i = 0;

function typeWriter() {
    if (i < textToType.length) {
        typingElement.innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

setTimeout(typeWriter, 500);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var j = 0; j < reveals.length; j++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[j].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[j].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();

const interactiveBoxes = document.querySelectorAll('.interactive-box');
const modal = document.getElementById('info-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const closeModal = document.getElementById('close-modal');

interactiveBoxes.forEach(box => {
    box.addEventListener('click', () => {
        modalTitle.textContent = box.getAttribute('data-title');
        modalDesc.textContent = box.getAttribute('data-desc');
        modal.classList.remove('hidden');
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});
