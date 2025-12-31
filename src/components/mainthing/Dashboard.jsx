import React from 'react';
import { 
  MoreHorizontal, 
  ChevronDown, 
  Filter, 
  BarChart2, 
  Dribbble, 
  Instagram, 
  Globe 
} from 'lucide-react';

// --- Sub-Components ---

const StatRow = ({ icon: Icon, label, value, percentage, color }) => (
  <div className="flex items-center justify-between p-4 bg-white rounded-2xl mb-2.5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-md transition-all hover:-translate-y-0.5 border border-white/50 cursor-pointer group">
    <div className="flex items-center gap-4">
      <div className={`w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 group-hover:bg-white transition-colors`}>
        {typeof Icon === 'string' ? <span className={`${color} font-bold text-lg`}>{Icon}</span> : <Icon size={22} className={color} />}
      </div>
      <span className="font-semibold text-gray-500 tracking-tight group-hover:text-gray-800">{label}</span>
    </div>
    <div className="flex items-center gap-5">
      <span className="font-bold text-gray-900 text-lg">${value.toLocaleString()}</span>
      <span className="text-[11px] font-bold px-2.5 py-1 bg-gray-100/80 text-gray-400 rounded-lg group-hover:bg-gray-800 group-hover:text-white transition-colors">{percentage}%</span>
    </div>
  </div>
);

const Avatar = ({ src, color, index }) => (
  <div 
    className={`w-6 h-6 rounded-full border-2 border-white shadow-sm overflow-hidden ${color || 'bg-gray-300'} hover:scale-110 transition-transform cursor-pointer`}
    style={{ marginLeft: index === 0 ? '0' : '-8px', zIndex: 10 - index }}
  >
    <img src={src} alt="user" className="w-full h-full object-cover" />
  </div>
);

// --- Main Component ---

