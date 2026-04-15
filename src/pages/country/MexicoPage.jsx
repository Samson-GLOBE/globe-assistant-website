import PageHeader from '../../components/PageHeader';
import SectionCard from '../../components/SectionCard';
import ChecklistItem from '../../components/ChecklistItem';
import TipBox from '../../components/TipBox';
import WarningBox from '../../components/WarningBox';
import LinkButton from '../../components/LinkButton';

export default function MexicoPage() {
  return (
    <div>
      <PageHeader 
        emoji="🇲🇽"
        title="Mexico — Tlaxcala" 
        subtitle="Summer School at Universidad Autónoma de Tlaxcala" 
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-sm text-stone-500 mb-6 uppercase tracking-wider font-semibold">Home &gt; Mobility &gt; Mexico</div>
        
        <SectionCard title="Visa Information" emoji="🛂">
          <TipBox text="Most EU, Latin American, and major passport holders do NOT need a visa for Mexico for stays under 180 days — you enter as a Visitante. You fill in the FMM (Forma Migratoria Múltiple) form on the plane. Check your exact requirements in the Visa Checker tab above." />
          <WarningBox text="Keep your FMM form safe throughout your stay in Mexico — you must hand it back when you leave the country. Losing it causes significant problems at the airport. Some airlines no longer hand them out on the plane; fill one in online at inm.gob.mx before you fly." />

          <div className="mb-4">
            <ChecklistItem id="mx_v_1" text="Check your nationality's visa requirement at inm.gob.mx before booking flights" />
            <ChecklistItem id="mx_v_2" text="If visa-free: fill in the FMM form online at inm.gob.mx before flying or collect on the plane" />
            <ChecklistItem id="mx_v_3" text="Carry your GLOBE programme acceptance letter and summer school confirmation at immigration" />
            <ChecklistItem id="mx_v_4" text="Bring proof of accommodation and your return or onward flight booking" />
            <ChecklistItem id="mx_v_5" text="Have sufficient funds — immigration may ask for proof (credit card or bank statement is fine)" />
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <LinkButton label="Check Mexico visa requirements (INM)" url="https://www.inm.gob.mx/gobmx/word/index.php/paises-requieren-visa-para-mexico/" />
            <LinkButton label="Fill in FMM form online" url="https://www.inm.gob.mx/fmme/publico/solicitud.html" />
            <LinkButton label="Universidad Autónoma de Tlaxcala" url="https://www.uatx.mx" />
          </div>
        </SectionCard>

        <SectionCard title="Summer School Preparation" emoji="🌿">
          <div className="mb-4">
            <ChecklistItem id="mx_s_1" text="Confirm your exact summer school dates and detailed itinerary from the GLOBE coordination team" />
            <ChecklistItem id="mx_s_2" text="Arrange comprehensive travel + health insurance that covers Mexico and outdoor field activities" />
            <ChecklistItem id="mx_s_3" text="Check vaccination recommendations for Mexico with your doctor at least 6 weeks before travel" />
            <ChecklistItem id="mx_s_4" text="Pack sun protection (SPF 50+), insect repellent (DEET-based), and a reusable water bottle" />
            <ChecklistItem id="mx_s_5" text="Bring sturdy waterproof hiking boots — fieldwork takes place in diverse ecosystems" />
            <ChecklistItem id="mx_s_6" text="Download offline maps of Tlaxcala and surrounding areas (Maps.me or Google Maps offline)" />
            <ChecklistItem id="mx_s_7" text="Learn basic Spanish phrases — Tlaxcala is less tourist-oriented than Mexico City" />
          </div>

          <TipBox text="The Tlaxcala summer school is one of the most unique experiences in the GLOBE programme. You will work in ecosystems completely different from Europe — volcanic landscapes, cloud forests, semi-arid environments. Pack light, bring layers, and prepare for significant altitude (Tlaxcala is at 2,200m above sea level)." />
          <TipBox title="Money in Mexico" text="ATMs (cajeros automáticos) are widely available in Tlaxcala and Mexico City. Withdraw pesos on arrival — many smaller restaurants and markets are cash-only. Notify your bank of your travel dates to avoid blocked cards. Revolut and Wise both work excellently in Mexico." />

          <div className="flex flex-wrap gap-2 mt-4">
            <LinkButton label="Universidad Autónoma de Tlaxcala (UATx)" url="https://www.uatx.mx" />
            <LinkButton label="GLOBE programme summer school info" url="https://globe-master.eu" />
          </div>
        </SectionCard>

        <SectionCard title="Student Tips" emoji="💡">
          <TipBox title="Food & water" text="Tap water is not safe to drink in Mexico — always drink bottled or filtered water. Mexican food in Tlaxcala is outstanding; tlaxcalense cuisine is different from what most people expect. Eat at local fondas (small family restaurants) — cheap, fresh, and delicious." />
          <TipBox title="Altitude" text="Tlaxcala sits at 2,200m above sea level. Some students experience mild altitude sickness in the first 1–2 days (headache, fatigue, shortness of breath). Rest, drink extra water, and avoid alcohol for the first 48 hours. It passes quickly." />
        </SectionCard>

      </div>
    </div>
  );
}
