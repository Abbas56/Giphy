import generateSearch from "./generateSearch";

export default async function generateHome() {

    //Checks if the search page was previously displayed, and removes its elements from DOM.
    if (document.contains(document.querySelector('.search__wrapper'))) {
        document.querySelector('.search__wrapper').remove();
        document.querySelector('.many__images__container').remove();
    }

    //Checks if the trending page was previously displayed, and removes its elements from DOM.
    if (document.contains(document.querySelector('.trending__wrapper'))) {
        document.querySelector('.trending__wrapper').remove();
        document.querySelector('.trending__container').remove();
    }

    const homeDivWrapper = document.createElement('div');
    homeDivWrapper.classList.add('div__wrapper');
    document.body.append(homeDivWrapper);

    const gifContainer = document.createElement('div');
    gifContainer.classList.add('gif-container');
    homeDivWrapper.append(gifContainer);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    homeDivWrapper.append(buttonContainer);

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.classList.add('next-button')
    buttonContainer.append(nextButton);

    const gifTag = document.createElement('img');
    gifTag.classList.add('gif');

    async function getRandomGif() {
        const res = await fetch("https://api.giphy.com/v1/gifs/random?api_key=rZd9UHa9rP1ktS9wWNl92oUkNZ9sZ2Oc&tag=&rating=g");
        const data = await res.json();
        const imgUrl = data.data.images.original.url;
        return imgUrl;
    }

    gifTag.src = await getRandomGif();
    gifContainer.append(gifTag);

    //on-click sets src of the image to what is returned by the api call.
    nextButton.addEventListener('click', async () => {
        try {
        gifTag.src = await getRandomGif();
        }
        catch (e) {
            console.log(e);
        }
    }) 

}
