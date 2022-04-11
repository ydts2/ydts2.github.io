const RANDOM_QUOTE_URL = 'https://api.quotable.io/random'
const displayquote = document.getElementById('quoteDisplay')
const QuoteInput = document.getElementById('quoteInput')

QuoteInput.addEventListener('input', () => {
    console.log('changed')
})

function getRquote() {
    return fetch(RANDOM_QUOTE_URL)
        .then(response => response.json())
        .then(data => data.content) 
}

async function renderNewQ() {
const quote =  await getRquote()
displayquote.innerText=quote
//console.log(quote)
quote.split('').forEach(character => {
    const charspan = document.createElement('span')
    //charspan.classList.add('correct')
    charspan.innerText=character
    displayquote.appendChild(charspan)
});
QuoteInput.value=null
}

renderNewQ()