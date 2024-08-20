import React from 'react';
import "./Article.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Article({data}){
  console.log(data);
  return (
    <div>
      {data.map((article,index)=>{
        return(
          <Container className='news-article'>
          <Row >
            <Col sm={3}>
                <img src={article.urlToImage} alt="No Image Available" />
            </Col>
            <Col sm={9}>
                <h2>{article.title}</h2>
                <p>{article.publishedAt}</p>
                <h3>{article.description}</h3>
                <a href={article.url} target='_blank'>Read More</a>
            </Col>
          </Row>
        </Container>
        )
      })}
    </div>
    
  );
}

export default Article;
