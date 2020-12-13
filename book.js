/**
 * Booklist
 */
class BookList {
  /**
   *
   * @param {Book[]} books - Array of books
   */
  constructor(books = []) {
    this.books = books;
    this.read = 0;
    this.notRead = books.length;
    this.current = null;
    this.next = null;
    for (let i = 0; i < books.length; i++) {
      if (this.current === null) {
        this.current = books[i];
      } else if (this.next === null) {
        this.next = books[i];
      } else {
        break;
      }
    }
    this.last = null;
  }

  /**add a book to the list of books
   *
   * @param {*} book - book to be added to the list
   */
  add(book) {
    if (!book instanceof Book) {
      console.log("Not a book");
    } else {
      this.books.add(book);
      if (book.isRead) {
        this.read++;
      } else {
        this.notRead++;
      }
    }
  }

  /**finish the current book and move to the next one
   */
  finishCurrentBook() {
    if (this.current === null) {
      console.log("no books left to be read");
    } else {
      console.log("reading " + this.current.title);
      this.current.setReadDate(new Date(Date.now()));
      this.current.setRead(true);
      this.read++;
      this.notRead--;
      this.last = this.current;
      this.current = this.next;
      this.next = null;
      if (this.notRead > 0) {
        for (let i = 0; i < this.books.length; i++) {
          if (this.books[i].read === false && this.books[i] !== this.current) {
            this.next = this.books[i];
            break;
          }
        }
      }
    }
  }
  toString() {
    return `Books total: ${this.books.length},
      read: ${this.read},
      unread: ${this.notRead},
      current: ${this.current},
      next: ${this.next},
      last: ${this.last}`;
  }
}
class Book {
  /**
   * 
   * @param {string} title - title of the book
   * @param {string} genre - genre of the book
   * @param {string} author - author of the book
   * @param {boolean} read - true if the book was read already
   * @param {Date} readDate - last time the book was read 
   */
  constructor(title, genre, author, read, readDate = undefined) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.read = read;
    this.readDate = this.readDate;
  }
  setReadDate(readDate) {
    this.readDate = readDate;
  }
  isRead() {
    return this.read;
  }
  setRead(read) {
    this.read = read;
  }
  toString() {
    let returnString = "";
    returnString += this.title + ": ";
    if (this.read) {
      returnString += "read on " + Book.toLocalDate(this.readDate);
    } else {
      returnString += "not read yet";
    }
    return returnString;
  }
  static options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  static toLocalDate(date) {
    return date.toLocaleDateString("en-GB", this.options);
  }
}

const bookList = new BookList([
  new Book("Book1", "genre1", "somebody", false),
  new Book("Book2", "genre2", "nobody", false),
  new Book("Book3", "genre3", "a person", false),
]);
console.log(bookList.toString());
bookList.finishCurrentBook();
console.log(bookList.toString());
bookList.finishCurrentBook();
console.log(bookList.toString());
bookList.finishCurrentBook();
console.log(bookList.toString());
bookList.finishCurrentBook();
console.log(bookList.toString());

console.log("----------------------");

const bookList2 = new BookList([new Book("title1", "genre", "author", false)]);
console.log(bookList2.toString());
bookList2.finishCurrentBook();
console.log(bookList2.toString());
bookList2.finishCurrentBook();
console.log(bookList2.toString());
