const spinBtn = document.querySelector('.wheel__btn');
const wheel = document.querySelector('.wheel__spin');

const prizes = [
    { name: '3000 USDT + 165 FS', degrees: 45 * 0 }, //
    { name: '3000 USDT', degrees: 45 * 1 }, 
    { name: '165 FS', degrees: 45 * 2 }, 
    { name: 'NO', degrees: 45 * 3 }, 
    { name: '3000 USDT', degrees: 45 * 4 }, 
    { name: '3000 USDT + 165 FS', degrees: 45 * 5 }, 
    { name: '165 FS', degrees: 45 * 6 }, 
    { name: 'NO', degrees: 45 * 7 } 
];

spinBtn.addEventListener('click', () => {
    
    spinBtn.disabled = true;

    wheel.classList.remove('wheel--idle');
    setTimeout(() => {
        wheel.classList.add('wheel--spinning');

        const prize = prizes[5];

        const totalRotation = 360 * 5 + 180;

        wheel.style.transform = `rotate(${totalRotation}deg)`;

        setTimeout(() => {
            spinBtn.disabled = false;
        }, 5500);
    }, 0);
});