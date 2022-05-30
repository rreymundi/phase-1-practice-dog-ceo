const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// console.log('%c HI', 'color: firebrick')

// challenge 1
document.addEventListener('DOMContentLoaded', fetchDogs)

function fetchDogs(){
    fetch(imgUrl).then(res => res.json()).then(data => {
        let dogs = data.message
        handleDogs(dogs)
        fetchBreed()
    })
}

function handleDogs(dogs){
    const container = document.getElementById('dog-image-container')

    dogs.forEach(dog => {
        const img = document.createElement('img')
        img.width = '400'
        img.src = dog
        container.appendChild(img)
    })
}

// challenge 2 & 3
function fetchBreed(){
    fetch(breedUrl).then(res => res.json()).then(data => {
        breeds = data.message
        handleBreed(breeds)
    })
}

function handleBreed(breeds){
    const ul = document.getElementById('dog-breeds')    
    for(let breed in breeds){
        const li = document.createElement('li')
        li.textContent = breed
        ul.appendChild(li)
        li.addEventListener('click', () => li.style.color = 'red')
    }
}

// challenge 4
let breedsArray = [];

const dropdown = document.getElementById('breed-dropdown')

function handleChange(event){
    const letter = event.target.value
    const filteredBreeds = breedsArray.filter(breed => {
            breed.startsWith(letter)
            const filteredBreedsList = createLiElement(filteredBreeds)
            ulContainer.innerHTML = ''
            renderLis(filteredBreedsList)
        })
}

dropdown.addEventListener('change', handleChange)