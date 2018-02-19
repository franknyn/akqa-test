import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, Col } from 'reactstrap'

const Product = ({productImage,isExclusive, isSale, price, productName }) => {
    return (
        <Col xs="12" md="6" lg="3">
            <Card>
                <CardImg  src={`images/${productImage}`} alt={productName} />
                <CardBody>
                    { isSale && <small className="alert bg-red">Sale</small> }
                    { isExclusive && <small className="alert bg-green">Exclusive</small> }
                    { !isExclusive && !isSale && <small className="alert">&nbsp;</small> }
                    <div className="d-flex flex-row flex-lg-column flex-xl-row justify-content-between">
                        <CardTitle tag="h6" className="pr-3">{productName}</CardTitle>
                        <CardText tag="h5">{price}</CardText>
                    </div>
                </CardBody>
            </Card>  
        </Col>   
    )
}

export default Product
