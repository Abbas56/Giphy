import generateHome from "./generateHome";
import generateSearch from "./generateSearch";
import generateTrending from "./generateTrending";

export default function displayNav() {

    const topDiv = document.createElement("div");
    topDiv.classList.add("top-div");

    const h1 = document.createElement("h1");
    h1.innerText = "GIPHY";
    document.body.append(topDiv);

    topDiv.append(h1);

    h1.classList.add("heading");

    const navBar = document.createElement("nav");
    navBar.classList.add('nav-class');
    document.body.append(navBar);

    const homeIcon = document.createElement('btn');
    const searchIcon = document.createElement('btn');
    const trendingIcon = document.createElement('btn');

    // Icons used on navbar are downloaded open source and stored in dist file.
    homeIcon.innerHTML = "<img  id = 'homeImg' src='./gallery.png'/>"
    searchIcon.innerHTML = "<img id = 'searchImg' src='./search.png'/>"
    trendingIcon.innerHTML = "<img id = 'trendImg' src='./trending.png'/>"

    homeIcon.setAttribute("id", "home-id");
    searchIcon.setAttribute("id", "search-id");
    trendingIcon.setAttribute("id", "trending-id");

    navBar.append(homeIcon, searchIcon, trendingIcon);

    //Adding click event listeners to buttons on navbar which displays their respective pages.
    searchIcon.addEventListener('click', () => {
        generateSearch();
    })
    homeIcon.addEventListener('click', () => {
        generateHome();
    })
    trendingIcon.addEventListener('click', () => {
        generateTrending();
    })
    
}