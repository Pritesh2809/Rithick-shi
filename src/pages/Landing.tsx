import { Link } from 'react-router-dom';
import { Beef, ShieldCheck, Activity, Brain, ArrowRight } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-600">
            <Beef className="w-8 h-8" />
            <span className="text-xl font-bold text-slate-900">AgriGuard</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900">Log in</Link>
            <Link to="/dashboard" className="text-sm font-medium bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors">
              View Dashboard
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mb-8">
            AI-Powered Livestock <br className="hidden sm:block" />
            <span className="text-emerald-600">Health Monitoring</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 mb-10">
            Efficient systems for early detection, prevention, and management of livestock diseases using IoT sensors and Computer Vision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/dashboard" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-500/20">
              Explore Dashboard
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/workflow" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all">
              View Architecture
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Real-Time Monitoring</h3>
              <p className="text-slate-600">Track vitals, activity levels, and locations of your entire herd using connected IoT collars.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Disease Detection</h3>
              <p className="text-slate-600">Use computer vision to scan for skin, mouth, and eye conditions before they spread.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Preventive Care</h3>
              <p className="text-slate-600">Automated alerts for high-risk animals and scheduling for vaccinations and checkups.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
