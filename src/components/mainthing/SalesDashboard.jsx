import React from 'react';
import { ChevronUp, ExternalLink, Flame, Trophy, Star } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

// --- Reusable Internal Sub-Components ---
const MetricBadge = ({ val1, val2, isDark = true }) => (
  <div className="flex gap-1.5 items-center">
    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold shadow-sm ${
      isDark ? 'bg-zinc-800 text-white' : 'bg-gray-100 text-gray-500'
    }`}>
      {val1}
    </span>
    {val2 && (
      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-gray-100 text-gray-400">
        {val2}
      </span>
    )}
  </div>
);

const PlatformCard = ({ name, logo, percent, amount, color, isWide = false }) => (
  <div className={`bg-white rounded-[24px] p-5 border border-white/60 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all ${isWide ? 'col-span-5' : 'col-span-3'}`}>
    <div className="flex items-center gap-2 mb-6 z-10">
      <div className={`w-7 h-7 rounded-lg ${color} flex items-center justify-center text-white text-[10px] font-black shadow-sm`}>
        {logo}
      </div>
      <span className="text-xs font-bold text-slate-600 tracking-tight">{name}</span>
    </div>
    <div className="flex items-baseline gap-2 z-10">
      <span className="text-2xl font-black text-slate-800 tracking-tighter">{percent}%</span>
      <span className="text-xl font-medium text-slate-300">${amount.toLocaleString()}</span>
    </div>
    {/* Decorative background pattern for the wide card */}
    {isWide && (
      <div className="absolute right-0 top-0 h-full w-24 bg-slate-50/50 -skew-x-12 translate-x-12 group-hover:translate-x-8 transition-transform" />
    )}
  </div>
);

const chartData = [
  { val: 15 }, { val: 22 }, { val: 18 }, { val: 30 }, { val: 25 }, { val: 35 }, 
  { val: 28 }, { val: 40 }, { val: 32 }, { val: 48 }, { val: 42 }
];

// --- Main Exported Component ---
const SalesDashboard = () => {
  const users = [
    { id: 1, name: "Armin A.", rev: 209633, leads: [41, 118], kpi: 0.84, wl: [31, 12, 29], active: false },
    { id: 2, name: "Mikasa A.", rev: 156841, leads: [54, 103], kpi: 0.89, wl: [39, 21, 33], active: true },
    { id: 3, name: "Eren Y.", rev: 117115, leads: [22, 84], kpi: 0.79, wl: [32, 7, 15], active: false },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 py-10 px-4 antialiased">
      {/* Table Header */}
      <div className="grid grid-cols-12 px-8 mb-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">
        <div className="col-span-3">Sales</div>
        <div className="col-span-2 text-center">Revenue</div>
        <div className="col-span-3 text-center">Leads</div>
        <div className="col-span-1 text-center">KPI</div>
        <div className="col-span-3 text-right">W/L Ratio</div>
      </div>

      {users.map((user) => (
        <div key={user.id} className={`rounded-[35px] transition-all duration-500 ${
          user.active ? 'bg-gradient-to-br from-white via-white to-rose-50/30 shadow-[0_20px_50px_-12px_rgba(244,63,94,0.15)] ring-1 ring-rose-100/50' : 'bg-white shadow-sm border border-slate-100'
        }`}>
          {/* Row Item */}
          <div className="grid grid-cols-12 items-center p-5 px-8">
            <div className="col-span-3 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border-2 border-white shadow-sm overflow-hidden bg-slate-100">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} alt="avatar" />
              </div>
              <span className="font-bold text-slate-800 tracking-tight">{user.name}</span>
            </div>
            <div className="col-span-2 font-black text-slate-700 text-center">${user.rev.toLocaleString()}</div>
            <div className="col-span-3 flex justify-center">
              <MetricBadge val1={user.leads[0]} val2={user.leads[1]} />
            </div>
            <div className="col-span-1 font-bold text-slate-400 text-center">{user.kpi}</div>
            <div className="col-span-3 flex items-center justify-end gap-4">
              <div className="flex items-center gap-2">
                <span className="font-black text-slate-800">{user.wl[0]}%</span>
                <MetricBadge val1={user.wl[1]} val2={user.wl[2]} />
              </div>
              {user.active && (
                <button className="bg-rose-500 hover:bg-rose-600 p-1.5 rounded-full text-white transition-colors shadow-lg shadow-rose-200">
                  <ChevronUp size={18} />
                </button>
              )}
            </div>
          </div>

          {/* Detailed View */}
          {user.active && (
            <div className="px-10 pb-10 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="flex gap-3 mb-10">
                <span className="bg-white px-4 py-2 rounded-full text-xs font-bold shadow-sm border border-slate-50 flex items-center gap-2">Top sales <Trophy size={14} className="text-amber-400"/></span>
                <span className="bg-white px-4 py-2 rounded-full text-xs font-bold shadow-sm border border-slate-50 flex items-center gap-2">Sales streak <Flame size={14} className="text-rose-500"/></span>
                <span className="bg-white px-4 py-2 rounded-full text-xs font-bold shadow-sm border border-slate-50 flex items-center gap-2">Top review <Star size={14} className="text-yellow-400"/></span>
              </div>

              <div className="flex justify-between items-end mb-6">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Work with platforms</h3>
                <div className="flex gap-2">
                  <span className="bg-rose-500 text-white px-3 py-1 rounded-full text-[10px] font-black flex items-center gap-1 shadow-md shadow-rose-200"><ChevronUp size={10} strokeWidth={4}/> 3</span>
                  <span className="bg-rose-500 text-white px-3 py-1 rounded-full text-[10px] font-black shadow-md shadow-rose-200">${user.rev.toLocaleString()}</span>
                </div>
              </div>

              <div className="grid grid-cols-11 gap-4 mb-10">
                <PlatformCard isWide name="Dribbble" logo="D" color="bg-rose-400" percent={45.3} amount={71048} />
                <PlatformCard name="Instagram" logo="I" color="bg-gradient-to-tr from-orange-400 via-rose-500 to-purple-600" percent={28.1} amount={44072} />
                <div className="col-span-3 flex flex-col gap-3">
                  <div className="bg-white p-4 rounded-[20px] border border-slate-100 flex justify-between items-center shadow-sm">
                    <span className="text-[11px] font-black text-blue-600 uppercase">Google</span>
                    <span className="text-[11px] font-bold text-slate-800">14.1% <span className="text-slate-300 ml-1">$22,114</span></span>
                  </div>
                  <div className="bg-white p-4 rounded-[20px] border border-slate-100 flex justify-between items-center shadow-sm">
                    <div className="flex -space-x-1.5"><div className="w-3.5 h-3.5 bg-black rounded-full border-2 border-white"/><div className="w-3.5 h-3.5 bg-slate-200 rounded-full border-2 border-white"/></div>
                    <span className="text-[11px] font-bold text-slate-800">5.4% <span className="text-slate-300 ml-1">$8,469</span></span>
                  </div>
                </div>
              </div>

              <div className="relative pt-8 border-t border-slate-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Sales Dynamic</span>
                  <ExternalLink size={14} className="text-slate-300 hover:text-rose-500 transition-colors" />
                </div>
                <div className="h-24 w-full -ml-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id="colorWave" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.15}/>
                          <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="val" stroke="#f43f5e" strokeWidth={3} fill="url(#colorWave)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 h-1.5 w-full bg-slate-100 rounded-full relative flex justify-around">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-200 via-emerald-400 to-rose-400 rounded-full opacity-40" />
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md -mt-1 z-10" />
                  <div className="w-4 h-4 bg-rose-500 rounded-full border-2 border-white shadow-md -mt-1 z-10" />
                  <div className="w-4 h-4 bg-sky-400 rounded-full border-2 border-white shadow-md -mt-1 z-10" />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SalesDashboard;