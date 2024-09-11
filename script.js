// script
// Code inside run after the DOM is fully loaded

document.addEventListener("DOMContentLoaded", () => {
  // Selecting elements from the HTML
  const categorySelector = document.querySelector("#categorySelector");
  const themeSwitch = document.querySelector("#themeSwitch");
  const decreaseFont = document.querySelector("#decreaseFont");
  const increaseFont = document.querySelector("#increaseFont");
  const quoteContainer = document.querySelector(".quote-container");
  const quoteContent = document.querySelector("#quoteContent");
  const author = document.querySelector("#quoteAuthor");
  const prevBtn = document.querySelector("#prevBtn");
  const nextBtn = document.querySelector("#nextBtn");
  const randomBtn = document.querySelector("#randomBtn");

  let currentCategory = "all";
  let currentQuote = quotes[currentCategory];
  let currentIndex = 0;
  let fontSize = 1;

  // Function to display Quote
  const displayQuote = (index) => {
    if (currentQuote.length === 0) {
      quoteContent.textContent = "No quote Available!!";
      author.textContent = "";
      return;
    }
    const quote = currentQuote[index];
    quoteContent.textContent = `"${quote.text}"`;
    author.textContent = `- ${quote.author}`;
  };

  displayQuote(currentIndex);

  // Event listener for Prev,Next and Random button
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % currentQuote.length;
    displayQuote(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + currentQuote.length) % currentQuote.length;
    displayQuote(currentIndex);
  });

  randomBtn.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * currentQuote.length);
    currentIndex = randomIndex;
    displayQuote(currentIndex);
  });

  // CategorySelector eventListener
  categorySelector.addEventListener("change", (e) => {
    currentCategory = e.target.value;
    // console.log(currentCategory);
    currentQuote = quotes[currentCategory];
    currentIndex = 0;
    displayQuote(currentIndex);
  });

  // ThemeSwitch eventListener
  themeSwitch.addEventListener("change", (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  });

  // Fontsize eventListener
  increaseFont.addEventListener("click", () => {
    if (fontSize < 3) {
      fontSize += 0.1;
      quoteContainer.style.fontSize = `${fontSize}em`;
    }
  });

  decreaseFont.addEventListener("click", () => {
    if (fontSize > 0.8) {
      fontSize -= 0.1;
      quoteContainer.style.fontSize = `${fontSize}em`;
    }
  });
});
