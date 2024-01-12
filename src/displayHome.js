
export default async function displayHome() {

    const nextButton = document.querySelector('.button__random');
    const rand = document.querySelector('.random')
    const gif = document.createElement('img');
    gif.classList.add("gif");

    gif.src = await getRandomGif();
    rand.insertBefore(gif, nextButton);

    function errorHandler () {
        if (document.querySelector('.home__error-message') == null) {
            const errorMsg = document.createElement('div');
            errorMsg.classList.add('home__error-message');
            errorMsg.innerHTML = 'Oh no, something went snap!';
            rand.insertBefore(errorMsg, nextButton);
        }
    }

    async function getRandomGif() {

        try {
            const res = await fetch("https://api.giphy.com/v1/gifs/random?api_key=rZd9UHa9rP1ktS9wWNl92oUkNZ9sZ2Oc&tag=&rating=g");
            const data = await res.json();
            const imgUrl = data.data.images.original.url;
            return imgUrl
        }
        catch {
            errorHandler();
            gif.classList.remove('gif');
            gif.classList.add('home-error-gif')
            return 'error-svgrepo-com.svg'
        }

    }

    nextButton.addEventListener('click', async () => {
        gif.src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif";
        gif.src = await getRandomGif();
    })
}

