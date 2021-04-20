console.log('this works')

const Google_books_url = "https://www.googleapis.com/books/v1/volumes?q=painting";

const container = document.querySelector('.container')

let paragraph= document.createElement('p');



function getBooks(){

fetch(Google_books_url)
  .then(response => response.json())
  .then(data => {

    renderBook(data);
    // let items = data.items
    // for(item in items){
    //     console.log(items[item])
    //     console.log(items[item]['volumeInfo']['title'])
    // }
  }); 


    function renderBook(book){

        let bookItem = book.items;

        for (idx in bookItem){
            if(bookItem[idx]['volumeInfo']['pageCount'] >=300){
                console.log(bookItem[idx]['volumeInfo']['title'])
                console.log(bookItem[idx]['volumeInfo']['pageCount'])
            }

        }
    }
}

// let artist_name= bookItem[idx]['volumeInfo']['title'];

// paragraph.textContent = artist_name;

getBooks();