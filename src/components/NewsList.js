import React, { useEffect, useState } from 'react';
import { fetchNews } from '../api/News';

import { Card, Container, Row, Col } from 'react-bootstrap';

const NewsList = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            const newsArticles = await fetchNews(category);
            setArticles(newsArticles);
        };
        getNews();
    }, [category]);

    return (
        <Container>
            <Row>
                {articles.map((article, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={article.urlToImage} />
                            <Card.Body>
                                <Card.Title>{article.title}</Card.Title>
                                <Card.Text>
                                    {article.description}
                                </Card.Text>
                                <a href={article.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read more</a>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default NewsList;
