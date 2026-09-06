import { Menu, Bell, Search, UserCircle } from 'lucide-react';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function Header({ setSidebarOpen }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 bg-white border-b border-slate-200 sm:px-6 lg:px-8">
      <div className="flex items-center">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 mr-4 text-slate-500 rounded-lg lg:hidden hover:bg-slate-100"
        >
          <Menu className="w-6 h-6" />
        </button>
        
        <div className="hidden sm:block relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search animals, alerts, or reports..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <button className="relative p-2 text-slate-500 rounded-full hover:bg-slate-100 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
        </button>
        <button className="flex items-center gap-2 p-1.5 rounded-full hover:bg-slate-100 transition-colors">
          <UserCircle className="w-7 h-7 text-slate-600" />
          <div className="hidden md:flex flex-col items-start pr-2">
            <span className="text-sm font-medium text-slate-700 leading-tight">Farm Manager</span>
            <span className="text-xs text-slate-500 leading-tight">Green Valley</span>
          </div>
        </button>
      </div>
    </header>
  );
}
