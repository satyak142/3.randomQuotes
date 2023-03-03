
document.querySelector('button').addEventListener('click',changeQuote);

const quoteElem = document.querySelector('#quote');
const authorElem = document.querySelector('#author');

function changeQuote(){
    // Fetch a random quote from the Quotes API
    quoteElem.textContent = ". . . Loading";
    authorElem.textContent = 'A';
    fetch("https://api.quotable.io/random")
    .then(response => response.json()) // Parse the JSON data
    .then(data => {
        // Log the quote and author to the console
        quoteElem.textContent = data.content;
        authorElem.textContent = data.author;
    })
    .catch(error => {
        console.error(error);
        const randomNum = Math.floor(Math.random()*quotes.length);
        quoteElem.textContent = quotes[randomNum].quote;
        authorElem.textContent = quotes[randomNum].author; 
    });

};

const quotes = [
    {quote:'Wisdom consists of the anticipation of consequences',author:'Norman Cousins'},
    {quote:'Tell me and I forget. Teach me and I remember. Involve me and I learn',author:'Benjamin Franklin'},
    {quote:'If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.',author:'Pema Chödrön'},
    {quote:'Minds are like parachutes. They only function when open.',author:'Thomas Dewar'},
    {quote:'The greatest obstacle to discovery is not ignorance - it is the illusion of knowledge.',author:'Daniel J. Boorstin'},
    {quote:'Pick battles big enough to matter, small enough to win.',author:'Jonathan Kozol'},
    {quote:'Do not overrate what you have received, nor envy others. He who envies others does not obtain peace of mind.',author:'Buddha'},
    {quote:'Impossibilities are merely things which we have not yet learned.',author:'Charles W. Chesnutt'},
    {quote:'I have no special talent. I am only passionately curious.',author:'Albert Einstein'},
];