import Item from '../Item/Item'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ItemList ({items}) {
    return(
            <Row xs={1} md={2} lg={3} className='ListGroup'>
            {items.map(item =><Item item={item} key={item.id} {...item}/>)}
        </Row>
    )
}

export default ItemList