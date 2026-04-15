import PageHeader from '../../../components/PageHeader';
import ChecklistItem from '../../../components/ChecklistItem';
import TipBox from '../../../components/TipBox';
import WarningBox from '../../../components/WarningBox';
import LinkButton from '../../../components/LinkButton';
import { Link } from 'react-router-dom';
import { ChevronRight, IdCard } from 'lucide-react';

export default function VisaResidence() {
  const visaChecklist = [
    { id: 'portugal_visa_1', text: 'Apply for Type D Residence Visa at the Portuguese consulate in your home country (non-EU)' },
    { id: 'portugal_visa_2', text: 'Gather documents: passport, acceptance letter, proof of funds, health insurance, criminal record' },
    { id: 'portugal_visa_3', text: 'After arriving in Portugal, book your AIMA appointment immediately' },
    { id: 'portugal_visa_4', text: 'Register your address with the local Câmara Municipal (city hall)' },
    { id: 'portugal_visa_5', text: 'EU students: no visa needed — register with AIMA if staying beyond 90 days' },
  ];

  return (
    <div className="min-h-screen bg-warmCream/30">
      <PageHeader 
        title="Portugal Visa & Residence" 
        subtitle="Type D Residence Visa and AIMA registration."
      />

      <nav className="max-w-4xl mx-auto px-4 py-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-textMuted">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight size={12} />
        <Link to="/mobility" className="hover:text-primary transition-colors">Mobility</Link>
        <ChevronRight size={12} />
        <Link to="/mobility/portugal" className="hover:text-primary transition-colors">Portugal</Link>
        <ChevronRight size={12} />
        <span className="text-primary">Visa & Residence</span>
      </nav>

      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          
          <TipBox 
            text="For non-EU students, Portugal requires a Type D Residence Visa applied for at your home country's Portuguese consulate. After arriving, you must register for a Residence Permit at AIMA within 90 days. Book your AIMA appointment immediately upon arrival — there are significant waiting times."
          />

          <WarningBox 
            title="⚠️ AIMA (formerly SEF) Backlogs"
            text="AIMA has a large backlog of cases. Your initial Type D visa is only valid for 4 months as an entry document — your long-term legal stay depends on getting the AIMA residence permit. Do not delay booking this appointment."
          />

          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 border border-sand mt-12 mb-12">
            <h3 className="text-2xl font-serif font-bold text-textPrimary mb-8 italic flex items-center gap-4">
              <IdCard className="text-primary" />
              Portugal Entry Checklist
            </h3>
            <div className="space-y-4">
              {visaChecklist.map((item) => (
                <ChecklistItem key={item.id} id={item.id} text={item.text} />
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton label="AIMA Official Website" url="https://aima.gov.pt" />
              <LinkButton label="ULisboa International Office" url="https://www.ulisboa.pt/en/unidade-organica/international-relations-office" />
            </div>
          </div>

          <div className="mt-20 text-center">
            <Link 
              to="/mobility/portugal/housing"
              className="inline-flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all text-lg font-serif"
            >
              Next: Housing in Lisbon <ChevronRight />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
