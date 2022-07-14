const Inputname = document.getElementById('name')
const Inputurl = document.getElementById('url')
const form = document.querySelector('form#form-input')
const cardsgroup = document.getElementById('cards-group')

async function load(){
    const res = await fetch('http://localhost:3000/')
        .then(data => data.json())
    res.urls.map( ( { name, url} ) => addElement( name, url  ) )
}; load();

function addElement( name, url ) {
    //...
    const card = document.createElement('div')
    card.setAttribute('id','card')
    
    const cardText = document.createElement('div')
    cardText.setAttribute('id','card-text')
    
    const link = document.createElement('a')
    link.setAttribute('href',`${url}`)
    link.setAttribute('id','urlLink')
    link.setAttribute('target','_blank')
    link.textContent = `${name}`
    
    const cardAction = document.createElement('div')
    cardAction.setAttribute('id','card-action')
    
    const trashButton = document.createElement('img')
    trashButton.setAttribute('src','./icons/circle-trash.svg')
    
    cardText.appendChild(link)
    cardAction.appendChild(trashButton)
    card.appendChild(cardText)
    card.appendChild(cardAction)
    cardsgroup.appendChild(card)
    
    removeElement(trashButton, name, url) // Callback para função
}

function removeElement(element, name, url) {
    //...
    element.addEventListener('click', () => { //Adiciona um event listener no ícone
        if (confirm('Tem certeza que quer deletar?')){
            fetch(`http://localhost:3000/?name=${name}&url=${url}&del=1`)
            element.parentNode.remove() //remove o elemento anterior, no caso toda a estrutura da <card>
        }
    })
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const namevalue = Inputname.value
    let URLvalue = Inputurl.value
    
    if(namevalue.length > 23) 
    return alert('O tamanho máximo permitido é 23 caracteres!')
    
    if(!namevalue || !URLvalue) return alert('Preencha os campos!')
    
    if (!/^http/.test(URLvalue)) URLvalue = 'http://'+ URLvalue
    // if(!/.com$/.test(URLvalue)) URLvalue = URLvalue + '.com'
    
    
    addElement( namevalue, URLvalue )
    fetch(`http://localhost:3000/?name=${namevalue}&url=${URLvalue}`)
    
    Inputname.value = ''
    Inputurl.value = ''
})

const search = document.getElementById('search')
const formSearch = document.querySelector('form#search-form')

formSearch.addEventListener('submit', (event) => {
    // const cards = document.querySelectorAll('div#card')
    const text = document.querySelectorAll('a#urlLink')
    
    event.preventDefault();
    
    const value = search.value

    text.forEach( (text) => {
        if(!RegExp(value.toLowerCase()).test(text.textContent.toLowerCase())){
            text.parentNode.parentNode.setAttribute('hidden','')
        }else{
            text.parentNode.parentNode.removeAttribute('hidden')
        }
    })
    
    if(!value){
        text.forEach( (text) => {
            if(text.textContent != value){
                text.parentNode.parentNode.removeAttribute('hidden')
            } 
        })
    }

})

const bars = document.getElementById('bars')
const close = document.querySelector('div.close')
const nav2 = document.querySelector('div.nav2')

bars.addEventListener('click', () => {
    nav2.removeAttribute('style')
})

close.addEventListener('click', () => {
    nav2.setAttribute('style', 'display: none;')
})