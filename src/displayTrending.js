export default function returnTrendingGif() {

    const searchSection = document.querySelector('.search');
    const trendingSection = document.querySelector('.trending');
    const randomSection = document.querySelector('.random');

    const random_li = document.querySelector('.navigation__random-li');
    const search_li = document.querySelector('.navigation__search-li');
    const trending_li = document.querySelector('.navigation__trending-li');

    if ( ! trending_li.classList.contains('--active')) {
        trending_li.classList.add('--active');
    }

    if (search_li.classList.contains('--active')){
        search_li.classList.remove('--active');

        searchSection.classList.add('inactive');
        trendingSection.classList.remove('inactive');
    }

    if (random_li.classList.contains('--active')){
        random_li.classList.remove('--active');

        randomSection.classList.add('inactive');
        trendingSection.classList.remove('inactive');
    }

}