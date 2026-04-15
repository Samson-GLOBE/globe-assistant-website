import PageHeader from '../../../components/PageHeader';
import ChecklistItem from '../../../components/ChecklistItem';
import TipBox from '../../../components/TipBox';
import WarningBox from '../../../components/WarningBox';
import LinkButton from '../../../components/LinkButton';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck } from 'lucide-react';

export default function VisaInfoMexico() {
  const visaChecklist = [
    { id: 'mexico_visa_1', text: 'Check whether your nationality requires a visa at inm.gob.mx' },
    { id: 'mexico_visa_2', text: 'If visa-free: fill in the FMM form on the plane or online' },
    { id: 'mexico_visa_3', text: 'Carry your GLOBE acceptance letter and programme documentation' },
    { id: 'mexico_visa_4', text: 'Bring proof of accommodation and return flight booking' },
  ];

  return (
    <div className="min-h-screen bg-warmCream/30">
      <PageHeader 
        title="Mexico Visa" 
        subtitle="Visitante sin permiso para actividades remuneradas."
      />

      <nav className="max-w-4xl mx-auto px-4 py-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-textMuted">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight size={12} />
        <Link to="/mobility" className="hover:text-primary transition-colors">Mobility</Link>
        <ChevronRight size={12} />
        <Link to="/mobility/mexico" className="hover:text-primary transition-colors">Mexico</Link>
        <ChevronRight size={12} />
        <span className="text-primary">Visa Info</span>
      </nav>

      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          
          <TipBox 
            text="Most GLOBE students travel to Mexico for a summer school of less than 180 days. Many EU, Latin American, and major nationality passport holders do NOT need a visa — you enter as a Visitante (visitor) and fill in the FMM form on the plane."
          />

          <WarningBox 
            title="⚠️ The FMM Form is Critical"
            text="Fill in your FMM (Forma Migratoria Múltiple) form carefully and keep it safe — you must hand it back when you leave Mexico. Losing it can cause significant delays at the airport."
          />

          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 border border-sand mt-12 mb-12">
            <h3 className="text-2xl font-serif font-bold text-textPrimary mb-8 italic flex items-center gap-4">
              <ShieldCheck className="text-primary" />
              Mexico Entry Checklist
            </h3>
            <div className="space-y-4">
              {visaChecklist.map((item) => (
                <ChecklistItem key={item.id} id={item.id} text={item.text} />
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton label="Check requirements — INM" url="https://www.inm.gob.mx/gobmx/word/index.php/paises-requieren-visa-para-mexico/" />
            </div>
          </div>

          <div className="mt-20 text-center">
            <Link 
              to="/mobility/mexico/summer-school"
              className="inline-flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all text-lg font-serif"
            >
              Next: Summer School Preparation <ChevronRight />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
