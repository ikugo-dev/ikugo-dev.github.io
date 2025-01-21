// // scroll offset to account for navbar height
// document.addEventListener('DOMContentLoaded', function() {
//     const navbarHeight = document.querySelector('nav').offsetHeight;
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//             e.preventDefault();
//             const targetId = this.getAttribute('href').substring(1);
//             const targetElement = document.getElementById(targetId);
//             if (targetElement) {
//                 window.scrollTo({
//                     top: targetElement.offsetTop - navbarHeight,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
// });

// smooth scroll for navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});
