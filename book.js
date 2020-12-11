/*Create a class BookList
Create another class called Book
BookLists should have the following properties:
An array of all the Books
Number of books marked as read
Number of books marked not read yet
A reference to the next book to read (book object)
A reference to the current book being read (book object)
A reference to the last book read (book object)
 
Each Book should have several properties:
Title
Genre
Author
Read (true or false)
Read date, can be blank, otherwise needs to be a JS Date() object
Every Booklist should have a few methods:
.add(book)
should add a book to the books list.
.finishCurrentBook()
should mark the book that is currently being read as "read"
Give it a read date of new Date(Date.now())
Change the last book read to be the book that just got finished
Change the current book to be the next book to be read
Change the next book to be read property to be the first unread book you find in the list of books
Booklists and Books might need more methods than that. Try to think of more that might be useful.*/

class BookList {
  constructor(books = []) {
    this.books = books;
    this.read = [];
    this.notRead = books;
    this.next = "";
    this.current = "";
    this.last = "";
  }
  add(book) {
    if (!book instanceof Book) {
      throw new Error("not a book");
    }
    this.books.add(book);
    if (book.isRead) {
      this.read.add(book);
    } else {
      this.notRead.add(book);
    }
  }
  startReading() {
    if (!this.next) {
      this.next = this.notRead[0];
    }
    this.current = this.next;
    this.next = this.notRead[0];
  }
  finishCurrentBook() {
    if (!this.current) {
      this.startReading();
    }
    this.current.setReadDate(new Date());
    this.current.setRead(true);
    if (!this.read.includes(this.current)) {
      console.log(this.read);
      this.read.push(this.current);
    }
    if (!this.notRead.includes(this.current)) {
      this.read.splice(this.read.indexOf(this.current), 1);
    }
    this.last = this.current;
    this.current = this.next;
    this.next = this.notRead[0];
  }
}
class Book {
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
}

const bookList = new BookList([
  new Book("title1", "genre", "author", false),
  new Book("title2", "genre", "author", false),
  new Book("title3", "genre", "author", false),
]);
bookList.startReading();
console.log(bookList);
bookList.finishCurrentBook();
console.log(bookList);
bookList.finishCurrentBook();
console.log(bookList);
