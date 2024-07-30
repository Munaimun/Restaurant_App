import { Link } from "react-router-dom";
import { FaUtensils } from "react-icons/fa";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <header className="bg-red-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Restaurant Logo" className="h-10 w-10 mr-2" />
      </Link>
      <nav>
        <ul className="flex space-x-4 hover:text-black">
          <li>
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-gray-200">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/reservation" className="hover:text-gray-200">
              Reservation
            </Link>
          </li>
        </ul>
      </nav>
      <FaUtensils className="text-3xl" />
    </header>
  );
}

export default Header;
