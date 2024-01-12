import displayHome from "./displayHome";
import returnDisplayrandom from "./displayRandom";
import displaySearch from "./displaySearch";
import returnTrendingGif from "./displayTrending";
import returnSearchGifs from "./returnSearchGif";
import getTrendingGifs from "./returnTrendingGif";

document.querySelector('.search').classList.add('inactive');
document.querySelector('.trending').classList.add('inactive');

const randButton = document.querySelector('.button__nav-random');
const searchButton = document.querySelector('.button__nav-search');
const trendingButton = document.querySelector('.button__nav-trending');

randButton.addEventListener('click', () => {
    returnDisplayrandom();
})

searchButton.addEventListener('click', () => {
    displaySearch();
})

trendingButton.addEventListener('click', () => {
    returnTrendingGif();
})

displayHome();
getTrendingGifs();

const searchQueryButton = document.querySelector('.button__search');
searchQueryButton.addEventListener('click', () =>{
    returnSearchGifs();
})

