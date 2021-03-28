import { useState, useEffect } from 'react';
import client from '../contentful/client';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import circle from '../pictures/circle.png'
import './Games.css'

const Games = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        fetch("http://localhost:3333/")     //axios
        setLoading(true); 
        .then((response) => {
            setArticles(response.items)
            setLoading(false)
        })
        .catch(err => console.log(err))
    }, []);

    if (loading) return <img className="center" src={circle} alt='loading...' />     //spinner einfügen
    if (error) return <div>Error: {error.message}</div>

    console.log(articles)

    return (
        <div className='container'>
            {articles &&
            articles.map(article => (
            <Card key={article.sys.id} style={{ width: '18rem' }}>
                {console.log(article.fields.picture.fields.file.url)}
            <Card.Img variant="top" src={article.fields.picture.fields.file.url} />
            <Card.Body>
              <Card.Title>{article.fields.title}</Card.Title>
              <Card.Text>{article.fields.directions}</Card.Text>
              <Button href="#" variant="primary">further</Button>
            </Card.Body>
          </Card>
               )
               

           )} 
         
        </div>
    )
} 

export default Games;