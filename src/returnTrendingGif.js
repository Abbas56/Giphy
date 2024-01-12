export default async function getTrendingGifs() {

    const imagesContainer = document.querySelector('.trending__images-container');

    function errorHandler() {
        if (document.querySelector('.trending__error-message') == null) {
            const errorMsg = document.createElement('div');
            errorMsg.classList.add('trending__error-message');
            errorMsg.innerHTML = 'Oh no, something went snap!';
            imagesContainer.append(errorMsg);
        }
    }

    async function getTrendingGifs() {

        try {
            const res = await fetch("https://api.giphy.com/v1/gifs/trending?api_key=rZd9UHa9rP1ktS9wWNl92oUkNZ9sZ2Oc&rating=g&limit=20");
            const data = await res.json();
            const imgUrl = await data;
            return imgUrl;
        }
        catch {
            errorHandler();
        }
    }

    const urls = [];
    const titles = [];
    
    const result = await getTrendingGifs();
    result.data.forEach(data => {
        urls.push(data.images.downsized.url);
        titles.push(data.title);
    });
    for (let i = 0; i < 20; i++) {
        let img = document.createElement('img');
        img.classList.add('gif');
        img.src = urls[i];
        img.alt = titles[i];
        imagesContainer.append(img);
    }
}