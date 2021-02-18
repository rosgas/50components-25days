const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('joke-btn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json', /* application/json - JSON response */
    },
  }
  fetch('https://icanhazdadjoke.com/', config)
    .then((res) => res.json()) /* response */
    .then((data) => {
      jokeEl.innerHTML = data.joke
    }) 
}

// https://icanhazdadjoke.com/api