import { Link } from 'react-router-dom';
import homeVanImage from '../assets/home-van-img.jpg'
import homeVans from '../assets/home-vans.jpg'
export default function Home() {
    return (
        <div className="home-container">
            <div className="home-banner-wrapper">
                <div className="home-banner-content">
                    <h1>You got the  plans,
                        <br />
                        we got the  <span className='outline'>Vans.</span></h1>
                    <p>Rent the perfect van to make your road trip perfect.</p>

                    <Link to='/vans'>
                        <button className='home-btn'>Find your van</button>
                    </Link>
                </div>
            </div>

            <section className="home-features-section">
                <h2>The leading road trip services in Pakistan</h2>
                <div className="home-features">

                    <div className="home-feature-block">
                        <h3>Flexible cancellation</h3>
                        <p>Cancel your trip for a full refund up to 20 days or opt for an 85% value voucher up to 72h before your pick-up date!</p>
                    </div>
                    <div className="home-feature-block">
                        <h3>One-way trips are available</h3>
                        <p>Collect and return your campervan at over 70 locations spanning North America, Europe, and Oceania.</p>
                    </div>
                    <div className="home-feature-block">
                        <h3>RAC Breakdown Cover</h3>
                        <p>Our collaboration with RAC ensures 24/7 nationwide breakdown coverage to ensure your adventure stays on course.</p>
                    </div>
                    <div className="home-feature-block">
                        <h3>Book now, pay later!</h3>
                        <p>With our highly flexible cancellation policy for campervans, you're only required to pay the complete booking amount 20 days before your trip begins.</p>
                    </div>

                </div>
            </section>


            <section className='home-vans-section'>

                <div className="home-vans-first-block">
                    <div className='home-vans-first-block-img'>
                        <img src={homeVans} alt="" />
                    </div>

                    <div className="home-vans-first-block-content">
                        <h2>Check out all of the Vanlife models!</h2>
                        <p>Explore our range of Vanlife Camper models and locate your ideal travel home that fulfills all your desires and turns your travel dreams into reality. We provide a varied assortment of campervans from well-known manufacturers such as Knaus, Fiat, VW, and many others.</p>

                        <Link to='/vans'>
                            <button>Find your van</button>
                        </Link>
                    </div>
                </div>

                <div className="home-vans-second-block">
                    <div className="home-vans-second-block-content">
                        <h2>Do you own a campervan?
                            Generate more than 50,000Rs monthly!</h2>
                        <p>Have you thought about generating income during the times when your campervan is not in use? Register your vehicle for free and make it available for rent whenever you choose.</p>
                       
                        <Link>
                        <button>Rent your campervan</button>
                        </Link>
                        
                    </div>

                    <div className='home-vans-second-block-img'>
                        <img src={homeVanImage} alt="" />
                    </div>

                </div>

            </section>

        </div>
    )
}