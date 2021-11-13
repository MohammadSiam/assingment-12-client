import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from '@mui/material/Rating';

const Review = (props) => {
    const [value, setValue] = React.useState(0);
    const { Description, Rate } = props.review;

    return (
        <div className="review" >
            <Card style={{ width: "18rem" }}>

                <Card.Body>
                    <div sx={{ alignItem: "center" }} >
                        <Rating name="read-only" value={Rate} readOnly />
                    </div>

                    <blockquote className="blockquote mb-0">
                        <p>
                            {Description}
                        </p>

                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;