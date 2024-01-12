export default async function returnSearchGifs() {

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

    async function getSearchGif(searchTerm) {
        try {
            const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=rZd9UHa9rP1ktS9wWNl92oUkNZ9sZ2Oc&tag=&rating=g&q=",${searchTerm},"&limit=6`);
            const data = await res.json();
            const imgUrl = await data;
            return imgUrl;
        } catch {
            errorhandler();
        }
    }

    const searchTerm = document.getElementsByClassName('search__input')[0].value;

    let urls = [];
    let titles = [];
    const result = await getSearchGif(searchTerm);
    if (result.data.length == 0) {
        errorhandler();
    }
    else {
        result.data.forEach(data => {
            urls.push(data.images.downsized.url);
            titles.push(data.title);
        });
            
        for (let i = 0; i < 6; i++) {
            let img = document.createElement('img');
            img.classList.add('gif');
            img.src = urls[i];
            img.alt = titles[i];
            imagesContainer.append(img);
        }
    }
}