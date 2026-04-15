import PageHeader from '../../../components/PageHeader';
import ChecklistItem from '../../../components/ChecklistItem';
import TipBox from '../../../components/TipBox';
import { Link } from 'react-router-dom';
import { ChevronRight, Sun, Thermometer, Map } from 'lucide-react';

export default function SummerSchool() {
  const preparationChecklist = [
    { id: 'mexico_ss_1', text: 'Confirm your summer school dates and itinerary with the GLOBE team' },
    { id: 'mexico_ss_2', text: 'Arrange comprehensive travel and health insurance covering Mexico' },
    { id: 'mexico_ss_3', text: 'Check recommended vaccinations at least 6 weeks before travel' },
    { id: 'mexico_ss_4', text: 'Pack appropriate clothing for fieldwork — sun protection, sturdy shoes' },
    { id: 'mexico_ss_5', text: 'Download offline maps of Tlaxcala and surrounding areas' },
  ];

  return (
    <div className="min-h-screen bg-warmCream/30">
      <PageHeader 
        title="Summer School Prep" 
        subtitle="Getting ready for Tlaxcala, Mexico."
      />

      <nav className="max-w-4xl mx-auto px-4 py-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-textMuted">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight size={12} />
        <Link to="/mobility" className="hover:text-primary transition-colors">Mobility</Link>
        <ChevronRight size={12} />
        <Link to="/mobility/mexico" className="hover:text-primary transition-colors">Mexico</Link>
        <ChevronRight size={12} />
        <span className="text-primary">Summer School</span>
      </nav>

      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          
          <TipBox 
            text="The Mexico summer school is a unique immersive field experience. It is shorter than a full semester but requires specific preparation — especially around health precautions and packing for fieldwork in diverse ecosystems."
          />

          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 border border-sand mt-12 mb-12">
            <h3 className="text-2xl font-serif font-bold text-textPrimary mb-8 italic flex items-center gap-4">
              <Sun className="text-primary" />
              Preparation Checklist
            </h3>
            <div className="space-y-4">
              {preparationChecklist.map((item) => (
                <ChecklistItem key={item.id} id={item.id} text={item.text} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-2xl border border-sand shadow-sm group">
              <Thermometer className="text-primary mb-4" />
              <h4 className="font-bold text-textPrimary mb-2 uppercase tracking-widest text-xs">Climate Awareness</h4>
              <p className="text-sm text-textSecondary leading-relaxed italic">
                Tlaxcala is at high altitude. Expect intense sun during the day and cooler temperatures in the evenings. Pack layers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-sand shadow-sm group">
              <Map className="text-primary mb-4" />
              <h4 className="font-bold text-textPrimary mb-2 uppercase tracking-widest text-xs">Field Gear</h4>
              <p className="text-sm text-textSecondary leading-relaxed italic">
                Sturdy hiking boots, insect repellent, and a broad-brimmed hat are essential for our biodiversity study sites.
              </p>
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
