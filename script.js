let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height =  sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                // document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// =======================untuk melewati "https://web3forms.com/success" ketika klik submit===============//


const contactForm = document.getElementById("contactform");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
        method: "POST",
        body: formData,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Or response.text() if the response isn't JSON
    })
    .then(() => {
        Swal.fire({
            title: "Success!",
            text: "Your message has been sent.",
            icon: "success"
        });
        contactForm.reset(); // Reset all form fields
    })
    .catch((error) => {
        Swal.fire({
            title: "Error!",
            text: "Error occurred: " + error.message,
            icon: "error"
        });
    });
});


// ==============================================================================================================

const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.skill-item');
const totalItems = items.length;

// Clone the first few items to create the seamless effect
for (let i = 0; i < 10; i++) {
    const clone = items[i].cloneNode(true);
    carousel.appendChild(clone);
}

carousel.addEventListener('animationiteration', () => {
    carousel.classList.toggle('reverse');
});


// document.addEventListener("DOMContentLoaded", function () {
//     const carousel = document.querySelector('.carousel');
//     const skillItems = document.querySelectorAll('.skill-item');
//     const totalItems = skillItems.length;
//     const itemWidth = skillItems[0].offsetWidth;
//     let currentIndex = 0; // Start at the first item
//     let isDragging = false;
//     let startPos = 0;
//     let currentTranslate = 0;
//     let prevTranslate = 0;
//     let animationId = 0;

//     // Set the initial position
//     carousel.style.transform = `translateX(${currentTranslate}px)`;

//     // Automatically move the carousel
//     function moveToNextSlide() {
//         currentIndex++;
//         if (currentIndex >= totalItems) {
//             // Reset to the first item with a gradual transition
//             currentIndex = 0;
//             carousel.style.transition = 'none'; // Disable transition for instant jump
//             currentTranslate = -currentIndex * itemWidth;
//             carousel.style.transform = `translateX(${currentTranslate}px)`;
//             requestAnimationFrame(() => {
//                 // Re-enable transition and gradually move back to the first item
//                 carousel.style.transition = 'transform 0.4s ease-in-out'; // Re-enable transition
//                 currentIndex++; // Move to the next slide after reset
//                 updateCarouselPosition(); // Position update for the next slide
//             });
//         } else {
//             updateCarouselPosition();
//         }
//     }

//     // Start the auto-slide
//     let autoSlide = setInterval(moveToNextSlide, 2000); // Adjust the speed as needed

//     // Stop auto slide on hover
//     carousel.addEventListener('mouseenter', () => {
//         clearInterval(autoSlide);
//     });

//     // Restart auto slide on mouse leave
//     carousel.addEventListener('mouseleave', () => {
//         autoSlide = setInterval(moveToNextSlide, 2000);
//     });

//     // Dragging functionality for manual control
//     carousel.addEventListener('mousedown', startDrag);
//     carousel.addEventListener('mouseup', endDrag);
//     carousel.addEventListener('mouseleave', endDrag);
//     carousel.addEventListener('mousemove', drag);

//     function startDrag(e) {
//         isDragging = true;
//         startPos = e.pageX;
//         carousel.style.transition = 'none';
//         animationId = requestAnimationFrame(animation);
//     }

//     function endDrag() {
//         isDragging = false;
//         cancelAnimationFrame(animationId);
//         const movedBy = currentTranslate - prevTranslate;
//         if (movedBy < -100 && currentIndex < totalItems - 1) {
//             currentIndex++;
//         } else if (movedBy > 100 && currentIndex > 0) {
//             currentIndex--;
//         }
//         setPositionByIndex();
//     }

//     function drag(e) {
//         if (isDragging) {
//             const currentPosition = e.pageX;
//             currentTranslate = prevTranslate + currentPosition - startPos;
//         }
//     }

//     function setPositionByIndex() {
//         currentTranslate = -currentIndex * itemWidth;
//         prevTranslate = currentTranslate;
//         carousel.style.transition = 'transform 0.4s ease-in-out';
//         carousel.style.transform = `translateX(${currentTranslate}px)`;
//     }

//     function updateCarouselPosition() {
//         currentTranslate = -currentIndex * itemWidth;
//         prevTranslate = currentTranslate;
//         carousel.style.transition = 'transform 0.4s ease-in-out';
//         carousel.style.transform = `translateX(${currentTranslate}px)`;
//     }

//     function animation() {
//         setCarouselPosition();
//         if (isDragging) requestAnimationFrame(animation);
//     }

//     function setCarouselPosition() {
//         carousel.style.transform = `translateX(${currentTranslate}px)`;
//     }
// });






