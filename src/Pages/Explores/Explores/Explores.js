import { Alert } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Explore from '../Explore/Explore';

const Explores = () => {
    const [explores, setExplores] = useState([])
    const [bookingSuccess, setPurchaseSuccess] = useState(false);
    useEffect(() => {
        fetch('https://whispering-shore-11998.herokuapp.com/explores')
            .then(res => res.json())
            .then(data => setExplores(data))
    }, [])
    return (
        <div>
            <Navigation />
            <div className="container">
                <div style={{ textAlign: "center" }}>
                    <h2>All Our Car's</h2>
                    <hr />
                    {bookingSuccess && <Alert severity="success">Orderd  successfully!</Alert>}
                </div>
                <div className="explores" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>

                    {
                        explores.map(explore => <Explore
                            key={explore.id}
                            explore={explore}
                            setPurchaseSuccess={setPurchaseSuccess}
                        ></Explore>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Explores;