import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { LayoutDashboard, User, CreditCard, FileText, QrCode, LogOut } from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Dashboard', si: 'උපකරණ පුවරුව', ta: 'டாஷ்போர்டு', path: '/dashboard', icon: <LayoutDashboard size={20}/> },
    { name: 'Profile', si: 'පැතිකඩ', ta: 'சுயவிவரம்', path: '/dashboard/profile', icon: <User size={20}/> },
    { name: 'Digital ID', si: 'ඩිජිටල් හැඳුනුම්පත', ta: 'டிஜிட்டல் ஐடி', path: '/dashboard/digital-id', icon: <CreditCard size={20}/> },
    { name: 'Documents', si: 'ලේඛන', ta: 'ஆவணங்கள்', path: '/dashboard/documents', icon: <FileText size={20}/> },
    { name: 'QR Code', si: 'QR කේතය', ta: 'QR குறியீடு', path: '/dashboard/qr-code', icon: <QrCode size={20}/> },
  ];

  // 🔐 ආරක්ෂිතව Logout වීමේ Function එක (මෙහි Bracket එක නිවැරදි කරන ලදී)
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  }; // 🟢 මෙතන තිබුණු වැරදි ); එක වෙනුවට නිවැරදිව }; දමා ඇත

  return (
    <aside className="w-72 bg-[#090e1a] p-6 flex flex-col border-r border-gray-800 min-h-screen">
      {/* Title / Logo Section */}
      <div className="mb-10">
        <h1 className="text-xl font-bold text-blue-500 uppercase tracking-wider">National e-ID System</h1>
        <p className="text-[10px] text-gray-400 mt-1">ජාතික විද්‍යුත් හැඳුනුම්පත් පද්ධතිය <br/> தேசிய மின்னணு அடையாள அட்டை முறைமை</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 flex flex-col justify-between"> 
        {/* Menu Items Stack */}
        <div>
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/dashboard'}
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
        </div>

        {/* 🚪 Sign Out Button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-4 p-4 rounded-xl transition-all cursor-pointer text-red-400 hover:bg-red-500/10 hover:text-red-300 mt-auto border border-dashed border-red-500/20"
        >
          <LogOut size={20} />
          <div className="text-left">
            <p className="text-sm font-medium leading-none">Sign Out</p>
            <p className="text-[10px] opacity-60 mt-1">පද්ධතියෙන් ඉවත් වන්න / නික්මෙසන්න</p>
          </div>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;