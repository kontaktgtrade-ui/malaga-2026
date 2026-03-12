import React, { useState } from 'react';
import { 
  Plane, Car, MapPin, Calendar, Trophy, 
  Home, Info, Pizza, Navigation, 
  CloudSun, Map as MapIcon,
  CreditCard, Timer, Clock, ExternalLink,
  Maximize2, Flag, Coffee, Sun, Utensils
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const userData = {
    names: { filip: "Filip", jowita: "Jowita" },
    seats: { filip: "36F", jowita: "34A" },
    race: {
      number: "644",
      start: "08:15",
      target: "1:22:59",
      eta: "09:37:59",
      pace: "3:56 min/km",
      bibLocation: "Terminal de Cruceros (Muelle de Cánovas)",
      bibHours: "13-14 marca, 10:00 - 20:00",
      mapUrl: "https://deporticket.blob.core.windows.net/awebs/totalenergies-media-maraton-ciudad-de-malaga/recorrido2026-639084986214860077.jpg"
    },
    flights: {
      outbound: { no: "W61863", time: "06:15 - 10:05", date: "13 marca", res: "IGLDYL" },
      return: { no: "W61864", time: "10:50 - 14:30", date: "16 marca", res: "DL56WZ" }
    },
    parking: {
      elEjido: "Pl. de El Ejido, 6, 29013 Málaga, Hiszpania",
      ikea: "IKEA Málaga, Av. de Velázquez, 389, 29004 Málaga"
    }
  };

  const handleOpenMap = () => {
    window.open(userData.race.mapUrl, '_blank', 'noopener,noreferrer');
  };

  const PlanItem = ({ title, subtitle, link, routeLink, icon: Icon = MapPin, iconColor }) => (
    <div className="flex items-start gap-4 p-4 bg-white rounded-3xl border border-slate-100 shadow-sm active:scale-[0.98] transition-transform">
      <div className={`p-3 rounded-2xl ${iconColor}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-black text-sm text-slate-900 tracking-tight">{title}</p>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-2">{subtitle}</p>
        {(link || routeLink) && (
          <div className="flex flex-wrap gap-2">
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
                {routeLink ? 'Parking' : 'Nawiguj'} <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {routeLink && (
              <a href={routeLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[10px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
                Trasa <Navigation className="w-3 h-3" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto min-h-screen bg-[#F8FAFC] flex flex-col font-sans text-slate-900 pb-20">
      {/* Header z nawigacją na górze */}
      <header className="bg-white px-6 pt-10 pb-6 rounded-b-[40px] shadow-sm border-b border-slate-100 sticky top-0 z-50">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-black text-slate-900 leading-tight tracking-tighter italic">Málaga<span className="text-blue-600">2026</span></h1>
          <a href="https://www.google.com/search?q=pogoda+malaga" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-2xl border border-blue-100 active:scale-95 transition-transform font-bold text-[11px] uppercase tracking-wider">
            <CloudSun className="w-4 h-4" /> Pogoda
          </a>
        </div>
        <div className="flex gap-2 p-1 bg-slate-50 rounded-2xl">
          {['home', 'plan', 'sport'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all ${activeTab === tab ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}>
              {tab === 'home' && 'Info'}{tab === 'plan' && 'Plan'}{tab === 'sport' && 'Sport'}
            </button>
          ))}
        </div>
      </header>

      {/* Główna treść */}
      <main className="flex-1 px-5 py-6">
        
        {activeTab === 'home' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="px-1">
              <p className="text-slate-500 text-sm font-medium tracking-tight">Cześć {userData.names.filip} i {userData.names.jowita}!</p>
              <h2 className="text-xl font-black italic">Wasza Podróż 🇪🇸</h2>
            </div>
            
            <div className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100">
              <div className="flex justify-between items-center mb-4"><h3 className="font-black text-[10px] uppercase tracking-widest text-slate-400">Loty & Miejsca</h3><Plane className="w-4 h-4 text-blue-500" /></div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-dashed border-slate-100 pb-4">
                  <div><p className="text-[10px] font-bold text-slate-400 uppercase">Tam • {userData.flights.outbound.no}</p><p className="text-lg font-black tracking-tight">{userData.flights.outbound.time}</p></div>
                  <div className="text-right flex flex-col gap-1">
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-lg text-[10px] font-black tracking-tighter uppercase">{userData.names.filip.toUpperCase()}: {userData.seats.filip}</span>
                    <span className="bg-pink-50 text-pink-700 px-2 py-1 rounded-lg text-[10px] font-black tracking-tighter uppercase">{userData.names.jowita.toUpperCase()}: {userData.seats.jowita}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <div><p className="text-[10px] font-bold text-slate-400 uppercase">Powrót • {userData.flights.return.no}</p><p className="text-lg font-black tracking-tight">{userData.flights.return.time}</p></div>
                  <div className="text-right"><p className="text-[10px] font-black text-slate-600">Rez: {userData.flights.return.res}</p></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100">
              <div className="flex justify-between items-center mb-4"><h3 className="font-black text-[10px] uppercase tracking-widest text-slate-400">Zakwaterowanie</h3><Home className="w-4 h-4 text-emerald-500" /></div>
              <p className="font-bold text-slate-800">Pinar Málaga Centro</p>
              <a href="https://www.google.com/maps/search/?api=1&query=11+Calle+Alvarez+Malaga" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 flex items-center gap-1 mt-1 font-bold underline decoration-2 underline-offset-4">11 Calle Álvarez <Navigation className="w-3 h-3" /></a>
              <div className="mt-4 p-4 bg-red-50 rounded-2xl border border-red-100">
                <p className="text-[9px] font-black text-red-800 uppercase mb-1 tracking-wider">Klucze (Recepcja):</p>
                <a href="https://www.google.com/maps/search/?api=1&query=C.+Carreteria+31+Malaga" target="_blank" rel="noopener noreferrer" className="text-xs font-black text-red-900 flex items-center gap-1 underline">C. Carretería 31 <Navigation className="w-3 h-3" /></a>
                <div className="flex justify-between mt-3 pt-3 border-t border-red-200/50">
                  <span className="text-[10px] font-bold uppercase tracking-tighter">PIN: <span className="text-sm font-black tracking-widest">8053</span></span>
                  <span className="text-[10px] font-bold uppercase tracking-tighter">Kod: <span className="text-sm font-black tracking-widest text-red-600">6510401388</span></span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-[32px] p-6 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-4"><div className="bg-blue-500 p-2 rounded-xl"><Car className="w-5 h-5 text-white" /></div><span className="text-[10px] font-black bg-white/10 px-3 py-1 rounded-full uppercase tracking-widest">Malagacar</span></div>
                <p className="text-xl font-black mb-1 italic">Seat Ibiza / Yaris</p>
                <p className="text-xs text-slate-400 mb-4 font-bold uppercase tracking-widest">13.03 - 16.03 • Full pack • 67.50 €</p>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1 text-[11px]">Darmowe parkingi:</p>
                  <div className="grid grid-cols-2 gap-2">
                    <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(userData.parking.elEjido)}`} target="_blank" rel="noopener noreferrer" className="flex flex-col bg-white/10 p-3 rounded-2xl border border-white/5 active:bg-white/20 transition-colors">
                      <div className="flex justify-between items-start mb-1">
                        <p className="text-[10px] font-black uppercase tracking-tighter">El Ejido</p>
                        <ExternalLink className="w-3 h-3 text-slate-500" />
                      </div>
                      <p className="text-[8px] text-slate-400 leading-tight">Pl. de El Ejido, 6</p>
                    </a>
                    <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(userData.parking.ikea)}`} target="_blank" rel="noopener noreferrer" className="flex flex-col bg-white/10 p-3 rounded-2xl border border-white/5 active:bg-white/20 transition-colors">
                      <div className="flex justify-between items-start mb-1">
                        <p className="text-[10px] font-black uppercase tracking-tighter">IKEA</p>
                        <ExternalLink className="w-3 h-3 text-slate-500" />
                      </div>
                      <p className="text-[8px] text-slate-400 leading-tight">Av. Velázquez</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[80px] -mr-16 -mt-16 rounded-full" />
            </div>
          </div>
        )}

        {activeTab === 'plan' && (
          <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500 pb-10">
            {/* Piątek */}
            <div>
              <div className="flex items-center gap-2 mb-4 px-1"><div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black">13</div><h2 className="text-lg font-black uppercase tracking-tight text-slate-800 italic">Piątek</h2></div>
              <div className="space-y-3">
                <PlanItem title="Caminito del Rey" subtitle="Parking 3 • Bus do wejścia" link="https://www.google.com/maps/search/?api=1&query=W57R%2BMX+Ardales" iconColor="bg-orange-50 text-orange-600" />
                <PlanItem title="Ronda" subtitle="Sightseeing • Parking & Trasa" link="https://www.google.com/maps/search/?api=1&query=PRWJ%2B3Q+Ronda" routeLink="https://www.google.com/maps/dir/36.743325,-5.165889/36.742478,-5.168233/36.741273,-5.167943/36.741901,-5.167102/36.740592,-5.166779/36.740963,-5.166054/36.739746,-5.163325/36.737222,-5.165279/36.739422,-5.167483/36.743325,-5.165889/" iconColor="bg-emerald-50 text-emerald-600" />
                <PlanItem title="Setenil de las Bodegas" subtitle="Białe domy w skale" link="https://www.google.com/maps/search/?api=1&query=Setenil+de+las+Bodegas" iconColor="bg-slate-100 text-slate-600" />
              </div>
            </div>

            {/* Sobota */}
            <div>
              <div className="flex items-center gap-2 mb-4 px-1"><div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black">14</div><h2 className="text-lg font-black uppercase tracking-tight text-slate-800 italic">Sobota</h2></div>
              <div className="space-y-3">
                <PlanItem title="Cueva del Tesoro" subtitle="Unikalna jaskinia morska" link="https://www.google.com/maps/search/?api=1&query=Cueva+del+Tesoro+Rincon+de+la+Victoria" iconColor="bg-blue-50 text-blue-600" />
                <PlanItem title="Nerja (Miasto)" subtitle="Balcón de Europa" link="https://maps.app.goo.gl/aPjU7woZqZrjRXr7A" iconColor="bg-sky-50 text-sky-600" />
                <PlanItem title="Cueva de Nerja" subtitle="Monumentalne jaskinie" link="https://www.google.com/maps/search/?api=1&query=Cueva+de+Nerja" iconColor="bg-indigo-50 text-indigo-600" />
                <PlanItem title="Frigiliana" subtitle="Najpiękniejsze Białe Miasto" link="https://www.google.com/maps/search/?api=1&query=Frigiliana+Spain" iconColor="bg-slate-100 text-slate-600" />
                <div className="p-4 bg-yellow-50 rounded-3xl border border-yellow-100 flex items-center gap-4">
                  <Pizza className="w-6 h-6 text-yellow-600" />
                  <div><p className="text-[10px] font-black text-yellow-800 uppercase">Ważne Logi</p><p className="text-sm font-black">Zwrot auta (20:00) & Pizza</p></div>
                </div>
              </div>
            </div>

            {/* Niedziela */}
            <div>
              <div className="flex items-center gap-2 mb-4 px-1"><div className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center text-white font-black">15</div><h2 className="text-lg font-black uppercase tracking-tight text-slate-800 italic">Niedziela (START)</h2></div>
              <div className="space-y-3">
                <PlanItem title="05:00 - Pobudka" subtitle="Śniadanie i koncentracja" icon={Coffee} iconColor="bg-amber-50 text-amber-600" />
                <PlanItem title="07:00 - Wyjście" subtitle="Kierunek strefa startowa" icon={Navigation} iconColor="bg-blue-50 text-blue-600" />
                <PlanItem title={`08:15 - START (Nr ${userData.race.number})`} subtitle="Málaga Half Marathon" icon={Trophy} iconColor="bg-yellow-50 text-yellow-600" />
                <PlanItem title={`09:40 - META (Cel: ${userData.race.target})`} subtitle={`ETA: ${userData.race.eta}`} icon={Flag} iconColor="bg-emerald-50 text-emerald-600" />
                <PlanItem title="Chill & Malaga" subtitle="Plaża i Trip Restauracyjny" icon={Utensils} iconColor="bg-pink-50 text-pink-600" />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sport' && (
          <div className="space-y-6 animate-in zoom-in duration-500 pb-10">
            <div className="bg-slate-900 rounded-[40px] p-8 text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-4xl font-black italic tracking-tighter uppercase">{userData.names.filip}</h3>
                    <p className="text-blue-400 font-bold text-[10px] tracking-[0.25em] uppercase">Málaga Half Marathon</p>
                  </div>
                  <div className="bg-yellow-400 text-black px-4 py-2 rounded-2xl font-black text-xl italic shadow-lg">#{userData.race.number}</div>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-10">
                  <div className="space-y-1">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1"><Timer className="w-3 h-3"/> Cel</p>
                    <p className="text-3xl font-black tracking-tight">{userData.race.target}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1"><Navigation className="w-3 h-3"/> Tempo</p>
                    <p className="text-3xl font-black text-blue-400 tracking-tighter">{userData.race.pace}</p>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-3 bg-white/5 p-4 rounded-3xl border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500 rounded-xl"><Clock className="w-4 h-4 text-white"/></div>
                    <div>
                      <p className="text-[9px] font-black text-slate-400 uppercase text-xs">Start</p>
                      <p className="text-sm font-black tracking-tight">{userData.race.start}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-l border-white/10 pl-3">
                    <div className="p-2 bg-emerald-500 rounded-xl"><Flag className="w-4 h-4 text-white"/></div>
                    <div>
                      <p className="text-[9px] font-black text-slate-400 uppercase text-xs">Meta (ETA)</p>
                      <p className="text-sm font-black text-emerald-400 tracking-tight">{userData.race.eta}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] -mr-32 -mt-32 rounded-full" />
            </div>

            <div className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600"><CreditCard className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-black text-xs uppercase tracking-wider">Odbiór Pakietu</h4>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-tight">{userData.race.bibHours}</p>
                </div>
              </div>
              <a href="https://www.google.com/maps/search/?api=1&query=Terminal+de+Cruceros+Muelle+de+Canovas+Malaga" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 p-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-transform active:scale-[0.98] shadow-lg shadow-slate-200">
                Lokalizacja: {userData.race.bibLocation} <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="bg-white rounded-[40px] p-2 shadow-sm border border-slate-100 overflow-hidden">
               <div className="p-4 flex justify-between items-center"><p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Trasa Biegu 21.1km</p><MapIcon className="w-4 h-4 text-slate-300" /></div>
               <div className="relative group rounded-[32px] overflow-hidden">
                  <img src={userData.race.mapUrl} alt="Course Map" className="w-full h-auto" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <button onClick={handleOpenMap} className="w-full flex items-center justify-center gap-2 bg-white/95 backdrop-blur text-slate-900 py-3.5 rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-xl active:scale-95 transition-all"><Maximize2 className="w-4 h-4" /> Powiększ mapę (Nowa karta)</button>
                  </div>
               </div>
            </div>
          </div>
        )}
      </main>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .animate-in { animation: fadeIn 0.4s ease-out forwards; }
        body { background-color: #F8FAFC; -webkit-tap-highlight-color: transparent; }
        * { font-family: 'Inter', -apple-system, sans-serif; }
      `}</style>
    </div>
  );
};

export default App;
