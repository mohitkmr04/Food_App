import { LOGO_URL } from "../utils/constants.js";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  //State for toggling mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  //Toggle function for mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        <div className="flex items-center justify-between w-full md:w-auto">
          <img className="w-40" src={LOGO_URL} alt="Logo" />
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black">
              {menuOpen ? <X size={24} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        <nav className="hidden md:flex md:items-center">
          <ul className="flex space-x-6 text-center">
            <li>
                Online Stautus: {onlineStatus ? "✅":"⭕"}
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <Link to="/cart" className="font-bold text-xl">
                🛒 - ({cartItems.length} items)
              </Link>
            </li>
            <li>
              <button
                className="bg-black text-white px-4 py-2 rounded-md"
                onClick={() =>
                  setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
                }
              >
                {btnNameReact}
              </button>
            </li>
            <li>{loggedInUser}</li>
          </ul>
        </nav>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-3 bg-white shadow-md rounded-lg p-4">
            <li>Online Status: {onlineStatus ? "✅" : "⭕"}</li>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
            <li><Link to="/grocery" onClick={() => setMenuOpen(false)}>Grocery</Link></li>
            <li>
              <Link to="/cart" className="font-bold text-xl" onClick={() => setMenuOpen(false)}>
                🛒 - ({cartItems.length} items)
              </Link>
            </li>
            <li>
              <button
                className="bg-black text-white px-4 py-2 rounded-md"
                onClick={() => {
                  setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
                  setMenuOpen(false);
                }}
              >
                {btnNameReact}
              </button>
            </li>
            <li>{loggedInUser}</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
