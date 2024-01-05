import displayNav from "./displayNav";

export default async function generateSearch() {
    
    ////Checks if the home page was previously displayed, and removes its elements from DOM.
    if (document.contains(document.querySelector('.div__wrapper'))) {
        document.querySelector('.div__wrapper').remove();
    }
    //Checks if the trending page was previously displayed, and removes its elements from DOM.
    if (document.contains(document.querySelector('.trending__wrapper'))) {
        document.querySelector('.trending__wrapper').remove();
        document.querySelector('.trending__container').remove();
    }


    const searchWrapper = document.createElement('div');
    searchWrapper.classList.add("search__wrapper");
    document.body.append(searchWrapper);

    const searchTitle = document.createElement('h2');
    searchTitle.innerText = "Finder";
    searchWrapper.append(searchTitle);

    const searchLabel = document.createElement('label');
    searchLabel.innerHTML = 'Search for a GIF';
    searchWrapper.append(searchLabel);

    const searchInput = document.createElement('input');
    searchInput.type = 'search';
    searchInput.placeholder = 'Enter a GIF';
    searchInput.classList.add('search__input');
    searchWrapper.append(searchInput);

    const searchButton = document.createElement('button');
    searchButton.textContent = 'Search';
    searchButton.classList.add('next-button');
    searchWrapper.append(searchButton);

    const imagesContainer = document.createElement('div');
    imagesContainer.classList.add('many__images__container');
    document.body.append(imagesContainer);

    //returns six 'data' points from the search api
    async function getSearchGif(searchTerm) {
        const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=rZd9UHa9rP1ktS9wWNl92oUkNZ9sZ2Oc&tag=&rating=g&q=",${searchTerm},"&limit=6`);
        const data = await res.json();
        const imgUrl = await data;
        return imgUrl;
    }

    //displays a field validation error when an empty search is made
    function emptySearchHandler() {
        let p = document.createElement('p');
        p.innerHTML = 'Enter a search term please';
        searchWrapper.append(p);
    }

    searchButton.addEventListener('click', async () => {

        //clearing all current gif's so that we can search more than once
        imagesContainer.innerHTML = '';

        //retrieves value of string in search field
        const searchTerm = document.getElementsByClassName('search__input')[0].value;
        if (searchTerm == '') {
            return emptySearchHandler();
        }
        //retrieves url from the api response and stores in an array
        const urls = []
        try {
            const result = await getSearchGif(searchTerm);
                result.data.forEach(data => {
                    urls.push(data.images.downsized.url);
                });
            }
            catch (e) {console.log(e);}
        //loops 6 times to create 6 image tags and sets the src from the urls array
        for (let i = 0; i < 6; i++) {
            let img = document.createElement('img');
            img.classList.add('gif');
            img.src = urls[i]
            imagesContainer.append(img);
        }
    })
}