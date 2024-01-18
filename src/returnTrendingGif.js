require('dotenv').config();

export default async function getTrendingGifs() {
    const imagesContainer = document.querySelector('.trending__images-container');
    const limit = 20;

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
            const res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&rating=g&limit=${limit}`);
            const data = await res.json();
            return data;
        }
        catch {
            errorHandler();
        }
    }
    
    const result = await getTrendingGifs();
    result.data.forEach(data => {
        let img = document.createElement('img');
        img.classList.add('gif');
        img.src = data.images.downsized.url;
        img.alt = data.title;
        imagesContainer.append(img);
    });    
}