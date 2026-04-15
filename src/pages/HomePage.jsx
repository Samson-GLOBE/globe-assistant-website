import { Link } from 'react-router-dom';
import { Globe, ShieldCheck, ListChecks, HelpCircle, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const heroStyle = {
    backgroundImage: 'linear-gradient(rgba(44, 24, 16, 0.45), rgba(44, 24, 16, 0.45)), url(/globe-bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
  };

  const features = [
    {
      icon: <Globe size={28} />,
      title: 'Mobility Guide',
      desc: 'Step-by-step guides for Spain, UK, Mexico & Portugal destinations.',
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'Visa Checker',
      desc: 'Instant visa requirements for 192+ nationalities across the globe.',
    },
    {
      icon: <ListChecks size={28} />,
      title: 'Personalized Checklists',
      desc: 'Interactive trackers that save your progress as you prepare.',
    },
    {
      icon: <HelpCircle size={28} />,
      title: 'Student Tips',
      desc: "Real advice from GLOBE alumni who've navigated the journey.",
    },
  ];

  const countries = [
    { name: 'Spain', flag: '🇪🇸', desc: 'Semester 1 — URJC, Madrid', path: '/mobility/spain' },
    { name: 'United Kingdom', flag: '🇬🇧', desc: 'Semester 2 — Bangor University', path: '/mobility/uk' },
    { name: 'Mexico', flag: '🇲🇽', desc: 'Summer School — UATx, Tlaxcala', path: '/mobility/mexico' },
    { name: 'Portugal', flag: '🇵🇹', desc: 'Semester 3 — ULisboa, Lisbon', path: '/mobility/portugal' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-center text-white px-4 pt-16"
        style={heroStyle}
      >
        <div className="max-w-4xl space-y-8 animate-in fade-in zoom-in duration-700">
          <div className="inline-block bg-primary/20 backdrop-blur-md border border-sand/30 py-2 px-6 rounded-full">
            <p className="text-sm font-bold uppercase tracking-widest text-sandLight">Erasmus Mundus GLOBE Programme</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight leading-tight drop-shadow-2xl">
            GLOBE <span className="text-sand">Mobility Assistant</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-sandLight font-medium max-w-2xl mx-auto drop-shadow-lg leading-relaxed">
            Your complete student guide to navigating international mobility across our partner universities.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
            <Link 
              to="/mobility" 
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primaryDark hover:scale-105 transition-all shadow-xl"
            >
              Explore Mobility Guide
            </Link>
            <Link 
              to="/visa-checker" 
              className="bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary hover:scale-105 transition-all"
            >
              Check Visa Requirements
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
          <ArrowRight size={24} className="rotate-90" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-textPrimary mb-4 italic">Everything you need for your GLOBE journey</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, idx) => (
              <div key={idx} className="bg-warmCream border-l-4 border-primary p-8 rounded-r-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="text-primary mb-6">{f.icon}</div>
                <h3 className="text-xl font-bold text-textPrimary mb-3 italic">{f.title}</h3>
                <p className="text-textSecondary text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-24 bg-sandLight/30 border-y border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-textPrimary mb-4 font-serif">Your GLOBE Destinations</h2>
            <p className="text-textSecondary">Select a country to explore detailed guides and local requirements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {countries.map((c) => (
              <Link 
                key={c.name} 
                to={c.path}
                className="group relative overflow-hidden bg-white p-8 rounded-2xl shadow-md border border-sand/50 hover:border-primary transition-all flex flex-col items-center text-center"
              >
                <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-500">{c.flag}</div>
                <h3 className="text-2xl font-serif font-bold text-textPrimary mb-2">{c.name}</h3>
                <p className="text-textMuted text-xs uppercase tracking-widest mb-6">{c.desc}</p>
                <div className="mt-auto flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                  Explore <ArrowRight size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
