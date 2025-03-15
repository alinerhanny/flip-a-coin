const coin = document.getElementById('coin')
const shadow = document.getElementById('shadow')

function flipCoin() {
    coin.classList.add("girando")

    shadow.style.transform = "scaleX(0.8)"
    shadow.style.opacity = "0.3"

    setTimeout(() => {
        const result = Math.random() < 0.5 ? "img/heads.svg" : "img/tails.svg"
        coin.src = result

        let textResult = document.querySelector('#result')
        textResult.innerText = result === 'img/heads.svg' ? 'Heads' : 'Tails'

        coin.classList.remove("girando")

        shadow.style.transform = "scaleX(1)"
        shadow.style.opacity = "0.5"
    }, 1000)
}

coin.addEventListener('click', flipCoin)
