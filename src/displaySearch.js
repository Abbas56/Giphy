export default async function displaySearch() {

    const searchSection = document.querySelector('.search');
    const trendingSection = document.querySelector('.trending');
    const randomSection = document.querySelector('.random');

    const random_li = document.querySelector('.navigation__random-li');
    const search_li = document.querySelector('.navigation__search-li');
    const trending_li = document.querySelector('.navigation__trending-li');

    if (search_li.classList.contains('--active')) {

    }
    
    else if (random_li.classList.contains('--active')) {
        random_li.classList.remove('--active');
        randomSection.classList.add('inactive');

        search_li.classList.add('--active');
        searchSection.classList.remove('inactive');
        
    }

    else if (trending_li.classList.contains('--active')) {
        trending_li.classList.remove('--active');
        trendingSection.classList.add('inactive');

        search_li.classList.add('--active');
        searchSection.classList.remove('inactive');
    }

    
}