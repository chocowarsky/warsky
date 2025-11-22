import { Home, Briefcase, FolderGit2, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "projects", icon: FolderGit2, label: "Projects" },
    { id: "experience", icon: Briefcase, label: "Experience" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  return (
    <div className="fixed right-0 top-0 h-screen w-24 flex flex-col justify-center items-center border-l border-gray-800 z-50 bg-black hidden lg:flex">
      <div className="flex flex-col gap-8 w-full relative">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className="relative group flex flex-col items-center justify-center w-full py-2"
          >

            {/* LOGIKA GARIS (INDICATOR) */}
            {activeSection === item.id && (
              <motion.div
                layoutId="active-pill" // Ini kuncinya! Framer Motion akan mendeteksi ID ini dan menganimasikan perpindahannya.
                className="absolute left-0 h-full w-1 bg-white rounded-r"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            {/* Ikon & Label */}
            <div className={`transition-colors duration-300 ${activeSection === item.id ? "text-white" : "text-gray-600 group-hover:text-gray-400"}`}>
              <item.icon size={24} strokeWidth={1.5} />
            </div>

            <span className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity absolute -left-20 bg-gray-900 text-white px-2 py-1 rounded">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
