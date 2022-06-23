// Your code here
// Your code here
const movieTitle = document. getElementById('title')
const runTime = document.getElementById('runtime')
const movieInfo = document.getElementById('film-info')
const showTime = document.getElementById('showtime')
const films = document.getElementById('films')
const poster = document.getElementById('poster')
const buyTickets = document.getElementById('buy-ticket')
let tickets = document.getElementById('ticket-num')

fetch('http://localhost:3000/films')
.then(response => response.json())
.then(data => {
    data.forEach(renderMovieTitle)
})

buyTickets.addEventListener('click', (e) => {
    // console.log(e)
    if (parseInt(tickets.textContent) > 0) {
        tickets.textContent = parseInt(tickets.textContent) - 1
        }
    })

function renderMovieTitle(movie){
    const newTitle = document.createElement('li')
    newTitle.textContent = movie.title
    films.append(newTitle)

    poster.src = movie.poster
    movieTitle.textContent = movie.title
    runTime.textContent = `${movie.runtime} minutes`
    movieInfo.textContent = movie.description
    showTime.textContent = movie.showtime
    tickets.textContent = `${movie.capacity - movie.tickets_sold}`
    
    newTitle.addEventListener('click', (e) => {
        poster.src = movie.poster
        movieTitle.textContent = movie.title
        runTime.textContent = `${movie.runtime} minutes`
        movieInfo.textContent = movie.description
        showTime.textContent = movie.showtime
        tickets.textContent = parseInt(`${movie.capacity - movie.tickets_sold}`)
        
    })
    
}
