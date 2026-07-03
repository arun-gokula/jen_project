// Live clock
function updateClock() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Random background color changer
const colors = [
    'linear-gradient(135deg, #1e3c72, #2a5298)',
    'linear-gradient(135deg, #ff512f, #dd2476)',
    'linear-gradient(135deg, #11998e, #38ef7d)',
    'linear-gradient(135deg, #654ea3, #eaafc8)',
    'linear-gradient(135deg, #232526, #414345)'
];

document.getElementById('colorBtn').addEventListener('click', () => {
    const random = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = random;
});

// Click counter
let count = 0;
document.getElementById('counterBtn').addEventListener('click', () => {
    count++;
    document.getElementById('count').textContent = count;

    const heading = document.getElementById('heading');
    heading.style.transform = 'scale(1.1)';
    setTimeout(() => heading.style.transform = 'scale(1)', 150);
});