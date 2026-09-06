import { Video, Calendar, FileText, Phone, Stethoscope } from 'lucide-react';

export default function Veterinarian() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Veterinary Consultation</h1>
        <p className="text-slate-500 text-sm">Connect with vets and manage prescriptions.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-24 h-24 bg-slate-100 rounded-full overflow-hidden shrink-0">
               <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300" alt="Vet" className="w-full h-full object-cover" />
            </div>
            <div className="text-center sm:text-left flex-1">
              <h2 className="text-xl font-bold text-slate-900">Dr. Sarah Jenkins</h2>
              <p className="text-emerald-600 font-medium text-sm mb-2">Senior Livestock Specialist</p>
              <p className="text-slate-500 text-sm mb-4">Available for consultation regarding disease outbreaks, nutrition, and preventive care.</p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                <button className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-emerald-700 transition-colors">
                  <Video className="w-4 h-4" /> Start Video Call
                </button>
                <button className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-slate-200 transition-colors">
                  <Calendar className="w-4 h-4" /> Book Appointment
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-emerald-600" /> AI Treatment Recommendations
            </h3>
            <div className="space-y-4">
               <div className="p-4 border border-slate-100 rounded-2xl bg-slate-50">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-medium text-slate-900">Isolation Protocol Suggested</span>
                    <span className="text-xs font-bold text-rose-600 bg-rose-100 px-2 py-1 rounded-full">TAG-8923</span>
                  </div>
                  <p className="text-sm text-slate-500">Based on AI detection of possible FMD, immediate isolation is recommended before vet arrival.</p>
               </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
           <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
             <h3 className="font-bold text-slate-900 mb-4">Upcoming Appointments</h3>
             <div className="text-center py-8">
               <Calendar className="w-10 h-10 text-slate-300 mx-auto mb-3" />
               <p className="text-slate-500 text-sm">No upcoming appointments</p>
             </div>
           </div>

           <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
             <h3 className="font-bold text-slate-900 mb-4">Recent Prescriptions</h3>
             <div className="space-y-3">
               <div className="flex items-center justify-between p-3 border border-slate-100 rounded-xl hover:bg-slate-50 cursor-pointer">
                 <div className="flex items-center gap-3">
                   <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                     <FileText className="w-4 h-4" />
                   </div>
                   <div>
                     <p className="text-sm font-medium text-slate-900">Antibiotics for TAG-4412</p>
                     <p className="text-xs text-slate-500">Oct 12, 2024</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
