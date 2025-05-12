import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div>
            <img src='/images/logo.png'
            alt='logo'/>
        </div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          </li>
          <li>
            <Link to="/aboutus" className="hover:text-blue-600 transition">About Us</Link>
          </li>
          <li>
            <Link to="/register" className="hover:text-blue-600 transition">Register</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
