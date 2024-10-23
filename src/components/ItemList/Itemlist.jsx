import Item from '../Item/Item'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ItemList ({items}) {
    return(
        <Row>
            {items.map(item =>(
                <Col key={item.id}>
                <Item item={item} />
                </Col>
            ))}
        </Row>
    )
}

export default ItemList