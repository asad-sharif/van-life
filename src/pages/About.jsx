import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="about-container">
            <div className="about-banner">
                <h1>About Us</h1>
            </div>
            <div className="about-container-content">
                <h2>Don’t squeeze in a sedan when you could relax in a van.</h2>

                <p>Welcome to <strong>#VANLIFE</strong>, your one-stop destination for campervan adventures. Whether you're a seasoned campervan enthusiast or a curious newcomer, we're here to make your road trip dreams a reality.</p>

                <p>At Vanlife, we believe in the transformative power of van life. It's an opportunity to escape the ordinary, embrace the open road, and connect with nature on a deeper level. It's about forging new paths, discovering hidden gems, and creating memories that will last a lifetime.</p>

                <div className="about-container-content-options">
                    <div className="about-container-content-options-block">
                        <h3>Rent a Campervan</h3>
                        <p>Our comprehensive fleet of campervans caters to every need and budget. From compact pop-top vans to spacious motorhomes, we have the perfect vehicle to suit your adventure plans. Each campervan is meticulously maintained and equipped with all the essentials for a comfortable and enjoyable journey.</p>
                    </div>
                    <div className="about-container-content-options-block">
                        <h3>Our Community</h3>
                        <p>Join our vibrant community of campervan enthusiasts and connect with fellow adventurers. Share your experiences, exchange tips, and discover new destinations along the way. We're here to support you every step of your van life journey.</p>
                    </div>
                    <div className="about-container-content-options-block">
                        <h3>Host Your Campervan</h3>
                        <p>If you own a campervan that's not in constant use, why not share it with others and earn some extra income? With #VANLIFE, you can list your campervan for rent and reach a wide network of potential renters. We handle the booking process, payments, and insurance, so you can sit back and relax while earning passive income.</p>
                    </div>
                    <div className="about-container-content-options-block">
                        <h3>Embrace the #VANLIFE Experience</h3>
                        <p>#VANLIFE is more than just renting a campervan; it's a lifestyle. It's about embracing the freedom of the open road, exploring new horizons, and living life on your own terms. Let us be your guide as you embark on your unforgettable #VANLIFE adventure.</p>
                    </div>

                </div>

                <div className="about-container-highlight-box">
                    <p>Your destination is waiting.</p>
                    <p>Your van is ready.</p>
                    <Link to='/vans'>
                        <button>Explore our vans</button></Link>
                </div>


            </div>

        </div>

    )
}