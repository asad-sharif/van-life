import { Link } from "react-router-dom"
export default function Footer() {
    return (
        <footer>Website Developed by
        <Link to='https://github.com/asad-sharif/' className='developed-by'>
          Asad Sharif
        </Link>
      </footer>
    )
}