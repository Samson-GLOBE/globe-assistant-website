import PageHeader from '../../components/PageHeader';
import SectionCard from '../../components/SectionCard';
import ChecklistItem from '../../components/ChecklistItem';
import TipBox from '../../components/TipBox';
import WarningBox from '../../components/WarningBox';
import CopyButton from '../../components/CopyButton';
import LinkButton from '../../components/LinkButton';

export default function SpainPage() {
  return (
    <div>
      <PageHeader 
        emoji="🇪🇸"
        title="Spain — Madrid" 
        subtitle="Semester 1 at Universidad Rey Juan Carlos" 
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-sm text-stone-500 mb-6 uppercase tracking-wider font-semibold">Home &gt; Mobility &gt; Spain</div>
        
        <SectionCard title="Housing" emoji="🏠">
          <p className="text-[14px] text-stone-800 leading-relaxed mb-4">Madrid has a competitive rental market. Start searching 2–3 months before arrival. Most students live in shared flats (pisos compartidos) in areas like Leganés, Móstoles, Alcorcón, or Getafe near URJC campus.</p>
          
          <div className="mb-4">
            <ChecklistItem id="spain_h_1" text="Begin your housing search at least 2–3 months before your programme starts" />
            <ChecklistItem id="spain_h_2" text="Search on Idealista, Fotocasa, Uniplaces, and Spotahome for listings" />
            <ChecklistItem id="spain_h_3" text="Always video-call or visit the flat before signing anything or paying" />
            <ChecklistItem id="spain_h_4" text="Read every clause in the rental contract — use Google Translate if needed" />
            <ChecklistItem id="spain_h_5" text="Confirm all utilities (agua, luz, gas) are included or calculate separately" />
            <ChecklistItem id="spain_h_6" text="Pay first month and deposit ONLY by bank transfer — never cash or Bizum to a stranger" />
            <ChecklistItem id="spain_h_7" text="Register your address (Empadronamiento) at the local Ayuntamiento within 30 days" />
          </div>

          <TipBox text="Budget between €300–450/month for a room in a shared flat near URJC (Leganés or Móstoles campus). Rooms in central Madrid cost €500–700+ but the commute is longer. WhatsApp groups for GLOBE students are the best source for housing leads from previous cohorts." />
          <WarningBox text="Never pay any deposit without meeting the landlord or doing a video call of the flat. Fake listings on Facebook Marketplace and Idealista are common. If a deal looks too good — it almost certainly is a scam." />

          <div className="mt-4 mb-4">
            <CopyButton label="Copy landlord enquiry message (Spanish)" text="Buenas tardes, me llamo [Tu Nombre] y soy estudiante de máster en la Universidad Rey Juan Carlos. Estoy interesado/a en el piso publicado en [plataforma]. ¿Sería posible tener más información sobre el precio, los gastos incluidos y la disponibilidad? ¿Podría hacer una videollamada para ver el piso antes de tomar una decisão? Muchas gracias." />
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <LinkButton label="Search on Idealista" url="https://www.idealista.com" />
            <LinkButton label="Search on Spotahome" url="https://www.spotahome.com" />
            <LinkButton label="Search on Uniplaces" url="https://www.uniplaces.com" />
            <LinkButton label="Erasmusu student housing" url="https://erasmusu.com" />
          </div>
        </SectionCard>

        <SectionCard title="Transport" emoji="🚌">
          <div className="mb-4">
            <ChecklistItem id="spain_t_1" text="Apply for the Abono Transportes Joven card (under 26) at any metro station or online" />
            <ChecklistItem id="spain_t_2" text="Bring your TIE card, student ID, and a recent passport photo to register" />
            <ChecklistItem id="spain_t_3" text="Download the METRO MADRID and Renfe apps for real-time journey planning" />
            <ChecklistItem id="spain_t_4" text="Get a Citymapper account — works for Madrid public transport perfectly" />
          </div>

          <div className="overflow-hidden rounded-lg border border-stone-200 mb-4 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#FAF3E8] border-b border-[#E8C99A]">
                <tr>
                  <th className="font-semibold p-3 text-[#2C1810]">Type</th>
                  <th className="font-semibold p-3 text-[#2C1810]">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100 last:border-none">
                  <td className="p-3 text-stone-700">Abono Transportes Joven (under 26, all Madrid zones A–B2)</td>
                  <td className="p-3 font-medium">~€8.40/month</td>
                </tr>
                <tr className="border-b border-stone-100 last:border-none">
                  <td className="p-3 text-stone-700">Cercanías commuter train (Leganés–Madrid)</td>
                  <td className="p-3 font-medium">Covered by Abono</td>
                </tr>
                <tr className="border-b border-stone-100 last:border-none">
                  <td className="p-3 text-stone-700">Single metro ticket</td>
                  <td className="p-3 font-medium">~€1.50–2.40</td>
                </tr>
                <tr className="border-b border-stone-100 last:border-none">
                  <td className="p-3 text-stone-700">Renfe national train student discount</td>
                  <td className="p-3 font-medium">Up to 30% off</td>
                </tr>
              </tbody>
            </table>
          </div>

          <TipBox text="The Abono Transportes Joven (under 26) costs under €9/month for unlimited travel across all Madrid zones — one of the best deals in Europe. Get it the first week you arrive. Apply in person at any Metro station with your NIE/TIE and student certificate." />

          <div className="flex flex-wrap gap-2 mt-4">
            <LinkButton label="Madrid Metro official site" url="https://www.metromadrid.es" />
            <LinkButton label="Buy Abono Transportes" url="https://www.crtm.es/billetes-y-tarifas/abono-transportes/" />
          </div>
        </SectionCard>

        <SectionCard title="TIE Process" emoji="🪪">
          <p className="text-[14px] text-stone-800 leading-relaxed mb-4">The TIE (Tarjeta de Identidad de Extranjero) is your official residence identity card in Spain. Non-EU students staying more than 90 days must apply for it within 30 days of arriving. You need it to open a Spanish bank account, sign a rental contract, and prove your legal status.</p>

          <div className="mb-4">
            <ChecklistItem id="spain_tie_1" text="Valid passport — original + photocopy of ALL pages" />
            <ChecklistItem id="spain_tie_2" text="Valid Spanish student visa — original + photocopy" />
            <ChecklistItem id="spain_tie_3" text="Empadronamiento — register first at your local Ayuntamiento (free, brings 2–3 days)" />
            <ChecklistItem id="spain_tie_4" text="1 recent passport photo — white background, taken within 6 months" />
            <ChecklistItem id="spain_tie_5" text="Completed EX-17 form — downloaded and printed from sede.gob.es" />
            <ChecklistItem id="spain_tie_6" text="Modelo 790 Código 012 payment receipt — paid at any bank branch (approx. €12–16)" />
            <ChecklistItem id="spain_tie_7" text="University enrollment certificate (Certificado de matrícula) — original + copy" />
            <ChecklistItem id="spain_tie_8" text="Book your appointment via sede.gob.es as soon as you have your Empadronamiento" />
          </div>

          <WarningBox text="Appointments fill up weeks in advance. Set an alarm for midnight and 8am to check sede.gob.es for newly released slots. Book the same day you get your Empadronamiento — do not wait." />
          <TipBox text="Try checking sede.gob.es at 11pm–1am when traffic is lower. Some cities also have walk-in queues from 7:30am — arrive before the office opens. URJC's international student office can advise on the nearest Extranjería for your address." />

          <div className="flex flex-wrap gap-2 mt-4">
            <LinkButton label="Book appointment (Sede Electrónica)" url="https://sede.gob.es/pagSede/tramites/tematica.htm" />
            <LinkButton label="Download EX-17 form" url="https://extranjeros.inclusionsocial.gob.es/es/ModelosSolicitudes/mod_solicitudes2/17-Formulario_TIE.pdf" />
          </div>
        </SectionCard>

        <SectionCard title="Banking" emoji="🏦">
          <div className="mb-4">
            <ChecklistItem id="spain_b_1" text="Set up Revolut or Wise before leaving home — both work immediately, no TIE needed" />
            <ChecklistItem id="spain_b_2" text="Use Revolut as your main card for the first 2–3 months (zero foreign transaction fees)" />
            <ChecklistItem id="spain_b_3" text="Once you have your TIE: open a BBVA or CaixaBank account (100% free for students)" />
            <ChecklistItem id="spain_b_4" text="Bring TIE, NIE number, passport, and URJC enrollment certificate to bank appointment" />
            <ChecklistItem id="spain_b_5" text="Avoid airport currency exchange kiosks — rates are typically 8–12% worse than market" />
          </div>

          <TipBox text="Revolut is the easiest option: download the app, verify with your passport, and you have a working debit card in 10 minutes. You can use it everywhere in Spain with zero fees. Once your TIE arrives, BBVA's Online Account requires no minimum balance and has no monthly fee." />

          <div className="flex flex-wrap gap-2 mt-4">
            <LinkButton label="Open Revolut (free)" url="https://www.revolut.com" />
            <LinkButton label="BBVA Online Account" url="https://www.bbva.es/personas/productos/cuentas/cuenta-online.html" />
          </div>
        </SectionCard>

        <SectionCard title="Student Tips" emoji="💡">
          <TipBox title="Language" text="Even basic Spanish goes a long way in Madrid. Locals genuinely appreciate any attempt to speak Spanish. Download Duolingo or Busuu for 10 minutes/day before you arrive — it makes everything from buying food to talking to landlords much easier." />
          <TipBox title="Healthcare" text="Register with a local health centre (Centro de Salud) using your TIE and Empadronamiento as soon as you arrive. EU students use the EHIC card; non-EU students need private health insurance (already required for your visa)." />
          <TipBox title="SIM card" text="Buy a Spanish SIM card at any Vodafone, Orange, or Movistar store at the airport or city centre. Bring your passport. A monthly plan with unlimited calls and 15–20GB data costs €10–15. Having a Spanish number helps significantly with landlord responses and appointment systems." />
          
          <div className="flex flex-wrap gap-2 mt-4">
            <LinkButton label="URJC International Students Office" url="https://www.urjc.es/internacional" />
            <LinkButton label="Madrid tourist info & maps" url="https://www.esmadrid.com" />
          </div>
        </SectionCard>

      </div>
    </div>
  );
}
