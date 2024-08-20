import React, { useState, useEffect } from 'react';
import Article from './Article';
import './News.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function News(){

    const [articles,setArticles]=useState();
    const [keyword,setKeyword]=useState();

    var date=new Date();
    const days={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"}


    const getArticles=async()=>{
        const response= await fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${import.meta.env.VITE_APP_ID}`);
        const jsonData=await response.json();
        console.log(jsonData.articles);
        setArticles(jsonData.articles);

    }

    const handleChange=(e)=>{
        setKeyword(e.target.value);
    }


  return (

    <div>
        <br />
            <Container>
                <div className='news'>
                <Row>
                    <Col><p>News App made<br/>using<br/>NEWSAPI</p></Col>
                    <Col><h2 className='title'>News App</h2></Col>
                    <Col><p>News App made<br/>using<br/>REACT</p></Col>
                </Row>
                <div className='news-two'>
                <Row>
                    <Col><p> | {date.getDate()} {date.toLocaleDateString('default',{month:'long'})} {date.getFullYear()} | </p></Col>
                    <Col>
                        <input type="text" placeholder='Keyword' onChange={handleChange} />
                        <button onClick={getArticles}>search</button>
                    </Col>
                    <Col><p> | {days[date.getDay()]} | </p></Col>
                </Row>
                </div>
                </div>
            </Container>
            <div className='head'>
            {keyword?<h1>Top Articles on {keyword}</h1>:null}
            </div>
            
            <br />

            <div>
                {articles?<Article data={articles}/>:null}
            </div>  
    </div>
    
  );
}

export default News;
