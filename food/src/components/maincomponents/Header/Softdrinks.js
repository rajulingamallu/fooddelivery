import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

import one from '../../../assets/images/56.jpg'
import two from '../../../assets/images/57.jpg'
import three from '../../../assets/images/55.jpg'
import four from '../../../assets/images/54.jpg'
import five from '../../../assets/images/53.jpg'
import six from '../../../assets/images/52.jpg'
import seven from '../../../assets/images/51.jpg'
import eight from '../../../assets/images/50.jpg'
import nine from '../../../assets/images/49.jpg'
import ten from '../../../assets/images/48.jpg'
import eleven from '../../../assets/images/47.jpg'
import twelve from '../../../assets/images/46.jpg'
const Softdrinks = () => {
  const navigate = useNavigate();
  const backHome =()=>
  {
    navigate("/");
  }
  const navigateToOrder =()=>{
    navigate("/Order")
  }
  return (
    <div className='row m-5 pl-4'>
      <h3>
        <center>        
       BEWARAGES
       <Button onClick={backHome} style={{float:'right',backgroundColor:"#2c9c7a",border:'none'}}>BACK</Button>
        </center>
        </h3>

      <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={one} style={{ height: '18rem'}}/>
      <Card.Body>
        <Card.Title>icecream</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={two} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>donut</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={three} style={{ height: '18rem'}}/>
      <Card.Body>
        <Card.Title>drinks</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={four} style={{ height: '18rem'}} />
      <Card.Body>
        <Card.Title>gulabjam</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={nine} style={{ height: '18rem'}}/>
      <Card.Body>
        <Card.Title>icecream</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={ten} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>donut</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={eleven} style={{ height: '18rem'}}/>
      <Card.Body>
        <Card.Title>drinks</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={twelve} style={{ height: '18rem'}} />
      <Card.Body>
        <Card.Title>gulabjam</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={five} style={{ height: '18rem'}}/>
      <Card.Body>
        <Card.Title>icecream</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={six} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>donut</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={seven} style={{ height: '18rem'}}/>
      <Card.Body>
        <Card.Title>drinks</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={eight} style={{ height: '18rem'}} />
      <Card.Body>
        <Card.Title>gulabjam</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={one} style={{ height: '18rem'}}/>
      <Card.Body>
        <Card.Title>icecream</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={two} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>donut</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={three} style={{ height: '18rem'}}/>
      <Card.Body>
        <Card.Title>drinks</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={four} style={{ height: '18rem'}} />
      <Card.Body>
        <Card.Title>gulabjam</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={nine} style={{ height: '18rem'}}/>
      <Card.Body>
        <Card.Title>icecream</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={ten} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>donut</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={eleven} style={{ height: '18rem'}}/>
      <Card.Body>
        <Card.Title>drinks</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={twelve} style={{ height: '18rem'}} />
      <Card.Body>
        <Card.Title>gulabjam</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={five} style={{ height: '18rem'}}/>
      <Card.Body>
        <Card.Title>icecream</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={six} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>donut</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={seven} style={{ height: '18rem'}}/>
      <Card.Body>
        <Card.Title>drinks</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={eight} style={{ height: '18rem'}} />
      <Card.Body>
        <Card.Title>gulabjam</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={one} style={{ height: '18rem'}}/>
      <Card.Body>
        <Card.Title>icecream</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={two} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>donut</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={three} style={{ height: '18rem'}}/>
      <Card.Body>
        <Card.Title>drinks</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={four} style={{ height: '18rem'}} />
      <Card.Body>
        <Card.Title>gulabjam</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={nine} style={{ height: '18rem'}}/>
      <Card.Body>
        <Card.Title>icecream</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={ten} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>donut</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={eleven} style={{ height: '18rem'}}/>
      <Card.Body>
        <Card.Title>drinks</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={twelve} style={{ height: '18rem'}} />
      <Card.Body>
        <Card.Title>gulabjam</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={five} style={{ height: '18rem'}}/>
      <Card.Body>
        <Card.Title>icecream</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={six} style={{height:'18rem'}} />
      <Card.Body>
        <Card.Title>donut</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={seven} style={{ height: '18rem'}}/>
      <Card.Body>
        <Card.Title>drinks</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem',margin:'15px' }}>
      <Card.Img variant="top" src={eight} style={{ height: '18rem'}} />
      <Card.Body>
        <Card.Title>gulabjam</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={navigateToOrder} variant="danger">Order</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Softdrinks