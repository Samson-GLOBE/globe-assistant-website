import PageHeader from '../../../components/PageHeader';
import ChecklistItem from '../../../components/ChecklistItem';
import TipBox from '../../../components/TipBox';
import WarningBox from '../../../components/WarningBox';
import LinkButton from '../../../components/LinkButton';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Housing() {
  const housingChecklist = [
    { id: 'uk_housing_1', text: 'Apply for Bangor University student accommodation through their official portal' },
    { id: 'uk_housing_2', text: 'If applying for private housing, search on Rightmove or Zoopla' },
    { id: 'uk_housing_3', text: 'Confirm your tenancy agreement terms carefully — UK rental contracts differ' },
  ];

  return (
    <div className="min-h-screen bg-warmCream/30">
      <PageHeader 
        title="Housing in the UK" 
        subtitle="Finding student accommodation in Bangor, Wales."
      />

      <nav className="max-w-4xl mx-auto px-4 py-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-textMuted">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight size={12} />
        <Link to="/mobility" className="hover:text-primary transition-colors">Mobility</Link>
        <ChevronRight size={12} />
        <Link to="/mobility/uk" className="hover:text-primary transition-colors">United Kingdom</Link>
        <ChevronRight size={12} />
        <span className="text-primary">Housing</span>
      </nav>

      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          
          <TipBox 
            text="Bangor University offers on-campus accommodation for international students. Apply for university housing as soon as you receive your offer — it is strongly recommended for your first semester as Bangor is a smaller city."
          />

          <WarningBox 
            title="⚠️ Limited Private Rentals"
            text="Private rental in Bangor can be limited compared to larger UK cities. Start your housing search immediately after receiving your offer letter. Do not assume you can find housing upon arrival."
          />

          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 border border-sand mt-12 mb-12">
            <h3 className="text-2xl font-serif font-bold text-textPrimary mb-8 italic flex items-center gap-4">
              <Home className="text-primary" />
              UK Housing Checklist
            </h3>
            <div className="space-y-4">
              {housingChecklist.map((item) => (
                <ChecklistItem key={item.id} id={item.id} text={item.text} />
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton label="Bangor University Accommodation" url="https://www.bangor.ac.uk/accommodation" />
              <LinkButton label="Search on Rightmove" url="https://www.rightmove.co.uk" />
            </div>
          </div>

          <div className="mt-20 text-center">
            <Link 
              to="/mobility"
              className="inline-flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all text-lg font-serif"
            >
              Back to Mobility Overview <ChevronRight />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
