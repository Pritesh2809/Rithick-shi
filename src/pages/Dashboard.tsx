import { Link } from 'react-router-dom';
import { 
  Users, 
  HeartPulse, 
  AlertTriangle, 
  Syringe,
  Thermometer,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';

const healthTrendData = [
  { name: 'Mon', healthy: 400, sick: 24, highRisk: 5 },
  { name: 'Tue', healthy: 410, sick: 18, highRisk: 6 },
  { name: 'Wed', healthy: 405, sick: 22, highRisk: 4 },
  { name: 'Thu', healthy: 415, sick: 15, highRisk: 3 },
  { name: 'Fri', healthy: 420, sick: 12, highRisk: 2 },
  { name: 'Sat', healthy: 418, sick: 14, highRisk: 2 },
  { name: 'Sun', healthy: 425, sick: 10, highRisk: 1 },
];

const diseasePredictionData = [
  { name: 'FMD', risk: 85 },
  { name: 'Mastitis', risk: 45 },
  { name: 'LSD', risk: 30 },
  { name: 'PPR', risk: 15 },
];

const StatCard = ({ title, value, icon: Icon, trend, trendValue, colorClass }: any) => (
  <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-2xl ${colorClass}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className={`flex items-center gap-1 text-sm font-medium ${trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
        {trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
        {trendValue}
      </div>
    </div>
    <h3 className="text-slate-500 text-sm font-medium">{title}</h3>
    <p className="text-3xl font-bold text-slate-900 mt-1">{value}</p>
  </div>
);

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Farm Overview</h1>
          <p className="text-slate-500 text-sm">Welcome back. Here is today's health summary.</p>
        </div>
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm">
          <Thermometer className="w-5 h-5 text-amber-500" />
          <div className="text-sm">
            <span className="font-medium text-slate-900">28°C</span>
            <span className="text-slate-500 ml-2">Humidity 65%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatCard 
          title="Total Animals" 
          value="450" 
          icon={Users} 
          trend="up" 
          trendValue="2.4%" 
          colorClass="bg-blue-50 text-blue-600"
        />
        <StatCard 
          title="Healthy Animals" 
          value="425" 
          icon={HeartPulse} 
          trend="up" 
          trendValue="1.2%" 
          colorClass="bg-emerald-50 text-emerald-600"
        />
        <StatCard 
          title="High Risk" 
          value="10" 
          icon={AlertTriangle} 
          trend="down" 
          trendValue="5.0%" 
          colorClass="bg-rose-50 text-rose-600"
        />
        <StatCard 
          title="Vaccination Due" 
          value="34" 
          icon={Syringe} 
          trend="up" 
          trendValue="12.0%" 
          colorClass="bg-purple-50 text-purple-600"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900">Herd Health Trend</h2>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={healthTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorHealthy" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <RechartsTooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="healthy" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorHealthy)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col">
          <h2 className="text-lg font-bold text-slate-900 mb-6">AI Disease Risk Prediction</h2>
          <div className="flex-1 min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={diseasePredictionData} layout="vertical" margin={{ top: 0, right: 0, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#475569', fontSize: 13, fontWeight: 500}} />
                <RechartsTooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="risk" radius={[0, 8, 8, 0]}>
                  {
                    diseasePredictionData.map((entry, index) => (
                      <cell key={`cell-${index}`} fill={entry.risk > 70 ? '#ef4444' : entry.risk > 40 ? '#f59e0b' : '#10b981'} />
                    ))
                  }
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">Recent Real-Time Alerts</h2>
          <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700">View All</button>
        </div>
        <div className="divide-y divide-slate-100">
          {[
            { id: 1, animal: 'TAG-8923', severity: 'High', type: 'High Temperature', time: '10 mins ago', desc: 'Body temp reached 40.2°C.' },
            { id: 2, animal: 'TAG-4412', severity: 'Medium', type: 'Low Activity', time: '1 hour ago', desc: 'Movement decreased by 40% in last 2 hours.' },
            { id: 3, animal: 'TAG-1129', severity: 'High', type: 'Possible Disease', time: '3 hours ago', desc: 'AI detected early signs of Foot & Mouth Disease.' },
          ].map((alert) => (
            <div key={alert.id} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-full mt-1 ${alert.severity === 'High' ? 'bg-rose-100 text-rose-600' : 'bg-amber-100 text-amber-600'}`}>
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-slate-900">{alert.animal}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${alert.severity === 'High' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'}`}>
                      {alert.severity} Risk
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-900">{alert.type}</p>
                  <p className="text-sm text-slate-500 mt-1">{alert.desc}</p>
                </div>
              </div>
              <div className="flex items-center justify-between sm:flex-col sm:items-end gap-2 pl-14 sm:pl-0">
                <span className="text-xs font-medium text-slate-400">{alert.time}</span>
                <Link to={`/animals/${alert.animal}`} className="text-sm font-medium text-emerald-600 bg-emerald-50 px-4 py-2 rounded-xl hover:bg-emerald-100 transition-colors">
                  Take Action
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
