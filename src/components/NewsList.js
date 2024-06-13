import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import { Link } from 'react-router-dom';
import Default from'../default.png';

const NewsList = ({ articles }) => {
    return ( <div className={"py-3"}>
                <Row>
                    {articles.map((article, index) => (
                        <Col md={4} className={"p-3"}>
                            <div key={index} className="article">
                                {article.urlToImage ? (
                                    <img className={"w-100"} src={article.urlToImage} alt={article.title} />
                                ) : (
                                    <img className={"w-100"} src={Default} alt={"Test"}/>
                                )}
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

export default NewsList;