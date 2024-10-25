import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';

function Item({item}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img}/>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Card.Text>
          {item.price}
        </Card.Text>
        <Button variant="outline-dark" as={Link} to={`/item/${item.id}`}>Ver mas</Button>
        
      </Card.Body>
    </Card>
  );
}

export default Item