const Dashboard = () => {
  const platforms = [
    { icon: Dribbble, label: 'Dribbble', value: 227459, percentage: 43, color: 'text-[#ea4c89]' },
    { icon: Instagram, label: 'Instagram', value: 142823, percentage: 27, color: 'text-[#f09433]' },
    { icon: "Bē", label: 'Behance', value: 89935, percentage: 11, color: 'text-[#0057ff]' },
    { icon: Globe, label: 'Google', value: 37028, percentage: 7, color: 'text-[#4285F4]' },
  ];

  const stripedStyle = {
    backgroundImage: `linear-gradient(45deg, #e5e7eb 25%, transparent 25%, transparent 50%, #e5e7eb 50%, #e5e7eb 75%, transparent 75%, transparent)`,
    backgroundSize: '8px 8px'
  };

  return (
    <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      {/* Top Left: Platform List */}
      <div className="bg-white/60 backdrop-blur-md p-8 rounded-[2.5rem] border border-white shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <div className="p-2 bg-white rounded-lg shadow-sm text-gray-400"><MoreHorizontal /></div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-xl text-xs font-bold text-gray-600 shadow-sm hover:bg-gray-50 transition-colors uppercase tracking-wider">
            Filters <Filter size={14} />
          </button>
        </div>
        {platforms.map((p, i) => <StatRow key={i} {...p} />)}
      </div>

      {/* Top Right: Analysis Visual */}
      <div className="bg-white/60 backdrop-blur-md p-8 rounded-[2.5rem] border border-white shadow-xl flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div className="p-2 bg-white rounded-lg shadow-sm text-gray-400"><BarChart2 /></div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-xl text-xs font-bold text-gray-600 shadow-sm uppercase tracking-wider">
            Filters <Filter size={14} />
          </button>
        </div>
        
        <div className="flex items-end justify-between h-44 px-4 mb-6">
          <div className="w-12 h-[75%] bg-white rounded-2xl flex items-center justify-center relative overflow-hidden shadow-sm">
             <div className="absolute inset-0 opacity-20" style={stripedStyle}></div>
             <span className="text-[#0057ff] font-bold text-xl z-10 italic">Bē</span>
          </div>
          <div className="w-12 h-[100%] bg-gradient-to-t from-[#ea4c89] to-[#ff7eb3] rounded-2xl flex items-center justify-center shadow-lg shadow-pink-100 transform translate-y-[-12px]">
             <Dribbble className="text-white" size={28} />
          </div>
          <div className="w-12 h-[55%] bg-white rounded-2xl flex items-center justify-center shadow-sm">
             <Globe className="text-[#4285F4]" size={24} />
          </div>
          <div className="w-12 h-[45%] bg-white rounded-2xl flex items-center justify-center shadow-sm">
             <Instagram className="text-[#f09433]" size={24} />
          </div>
          <div className="w-12 h-[85%] bg-white rounded-2xl flex items-center justify-center relative overflow-hidden shadow-sm">
             <div className="absolute inset-0 opacity-20" style={stripedStyle}></div>
             <div className="bg-black/5 w-6 h-6 rounded-lg z-10 border border-black/10 flex items-center justify-center" />
          </div>
        </div>

        <div>
          <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-1">Performance</p>
          <button className="flex items-center gap-2 font-bold text-gray-800 text-xl hover:text-black transition-colors">
            By referrer category <ChevronDown size={20} className="text-gray-300" />
          </button>
        </div>
      </div>

      {/* Bottom Full-Width Card */}
      <div className="lg:col-span-2 bg-white/80 backdrop-blur-lg rounded-[3.5rem] p-3 border border-white shadow-2xl">
        <div className="p-8 pb-4 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-5">
            <div className="bg-gradient-to-br from-[#ea4c89] to-[#d61a5a] w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-pink-200">
              <Dribbble size={32} />
            </div>
            <div>
              <p className="text-[11px] text-gray-400 font-black uppercase tracking-widest">Platform value</p>
              <button className="flex items-center gap-1 text-2xl font-black text-gray-900">
                Dribbble <ChevronDown size={24} className="text-gray-300 ml-1" />
              </button>
            </div>
          </div>
          <div className="flex bg-gray-100/80 p-1.5 rounded-2xl border border-gray-200/50 shadow-inner">
            <button className="px-8 py-2.5 bg-black text-white rounded-xl text-sm font-bold shadow-lg">Revenue</button>
            <button className="px-8 py-2.5 text-gray-500 text-sm font-bold hover:text-black transition-colors">Leads</button>
            <button className="px-8 py-2.5 text-gray-500 text-sm font-bold hover:text-black transition-colors">W/L</button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row p-4 gap-8">
          {/* Main Stat Panel */}
          <div className="bg-gradient-to-br from-[#da2e6b] to-[#b11b4e] text-white p-10 rounded-[3rem] md:w-[35%] relative overflow-hidden shadow-2xl">
             <div className="absolute left-4 top-1/2 -translate-y-1/2 [writing-mode:vertical-lr] rotate-180 text-[10px] font-black uppercase tracking-[0.4em] opacity-30">
              Average monthly
             </div>
             <div className="ml-8 space-y-8">
                <div>
                  <p className="text-[11px] font-bold uppercase opacity-60 mb-1">Revenue</p>
                  <p className="text-4xl font-black tracking-tight">$18,552</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase opacity-60 mb-1">Leads</p>
                  <p className="text-4xl font-black tracking-tight">373 <span className="text-lg font-medium opacity-50 ml-2">97/276</span></p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase opacity-60 mb-1">Win/lose</p>
                  <p className="text-4xl font-black tracking-tight">16% <span className="text-lg font-medium opacity-50 ml-2">51/318</span></p>
                </div>
             </div>
          </div>

          {/* Bar Chart Area */}
          <div className="flex-1 px-4 pt-12 relative">
            <div className="absolute right-0 top-0 h-full flex flex-col justify-between text-[11px] text-gray-400 font-bold py-14">
              <span>$14,500</span><span>$11,000</span><span>$7,500</span><span>$4,000</span>
            </div>
            
            <div className="h-full flex items-end justify-between px-6 border-b border-gray-100 pb-12">
              {[
                { month: 'Sep', val: '$6,901', h1: 'h-full', h2: 'h-2/3', h3: 'h-1/3' },
                { month: 'Oct', val: '$11,035', h1: 'h-full', h2: 'h-[80%]', h3: 'h-1/4' },
                { month: 'Nov', val: '$9,288', h1: 'h-[90%]', h2: 'h-[75%]', h3: 'h-1/2' }
              ].map((data, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="bg-[#ff4d8d] text-white text-[11px] px-3 py-1.5 rounded-xl font-black mb-3 shadow-lg shadow-pink-100 opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-y-1">{data.val}</div>
                  <div className="flex items-end gap-2 h-36">
                    <div className={`w-6 bg-gray-100 ${data.h1} rounded-t-xl relative overflow-hidden`}>
                      <div className="absolute inset-0 opacity-20" style={stripedStyle}></div>
                    </div>
                    <div className={`w-6 bg-gray-300/60 ${data.h2} rounded-t-xl transition-all group-hover:bg-[#ea4c89]/20`}></div>
                    <div className={`w-4 bg-gray-200/50 ${data.h3} rounded-t-lg`}></div>
                  </div>
                  <div className="flex mt-5">
                    {[1, 2, 3].map((i) => (
                      <Avatar key={i} index={i-1} src={`https://i.pravatar.cc/150?u=${idx}${i}`} />
                    ))}
                  </div>
                  <span className="text-[11px] text-gray-400 font-black uppercase tracking-[0.2em] mt-4">{data.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;