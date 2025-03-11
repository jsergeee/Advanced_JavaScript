// Создаем массив альбомов
const albums = [
  { title: "Back in Black", artist: "AC/DC", year: "1980" },
  { title: "Thriller", artist: "Michael Jackson", year: "1982" },
  { title: "The Joshua Tree", artist: "U2", year: "1987" },
  { title: "Nevermind", artist: "Nirvana", year: "1991" },
  { title: "The Miseducation of Lauryn Hill", artist: "Lauryn Hill", year: "1998" },
  { title: "Black Album", artist: "Metallica", year: "1991" },
  { title: "21", artist: "Adele", year: "2011" },
  { title: "Random Access Memories", artist: "Daft Punk", year: "2013" },
  { title: "25", artist: "Adele", year: "2015" },
  { title: "Future Nostalgia", artist: "Dua Lipa", year: "2020" },
  { title: "Midnights", artist: "Taylor Swift", year: "2022" },
  { title: "This Is Why", artist: "Paramore", year: "2023" },
  { title: "S.O.S", artist: "SZA", year: "2022" },
  { title: "The Age of Pleasure", artist: "Janelle Monáe", year: "2023" },
  { title: "The Album", artist: "BLACKPINK", year: "2023" },
  { title: "Midnight Sun", artist: "Khalid", year: "2025" }
];


// Создаем объект музыкальной коллекции
const musicCollection = {
  albums: albums,

  // Реализуем Symbol.iterator
  [Symbol.iterator]() {
    let index = 0; // Начальный индекс
    const albums = this.albums; // Ссылка на массив альбомов

    return {
      next() {
        if (index < albums.length) {
          // Если есть еще альбомы, возвращаем следующий
          return {
            value: albums[index++], // Возвращаем текущий альбом и увеличиваем индекс
            done: false, // Указываем, что итерация не завершена
          };
        } else {
          // Если альбомов больше нет, возвращаем завершение итерации
          return { done: true };
        }
      },
    };
  },
};

// Используем цикл for...of для перебора альбомов
for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
