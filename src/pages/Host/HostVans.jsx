import React from 'react';
import { Link } from 'react-router-dom';

export default function HostVans() {
    const [vans, setVans] = React.useState([]);

    React.useEffect(() => {
        fetch('/api/host/vans')
            .then(res => res.json())
            .then(data => setVans(data.vans));
    }, []);

    const vanCard = vans.map(van => (

        <Link to={`/host/vans/${van.id}`} key={van.id}>
            <div className="host-van-card" key={van.id}>
                <img src={van.imageUrl} alt="" />
                <div className="host-van-card-content">
                    <h2>{van.name}</h2>
                    <p>{van.price} <small>/day</small></p>
                </div>
            </div>
        </Link>


    ));

    return (
        <div className="host-vans-container">
            <h1>Your listed vans</h1>
            {vanCard}
        </div>
    );
}
