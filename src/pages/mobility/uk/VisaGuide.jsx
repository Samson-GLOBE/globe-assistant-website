import PageHeader from '../../../components/PageHeader';
import ChecklistItem from '../../../components/ChecklistItem';
import TipBox from '../../../components/TipBox';
import WarningBox from '../../../components/WarningBox';
import LinkButton from '../../../components/LinkButton';
import { Link } from 'react-router-dom';
import { ChevronRight, Gavel } from 'lucide-react';

export default function VisaGuideUK() {
  const visaChecklist = [
    { id: 'uk_visa_1', text: 'Check whether you need a visa or just an ETA using the official gov.uk visa checker' },
    { id: 'uk_visa_2', text: 'Apply for your Standard Visitor Visa or ETA at least 6–8 weeks before travel' },
    { id: 'uk_visa_3', text: 'Obtain your acceptance letter from Bangor University confirming your study duration' },
    { id: 'uk_visa_4', text: 'Prepare bank statements and return ticket as proof for the visa application' },
  ];

  return (
    <div className="min-h-screen bg-warmCream/30">
      <PageHeader 
        title="UK Visa Guide" 
        subtitle="Standard Visitor Visa for your Bangor semester."
      />

      <nav className="max-w-4xl mx-auto px-4 py-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-textMuted">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight size={12} />
        <Link to="/mobility" className="hover:text-primary transition-colors">Mobility</Link>
        <ChevronRight size={12} />
        <Link to="/mobility/uk" className="hover:text-primary transition-colors">United Kingdom</Link>
        <ChevronRight size={12} />
        <span className="text-primary">Visa Guide</span>
      </nav>

      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          
          <TipBox 
            text="As a GLOBE student, your semester at Bangor University is 6 months or less. This means most nationalities use the Standard Visitor Visa (£127) — not the full Student Visa. From April 2025, EU nationals also need an ETA (Electronic Travel Authorisation, £10) before travelling."
          />

          <WarningBox 
            title="⚠️ Important Visa Distinction"
            text="Do not confuse the Standard Visitor Visa with the full UK Student Visa. The Student Visa costs £490 and is for programmes longer than 6 months. As a GLOBE exchange student you almost certainly need the Standard Visitor Visa."
          />

          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 border border-sand mt-12 mb-12">
            <h3 className="text-2xl font-serif font-bold text-textPrimary mb-8 italic flex items-center gap-4">
              <Gavel className="text-primary" />
              Visa Checklist
            </h3>
            <div className="space-y-4">
              {visaChecklist.map((item) => (
                <ChecklistItem key={item.id} id={item.id} text={item.text} />
              ))}
            </div>
            <div className="mt-8">
              <LinkButton label="Check if you need a UK visa — gov.uk" url="https://www.gov.uk/check-uk-visa" />
            </div>
          </div>

          <div className="bg-sandLight/50 p-8 rounded-2xl border border-sand text-center italic">
            <p className="text-sm text-textSecondary leading-relaxed">
              Full UK housing guide and local logistics can be found in the next section. 
              Always contact the Bangor University International Office for the latest updates.
            </p>
          </div>

          <div className="mt-20 text-center">
            <Link 
              to="/mobility/uk/housing"
              className="inline-flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all text-lg font-serif"
            >
              Next: Housing in Bangor <ChevronRight />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
