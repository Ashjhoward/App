import axios from 'axios';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export const getNews = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/everything`, {
            params: {
                pageSize: 12,
                category: 'entertainment',
                page: 1,
                sortBy: 'relevancy',
                q: query,
                apiKey: API_KEY,
            },
        });
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching news:', error);
        throw error;
    }
};