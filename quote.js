// Creating an quote object that contain array of quotes

const quotes = {
  science: [
    {
      text: "The good thing about science is that it's true whether or not you believe in it.",
      author: "Neil deGrasse Tyson",
    },
    {
      text: "Science and everyday life cannot and should not be separated.",
      author: "Rosalind Franklin",
    },
    {
      text: "Equipped with his five senses, man explores the universe around him and calls the adventure science",
      author: "Edwin Hubble",
    },
    {
      text: "Science is a way of thinking much more than it is a body of knowledge.",
      author: "Carl Sagan",
    },
    {
      text: "The important thing is to never stop questioning.",
      author: "Albert Einstein",
    },
    {
      text: "Somewhere, something incredible is waiting to be known.",
      author: "Carl Sagan",
    },
  ],
  motivation: [
    {
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
    },
    {
      text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      author: "Albert Schweitzer",
    },
    {
      text: "Hardships often prepare ordinary people for an extraordinary destiny.",
      author: "C.S. Lewis",
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      text: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs",
    },
  ],
};

// Creating new property 'all' for 'All' selector
quotes.all = [...quotes.science, ...quotes.motivation];
