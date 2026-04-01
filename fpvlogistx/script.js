// Калькулятор стоимости
const weightInput = document.getElementById('weight');
const distanceInput = document.getElementById('distance');
const prioritySelect = document.getElementById('priority');
const calcBtn = document.getElementById('calcPriceBtn');
const priceDisplay = document.getElementById('priceDisplay');

function calculatePrice() {
    let weight = parseFloat(weightInput.value);
    let distance = parseFloat(distanceInput.value);
    let priority = prioritySelect.value;

    if (isNaN(weight) || weight <= 0) weight = 0.5;
    if (isNaN(distance) || distance <= 0) distance = 1;

    let basePrice = 250;
    let weightCost = weight * 190;
    let distanceCost = distance * 45;
    let priorityMultiplier = 1;
    if (priority === 'express') priorityMultiplier = 1.3;
    if (priority === 'instant') priorityMultiplier = 1.8;

    let total = (basePrice + weightCost + distanceCost) * priorityMultiplier;
    total = Math.round(total);
    priceDisplay.innerHTML = `💰 Ориентировочная стоимость: <span>${total} ₽</span> <br> <small style="font-size:0.9rem;">включая страхование и упаковку</small>`;
}

calcBtn.addEventListener('click', calculatePrice);
window.addEventListener('load', calculatePrice);

// Плавный скролл для кнопок
document.getElementById('calcScrollBtn')?.addEventListener('click', () => {
    document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('orderBtn')?.addEventListener('click', () => {
    alert('📦 Спасибо за интерес! Наш оператор свяжется с вами в ближайшее время. (Демо-режим)');
});
document.getElementById('contactBtn')?.addEventListener('click', () => {
    alert('📞 Звоните: +7 (495) 123-45-67 или пишите в Telegram @fpvlogistx_support');
});

// Анимация появления на скролле
const cards = document.querySelectorAll('.feature-card, .review-card, .zone-item');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Динамическое обновление при изменении полей
weightInput.addEventListener('input', calculatePrice);
distanceInput.addEventListener('input', calculatePrice);
prioritySelect.addEventListener('change', calculatePrice);
