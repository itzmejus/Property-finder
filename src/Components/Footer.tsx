import { Facebook, Twitter, Instagram, Music, Mail } from "lucide-react";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-[#1E1E1E] text-white bottom-0 z-50 shadow-md">
            <div className="bg-gradient-to-br from-[#2C2C2C] to-[#3a3a3a] shadow-xl flex items-center justify-between p-3 hover:shadow-2xl transition-all">
                <Link to="/">
                    <img
                        src="https://roseislandre.com/wp-content/uploads/2024/01/white-logo.png"
                        alt="Rose Island Real Estate"
                        className="h-12 w-auto"
                    />
                </Link>
                <div className="flex flex-wrap gap-4">
                    {[
                        { icon: Facebook, color: 'hover:bg-blue-600' },
                        { icon: Twitter, color: 'hover:bg-sky-500' },
                        { icon: Instagram, color: 'hover:bg-pink-600' },
                        { icon: Music, color: 'hover:bg-black' },
                        { icon: Mail, color: 'hover:bg-[#C9A961]' }
                    ].map((social, index) => (
                        <a
                            key={index}
                            href="#"
                            className={`w-14 h-14 bg-white/10 backdrop-blur-sm text-white rounded-xl flex items-center justify-center ${social.color} transition-all hover:scale-110 hover:rotate-6 border border-white/20`}
                        >
                            <social.icon className="h-6 w-6" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer
