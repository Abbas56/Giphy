export default async function generateTrending () {

    //Checks if the home page was previously displayed, and removes its elements from DOM.
    if (document.contains(document.querySelector('.div__wrapper'))) {
        document.querySelector('.div__wrapper').remove();
    }

    //Checks if the search page was previously displayed, and removes its elements from DOM.
    if (document.contains(document.querySelector('.search__wrapper'))) {
        document.querySelector('.search__wrapper').remove();
        document.querySelector('.many__images__container').remove();
    }

    const trendingWrapper = document.createElement('div');
    trendingWrapper.classList.add("trending__wrapper");
    document.body.append(trendingWrapper);

    const trendingTitle = document.createElement('h2');
    trendingTitle.innerHTML = 'Trending';
    trendingWrapper.append(trendingTitle)

    const trendingContainer = document.createElement('div');
    trendingContainer.classList.add('trending__container');
    document.body.append(trendingContainer);

    //returns 20 objects from the trending endpoint
    async function getTrendingGifs() {
        const res = await fetch("https://api.giphy.com/v1/gifs/trending?api_key=rZd9UHa9rP1ktS9wWNl92oUkNZ9sZ2Oc&rating=g&limit=20");
        const data = await res.json();
        const imgUrl = await data;
        return imgUrl;
    }

    //stores 20 urls in an array, retrieved from the trending endpoint call above
    const urls = []
    try{
        const result = await getTrendingGifs();
            result.data.forEach(data => {
                urls.push(data.images.downsized.url);
            });
        }
        catch (e) {console.log(e);}
    //creates 20 image tags and assigns src from the array above
    for (let i = 0; i < 20; i++) {
        let img = document.createElement('img');
        img.classList.add('gif');
        img.src = urls[i]
        trendingContainer.append(img);
    }
}