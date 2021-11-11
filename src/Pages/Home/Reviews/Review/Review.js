import React from 'react';
import { Card } from 'react-bootstrap';


const Review = (props) => {
    const [value, setValue] = React.useState(2);
    const { name, description } = props.review;

    return (
        <div className="review" >
            <Card style={{ width: "18rem" }}>

                <Card.Body>
                    <div sx={{ alignItem: "center" }} >

                    </div>

                    <blockquote className="blockquote mb-0">
                        <p>
                            {description}
                        </p>
                        <b><footer className="blockquote-footer">
                            {name}
                        </footer></b>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;