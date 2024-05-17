import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <div className="home-container">
            <div className="home-banner-wrapper">
                <div className="home-banner-content">
                    <h1>You got the travel plans,
                        <br />
                        we got the travel <span className='outline'>Vans.</span></h1>
                    <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>

                    <Link to='/vans'>
                        <button className='home-btn'>Find your van</button>
                    </Link>


                </div>

            </div>
        </div>
    )
}