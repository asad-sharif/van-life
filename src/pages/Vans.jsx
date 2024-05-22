import React from "react";
import { Link } from 'react-router-dom'
import '../server'

export default function Vans() {
    const [vans, setVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])


    let vanCard = vans.map(van => (
        <div key={van.id} className="van-card">

            <Link to={`/vans/${van.id}`} >

                <div className="van-card-img">
                    <img src={van.imageUrl} alt="" />
                </div>
                <div className="van-card-content">
                    <h3>{van.name}</h3>
                    <p><strong>${van.price}</strong> <small>/day</small></p>
                </div>

                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>

        </div>


    ))



    return (
        <div className="van-container">
            <h2>Explore our van options</h2>
            <div className="van-list">
                {vanCard}
            </div>
        </div>
    );
}