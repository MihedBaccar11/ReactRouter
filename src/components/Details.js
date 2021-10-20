import { Card } from 'react-bootstrap';
import { useHistory, useParams } from "react-router-dom";


function Detail({ movies }) {
    console.log(movies)
    const history = useHistory()
    const { ID } = useParams()
    const T = movies.find((mov) => mov.id === Number(ID))

    return (
        <div className='container' >
        <h1 style={{color:'tomato', justifyContent: 'center' }}>{T.name}</h1>
        <iframe width="100%" height="615" src={T.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <Card>
                <Card.Body>
                    <Card.Text>
                        <label style={{fontWeight: 'bold', color:'tomato'}}> Description : </label>
                        {T.description}
                    </Card.Text>
                </Card.Body>
            </Card>
            <button  className="btn btn-danger" onClick={() => history.goBack()} ><i className="fa fa-angle-double-left"></i></button>
        </div>

    )
}
export default Detail