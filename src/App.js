import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getNews } from './services/newsService';
import NewsList from './components/NewsList';
import SearchBar from './components/SearchBar';
import Loader from './components/Loader';
import ArticleDetails from './components/ArticleDetails';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from'./logo.svg';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [noResults, setNoResults] = useState(false); // New state to track no results

    const fetchNews = async (searchQuery) => {
        setLoading(true);
        setNoResults(false); // Reset no results state
        try {
            const news = await getNews(searchQuery || '');
            const filteredNews = news.filter(article => article.title && article.urlToImage && article.content);
            if (filteredNews.length === 0) {
                setNoResults(true);
            } else {
                setNoResults(false);
                setArticles(filteredNews);
            }
        } catch (error) {
            console.error('Error fetching news:', error);
            if (error.response && error.response.status === 429) {
                console.error('Rate limited. Please try again later.');
                setNoResults(true); // Set no results state based on the error
            } else {
                console.error('Non-rate-limit error:', error);
                setNoResults(true); // Set no results state based on the error
            }
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchNews(query);
    }, [query]);

    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
    };

  return (
      <Router>
      <div>
          <Row>
              <Routes>
                  <Route path="/" element={
                      <Col md={12} className="header">
                          <img src={Logo} className={"logo"} alt="Clarity Logo"/>
                          <h1 className={"mt-3"}>CLARITY NEWS</h1>
                          <p>The place to come for the latest news and updates from accross the world</p>
                      </Col>
                  } />
              </Routes>

              <Routes>
                  <Route path="/" element={ <Col md={10} className={"mx-auto"}>
                      <SearchBar onSearch={handleSearch} />
                  </Col>} />
              </Routes>

              <Col md={10} className={'mx-auto'}>
                  <Row>
                      {loading ? (
                          <Loader />
                      ) : noResults ? (
                          <Col md={12} className={"p-5 mt-4 text-center bg-white"} >
                              <h4>No articles match your criteria.</h4>
                          </Col>
                      ) : (
                          <Routes>
                              <Route path="/" element={<NewsList articles={articles} />} />
                          </Routes>
                      )}
                  </Row>
              </Col>

              <Routes>
                <Route path="/article/:id" element={<ArticleDetails articles={articles} />} />
              </Routes>

        </Row>
      </div>
      </Router>
  );
};

export default App;