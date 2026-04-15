import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import { ArrowRight, IdCard, Home, ExternalLink } from 'lucide-react';

export default function PortugalPage() {
  const sections = [
    {
      title: 'Visa & Residence',
      desc: 'Type D Residence Visa and AIMA registration.',
      icon: <IdCard size={32} />,
      path: '/mobility/portugal/visa',
    },
    {
      title: 'Housing',
      desc: 'Finding student accommodation in Lisbon.',
      icon: <Home size={32} />,
      path: '/mobility/portugal/housing',
    },
  ];

  return (
    <div className="min-h-screen bg-warmCream/30">
      <PageHeader 
        title="🇵🇹 Portugal" 
        subtitle="Semester 3 — Universidade de Lisboa (ULisboa)"
      />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 max-w-4xl mx-auto">
            {sections.map((s) => (
              <Link 
                key={s.title} 
                to={s.path}
                className="bg-white rounded-3xl p-10 border-b-8 border-primary shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all group flex flex-col items-center text-center"
              >
                <div className="text-primary mb-8 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-3xl font-serif font-bold text-textPrimary mb-4 italic">{s.title}</h3>
                <p className="text-textSecondary text-sm leading-relaxed mb-10">{s.desc}</p>
                <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm tracking-wide bg-sandLight px-6 py-2 rounded-full">
                  View Guide <ArrowRight size={16} className="group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-textPrimary text-white rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -translate-x-12 -translate-y-24 blur-3xl group-hover:scale-150 transition-transform"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="text-6xl">🌊</div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-serif mb-4 italic font-bold">ULisboa Support</h3>
                <p className="text-sand/70 mb-8 max-w-xl">
                  Universidade de Lisboa has several international offices. Most GLOBE students are supported through the main International Relations Office. 
                  Lisbon is a vibrant city with a very active Erasmus community.
                </p>
                <a 
                  href="https://www.ulisboa.pt" 
                  target="_blank"
                  className="inline-flex items-center gap-3 border border-white/30 px-6 py-3 rounded-xl hover:bg-white hover:text-textPrimary transition-all font-bold text-sm"
                >
                  ULisboa International <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
