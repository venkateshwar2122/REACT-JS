import { Link } from 'react-router-dom'


const Nav = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </nav>
)

export default Nav
