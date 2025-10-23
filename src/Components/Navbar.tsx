import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-[#1E1E1E] text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Left - Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img
              src="https://roseislandre.com/wp-content/uploads/2024/01/white-logo.png"
              alt="Rose Island Real Estate"
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Center - Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8 font-semibold text-sm tracking-wide">
          <li><Link to="/" className="hover:text-[#C7A441] transition">HOME</Link></li>
          <li><Link to="/about" className="hover:text-[#C7A441] transition">ABOUT US</Link></li>
          <li><Link to="/properties" className="hover:text-[#C7A441] transition">PROPERTIES</Link></li>
          <li><Link to="/agents" className="hover:text-[#C7A441] transition">AGENTS</Link></li>
          <li><Link to="/blog" className="hover:text-[#C7A441] transition">BLOG</Link></li>
          <li><Link to="/contact" className="hover:text-[#C7A441] transition">CONTACT</Link></li>
        </ul>

        {/* Right - Desktop Phone */}
        <div className="hidden md:flex items-center space-x-2 font-medium">
          <Phone className="h-4 w-4 text-[#C7A441]" />
          <span className="text-[#C7A441]">+971 2 444 ****</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? (
            <X className="h-7 w-7 text-[#C7A441]" />
          ) : (
            <Menu className="h-7 w-7 text-[#C7A441]" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1E1E1E] border-t border-gray-800 mt-3 px-6 pb-4 animate-fadeIn">
          <ul className="flex flex-col space-y-4 font-semibold text-sm tracking-wide">
            <li><Link onClick={toggleMenu} to="/" className="hover:text-[#C7A441] transition">HOME</Link></li>
            <li><Link onClick={toggleMenu} to="/about" className="hover:text-[#C7A441] transition">ABOUT US</Link></li>
            <li><Link onClick={toggleMenu} to="/properties" className="hover:text-[#C7A441] transition">PROPERTIES</Link></li>
            <li><Link onClick={toggleMenu} to="/agents" className="hover:text-[#C7A441] transition">AGENTS</Link></li>
            <li><Link onClick={toggleMenu} to="/blog" className="hover:text-[#C7A441] transition">BLOG</Link></li>
            <li><Link onClick={toggleMenu} to="/contact" className="hover:text-[#C7A441] transition">CONTACT</Link></li>
          </ul>

          <div className="flex items-center space-x-2 mt-6 font-medium">
            <Phone className="h-4 w-4 text-[#C7A441]" />
            <span className="text-[#C7A441]">+971 2 444 ****</span>
          </div>
        </div>
      )}
    </nav>
  );
}
