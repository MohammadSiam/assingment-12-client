import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Purchase from '../../Purchase/Purchase/Purchase';


const Explore = ({ explore, setPurchaseSuccess }) => {
    const [openPurchase, setOpenPurchase] = React.useState(false);
    const handlePurchaseOpen = () => setOpenPurchase(true);
    const handlePurchaseClose = () => setOpenPurchase(false);
    const { img, name, description, Price } = explore;
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
                        <Purchase
                            explore={explore}
                            openPurchase={openPurchase}
                            handlePurchaseClose={handlePurchaseClose}
                            setPurchaseSuccess={setPurchaseSuccess}
                        ></Purchase>
                        {/* <Link to='/purchase' >
                            <Button style={{ width: "100%" }} className="" explore={explore} >Buy Now</Button>
                        </Link> */}
                        <Button style={{ width: "100%" }} className="" onClick={handlePurchaseOpen} >Buy Now</Button>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Explore;