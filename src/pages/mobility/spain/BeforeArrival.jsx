import PageHeader from '../../../components/PageHeader';
import ChecklistItem from '../../../components/ChecklistItem';
import TipBox from '../../../components/TipBox';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function BeforeArrival() {
  const arrivalChecklist = [
    { id: 'spain_arrival_1', text: 'Book flights well in advance (min. 6 weeks before start date)' },
    { id: 'spain_arrival_2', text: 'Obtain private health insurance valid in Spain (min. €30,000 coverage)' },
    { id: 'spain_arrival_3', text: 'Prepare NIE document folder (passport, photos, EX-00 form, financial proof)' },
    { id: 'spain_arrival_4', text: 'Arrange accommodation before arrival (ideally confirmed and signed)' },
    { id: 'spain_arrival_5', text: 'Set up a Revolut or Wise account for fee-free international spending' },
    { id: 'spain_arrival_6', text: 'Download the Cita Previa app or bookmark sede.gob.es for appointments' },
    { id: 'spain_arrival_7', text: 'Join the GLOBE student WhatsApp group for peer support' },
    { id: 'spain_arrival_8', text: 'Notify your bank at home of your travel dates' },
    { id: 'spain_arrival_9', text: 'Pack original AND notarized copies of all key documents' },
  ];

  return (
    <div className="min-h-screen bg-warmCream/30">
      <PageHeader 
        title="Before Arrival" 
        subtitle="Essential preparation before you land in Spain."
      />

      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-4 py-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-textMuted">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight size={12} />
        <Link to="/mobility" className="hover:text-primary transition-colors">Mobility</Link>
        <ChevronRight size={12} />
        <Link to="/mobility/spain" className="hover:text-primary transition-colors">Spain</Link>
        <ChevronRight size={12} />
        <span className="text-primary">Before Arrival</span>
      </nav>

      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          
          <TipBox 
            text="Start your visa and TIE paperwork 4–6 months before your programme begins — Spanish administrative processes take longer than expected and appointment slots fill up weeks in advance."
          />

          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 border border-sand mt-12">
            <h3 className="text-2xl font-serif font-bold text-textPrimary mb-8 italic">Arrival Checklist</h3>
            <div className="space-y-2 divide-y divide-sand/30">
              {arrivalChecklist.map((item) => (
                <ChecklistItem key={item.id} id={item.id} text={item.text} />
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/mobility/spain/housing"
              className="inline-flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all text-lg"
            >
              Next: Finding Housing in Madrid <ChevronRight />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
