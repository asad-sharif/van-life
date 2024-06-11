import { Link } from "react-router-dom"
export default function Footer() {

  return (
    <footer>

      <div className="footer-upper">
        <div className="footer-upper-block">
          <h3>#VANLIFE</h3>
          <Link to='/about'>About Us</Link>
          <Link to='/vans'>Vans</Link>
          <Link to=''>List your van</Link>
          <Link to=''>Contact Us</Link>
        </div>


        <div className="footer-upper-block">
          <h3>FAQs</h3>
          <p>Can I get a discount for last-minute hire? <span>▼</span></p>
        <p>Absolutely! We're all about spontaneous adventures. While we can't promise last-minute discounts, we do have some great deals for those who embrace the unexpected. Check out our current promotions and hit the road with a smile!</p>
          
        </div>


        <div className="footer-upper-block">
          <h3>Vanlife</h3>
          <p>Explore Pakistan's beauty at your own pace with our high-quality campervans. Whether renting or buying, our user-friendly platform ensures a seamless journey. Begin your unforgettable adventure today!</p>
        </div>

        <div className="footer-upper-block">
          <h3>Subscribe to our newsletter</h3>
          <p>Stay informed by subscribing to receive periodic notifications about the latest campervan rental promotions, exclusive deals, and informative news!</p>

          <form>
            <input type="email" name="newsletter-input" id="newsletter-input" placeholder="Email" required/>
            <input type="submit" value="Subscribe" id="newsletter-input"  />
          </form>

        </div>

      </div>

      <div className="footer-lower">
        <p>Website Developed by
          <Link to='https://github.com/asad-sharif/' className='developed-by'>
            Asad Sharif
          </Link></p>
      </div>

    </footer>
  )
}