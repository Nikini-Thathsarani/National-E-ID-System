import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { title: "Dashboard", sub: "උපකරණ පුවරුව / ..." },
    { title: "Profile", sub: "පැතිකඩ / சுயவிவரம்" },
    { title: "Digital ID", sub: "ඩිජිටල් ID / சுயவிவரம்" },
    { title: "Documents", sub: "ලේඛන / ஆவணங்கள்" },
    { title: "QR Code", sub: "QR කේතය / QR குறியீடு" },
  ];

  return (
    <aside className="w-full lg:w-72 bg-[#081220] p-8 flex flex-col justify-between border-r border-white/10 lg:min-h-screen shrink-0">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-xl font-semibold text-white tracking-wide">National e-ID System</h1>
          <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
            ජාතික විද්‍යුත් හැඳුනුම්පත් පද්ධතිය <br />
            தேசிய மின்னணு அடையாள අட்டை முறைமை
          </p>
        </div>

        <nav className="flex flex-col gap-6">
          {menuItems.map((item, index) => (
            <a href="#" key={index} className="group block no-underline">
              <div className="text-base font-medium text-white group-hover:text-blue-400 transition-colors">
                {item.title}
              </div>
              <div className="text-xs text-gray-400 mt-0.5">{item.sub}</div>
            </a>
          ))}
        </nav>
      </div>

      <button className="text-left text-sm text-gray-400 hover:text-red-400 transition-colors mt-8 font-medium">
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;