import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-10">
      <div className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-xl font-bold">🍽️ Foodies</h2>
          <p className="mt-2 text-sm text-gray-300">
            Delivering delicious meals to your doorstep.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm space-y-1 text-gray-300">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><a href="#" className="hover:underline">Order</a></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
          </div>
          <p className="mt-4 text-sm text-gray-300">Email: support@foodies.com</p>
        </div>
      </div>
      <div className="bg-gray-900 text-center text-xs text-gray-400 py-3">
        <p>© 2025 Foodies. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;