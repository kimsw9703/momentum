const quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        quote: "So many books, so little time.",
        author: "Frank Zappa"
    },
    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain"
    },
    {
        quote: "A friend is someone who knows all about you and still loves you.",
        author: "Elbert Hubbard"
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde"
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "Always forgive your enemies; nothing annoys them so much.",
        author: "Oscar Wilde"
    },
    {
        quote: "Love all, trust a few, do wrong to none.",
        author: "William Shakespeare"
    },
    {
        quote: "That which does not kill us makes us stronger.",
        author: "Friedrich Nietzsche"
    },
    {
        quote: "It is never too late to be what you might have been.",
        author: "George Eliot"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = todaysQuote.author;