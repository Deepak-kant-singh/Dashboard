import React from 'react';
import { 
  ChevronDown, ChevronUp, Plus, Settings, 
  MessageSquare, Star, Clock, Link as LinkIcon,
  Search, Menu, Command, PieChart, FileText, 
  FolderTree, Sliders, Download, Share2, Star as StarOutline
} from 'lucide-react';
import Dashboard from './components/mainthing/Dashboard';
import SalesDashboard from './components/mainthing/SalesDashboard';

// --- Sub-Components ---

const NavItem = ({ label, icon: Icon, badge, isRed = false, isBold = false, indent = 0 }) => (
  <div className="group relative flex items-center justify-between py-1 px-3 cursor-pointer hover:bg-gray-200 rounded-md transition-colors" style={{ marginLeft: `${indent * 12}px` }}>
    <div className="flex items-center gap-2">
      {Icon && <Icon size={14} className="text-gray-400" />}
      <span className={`text-[13px] ${isRed ? 'text-pink-600' : 'text-gray-700'} ${isBold ? 'font-bold' : 'font-medium'}`}>
        {label}
      </span>
    </div>
    {badge && (
      <span className="bg-pink-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold min-w-[18px] text-center">
        {badge}
      </span>
    )}
    {indent > 0 && <div className="absolute left-[-10px] top-1/2 w-2.5 h-[1px] bg-gray-300" />}
  </div>
);

const UserPill = ({ name, imgUrl }) => (
  <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-1.5 py-1 shadow-sm h-9 hover:border-gray-300 transition-colors cursor-pointer">
    <img src={imgUrl} alt={name} className="w-6 h-6 rounded-full object-cover" />
    <span className="text-[12px] font-bold text-gray-700 pr-2">{name}</span>
  </div>
);

const RevenueSegment = ({ imgUrl, amount, percentage, isLogo = false }) => (
  <div className="flex items-center justify-between bg-white rounded-full py-1.5 px-3 flex-1 shadow-sm border border-gray-50 min-w-0">
    <div className="flex items-center gap-2 min-w-0">
      {isLogo ? (
        <div className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-[8px] shrink-0">C</div>
      ) : (
        <img src={imgUrl} alt="user" className="w-6 h-6 rounded-full object-cover shrink-0" />
      )}
      <span className="text-[12px] font-bold text-gray-800 truncate">{amount}</span>
    </div>
    <span className="text-[11px] font-bold text-gray-300 ml-2 shrink-0">{percentage}</span>
  </div>
);

const KPICard = ({ title, value, change, hasBorder = false, icon: Icon }) => (
  <div className={`bg-white p-5 rounded-[24px] flex flex-col justify-between min-w-[120px] shadow-sm ${hasBorder ? 'border-2 border-pink-200 ring-4 ring-pink-50' : 'border border-gray-100'}`}>
    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{title}</span>
    <div className="mt-2">
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-[11px] font-bold text-gray-400 mt-1 flex items-center gap-1">
        <ChevronDown size={12} /> {change}
      </div>
    </div>
  </div>
);

