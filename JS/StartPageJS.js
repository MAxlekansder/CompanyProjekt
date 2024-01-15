
function startPage() {
    return "Hello world!"
}

// alert(startPage());


function onClick() {
    alert("KNAPP!")
}

document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('.box-container');
    const boxes = document.querySelectorAll('.box');

    function checkSlide() {
        const slideInAt = window.scrollY + window.innerHeight;
        const sectionBottom = section.offsetTop + section.clientHeight;

        if (slideInAt > section.offsetTop && window.scrollY < sectionBottom) {
            boxes.forEach((box, index) => {
                // Add a delay based on the index to stagger the fade-in effect
                const delay = index * 300; // Adjust the delay as needed
                setTimeout(() => {
                    box.classList.add('slide-in');
                }, delay);
            });
        } else {
            boxes.forEach((box, index) => {
                box.classList.remove('slide-in');
            });
        }
    }

    window.addEventListener('scroll', checkSlide);
});
