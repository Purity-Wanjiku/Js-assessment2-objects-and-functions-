const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
    ];

    //Create a function called getAvailableBooks that returns an array of all available books.
    function getAvailableBooks() {
      let bookscontent = books.filter(j => j.isAvailable === true)
    //   console.log(bookscontent);
      let booksavailable = bookscontent.map(i => i )
      console.log({booksavailable});

        }
        getAvailableBooks()
//Create a function getBooksByAuthor that takes an author's name as an argument and
//returns an array of all books by that author.
function getBooksByAuthor(author) {
   let authorsname = books.filter(x => x.author === author)
    console.log(authorsname);
    // let booksbyauthor = authorsname.map(y => y)
}
getBooksByAuthor('Homer')
  
//Create a function addNewBook that takes a book object as an argument and adds it
//to the library, ensuring that the new book has all required properties (title, author,
//publicationYear, and isAvailable).


            
        


    

    // console.log(books[2]); 