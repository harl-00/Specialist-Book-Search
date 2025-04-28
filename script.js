const books = [
    { title: "The Hobbit", author: "Joe Tolkien", genre: "fantasy", price: 15.99, language: "English", format: "Paperback", year: 1937, description: "A young hobbit's adventure to reclaim treasure." },
    { title: "Ozymandias", author: "Noah Smithington", genre: "non-fiction", price: 20.99, language: "English", format: "Hardcover", year: 2011, description: "A brief history of humankind." },
    { title: "The Girl with the Tattoo", author: "Stig Larsson", genre: "mystery", price: 12.99, language: "English", format: "Paperback", year: 2005, description: "A thrilling mystery about a journalist and hacker." },
    { title: "Manchester", author: "Joseph Darlington", genre: "mystery", price: 47.99, language: "English", format: "Hardcover", year: 2016, description: "A documentary about the history of Manchester." },
    { title: "Breaking Bad", author: "Vince Gilligan", genre: "fiction", price: 20.99, language: "English", format: "Hardcover", year: 2008, description: "High school chemistry teacher turned manufacturer, Walter White, as he enters the dangerous world of crime." },
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", genre: "fantasy", price: 9.99, language: "English", format: "Paperback", year: 1997, description: "The first book in the Harry Potter series, following a young wizard's journey at Hogwarts." },
    { title: "The Outsiders", author: "S.E. Hinton", genre: "fiction", price: 10.49, language: "English", format: "Paperback", year: 1967, description: "A story of teenage rebellion between two rival groups." },
];

function findBooks() {
    const genre = document.getElementById("genre").value.toLowerCase();
    const author = document.getElementById("author").value.toLowerCase();
    const maxPrice = parseFloat(document.getElementById("price").value);
    const format = document.getElementById("format").value.toLowerCase();
    const language = document.getElementById("language").value.toLowerCase();
    const year = parseInt(document.getElementById("year").value);

    let filteredBooks = books.filter(book => {
        return (
            (genre === "" || book.genre.toLowerCase() === genre) &&
            (author === "" || book.author.toLowerCase().includes(author)) &&
            (isNaN(maxPrice) || book.price <= maxPrice) &&
            (format === "" || book.format.toLowerCase() === format) &&
            (language === "" || book.language.toLowerCase() === language) &&
            (isNaN(year) || book.year === year)
        );
    });

    displayResults(filteredBooks);
}

function displayResults(filteredBooks) {
    const resultsSection = document.getElementById("results");
    resultsSection.innerHTML = ""; 

    if (filteredBooks.length === 0) {
        resultsSection.innerHTML = "<p>No matching books found.</p>";
        return;
    }

    filteredBooks.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Price:</strong> £${book.price.toFixed(2)}</p>
            <p><strong>Format:</strong> ${book.format}</p>
            <p><strong>Language:</strong> ${book.language}</p>
            <p><strong>Year:</strong> ${book.year}</p>
            <p>${book.description}</p>
        `;

        resultsSection.appendChild(bookDiv);
    });
}