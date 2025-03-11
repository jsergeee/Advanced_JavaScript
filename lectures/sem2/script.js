class Library {
  // Приватное свойство для хранения списка книг
  #books;

  // Конструктор, принимающий начальный список книг
  constructor(initialBooks = []) {
    // Проверка на дубликаты
    const uniqueBooks = [...new Set(initialBooks)];
    if (uniqueBooks.length !== initialBooks.length) {
      throw new Error("Начальный список книг не должен содержать дубликатов.");
    }
    this.#books = uniqueBooks;
  }

  // Геттер для получения текущего списка книг
  get allBooks() {
    return this.#books;
  }

  // Метод для добавления книги
  addBook(title) {
    if (this.hasBook(title)) {
      throw new Error(`Книга с названием "${title}" уже существует.`);
    }
    this.#books.push(title);
  }

  // Метод для удаления книги
  removeBook(title) {
    const index = this.#books.indexOf(title);
    if (index === -1) {
      throw new Error(`Книга с названием "${title}" не найдена.`);
    }
    this.#books.splice(index, 1);
  }

  // Метод для проверки наличия книги
  hasBook(title) {
    return this.#books.includes(title);
  }
}

// Список книг русских авторов
const russianBooks = [
  "Война и мир - Лев Толстой",
  "Анна Каренина - Лев Толстой",
  "Преступление и наказание - Фёдор Достоевский",
  "Братья Карамазовы - Фёдор Достоевский",
  "Мастер и Маргарита - Михаил Булгаков",
  "Тихий Дон - Михаил Шолохов",
  "Доктор Живаго - Борис Пастернак",
  "Герой нашего времени - Михаил Лермонтов",
  "Собачье сердце - Михаил Булгаков",
  "Евгений Онегин - Александр Пушкин",
  "Человек в поисках смысла - Виктор Франкл", // хотя не совсем русский автор, но имеет влияние
];

// Пример использования
try {
  const library = new Library(russianBooks);
  console.log(library.allBooks); // Выводит список книг русских авторов

  library.addBook("Идиот - Фёдор Достоевский");
  console.log(library.allBooks); // Добавляем книгу и выводим обновленный список

  library.removeBook("Война и мир - Лев Толстой");
  console.log(library.allBooks); // Удаляем книгу и выводим обновленный список

  console.log(library.hasBook("Анна Каренина - Лев Толстой")); // true
} catch (error) {
  console.error(error.message);
}
