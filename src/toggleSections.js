export const searchSection = document.querySelector('.search');
export const trendingSection = document.querySelector('.trending');
export const randomSection = document.querySelector('.random');

export const random_li = document.querySelector('.navigation__random-li');
export const search_li = document.querySelector('.navigation__search-li');
export const trending_li = document.querySelector('.navigation__trending-li');

export const randButton = document.querySelector('.button__nav-random');
export const searchButton = document.querySelector('.button__nav-search');
export const trendingButton = document.querySelector('.button__nav-trending');

export function toggleSections(activeButton, activeSection, activeLi, inactiveSections, inactiveLis, inactiveButtons) {
    activeButton.setAttribute('aria-current', 'page');
    activeSection.classList.remove('inactive');
    activeLi.classList.add('--active');

    inactiveSections.forEach(section => section.classList.add('inactive'));
    inactiveLis.forEach(li => li.classList.remove('--active'));
    inactiveButtons.forEach(button => button.setAttribute('aria-current', 'false'));
}

randButton.addEventListener('click', () => {
    toggleSections(randButton, randomSection, random_li, [searchSection, trendingSection],
        [search_li, trending_li], [searchButton, trendingButton] );
})

searchButton.addEventListener('click', () => {
    toggleSections(searchButton, searchSection, search_li, [randomSection, trendingSection],
        [random_li, trending_li], [randButton, trendingButton] );
})

trendingButton.addEventListener('click', () => {
    toggleSections(trendingButton, trendingSection, trending_li, [searchSection, randomSection],
        [search_li, random_li], [searchButton, randButton] );
})