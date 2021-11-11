import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Explore = (props) => {
    const { img, name, description, Price } = props.explore;
    return (
        <div className="container">
            <Card style={{ width: '18rem', border: 'none', marginTop: "15px" }}>
                <Card.Img variant="top" src={img} style={{ height: '200px' }} />
                <Card.Body>
                    <Card.Title className="product-title">{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text className="price">
                        Price: {Price}
                    </Card.Text>
                    <Card.Footer style={{ backgroundColor: "white", border: "none" }}>
                        <Link to='/'>
                            <Button style={{ width: "100%" }} className="" >Buy Now</Button>
                        </Link>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Explore;