import React from "react"
import { useParams,Link } from "react-router-dom"

export default function VanDetail() {
    const [van, setVan] = React.useState([])
    const params = useParams()
    // console.log(params);


    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])



    return (
        <div className="van-detail-container">
            
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="van-detail-wrapper">

                <div className="van-detail-img">
                    <img src={van.imageUrl} alt="" />
                </div>

                <div className="van-detail-content">
                    <h2>{van.name}</h2>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <p>
                        <strong>${van.price}</strong>
                        <small>/day</small>
                    </p>
                    <button className="van-detail-btn">Rent this van</button>
                   
                    <h3>Description:</h3>
                    <p>{van.description}</p>
                    <p>{van.description}</p>
                    <p>{van.description}</p>
                    
                </div>

            </div>
        </div >
    )
}

// vans{
//   description:"The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go."
// id:"5"
// imageUrl:"https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png"
// name:"The Cruiser"
// price:120
// type:"luxury"
// }

