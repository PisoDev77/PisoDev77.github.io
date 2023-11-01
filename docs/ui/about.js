let orders = ['#laptop', '#book', '#cocktail'];

gsap.set('.move', { xPercent: -50, yPercent: -50, transfromOrigin: '50% 50%' });
const moveRect = () => {
    orders.forEach((order, idx) => {
        gsap.to(order, {
            duration: 2,
            scale: idx === 1 ? 2 : 1,
            motionPath: { path: '#path', start: 0.25 * idx, end: 0.2 + 0.3 * idx },
            ease: 'power3.out',
        });
    });
    orders = [orders[2], orders[0], orders[1]];
};
moveRect();

document.getElementById('myBtn').addEventListener('click', () => {
    moveRect();
});
