function GetAllBooks() {
  let books = [
    { title: 'Ulysses', author: 'James Joyce', available: true },
    { title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false },
    { title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true },
    { title: 'Moby Dick', author: 'Herman Melville', available: true }
  ];
  return books;
}

function LogFirstAvailable(books): void {
  let numberOfBooks: number = books.length;
  let firstAvailable: string = '';

  for(let currentBook of books) {

    if(currentBook.available) {
      firstAvailable = currentBook.title;
      break;
    }
  }
  console.log('Total Books: ' + numberOfBooks);
  console.log('First Available: ' + firstAvailable);
}

const allBooks = GetAllBooks();
LogFirstAvailable(allBooks);