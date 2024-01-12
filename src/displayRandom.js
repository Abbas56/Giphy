export default function returnDisplayrandom() {

    const searchSection = document.querySelector('.search');
    searchSection.classList.add('inactive');

    const trendingSection = document.querySelector('.trending');
    trendingSection.classList.add('inactive');

    const randomSection = document.querySelector('.random');

    const random_li = document.querySelector('.navigation__random-li');
    const search_li = document.querySelector('.navigation__search-li');
    const trending_li = document.querySelector('.navigation__trending-li');

    if ( ! random_li.classList.contains('--active')) {
        random_li.classList.add('--active');
    }
    if (search_li.classList.contains('--active')){
        search_li.classList.remove('--active');

        searchSection.classList.add('inactive');
        randomSection.classList.remove('inactive');
    }
    if (trending_li.classList.contains('--active')){
        trending_li.classList.remove('--active');
        
        trendingSection.classList.add('inactive');
        randomSection.classList.remove('inactive');
    }
}

