import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import { ArrowRight, Plane, Home, Bus, IdCard, CreditCard, ExternalLink } from 'lucide-react';

export default function SpainPage() {
  const sections = [
    {
      title: 'Before Arrival',
      desc: 'Essential preparation before you land in Spain.',
      icon: <Plane size={32} />,
      path: '/mobility/spain/before-arrival',
    },
    {
      title: 'Housing',
      desc: 'Finding and securing accommodation in Madrid.',
      icon: <Home size={32} />,
      path: '/mobility/spain/housing',
    },
    {
      title: 'Transport',
      desc: 'Getting around Madrid with the Abono Joven.',
      icon: <Bus size={32} />,
      path: '/mobility/spain/transport',
    },
    {
      title: 'TIE Process',
      desc: 'Your Spanish residence identity card step-by-step.',
      icon: <IdCard size={32} />,
      path: '/mobility/spain/tie-process',
    },
    {
      title: 'Banking',
      desc: 'Managing your money and local accounts.',
      icon: <CreditCard size={32} />,
      path: '/mobility/spain/banking',
    },
  ];

  return (
    <div className="min-h-screen bg-warmCream/30">
      <PageHeader 
        title="🇪🇸 Spain Mobility" 
        subtitle="Semester 1 — Universidad Rey Juan Carlos (URJC), Madrid"
      />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {sections.map((s) => (
              <Link 
                key={s.title} 
                to={s.path}
                className="bg-white rounded-2xl p-8 border-b-4 border-primary shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all group flex flex-col items-center text-center"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-textPrimary mb-4">{s.title}</h3>
                <p className="text-textSecondary text-sm leading-relaxed mb-8">{s.desc}</p>
                <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm tracking-wide">
                  View Guide <ArrowRight size={16} className="group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-textPrimary text-white rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -translate-x-12 -translate-y-24 blur-3xl group-hover:scale-150 transition-transform"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="text-6xl">🎓</div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-serif mb-4">University Support</h3>
                <p className="text-sand/70 mb-8 max-w-xl">
                  As a URJC student, you have access to the International Relations Office (Serein) 
                  who can assist with enrollment and general administrative questions.
                </p>
                <a 
                  href="https://www.urjc.es/internacional" 
                  target="_blank"
                  className="inline-flex items-center gap-3 border border-white/30 px-6 py-3 rounded-xl hover:bg-white hover:text-textPrimary transition-all font-bold text-sm"
                >
                  URJC International Office <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
