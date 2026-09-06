import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Activity, Thermometer, Droplets, Moon, 
  MapPin, HeartPulse, Brain, AlertCircle, Camera, CheckCircle2
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip as RechartsTooltip, ResponsiveContainer 
} from 'recharts';
import clsx from 'clsx';

const vitalsData = [
  { time: '00:00', temp: 38.5, hr: 60, activity: 20 },
  { time: '04:00', temp: 38.6, hr: 62, activity: 30 },
  { time: '08:00', temp: 38.9, hr: 75, activity: 80 },
  { time: '12:00', temp: 40.2, hr: 90, activity: 40 }, // Spike
  { time: '16:00', temp: 40.0, hr: 85, activity: 30 },
  { time: '20:00', temp: 39.5, hr: 70, activity: 25 },
];

export default function AnimalProfile() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('vitals');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);

  const simulateScan = () => {
    setIsScanning(true);
    setScanResult(null);
    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        disease: 'Foot and Mouth Disease (FMD)',
        confidence: 94.5,
        severity: 'High',
        causes: ['Viral infection (Picornaviridae)', 'Direct contact with infected animal'],
        treatment: ['Isolate immediately', 'Administer prescribed antivirals', 'Provide soft feed'],
        preventive: ['Vaccinate surrounding herd', 'Disinfect barn area']
      });
    }, 2000);
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-4">
        <Link to="/animals" className="p-2 bg-white rounded-xl border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Animal Profile: {id}</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-slate-50">
              <img 
                src="https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80&w=400&h=400" 
                alt="Animal" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Bessie</h2>
              <p className="text-slate-500 font-medium">{id}</p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-sm font-bold">
                <AlertCircle className="w-4 h-4" />
                High Risk (85/100)
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Breed</span>
                <span className="font-medium text-slate-900">Holstein</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Age</span>
                <span className="font-medium text-slate-900">3 yrs 2 mos</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Weight</span>
                <span className="font-medium text-slate-900">650 kg</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Location</span>
                <span className="font-medium text-slate-900 flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-emerald-600" /> Barn A
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4">IoT Sensor Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Smart Collar</div>
                    <div className="text-xs text-emerald-600 font-medium">Online • 85% Battery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {['vitals', 'ai-detection', 'history'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={clsx(
                  "px-5 py-2.5 rounded-full font-medium text-sm whitespace-nowrap transition-colors",
                  activeTab === tab 
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20" 
                    : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                )}
              >
                {tab === 'vitals' && 'Live Vitals'}
                {tab === 'ai-detection' && 'AI Disease Detection'}
                {tab === 'history' && 'Medical History'}
              </button>
            ))}
          </div>

          {activeTab === 'vitals' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-rose-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-rose-600">
                    <Thermometer className="w-5 h-5" />
                    <span className="font-medium text-sm">Temperature</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">40.2°C</div>
                  <div className="text-xs font-bold text-rose-600 mt-1">↑ High</div>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-amber-600">
                    <HeartPulse className="w-5 h-5" />
                    <span className="font-medium text-sm">Heart Rate</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">90 bpm</div>
                  <div className="text-xs font-bold text-amber-600 mt-1">↑ Elevated</div>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-emerald-600">
                    <Activity className="w-5 h-5" />
                    <span className="font-medium text-sm">Activity</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">Low</div>
                  <div className="text-xs font-medium text-slate-500 mt-1">-40% vs avg</div>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-blue-600">
                    <Droplets className="w-5 h-5" />
                    <span className="font-medium text-sm">Water Intake</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">12 L</div>
                  <div className="text-xs font-medium text-slate-500 mt-1">Last 24h</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-6">Temperature Trend (24h)</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={vitalsData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                      <YAxis domain={['dataMin - 1', 'dataMax + 1']} axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                      <RechartsTooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                      <Line type="monotone" dataKey="temp" stroke="#ef4444" strokeWidth={3} dot={{r: 4, fill: '#ef4444'}} activeDot={{r: 6}} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ai-detection' && (
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8" />
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">AI Visual Diagnostics</h2>
                <p className="text-slate-500 text-sm max-w-md mx-auto">
                  Upload or capture an image of the animal's skin, mouth, eyes, or wounds for instant AI analysis.
                </p>
              </div>

              {!scanResult ? (
                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center bg-slate-50">
                  <div className="flex justify-center mb-4">
                    <Camera className="w-12 h-12 text-slate-400" />
                  </div>
                  <h3 className="text-sm font-medium text-slate-900 mb-4">Drag and drop an image, or click to upload</h3>
                  <button 
                    onClick={simulateScan}
                    disabled={isScanning}
                    className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-emerald-700 transition-colors disabled:opacity-70"
                  >
                    {isScanning ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Analyzing Image...
                      </span>
                    ) : (
                      'Simulate Camera Scan'
                    )}
                  </button>
                </div>
              ) : (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                    <div className="flex items-start gap-4">
                      <div className="bg-rose-100 p-2 rounded-xl text-rose-600 shrink-0">
                        <AlertCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-rose-900 font-bold text-lg">{scanResult.disease}</h3>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-sm font-medium bg-white text-rose-700 px-3 py-1 rounded-full shadow-sm">
                            Confidence: {scanResult.confidence}%
                          </span>
                          <span className="text-sm font-medium bg-white text-rose-700 px-3 py-1 rounded-full shadow-sm">
                            Severity: {scanResult.severity}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="border border-slate-200 p-5 rounded-2xl">
                      <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Treatment
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        {scanResult.treatment.map((t: string, i: number) => <li key={i}>• {t}</li>)}
                      </ul>
                    </div>
                    <div className="border border-slate-200 p-5 rounded-2xl">
                      <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <Activity className="w-5 h-5 text-emerald-600" /> Preventive
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        {scanResult.preventive.map((t: string, i: number) => <li key={i}>• {t}</li>)}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-3">
                     <button onClick={() => setScanResult(null)} className="px-4 py-2 font-medium text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
                       Scan Another
                     </button>
                     <button className="px-4 py-2 font-medium bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors">
                       Send to Veterinarian
                     </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'history' && (
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm text-center py-12">
               <p className="text-slate-500">History records will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
