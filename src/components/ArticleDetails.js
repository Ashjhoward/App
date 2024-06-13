import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import Logo from "../logo.svg";
import MoreNews from "./MoreNews";

const ArticleDetails = ({ articles }) => {
    const { id } = useParams();
    const article = articles.find((article, index) => index.toString() === id);

    if (!article) {
        return <p>Article not found</p>;
    }

    return (<>
        <Col md={12} className="header">
            <img src={Logo} className={"logo"} alt="Clarity Logo"/>
            <h1 className={"mt-3"}>{article.title}</h1>
        </Col>

        <Col md={9} className={'mx-auto'}>
            <Row>
                <Col md={12} className={"mx-auto"}>
                    <Link className={'button mt-3'} to="/">Back</Link>
                </Col>

                <Col md={9} className={'p-3'}>
                    <div className="article-details my-3">
                        <img className={"w-100"} src={article.urlToImage} alt={article.title} />
                        <p className={'my-4'}>{article.content}</p>
                    </div>
                </Col>

                <Col md={3}>
                    <h4 className={'mb-0'}>More News</h4>
                    <MoreNews articles={articles} />
                </Col>
            </Row>
         </Col>
        </>
    );
};

export default ArticleDetails;
