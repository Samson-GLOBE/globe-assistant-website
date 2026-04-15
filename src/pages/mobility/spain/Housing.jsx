import PageHeader from '../../../components/PageHeader';
import ChecklistItem from '../../../components/ChecklistItem';
import WarningBox from '../../../components/WarningBox';
import LinkButton from '../../../components/LinkButton';
import CopyTextButton from '../../../components/CopyTextButton';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Housing() {
  const housingChecklist = [
    { id: 'spain_housing_1', text: 'Search on Idealista, Fotocasa, Uniplaces, and Spotahome' },
    { id: 'spain_housing_2', text: 'Always video-call or visit the flat before signing any contract' },
    { id: 'spain_housing_3', text: 'Read every clause in the rental contract (use a translator if needed)' },
    { id: 'spain_housing_4', text: 'Check that the landlord is actually the property owner (ask for deeds)' },
    { id: 'spain_housing_5', text: 'Confirm all included utilities in writing before signing' },
    { id: 'spain_housing_6', text: 'Pay first month + deposit only via bank transfer, never cash' },
  ];

  const landlordMessage = "Buenas tardes, me llamo [Tu Nombre] y soy estudiante de máster en [Universidad]. Estoy interesado/a en el piso publicado en [plataforma]. ¿Podría facilitarme más información sobre el precio, los servicios incluidos y la disponibilidad? ¿Sería posible hacer una videollamada para ver el piso? Muchas gracias.";

  return (
    <div className="min-h-screen bg-warmCream/30">
      <PageHeader 
        title="Housing in Spain" 
        subtitle="Finding and securing accommodation in Madrid."
      />

      <nav className="max-w-4xl mx-auto px-4 py-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-textMuted">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight size={12} />
        <Link to="/mobility" className="hover:text-primary transition-colors">Mobility</Link>
        <ChevronRight size={12} />
        <Link to="/mobility/spain" className="hover:text-primary transition-colors">Spain</Link>
        <ChevronRight size={12} />
        <span className="text-primary">Housing</span>
      </nav>

      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 border border-sand">
            <h3 className="text-2xl font-serif font-bold text-textPrimary mb-8 italic text-center md:text-left">Madrid Housing Checklist</h3>
            <div className="space-y-2 divide-y divide-sand/30">
              {housingChecklist.map((item) => (
                <ChecklistItem key={item.id} id={item.id} text={item.text} />
              ))}
            </div>
          </div>

          <WarningBox 
            title="🚨 Scam Alert — Stay Safe!"
            text="Never pay any deposit or rent to someone you have not verified. If a deal seems too cheap or the landlord asks for payment before meeting — it is almost certainly a scam. Report suspicious activity to the local police (Policía Nacional)."
          />

          <div className="mt-12 bg-white rounded-2xl shadow-md border border-sand p-8 text-center md:text-left flex flex-col md:flex-row items-center gap-8 group">
            <div className="flex-1">
              <h4 className="text-xl font-bold text-textPrimary mb-3 italic">Landlord Message Template</h4>
              <p className="text-sm text-textSecondary mb-6 leading-relaxed">
                Use this professional Spanish message to contact landlords on Idealista or Fotocasa. 
                It shows you are a serious postgraduate student.
              </p>
              <CopyTextButton label="Copy Spanish Message" textToCopy={landlordMessage} />
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-4 justify-center md:justify-start">
            <LinkButton label="Search on Idealista" url="https://www.idealista.com" />
            <LinkButton label="Search on Uniplaces" url="https://www.uniplaces.com" />
            <LinkButton label="Search on Spotahome" url="https://www.spotahome.com" />
          </div>

          <div className="mt-20 text-center">
            <Link 
              to="/mobility/spain/transport"
              className="inline-flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all text-lg"
            >
              Next: Public Transport in Madrid <ChevronRight />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
