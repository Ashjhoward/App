import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import { Link } from 'react-router-dom';

const MoreNews = ({ articles }) => {
    return ( <div className={"py-3"}>
            <Row>
                {articles.slice(0, 5).map((article, index) => (
                    <Col md={12} className={"p-3"} key={index}>
                        <div key={index} className="article">
                            <div className="content">
                                <h5 className={"mb-4"}>{article.title}</h5>
                                <Link to={`/article/${index}`} className={"button"}>Read more</Link>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default MoreNews;