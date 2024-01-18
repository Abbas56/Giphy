require('dotenv').config();

export default async function returnSearchGifs(event) {

    event.preventDefault();
    const imagesContainer = document.querySelector('.search__images-container');
    imagesContainer.innerHTML = '';

    function errorhandler() {
        if ( ! document.querySelector('.search__error-message')) {
            const errorMsg = document.createElement('div');
            errorMsg.classList.add('search__error-message');
            errorMsg.innerHTML = 'Oh no, something went snap! Try a different search term';
            imagesContainer.append(errorMsg);
            imagesContainer.classList.add('inactive');
        }
    }

    async function getSearchGif(searchTerm, limit) {
        try {
            const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&tag=&rating=g&q=${searchTerm}&limit=${limit}`);
            const data = await res.json();
            const imgUrl = await data;
            return imgUrl;
        } catch {
            errorhandler();
        }
    }

    const searchTerm = document.getElementsByClassName('search__input')[0].value;
    const limit = 8;

    const result = await getSearchGif(searchTerm, limit);
    if (result.data.length == 0) {
        errorhandler();
    }
    else {
        result.data.forEach(data => {
            let img = document.createElement('img');
            img.classList.add('gif');
            img.src = data.images.downsized.url;
            img.alt = data.title;
            imagesContainer.append(img);
        });
    }
}