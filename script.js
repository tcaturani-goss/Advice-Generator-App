const adviceNumber = document.querySelector("#advice-number");
const randomQuote = document.querySelector("#random-quote");
const randomQuoteBtn = document.querySelector("#random-advice-button");

const randomQuoteId = Math.floor(Math.random() * 100 + 1);

fetch(`https://api.adviceslip.com/advice/${randomQuoteId}`)
.then((res) => res.json())
.then((json) => {
    console.log(json);
    const adviceId = json.slip.id
    const adviceText = json.slip.advice
    adviceNumber.textContent = `ADVICE #${adviceId}`
    randomQuote.textContent = `"${adviceText}"`
})
.catch((err) => console.log(err));

randomQuoteBtn.addEventListener("click", function() {
const randomQuoteId = Math.floor(Math.random() * 100 + 1);

fetch(`https://api.adviceslip.com/advice/${randomQuoteId}`)
.then((res) => res.json())
.then((json) => {
    console.log(json);
    const adviceId = json.slip.id
    const adviceText = json.slip.advice
    adviceNumber.textContent = `ADVICE #${adviceId}`
    randomQuote.textContent = `"${adviceText}"`
})
.catch((err) => console.log(err));
})