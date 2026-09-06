import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Plus, HeartPulse, MapPin } from 'lucide-react';
import clsx from 'clsx';

const animalsData = [
  { id: 'TAG-8923', name: 'Bessie', breed: 'Holstein', age: '3 yrs', gender: 'Female', weight: '650 kg', status: 'Sick', risk: 85, location: 'Barn A' },
  { id: 'TAG-4412', name: 'Daisy', breed: 'Jersey', age: '2 yrs', gender: 'Female', weight: '450 kg', status: 'At Risk', risk: 45, location: 'Pasture 1' },
  { id: 'TAG-1129', name: 'Duke', breed: 'Angus', age: '4 yrs', gender: 'Male', weight: '900 kg', status: 'Sick', risk: 90, location: 'Isolation' },
  { id: 'TAG-5521', name: 'Bella', breed: 'Holstein', age: '1.5 yrs', gender: 'Female', weight: '380 kg', status: 'Healthy', risk: 10, location: 'Barn B' },
  { id: 'TAG-3310', name: 'Charlie', breed: 'Hereford', age: '2.5 yrs', gender: 'Male', weight: '700 kg', status: 'Healthy', risk: 5, location: 'Pasture 2' },
];

export default function Animals() {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Livestock Management</h1>
          <p className="text-slate-500 text-sm">Manage and monitor your entire herd.</p>
        </div>
        <button className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-emerald-700 transition-colors">
          <Plus className="w-5 h-5" />
          Add Animal
        </button>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by Tag ID, Name, or Breed..." 
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors font-medium text-sm">
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {animalsData.map((animal) => (
          <Link key={animal.id} to={`/animals/${animal.id}`} className="group bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-all hover:border-emerald-200">
            <div className="h-40 bg-slate-100 relative overflow-hidden">
              <img 
                src={`https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80&w=600&h=400`} 
                alt="Cow" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 flex gap-2">
                <span className={clsx(
                  "px-3 py-1 rounded-full text-xs font-bold shadow-sm backdrop-blur-md",
                  animal.status === 'Healthy' ? "bg-emerald-500/90 text-white" :
                  animal.status === 'Sick' ? "bg-rose-500/90 text-white" :
                  "bg-amber-500/90 text-white"
                )}>
                  {animal.status}
                </span>
              </div>
            </div>
            
            <div className="p-5">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-700 transition-colors">{animal.name || animal.id}</h3>
                  <p className="text-sm font-medium text-slate-500">{animal.id}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-slate-900">{animal.risk}/100</div>
                  <div className="text-xs text-slate-500">Risk Score</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-y-2 text-sm mb-4">
                <div className="text-slate-600">Breed: <span className="text-slate-900 font-medium">{animal.breed}</span></div>
                <div className="text-slate-600">Age: <span className="text-slate-900 font-medium">{animal.age}</span></div>
                <div className="text-slate-600">Weight: <span className="text-slate-900 font-medium">{animal.weight}</span></div>
                <div className="text-slate-600">Gender: <span className="text-slate-900 font-medium">{animal.gender}</span></div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm">
                <div className="flex items-center gap-1.5 text-slate-600">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  {animal.location}
                </div>
                <div className="flex items-center gap-1.5 font-medium text-emerald-600">
                  View Profile &rarr;
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
