import PageHeader from '../../../components/PageHeader';
import ChecklistItem from '../../../components/ChecklistItem';
import TipBox from '../../../components/TipBox';
import WarningBox from '../../../components/WarningBox';
import LinkButton from '../../../components/LinkButton';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function TIEProcess() {
  const documentChecklist = [
    { id: 'tie_doc_1', text: 'Valid passport — original + photocopy of ALL pages' },
    { id: 'tie_doc_2', text: 'Valid Spanish student visa — original + photocopy' },
    { id: 'tie_doc_3', text: 'Empadronamiento — proof of registration at your local town hall' },
    { id: 'tie_doc_4', text: '1 recent passport-sized photo — white background' },
    { id: 'tie_doc_5', text: 'Completed EX-17 form — download from sede.gob.es' },
    { id: 'tie_doc_6', text: 'Payment of fee: Modelo 790 Código 012 (approx. €16)' },
    { id: 'tie_doc_7', text: 'University enrollment certificate — original + copy' },
  ];

  const appointmentChecklist = [
    { id: 'tie_appt_1', text: 'Go to sede.gob.es → Search "Extranjería"' },
    { id: 'tie_appt_2', text: 'Select "Tarjetas de identidad de extranjero"' },
    { id: 'tie_appt_3', text: 'Choose your nearest Extranjería office or Police station' },
    { id: 'tie_appt_4', text: 'Book the first available appointment (slots fill up fast)' },
    { id: 'tie_appt_5', text: 'Attend with ALL original documents AND photocopies' },
  ];

  return (
    <div className="min-h-screen bg-warmCream/30">
      <PageHeader 
        title="TIE Process" 
        subtitle="Your Spanish residence identity card step-by-step."
      />

      <nav className="max-w-4xl mx-auto px-4 py-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-textMuted">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight size={12} />
        <Link to="/mobility" className="hover:text-primary transition-colors">Mobility</Link>
        <ChevronRight size={12} />
        <Link to="/mobility/spain" className="hover:text-primary transition-colors">Spain</Link>
        <ChevronRight size={12} />
        <span className="text-primary">TIE Process</span>
      </nav>

      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="bg-white rounded-3xl shadow-md border border-sand p-10">
            <h3 className="text-2xl font-serif font-bold text-textPrimary mb-6 italic italic">What is the TIE?</h3>
            <p className="text-textSecondary leading-relaxed text-lg">
              The TIE (Tarjeta de Identidad de Extranjero) is your official residence identity card in Spain. 
              It is required for all non-EU students staying more than 90 days. You need it to open a bank account, 
              sign a rental contract, and prove your legal status.
            </p>
          </div>

          <WarningBox 
            title="⚠️ Booking Urgency"
            text="Appointments fill up extremely fast — check the Sede Electrónica at 8am or midnight when new slots often appear. Book the same day you receive your Empadronamiento."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl shadow-xl p-10 border border-sand">
              <h3 className="text-xl font-bold text-textPrimary mb-8 italic">1. Required Documents</h3>
              <div className="space-y-2">
                {documentChecklist.map((item) => (
                  <ChecklistItem key={item.id} id={item.id} text={item.text} />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-10 border border-sand">
              <h3 className="text-xl font-bold text-textPrimary mb-8 italic">2. Booking Appointment</h3>
              <div className="space-y-4">
                {appointmentChecklist.map((item) => (
                  <ChecklistItem key={item.id} id={item.id} text={item.text} />
                ))}
              </div>
            </div>
          </div>

          <TipBox 
            text="If the Sede Electrónica shows no availability, try checking at odd hours (11pm–1am) or early morning. Some students wait 4–6 weeks for a slot. Be patient and persistent!"
          />

          <div className="mt-12 text-center">
            <Link 
              to="/mobility/spain/banking"
              className="inline-flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all text-lg"
            >
              Next: Banking in Spain <ChevronRight />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
