import { Database, Cpu, Activity, Bell, Smartphone, Brain, Cloud } from 'lucide-react';
import clsx from 'clsx';

const WorkflowStep = ({ icon: Icon, title, desc, delay }: any) => (
  <div className={clsx("flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-700")} style={{ animationDelay: delay }}>
    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-emerald-600 mb-4 relative z-10">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-500 max-w-[200px]">{desc}</p>
  </div>
);

export default function Workflow() {
  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto mb-12 mt-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">System Workflow</h1>
        <p className="text-slate-500">How AgriGuard's AI-powered system processes data from farm to actionable insights.</p>
      </div>

      <div className="relative max-w-5xl mx-auto py-12">
        {/* Connecting Line */}
        <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-emerald-100 via-emerald-300 to-emerald-100 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          <WorkflowStep 
            icon={Activity} 
            title="1. IoT Sensors" 
            desc="Collars collect live temperature, heart rate, and GPS location."
            delay="0ms"
          />
          <WorkflowStep 
            icon={Cloud} 
            title="2. Data Sync" 
            desc="Data is securely transmitted to the cloud platform in real-time."
            delay="200ms"
          />
          <WorkflowStep 
            icon={Brain} 
            title="3. AI Analysis" 
            desc="Machine learning models analyze vitals and camera feeds for anomalies."
            delay="400ms"
          />
          <WorkflowStep 
            icon={Bell} 
            title="4. Alerts & Action" 
            desc="Farmers receive predictive alerts and vet recommendations."
            delay="600ms"
          />
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto mt-16 bg-slate-900 rounded-3xl p-8 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        <h2 className="text-2xl font-bold mb-6">AI Models in Production</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 p-5 rounded-2xl border border-slate-700">
             <div className="flex justify-between items-start mb-2">
               <h3 className="font-semibold text-emerald-400">Computer Vision</h3>
               <span className="text-xs bg-emerald-900 text-emerald-300 px-2 py-1 rounded-full">Active</span>
             </div>
             <p className="text-sm text-slate-400">Detects skin, mouth, and eye conditions from uploaded images.</p>
          </div>
          <div className="bg-slate-800/50 p-5 rounded-2xl border border-slate-700">
             <div className="flex justify-between items-start mb-2">
               <h3 className="font-semibold text-emerald-400">Anomaly Detection</h3>
               <span className="text-xs bg-emerald-900 text-emerald-300 px-2 py-1 rounded-full">Active</span>
             </div>
             <p className="text-sm text-slate-400">Time-series analysis of IoT vitals to predict early onset of diseases.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
