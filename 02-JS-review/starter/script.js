/*
const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Desctructuring
const book = getBook(2);
book;

// Object
const { title, author, genres, pages, publicationDate, hasMovieAdaptation } =
  book;
console.log(title, author, genres);

// Array
// Rest Operator / `...otherGenres` MUST be at the end otherwise `...` wouldn't work
const [primaryGenre, secondGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondGenre, otherGenres);

// Spread Operator on Array
const newGenres = [...genres, "epic fantasy"];
console.log(newGenres);

// Spread Operator on Array
// `...book` has to come first IF overwrite existing properties like `pages`
const updatedBook = {
  ...book,
  // Add new property
  moviePublicationDate: "1990-12-03",
  // Overwrite existing property
  pages: 1220,
};
console.log(updatedBook);

// Arrow Functions
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

// Template Literals
const summary = `${title}, is a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"}been adapted as a movie`;
console.log(publicationDate);
console.log(summary);

// Ternary Operator
const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand";
pagesRange;

// Short circuiting
// &&  ||
console.log(hasMovieAdaptation && "This book has a movie");

// Falsy value: 0, '', null, undefined, NaN
console.log("John" && "name");
console.log(0 && "some string");

console.log(true || "some string");
console.log(false || "some string");

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

// `||` DOES NOT work when `0` is counted
console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || "NO DATA";
countWrong;

// Nullish Coelescing Operator:
// return second value if the first value is null or undefined
const countWrong1 = book.reviews.librarything.reviewsCount ?? "NO DATA";
countWrong1;

// Optional Chaining
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  goodreads;
  librarything;
  return goodreads + librarything;
}
console.log(getTotalReviewCount(book));

// Array Methods:
// map()
const books = getBooks();
books;

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => {
  return {
    author: book.author,
    title: book.title,
    reviewsCount: getTotalReviewCount(book),
  };
});

essentialData;

// filter()
const longBooksWithMovies = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation)
  .map((book) => book.title);
longBooksWithMovies;

const adventurousBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventurousBooks;

// reduce()
const pagesAllBooks = books.reduce((acc, item) => acc + item.pages, 0);
pagesAllBooks;

// sort()
// MUTATE original array, need to copy to avoid it
// a - b  Ascending
// b - a  Descendingg
const arr = [3, 7, 2, 1, 9];
const sorted = arr.slice().sort((a, b) => a - b);
sorted;
arr;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

// Immutable Array

// 1. Add book object to array
const newBook = {
  id: 6,
  title: "Harry Porter and the Chamber of Secrets",
  author: "J.K.Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2. Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3. Update book object in array
const booksAfterUpdate = books.map((book) =>
  book.id === 1
    ? {
        ...book,
        pages: 9999,
      }
    : book
);
booksAfterUpdate;
*/

// Promise
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("John");

// Async / Await
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
}

const todos = getTodos();
// will print a pending PROMISE since async function always returns a promise and not knowing what the returned `data` actually is an object.
console.log(todos);
console.log("John");
