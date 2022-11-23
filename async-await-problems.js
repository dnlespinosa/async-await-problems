// Part 1
// Number 1
let num = 2011
async function getFact(num) {
    let fact = await axios.get(`http://numbersapi.com/random/${num}?json`)
    return fact.data.text;
}

// Number 2
let nums = [1,2,3]
let numFact = []
async function multipleNums(nums) {
    let baseURL = `http://numbersapi.com/random/`
    let numFact = await Promise.all([
        axios.get(`${baseURL}${nums[0]}?json`),
        axios.get(`${baseURL}${nums[0]}?json`),
        axios.get(`${baseURL}${nums[0]}?json`)
    ])
    for (let fact of numFact.data.text) {
        numFact.push(fact)
    }
}

// Number 3 
let newNum = 2012;
let newNumFacts = []
async function multipleFacts(newNum) {
    let baseURL = await axios.get(`http://numbersapi.com/random/${num}?json`)
    newNumFacts.push(baseURL.data.text);
    newNumFacts.push(baseURL.data.type);
    newNumFacts.push(baseURL.data.date);
    newNumFacts.push(baseURL.data.year);
}

// PART 2
// Number 1
const deck = {
    async init() {
        let res = await axios.get('https://deckofcardsapi.com/api/deck/new/')
        this.deckId = res.data.deck_id;
    },
    async singleCard() {
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=2`)
        console.log(res.data.cards.value);
        console.log(res.data.cards.suit);
    }
}

// Number 2
const newDeck = {
    async init() {
        let res = await axios.get('https://deckofcardsapi.com/api/deck/new/')
        this.deckId = res.data.deck_id;
        this.displayCards = []
    },
    async singleCard() {
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=2`)
        this.displayCards.push(`${res.data.cards.value}, ${res.data.cards.suit}`)
        $('#display-card').innerHTML(`${res.data.cards.value}, ${res.data.cards.suit}`)
    },
    displayCards() {
        console.log(this.displayCards)
        
    }
}

// Number 3
$('#new-deck').onclick(newDeck.init());
$('#select-card').onclick(newDeck.singleCard())

