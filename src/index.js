import displayHome from "./returnHome";
import returnSearchGifs from "./returnSearchGif";
import getTrendingGifs from "./returnTrendingGif";
import { toggleSections, randomSection, searchSection, trendingSection, random_li, search_li, trending_li, trendingButton, searchButton, randButton } from "./toggleSections";

displayHome();
getTrendingGifs();

toggleSections(randButton, randomSection, random_li, [searchSection, trendingSection],
    [search_li, trending_li], [searchButton, trendingButton] );

const searchQueryButton = document.querySelector('.button__search');
searchQueryButton.addEventListener('click', (event) =>{
    returnSearchGifs(event);
})

