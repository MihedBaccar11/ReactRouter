
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import ReactStars from "react-star-rating-component";


function CardMovie({id,name,description,rating,posterURL, trailer}) {
    
  return (     
  <>   <div className="ListMovies">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={posterURL} style={{ height: "400px" ,width: "100%"}} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
            <ReactStars
            count={5}
            value={rating}
            size={80}
            activeColor = "#ffd700"
  />
        </Card.Body>
        <Card.Text>
        <Link to={`/detail/${id}`} >
          <button className='btn btn-danger'>Détail</button>
        </Link>
        </Card.Text>
        </Card> 
        </div>    

   </>
  )
}
export default CardMovie