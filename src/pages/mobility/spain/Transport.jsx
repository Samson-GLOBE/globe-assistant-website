import PageHeader from '../../../components/PageHeader';
import ChecklistItem from '../../../components/ChecklistItem';
import TipBox from '../../../components/TipBox';
import LinkButton from '../../../components/LinkButton';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Transport() {
  const transportChecklist = [
    { id: 'spain_transport_1', text: 'Get your student transport card (Tarjeta Joven or local city equivalent)' },
    { id: 'spain_transport_2', text: 'Register at the local transport authority website' },
    { id: 'spain_transport_3', text: 'Collect required documents: TIE card, student ID, passport photo, enrolment certificate' },
  ];

  const costs = [
    { item: 'Monthly metro/bus pass Madrid (student under 26)', cost: '~€8.40 / month' },
    { item: 'Monthly metro/bus pass Barcelona (student)', cost: '~€20 / month' },
    { item: 'Single metro ticket', cost: '~€2.40' },
    { item: 'Renfe national train (student discount)', cost: 'Up to 30% off' },
  ];

  return (
    <div className="min-h-screen bg-warmCream/30">
      <PageHeader 
        title="Transport in Spain" 
        subtitle="Getting around Madrid and beyond."
      />

      <nav className="max-w-4xl mx-auto px-4 py-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-textMuted">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight size={12} />
        <Link to="/mobility" className="hover:text-primary transition-colors">Mobility</Link>
        <ChevronRight size={12} />
        <Link to="/mobility/spain" className="hover:text-primary transition-colors">Spain</Link>
        <ChevronRight size={12} />
        <span className="text-primary">Transport</span>
      </nav>

      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          
          <TipBox 
            text="In Madrid, the Abono Transportes Joven card (under 26) gives unlimited travel across all zones for under €9/month — one of the best deals in Europe. Apply for it the first week you arrive."
          />

          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 border border-sand">
            <h3 className="text-2xl font-serif font-bold text-textPrimary mb-8 italic">Getting Your Transport Card</h3>
            <div className="space-y-4">
              {transportChecklist.map((item) => (
                <ChecklistItem key={item.id} id={item.id} text={item.text} />
              ))}
            </div>
            <div className="mt-8">
              <LinkButton label="Madrid Transport Authority (CRTM)" url="https://www.crtm.es" />
            </div>
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-md border border-sand p-10">
            <h4 className="text-xl font-bold text-textPrimary mb-8 italic">Student Transport Costs</h4>
            <div className="space-y-4">
              {costs.map((c, idx) => (
                <div key={idx} className="flex justify-between items-center py-4 border-b border-sand/30 last:border-0 group">
                  <span className="text-textSecondary font-medium group-hover:text-primary transition-colors">{c.item}</span>
                  <span className="bg-sandLight text-primary font-bold px-4 py-2 rounded-lg text-sm">{c.cost}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center">
            <Link 
              to="/mobility/spain/tie-process"
              className="inline-flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all text-lg"
            >
              Next: Your TIE Residence ID Card <ChevronRight />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
