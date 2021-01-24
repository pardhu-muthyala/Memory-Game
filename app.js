const cardsArray = [
    {
        name: 'cheeseburger',
        img: 'src/images/cheeseburger.png',
    },
    {
        name: 'fries',
        img: 'src/images/fries.png',
    },
    {
        name: 'hotdog',
        img: 'src/images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'src/images/ice-cream.png',
    },
    {
        name:'milkshake',
        img: 'src/images/milkshake.png',
    },
    {
        name:'pizza',
        img: 'src/images/pizza.png',
    },

    {
        name: 'cheeseburger',
        img: 'src/images/cheeseburger.png',
    },
    {
        name: 'fries',
        img: 'src/images/fries.png',
    },
    {
        name: 'hotdog',
        img: 'src/images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'src/images/ice-cream.png',
    },
    {
        name:'milkshake',
        img: 'src/images/milkshake.png',
    },
    {
        name:'pizza',
        img: 'src/images/pizza.png',
    },


]

cardsArray.sort(() => 0.5 - Math.random())
console.log(cardsArray)

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardChosenId = []
let cardsWon = []

function creatBoard(){
    for(let i = 0; i<cardsArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'src/images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard  )

            grid.appendChild(card)
        }
         
       
        

}

    function flipCard(){
        let cardId = this.getAttribute('data-id')
    cardChosen.push(cardsArray[cardId].name)
    cardChosenId.push(cardId)
    this.setAttribute('src', cardsArray[cardId].img)
    if(cardChosen.length === 2){


        setTimeout(checkMatch, 500)

    }
    
        
    }







function checkMatch(){
    const cards = document.querySelectorAll('img')
    if(cardChosenId[0] == cardChosenId[1] ){
        alert('You Have Clicked The Same Image!')
        cards[cardChosenId[0]].setAttribute('src', 'src/images/blank.png')
        cards[cardChosenId[1]].setAttribute('src', 'src/images/blank.png')

    }else if(cardChosen[0] === cardChosen[1]) {
     alert('You Have Found Match')
     cards[cardChosenId[0]].setAttribute('src', 'src/images/white.png')
     cards[cardChosenId[1]].setAttribute('src', 'src/images/white.png') 
     cards[cardChosenId[0]].removeEventListener('click',flipCard)
     cards[cardChosenId[1]].removeEventListener('click',flipCard)
     cardsWon.push(cardChosen)

    }else{
        cards[cardChosenId[0]].setAttribute('src', 'src/images/blank.png')
        cards[cardChosenId[1]].setAttribute('src', 'src/images/blank.png')
        alert('Match Not Found')


    }
    cardChosen = []
    cardChosenId = []
    console.log(cardsWon)

    resultDisplay.innerHTML = cardsWon.length
    if(cardsWon.length === cardsArray.length/2)
    resultDisplay.innerHTML = 'Congrats you Won!'
        


}



creatBoard()