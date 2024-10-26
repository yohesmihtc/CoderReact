import Item from '../Item/Item'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ItemList = ({products}) => {
    return(
        <Row xs={1} md={2} lg={3} className='ListGroup'>
            {products.map(prod =><Item key={prod.id}  {...prod}/>)}
        </Row>
    )
}

export default ItemList