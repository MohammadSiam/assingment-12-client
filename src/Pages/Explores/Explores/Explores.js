import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Explore from '../Explore/Explore';

const Explores = () => {
    const [explores, setExplores] = useState([])
    useEffect(() => {
        fetch('./explores.json')
            .then(res => res.json())
            .then(data => setExplores(data))
    }, [])
    return (
        <div>
            <Navigation />
            <div className="container">
                <div style={{ textAlign: "center" }}>
                    <h2>From Explores</h2>
                </div>
                <div className="explores" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
                    {
                        explores.map(explore => <Explore
                            key={explore.id}
                            explore={explore}
                        ></Explore>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Explores;