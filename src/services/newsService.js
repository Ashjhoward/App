import axios from 'axios';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export const getNews = async (query) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
            params: {
                q: query,
                apiKey: API_KEY,
                category: 'technology',
                country: 'us',
                pageSize: 20,
                page: 1,
            },
        });
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching news:', error);
        throw error;
    }
};