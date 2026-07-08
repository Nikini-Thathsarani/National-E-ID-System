import { NavLink } from 'react-router-dom';
import { LayoutDashboard, User, CreditCard, FileText, QrCode } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', si: 'උපකරණ පුවරුව', ta: 'டாஷ்போர்டு', path: '/', icon: <LayoutDashboard size={20}/> },
    { name: 'Profile', si: 'පැතිකඩ', ta: 'சுயவிவரம்', path: '/profile', icon: <User size={20}/> },
    { name: 'Digital ID', si: 'ඩිජිටල් හැඳුනුම්පත', ta: 'டிஜிட்டல் ஐடி', path: '/digital-id', icon: <CreditCard size={20}/> },
    { name: 'Documents', si: 'ලේඛන', ta: 'ஆவணங்கள்', path: '/documents', icon: <FileText size={20}/> },
    { name: 'QR Code', si: 'QR කේතය', ta: 'QR குறியீடு', path: '/qr-code', icon: <QrCode size={20}/> },
  ];

  return (
    <aside className="w-72 bg-[#090e1a] p-6 flex flex-col border-r border-gray-800 min-h-screen">
      {/* Title / Logo Section */}
      <div className="mb-10">
        <h1 className="text-xl font-bold text-blue-500 uppercase tracking-wider">National e-ID System</h1>
        <p className="text-[10px] text-gray-400 mt-1">ජාතික විද්‍යుත් හැඳුනුම්පත් පද්ධතිය <br/> தேசிய மின்னணு அடையாள அட்டை முறைமை</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 p-4 rounded-xl transition-all mb-2 cursor-pointer ${
                isActive 
                  ? 'bg-blue-600/20 text-blue-400 border-l-4 border-blue-500 font-semibold' 
                  : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
              }`
            }
          >
            {item.icon}
            <div>
              <p className="text-sm font-medium leading-none">{item.name}</p>
              <p className="text-[10px] opacity-60 mt-1">{item.si} / {item.ta}</p>
            </div>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;