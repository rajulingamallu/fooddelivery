import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import gujarati from '../../../../assets/images/gujarati.jpg'
import vegpulao from '../../../../assets/images/vegpulao.jpg'
import curd from '../../../../assets/images/curd.jpg'
import thali from '../../../../assets/images/thali.jpg'
import one from '../../../../assets/images/1.jpg'
import two from '../../../../assets/images/2.jpg'
import three from '../../../../assets/images/3.jpg'
import four from '../../../../assets/images/4.jpg'
import five from '../../../../assets/images/5.jpg'
import six from '../../../../assets/images/6.jpg'
import seven from '../../../../assets/images/7.jpg'
import eight from '../../../../assets/images/8.jpg'
import nine from '../../../../assets/images/9.jpg'
import ten from '../../../../assets/images/10.jpg'
import eleven from '../../../../assets/images/11.jpg'

import { useNavigate } from 'react-router-dom';

const BreakfastLatest = () => {
 const navigate=useNavigate();
const backHome = () =>{
  navigate("/");
}
const navigateToOrder =()=>{
  navigate("/Order")
}

return (
    <div className='row m-5 pl-4'>
      <h3>
        <center>        
        Top Rated-Items  <Button onClick={backHome} style={{float:'right',backgroundColor:"#2c9c7a",border:'none'}}>BACK</Button>
        </center>
        </h3>

      <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={gujarati} />
      <Card.Body>
        <Card.Title>Gujarati thali</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={vegpulao} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={curd} />
      <Card.Body>
        <Card.Title>curd rice</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={thali} style={{ height: '18rem'}} />
      <Card.Body>
        <Card.Title>Indian thali</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={vegpulao} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={one} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={two} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={three} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={four} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={five} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={five} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={six} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={seven} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={eight} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={nine} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={ten} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={eleven} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={gujarati} />
      <Card.Body>
        <Card.Title>Gujarati thali</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={vegpulao} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={curd} />
      <Card.Body>
        <Card.Title>curd rice</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={thali} style={{ height: '18rem'}} />
      <Card.Body>
        <Card.Title>Indian thali</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={vegpulao} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={one} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={two} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={three} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={four} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={five} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={five} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={six} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={seven} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={eight} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={nine} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={ten} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={eleven} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>vegpulao</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Order</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default BreakfastLatest