const App = () => {
  const avatars = {
    armin: "https://i.pravatar.cc/150?u=armin",
    eren: "https://i.pravatar.cc/150?u=eren",
    mikasa: "https://i.pravatar.cc/150?u=mikasa",
    profile: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809" 
  };

  return (
    <div className="flex flex-col h-screen bg-[#F5F5F5] font-sans overflow-hidden text-[#1A1A1A]">
      
      {/* 1. TOP HEADER NAVIGATION */}
      <header className="h-16 bg-[#F5F5F5] flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-10 flex-1">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-black text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shadow-xl">C</div>
            <span className="font-bold text-sm">Codename.com</span>
            <ChevronDown size={14} className="text-gray-500" />
          </div>
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder='Try searching "insights"' className="w-full bg-white border-none rounded-full py-2.5 pl-12 pr-4 text-sm outline-none shadow-sm" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white border border-gray-100 rounded-full pl-3 pr-1 py-1 flex items-center gap-3 shadow-sm cursor-pointer hover:shadow-md transition-all">
            <Menu size={20} className="text-gray-500" />
            <img src={avatars.profile} alt="User" className="w-8 h-8 rounded-full object-cover" />
          </div>
          <button className="bg-pink-600 text-white w-11 h-11 rounded-full flex items-center justify-center shadow-lg hover:bg-pink-700 transition-all">
            <Plus size={28} />
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        
        {/* 2. ICON SIDEBAR RAIL */}
        <nav className="w-20 bg-[#F5F5F5] flex flex-col items-center py-6 gap-5 shrink-0">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm cursor-pointer hover:scale-110 transition-transform"><PieChart size={22} className="text-gray-600" /></div>
          <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform"><Command size={22} className="text-white" /></div>
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm cursor-pointer hover:scale-110 transition-transform"><FileText size={22} className="text-gray-600" /></div>
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm cursor-pointer hover:scale-110 transition-transform"><Command size={22} className="text-gray-600" /></div>
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm cursor-pointer hover:scale-110 transition-transform"><LinkIcon size={22} className="text-gray-600" /></div>
          
          <div className="mt-auto flex flex-col gap-6 mb-4 items-center">
            <div className="relative cursor-pointer group">
              <MessageSquare size={26} className="text-gray-400 group-hover:text-pink-500 transition-colors" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-pink-500 border-2 border-[#F5F5F5] rounded-full" />
            </div>
            <Settings size={26} className="text-gray-400 hover:rotate-45 transition-transform cursor-pointer" />
          </div>
        </nav>

        {/* 3. NESTED TREE SIDEBAR */}
        <aside className="w-64 bg-[#F5F5F5] py-4 pr-4 flex flex-col overflow-y-auto shrink-0 border-r border-gray-100">
          <div className="px-4 space-y-1">
            <NavItem label="Starred" icon={Star} />
            <NavItem label="Recent" icon={Clock} />
            <div className="pt-4 pb-1 px-3 text-[13px] font-bold text-gray-900">Sales list</div>
            <div className="pb-2 px-3 text-[13px] font-bold text-gray-900">Goals</div>
          </div>

          <div className="mt-6 px-4">
            <div className="flex items-center justify-between px-3 mb-2 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Dashboard <Plus size={14} className="cursor-pointer"/></div>
            <div className="border-l border-gray-300 ml-4 space-y-1">
              <NavItem label="Codename" indent={1} />
              <div className="flex items-center justify-between px-3 py-1.5 ml-3 text-[13px] font-bold text-gray-700">
                <span>Shared with me</span> <ChevronUp size={14} />
              </div>
              <div className="border-l border-gray-300 ml-7">
                <NavItem label="Cargo2go" indent={1} />
                <NavItem label="Cloudz3r" indent={1} badge="2" />
                <NavItem label="Idioma" indent={1} />
                <NavItem label="Syllables" indent={1} />
                <NavItem label="x-0b" indent={1} />
              </div>
            </div>
          </div>

          <div className="mt-6 px-4">
            <div className="flex items-center justify-between px-3 mb-2 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Reports <Plus size={14} className="cursor-pointer"/></div>
            <div className="border-l border-gray-300 ml-4 space-y-1">
              <div className="flex items-center justify-between px-3 py-1.5 ml-3 text-[13px] font-bold text-gray-700">
                <span>Share with me</span> <ChevronUp size={14} />
              </div>
              <div className="border-l border-gray-300 ml-7">
                <NavItem label="Deals by user" indent={1} />
                <NavItem label="Deal duration" indent={1} />
              </div>
              <div className="flex items-center justify-between px-3 py-1.5 ml-3 mt-2 text-[13px] font-bold text-gray-700">
                <span>My reports</span> <ChevronUp size={14} />
              </div>
              <div className="border-l border-gray-300 ml-7">
                <NavItem label="Emails received" indent={1} />
                <NavItem label="Deal duration" indent={1} />
                <NavItem label="New report" indent={1} isRed />
                <NavItem label="Analytics" indent={1} badge="7" />
              </div>
            </div>
          </div>

          <div className="mt-auto px-4 py-4 flex items-center gap-2 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
            <FolderTree size={16} />
            <span className="text-[13px] font-medium">Manage folders</span>
          </div>
        </aside>

        {/* 4. MAIN DASHBOARD CONTENT AREA */}
        <main className="flex-1 bg-white border-t border-l border-gray-200 rounded-tl-[48px] shadow-2xl overflow-y-auto p-12 relative">
          
          {/* Top Actions Section */}
          <section className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 cursor-pointer hover:border-pink-300 transition-colors"><Plus size={20} /></div>
              <UserPill name="Armin A." imgUrl={avatars.armin} />
              <UserPill name="Eren Y." imgUrl={avatars.eren} />
              <UserPill name="Mikasa A." imgUrl={avatars.mikasa} />
              <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white text-[11px] font-bold border-2 border-white shadow-md">C</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#F8F9FA] rounded-full p-3 hover:bg-gray-100 cursor-pointer transition-colors"><Sliders size={20} className="text-gray-600" /></div>
              <div className="bg-[#F8F9FA] rounded-full p-3 hover:bg-gray-100 cursor-pointer transition-colors"><Download size={20} className="text-gray-600" /></div>
              <div className="bg-[#F8F9FA] rounded-full p-3 hover:bg-gray-100 cursor-pointer transition-colors"><Share2 size={20} className="text-gray-600" /></div>
            </div>
          </section>

          {/* Revenue & Key Metrics Section */}
          <section>
            <h1 className="text-6xl font-bold text-gray-100 mb-10 tracking-tighter">New report</h1>
            <div className="flex items-start justify-between">
              <div>
                <span className="text-base font-bold text-gray-800">Revenue</span>
                <div className="flex items-baseline gap-4 mt-2">
                  <span className="text-5xl font-bold text-gray-900 tracking-tighter">$528,976<span className="text-gray-300 font-medium">.82</span></span>
                  <span className="bg-[#FDE7ED] text-pink-600 text-[12px] px-3 py-1 rounded-full font-bold flex items-center gap-1 self-center">▲ 7.9%</span>
                  <span className="bg-pink-600 text-white text-[12px] px-3 py-1 rounded-full font-bold self-center">$27,335.09</span>
                </div>
              </div>

              {/* Timeframe Selector */}
              <div className="flex items-center gap-4 mt-6">
                <div className="flex items-center gap-2 text-gray-800 font-bold text-xs uppercase tracking-wider">
                  <div className="w-9 h-5 bg-gray-900 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm" /></div>
                  Timeframe
                </div>
                <div className="bg-gray-100 border border-gray-50 px-5 py-2 rounded-full text-[13px] font-bold text-gray-700 flex items-center gap-3 cursor-pointer hover:bg-gray-200 transition-colors">
                  Sep 1 - Nov 30, 2023 <ChevronDown size={14} className="text-gray-400" />
                </div>
              </div>
            </div>

            {/* KPI Cards Grid */}
            <div className="grid grid-cols-5 gap-6 mt-12">
              <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm flex flex-col justify-between">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Top sales</span>
                <div className="text-3xl font-bold text-gray-900 mt-2">72</div>
                <div className="flex items-center gap-3 mt-6 border-t border-gray-50 pt-4">
                  <img src={avatars.mikasa} alt="Mikasa" className="w-6 h-6 rounded-full" />
                  <span className="text-xs font-bold text-gray-800 flex-1">Mikasa</span>
                </div>
              </div>
              <div className="bg-gray-900 p-6 rounded-[32px] shadow-2xl text-white">
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Best deal</span>
                <div className="text-3xl font-bold mt-2">$42,300</div>
              </div>
              <KPICard title="Deals" value="256" change="5" />
              <KPICard title="Value" value="528k" change="7.9%" hasBorder />
              <KPICard title="Win rate" value="44%" change="1.2%" />
            </div>

            {/* Revenue Distribution Bar */}
            <div className="mt-14 bg-[#F8F9FA] rounded-full p-1.5 flex items-center gap-2 shadow-inner border border-gray-100">
               <RevenueSegment imgUrl={avatars.armin} amount="$209,633" percentage="39.63%" />
               <RevenueSegment imgUrl={avatars.mikasa} amount="$156,841" percentage="29.65%" />
               <RevenueSegment imgUrl={avatars.eren} amount="$117,115" percentage="22.14%" />
               <RevenueSegment isLogo amount="$45,386" percentage="8.58%" />
               <button className="bg-[#1A1A1A] text-white text-[12px] font-bold px-10 py-2.5 rounded-full ml-2 shadow-lg">Details</button>
            </div>

            {/* CUSTOM DASHBOARDS GRID */}
            <div className="grid grid-cols-2 gap-8 mt-12 mb-20">
              <div className="min-w-0"><Dashboard /></div>
              <div className="min-w-0"><SalesDashboard /></div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;





