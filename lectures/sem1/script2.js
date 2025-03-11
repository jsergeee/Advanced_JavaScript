// Шаг 1: Определение поваров и их специализаций
const chefs = new Map([
  ["Виктор", "Пицца"],
  ["Ольга", "Суши"],
  ["Дмитрий", "Десерты"],
]);

// Шаг 2: Определение блюд и их поваров
const dishes = new Map([
  ["Пицца 'Маргарита'", "Виктор"],
  ["Пицца 'Пепперони'", "Виктор"],
  ["Суши 'Филадельфия'", "Ольга"],
  ["Суши 'Калифорния'", "Ольга"],
  ["Тирамису", "Дмитрий"],
  ["Чизкейк", "Дмитрий"],
]);

// Шаг 3: Определение заказов клиентов
const orders = new Map();

// Функция для добавления заказа
function addOrder(client, dish) {
  if (!orders.has(client)) {
    orders.set(client, []);
  }
  orders.get(client).push(dish);
}

// Создание объектов клиентов
const clientAlexey = { name: "Алексей" };
const clientMaria = { name: "Мария" };
const clientIrina = { name: "Ирина" };

// Добавление заказов
addOrder(clientAlexey, "Пицца 'Пепперони'");
addOrder(clientAlexey, "Тирамису");
addOrder(clientMaria, "Суши 'Калифорния'");
addOrder(clientMaria, "Пицца 'Маргарита'");
addOrder(clientIrina, "Чизкейк");

// Вывод информации о заказах
for (const [client, dishes] of orders) {
  console.log(`${client.name} заказал: ${dishes.join(", ")}`);
}

// Вывод информации о блюдах и их поварах
for (const [dish, chef] of dishes) {
  console.log(`${dish} - повар: ${chef}`);
}
