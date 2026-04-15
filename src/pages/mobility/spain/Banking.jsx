import PageHeader from '../../../components/PageHeader';
import ChecklistItem from '../../../components/ChecklistItem';
import TipBox from '../../../components/TipBox';
import { Link } from 'react-router-dom';
import { ChevronRight, CreditCard } from 'lucide-react';

export default function Banking() {
  const bankingChecklist = [
    { id: 'spain_banking_1', text: 'Set up Revolut or Wise before leaving home — zero foreign transaction fees' },
    { id: 'spain_banking_2', text: 'Use Revolut as your primary card for the first 2–3 months before your TIE arrives' },
    { id: 'spain_banking_3', text: 'Once you have your TIE, open a Spanish bank account (BBVA, Santander, or CaixaBank)' },
    { id: 'spain_banking_4', text: 'Bring passport, TIE, NIE number, and enrolment certificate to your bank appointment' },
    { id: 'spain_banking_5', text: 'Avoid currency exchange offices at airports — rates are extremely poor' },
  ];

  return (
    <div className="min-h-screen bg-warmCream/30">
      <PageHeader 
        title="Banking in Spain" 
        subtitle="Managing your money during your stay."
      />

      <nav className="max-w-4xl mx-auto px-4 py-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-textMuted">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight size={12} />
        <Link to="/mobility" className="hover:text-primary transition-colors">Mobility</Link>
        <ChevronRight size={12} />
        <Link to="/mobility/spain" className="hover:text-primary transition-colors">Spain</Link>
        <ChevronRight size={12} />
        <span className="text-primary">Banking</span>
      </nav>

      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 border border-sand mb-12">
            <h3 className="text-2xl font-serif font-bold text-textPrimary mb-8 italic flex items-center gap-4">
              <CreditCard className="text-primary" />
              Banking Checklist
            </h3>
            <div className="space-y-4">
              {bankingChecklist.map((item) => (
                <ChecklistItem key={item.id} id={item.id} text={item.text} />
              ))}
            </div>
          </div>

          <TipBox 
            text="Revolut allows you to open an account online in minutes before you leave home. Use it for all Spanish spending until your TIE arrives. Once you have the TIE, the BBVA Online Account is 100% free with no monthly fees."
          />

          <div className="mt-20 text-center">
            <Link 
              to="/mobility"
              className="inline-flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all text-lg"
            >
              Back to Mobility Overview <ChevronRight />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
