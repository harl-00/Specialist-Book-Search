const books = [
    { title: "The Hobbit", author: "Joe Tolkien", genre: "fantasy", price: 15.99, language: "English", format: "Paperback", year: 1937, description: "A young hobbit's adventure to reclaim treasure." },
    { title: "Ozymandias", author: "Noah Smithington", genre: "non-fiction", price: 20.99, language: "English", format: "Hardcover", year: 2011, description: "A brief history of humankind." },
    { title: "The Girl with the Tattoo", author: "Stig Larsson", genre: "mystery", price: 12.99, language: "English", format: "Paperback", year: 2005, description: "A thrilling mystery about a journalist and hacker." },
    { title: "Manchester", author: "Joseph Darlington", genre: "mystery", price: 47.99, language: "English", format: "Hardcover", year: 2016, description: "A documentary about the history of Manchester." },
    { title: "Breaking Bad", author: "Vince Gilligan", genre: "fiction", price: 20.99, language: "English", format: "Hardcover", year: 2008, description: "High school chemistry teacher turned manufacturer, Walter White, as he enters the dangerous world of crime." }
];


function findBooks() {
    const genre = document.getElementById("genre").value;
    const author = document.getElementById("author").value;
    const maxPrice = document.getElementById("price").value;
    const format = document.getElementById("format").value;
    const language = document.getElementById("language").value;
    const year = document.getElementById("year").value;
}
//add the filtering when can