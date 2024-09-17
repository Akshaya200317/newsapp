const API_KEY = '7ba15cf961a54adeb6954aaec681d9cb';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = async (category = 'general') => {
    const response = await fetch(`${BASE_URL}/top-headlines?category=${category}&apiKey=${API_KEY}`);
    const data = await response.json();
    return data.articles;
};
