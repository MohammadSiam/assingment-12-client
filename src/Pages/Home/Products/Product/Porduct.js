import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './Product.css'

const Porduct = ({ product }) => {

    const { name, img, description, Price } = product;
    return (
        <div className="product">
            <Card style={{ width: '18rem', border: 'none', marginTop: "15px", height: "500px" }}>
                <Card.Img variant="top" src={img} style={{ height: '200px' }} />
                <Card.Body>
                    <Card.Title className="product-title">{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text className="price">
                        Price: {Price}
                    </Card.Text>
                    <Link to='/explore'>
                        <Button className="buy" >Buy Now</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Porduct;