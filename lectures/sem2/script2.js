const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

// Функция для отображения отзывов на странице
function displayReviews() {
    const reviewsContainer = document.getElementById('reviewsContainer');
    reviewsContainer.innerHTML = ''; // Очистка контейнера перед отображением
    initialData.forEach(product => {
        product.reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.className = 'review';
            reviewElement.textContent = review.text;
            reviewsContainer.appendChild(reviewElement);
        });
    });
}

// Функция для добавления отзыва
function addReview(text) {
    if (text.length < 50 || text.length > 500) {
        throw new Error('Длина отзыва должна быть от 50 до 500 символов.');
    }

    const newReview = {
        id: (initialData.flatMap(product => product.reviews).length + 1).toString(),
        text: text,
    };

    // Добавляем новый отзыв к первому продукту (можно изменить логику по необходимости)
    initialData[0].reviews.push(newReview);
    displayReviews(); // Обновляем отображение отзывов
}

// Обработчик события для кнопки "Отправить отзыв"
document.getElementById('submitReview').addEventListener('click', () => {
    const reviewInput = document.getElementById('reviewInput');
    const reviewText = reviewInput.value.trim();

    try {
        addReview(reviewText);
        reviewInput.value = ''; // Очищаем поле ввода
    } catch (error) {
        alert(error.message);
    }
});

// Инициализация отображения отзывов призагрузке страницы

displayReviews();