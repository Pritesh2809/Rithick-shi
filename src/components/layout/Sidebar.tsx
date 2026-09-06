import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Beef, 
  Activity, 
  Stethoscope, 
  Settings, 
  Menu,
  Network
} from 'lucide-react';
import clsx from 'clsx';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Livestock', path: '/animals', icon: Beef },
    { name: 'Analytics', path: '/analytics', icon: Activity },
    { name: 'Veterinarian', path: '/veterinarian', icon: Stethoscope },
    { name: 'System Workflow', path: '/workflow', icon: Network },
  ];

  return (
    <>
      {/* Mobile overlay */}
      <div 
        className={clsx(
          "fixed inset-0 bg-slate-900/50 z-40 lg:hidden transition-opacity duration-300",
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setSidebarOpen(false)}
      />

      <aside className={clsx(
        "fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transition-transform duration-300 flex flex-col",
        sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="flex items-center h-16 px-6 border-b border-slate-200">
          <div className="flex items-center gap-2 text-emerald-600">
            <Beef className="w-8 h-8" />
            <span className="text-xl font-bold text-slate-800">AgriGuard</span>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) => clsx(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-colors",
                  isActive 
                    ? "bg-emerald-50 text-emerald-700" 
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-200">
          <NavLink
            to="/settings"
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) => clsx(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-colors",
              isActive 
                ? "bg-emerald-50 text-emerald-700" 
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            <Settings className="w-5 h-5" />
            Settings
          </NavLink>
        </div>
      </aside>
    </>
  );
}
