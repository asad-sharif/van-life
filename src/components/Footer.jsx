import { useState } from "react"
import { Link } from "react-router-dom"

export default function Footer() {
  const [open, setOpen] = useState([false, false, false]);

  function toggleFAQ(index) {
    setOpen(prevOpen => {
      const newOpen = [...prevOpen];
      newOpen[index] = !newOpen[index];
      return newOpen;
    });
  }

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
          <p
            onClick={() => toggleFAQ(0)}
            className={`faq ${open[0] ? 'open' : ''}`}
          >
            Can I get a discount for last-minute hire?
          </p>
          {open[0] && <p>Absolutely! We're all about spontaneous adventures. While we can't promise last-minute discounts, we do have some great deals for those who embrace the unexpected. Check out our current promotions and hit the road with a smile!</p>}
          <hr />

          <p
            onClick={() => toggleFAQ(1)}
            className={`faq ${open[1] ? 'open' : ''}`}
          >
            What if I need to cancel?
          </p>
          {open[1] && <p>Change of plans? No worries! If you cancel 20 or more days before your pick-up, you get a full refund. For cancellations 72 hours to 20 days prior, choose between a 50% refund or a travel voucher (full value with a 15% fee). Unfortunately, within 72 hours, no refunds or vouchers. We appreciate your understanding and flexibility!</p>}
          <hr />

          <p
            onClick={() => toggleFAQ(2)}
            className={`faq ${open[2] ? 'open' : ''}`}
          >
            Can I return my campervan to a different location?
          </p>
          {open[2] && <p>Yes, we offer one-way rentals for those who like to mix up their journey. Just let us know in advance, and we'll make sure your road trip ends right where you want it to.</p>}
          <hr />
        </div>

        <div className="footer-upper-block">
          <h3>Vanlife</h3>
          <p>Explore Pakistan's beauty at your own pace with our high-quality campervans. Whether renting or buying, our user-friendly platform ensures a seamless journey. Begin your unforgettable adventure today!</p>
        </div>

        <div className="footer-upper-block">
          <h3>Subscribe to our newsletter</h3>
          <p>Stay informed by subscribing to receive periodic notifications about the latest campervan rental promotions, exclusive deals, and informative news!</p>

          <form>
            <input type="email" name="newsletter-input" id="newsletter-input" placeholder="Email" required />
            <input type="submit" value="Subscribe" id="newsletter-input" />
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
