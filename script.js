const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Happiness depends upon ourselves.",
    author: "Aristotle"
  },
  {
    quote: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey"
  },
  {
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  }
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  document.getElementById("quote").textContent =
    `"${quotes[randomIndex].quote}"`;

  document.getElementById("author").textContent =
    `- ${quotes[randomIndex].author}`;
}