// let tl = gsap.timeline();

// tl.to(
//     '.box',
//     {
//         duration: 2,
//         scale: 0,
//         y: 40,
//         ease: 'power1.inOut',
//         stagger: {
//             grid: [7, 15],
//             from: 'random',
//             amount: 1.5,
//         },
//     },
//     1
// );
// tl.to('#home > .welcome', { duration: 1, text: 'Welcome to my Portfolio' }, 2);
// tl.to('#home > .hello', { duration: 1.5, text: 'Hello !!' }, 3);
// tl.to(
//     '#home > .sentence',
//     {
//         duration: 1.5,
//         text: 'I am Piso who wants to be front-end developer',
//     },
//     '<'
// );

let isOpenMenu = false;

let openMenuTl = gsap.timeline();
let closeMenuTl = gsap.timeline();

document.getElementById('menu-dropdwon-btn').addEventListener('click', (e) => {
    // e.target.nextElementSibling.classList.toggle('hidden');
    isOpenMenu = !isOpenMenu;

    if (isOpenMenu) {
        openMenuTl.to('header > nav', {
            duration: 0.5,
            scaleY: isOpenMenu ? 1 : 0,
            ease: 'steps(12)',
        });
        openMenuTl.to('.navItem', {
            opacity: isOpenMenu ? 1 : 0,
            ease: 'power1.out',
            stagger: 0.1,
        });
    } else {
        closeMenuTl.to('.navItem', {
            opacity: isOpenMenu ? 1 : 0,
            ease: 'power1.out',
            stagger: 0.1,
        });
        closeMenuTl.to('header > nav', {
            duration: 0.5,
            scaleY: isOpenMenu ? 1 : 0,
            ease: 'steps(12)',
        });
    }
});

document.querySelector('header > nav').addEventListener('click', (e) => {
    e.preventDefault();
    const { path } = e.target.dataset;
    if (!path) return;

    gsap.to(window, {
        duration: 0.5,
        scrollTo: { y: '#' + path, offsetY: document.querySelector('header').offsetHeight },
    });
});
document.getElementById('scrollToTop').addEventListener('click', () => {
    gsap.to(window, { duration: 0.5, scrollTo: '#main' });
});
