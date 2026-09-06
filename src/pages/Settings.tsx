export default function Settings() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-500 text-sm">Manage farm details and notification preferences.</p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-900">Farm Profile</h2>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Farm Name</label>
              <input type="text" defaultValue="Green Valley Farm" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Manager Name</label>
              <input type="text" defaultValue="John Doe" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500" />
            </div>
          </div>
          <button className="bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-emerald-700 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-900">Notification Preferences</h2>
        </div>
        <div className="p-6 space-y-4">
           {[
             { title: 'Emergency Alerts (High Risk)', desc: 'SMS and push notifications for critical health events.' },
             { title: 'Vaccination Reminders', desc: 'Email digest for upcoming vaccinations.' },
             { title: 'Weekly Analytics', desc: 'Receive weekly farm performance reports.' }
           ].map((pref, i) => (
             <div key={i} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
               <div>
                 <p className="font-medium text-slate-900">{pref.title}</p>
                 <p className="text-sm text-slate-500">{pref.desc}</p>
               </div>
               <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" name="toggle" id={`toggle-${i}`} defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-emerald-500 checked:right-0 checked:bg-emerald-500 right-6" style={{ right: 0, borderColor: '#10b981', borderWidth: 6 }} />
                  <label htmlFor={`toggle-${i}`} className="toggle-label block overflow-hidden h-6 rounded-full bg-emerald-500 cursor-pointer"></label>
               </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
