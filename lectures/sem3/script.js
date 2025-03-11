const initialData = [
    { product: "Apple iPhone 13", reviews: ["Отличный телефон!", "Быстрая работа, качественная камера.", "Долго держит заряд.", "Советую всем!", "Прекрасный дизайн."] },
    { product: "Samsung Galaxy S21", reviews: ["Лучший смартфон на рынке!", "Классная камера.", "Быстрая зарядка.", "Удобный интерфейс.", "Стильный внешний вид."] },
    { product: "Xiaomi Mi 11", reviews: ["Отличное соотношение цены и качества.", "Крутая камера.", "Быстрая работа.", "Долго держит заряд.", "Рекомендую!"] },
    { product: "OnePlus 9", reviews: ["Прекрасный телефон!", "Отличная производительность.", "Быстрая зарядка.", "Хорошая камера.", "Стильный дизайн."] },
    { product: "Google Pixel 6", reviews: ["Отличная камера!", "Чистый Android.", "Быстрая работа.", "Советую всем.", "Классный дизайн."] },
    { product: "iPad Pro", reviews: ["Лучший планшет на рынке!", "Супер производительность.", "Отличная камера.", "Советую для работы.", "Классный экран."] },
    { product: "Samsung Galaxy Tab S7", reviews: ["Отличный планшет!", "Классный экран.", "Быстрая работа.", "Хороший аккумулятор.", "Рекомендую!"] },
    { product: "Lenovo Tab P11", reviews: ["Хороший планшет за свою цену.", "Удобный в использовании.", "Долго держит заряд.", "Классный экран.", "Подходит для работы."] },
    { product: "Microsoft Surface Pro 7", reviews: ["Отличный планшет для работы!", "Удобный интерфейс.", "Быстрая работа.", "Классная клавиатура.", "Рекомендую!"] },
    { product: "Huawei MatePad Pro", reviews: ["Отличный планшет!", "Классный экран.", "Быстрая работа.", "Советую для работы.", "Хорошая камера."] },
    { product: "Apple Watch Series 6", reviews: ["Лучшие смарт-часы!", "Удобный интерфейс.", "Долго держит заряд.", "Отличный дизайн.", "Много полезных функций."] },
    { product: "Samsung Galaxy Watch 4", reviews: ["Отличные часы!", "Классный экран.", "Быстрая работа.", "Хорошая батарея.", "Советую!"] },
    { product: "Fitbit Versa 3", reviews: ["Отличные фитнес-часы!", "Удобный интерфейс.", "Долгое время работы.", "Классные функции.", "Рекомендую!"] },
    { product: "Garmin Venu 2", reviews: ["Отличные смарт-часы для спорта!", "Долго держит заряд.", "Классный экран.", "Много функций.", "Советую!"] },
    { product: "Amazfit GTS 2", reviews: ["Хорошие часы за свою цену.", "Много функций.", "Удобный интерфейс.", "Долго держит заряд.", "Классный дизайн."] },
    { product: "Xiaomi Mi Band 6", reviews: ["Отличный фитнес-браслет!", "Долгое время работы.", "Удобный интерфейс.", "Много функций.", "Советую!"] },
    { product: "Sony WH-1000XM4", reviews: ["Лучшие наушники!", "Отличное качество звука.", "Долгое время работы.", "Удобные в носке.", "Советую!"] },
    { product: "Bose QuietComfort 35 II", reviews: ["Отличные наушники для путешествий!", "Хорошая шумоизоляция.", "Комфортные.", "Отличное качество звука.", "Рекомендую!"] },
    { product: "Apple AirPods Pro", reviews: ["Отличные беспроводные наушники!", "Классное качество звука.", "Удобные в носке.", "Долго держат заряд.", "Советую!"] },
];

// Сохранение начальных данных в LocalStorage
function initializeReviews() {
    if (!localStorage.getItem('reviews')) {
        localStorage.setItem('reviews', JSON.stringify(initialData));
    }
}

// Функция для отображения списка продуктов
function displayProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Очистка списка продуктов

    const reviews = JSON.parse(localStorage.getItem('reviews'));
    reviews.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `<strong>${product.product}</strong> <button onclick="showReviews('${product.product}')">Показать отзывы</button>`;
        productList.appendChild(productElement);
    });
}

// Функция для добавления отзыва
function addReview(productName, reviewText) {
    if (reviewText.length < 50 || reviewText.length > 500) {
        alert('Длина отзыва должна быть от 50 до 500 символов.');
        return;
    }

    const reviews = JSON.parse(localStorage.getItem('reviews'));
    const product = reviews.find(p => p.product === productName);
    if (product) {
        product.reviews.push(reviewText);
        localStorage.setItem('reviews', JSON.stringify(reviews));
        displayProducts(); // Обновляем отображение продуктов
    }
}

// Функция для показа отзывов
function showReviews(productName) {
    const reviews = JSON.parse(localStorage.getItem('reviews'));
    const product = reviews.find(p => p.product === productName);
    
    if (product) {
        const reviewList = document.createElement('div');
        reviewList.innerHTML = `<h2>Отзывы о ${product.product}</h2>`;
        
        product.reviews.forEach((review, index) => {
            const reviewElement = document.createElement('div');
            reviewElement.className = 'review';
            reviewElement.innerHTML = `${review} <button onclick="deleteReview('${product.product}', ${index})">Удалить</button>`;
            reviewList.appendChild(reviewElement);
        });

        const productList = document.getElementById('productList');
        productList.innerHTML = ''; // Очищаем список продуктов
        productList.appendChild(reviewList); // Добавляем список отзывов
    }
}

// Функция для удаления отзыва
function deleteReview(productName, reviewIndex) {
    const reviews = JSON.parse(localStorage.getItem('reviews'));
    const product = reviews.find(p => p.product === productName);

    if (product) {
        product.reviews.splice(reviewIndex, 1); // Удаляем отзыв по индексу
        localStorage.setItem('reviews', JSON.stringify(reviews)); // Сохраняем обновленный список в LocalStorage
        showReviews(productName); // Обновляем отображение отзывов
    }
}

// Инициализация данных и отображение продуктов при загрузке страницы
initializeReviews();
displayProducts();

// Обработчик события для кнопки "Добавить отзыв"
document.getElementById('addReview').addEventListener('click', () => {
    const productName = document.getElementById('productName').value.trim();
    const reviewText = document.getElementById('reviewText').value.trim();

    if (productName && reviewText) {
        addReview(productName, reviewText);
        document.getElementById('productName').value = ''; // Очищаем поле ввода
        document.getElementById('reviewText').value = ''; // Очищаем текстовое поле
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
});
