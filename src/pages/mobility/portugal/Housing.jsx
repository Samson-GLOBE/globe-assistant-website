import PageHeader from '../../../components/PageHeader';
import ChecklistItem from '../../../components/ChecklistItem';
import TipBox from '../../../components/TipBox';
import WarningBox from '../../../components/WarningBox';
import LinkButton from '../../../components/LinkButton';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Housing() {
  const housingChecklist = [
    { id: 'portugal_housing_1', text: 'Apply for ULisboa student residence immediately after acceptance' },
    { id: 'portugal_housing_2', text: 'Search private listings on Uniplaces, Idealista Portugal, and Erasmusu' },
    { id: 'portugal_housing_3', text: 'Always verify the landlord and view the property before paying any deposit' },
    { id: 'portugal_housing_4', text: 'Budget for first month + deposit (typically 1–2 months rent)' },
  ];

  return (
    <div className="min-h-screen bg-warmCream/30">
      <PageHeader 
        title="Housing in Portugal" 
        subtitle="Finding accommodation in Lisbon."
      />

      <nav className="max-w-4xl mx-auto px-4 py-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-textMuted">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight size={12} />
        <Link to="/mobility" className="hover:text-primary transition-colors">Mobility</Link>
        <ChevronRight size={12} />
        <Link to="/mobility/portugal" className="hover:text-primary transition-colors">Portugal</Link>
        <ChevronRight size={12} />
        <span className="text-primary">Housing</span>
      </nav>

      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          
          <TipBox 
            text="Lisbon has a competitive housing market. Start searching at least 2–3 months before your semester begins. Uniplaces and Idealista both have strong Lisbon listings. University residences at ULisboa are limited — apply early."
          />

          <WarningBox 
            title="⚠️ Lisbon Rents"
            text="Lisbon rents have increased significantly. Budget carefully — expect €500–800/month for a room in a shared flat. Areas like Mouraria, Intendente, and Campo Pequeno offer better value than Baixa or Chiado."
          />

          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 border border-sand mt-12 mb-12">
            <h3 className="text-2xl font-serif font-bold text-textPrimary mb-8 italic flex items-center gap-4">
              <Home className="text-primary" />
              Portugal Housing Checklist
            </h3>
            <div className="space-y-4">
              {housingChecklist.map((item) => (
                <ChecklistItem key={item.id} id={item.id} text={item.text} />
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton label="Search on Uniplaces Portugal" url="https://www.uniplaces.com/accommodation/lisbon" />
              <LinkButton label="Search on Idealista Portugal" url="https://www.idealista.pt" />
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
