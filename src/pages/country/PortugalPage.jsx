import PageHeader from '../../components/PageHeader';
import SectionCard from '../../components/SectionCard';
import ChecklistItem from '../../components/ChecklistItem';
import TipBox from '../../components/TipBox';
import WarningBox from '../../components/WarningBox';
import CopyButton from '../../components/CopyButton';
import LinkButton from '../../components/LinkButton';

export default function PortugalPage() {
  return (
    <div>
      <PageHeader 
        emoji="🇵🇹"
        title="Portugal — Lisbon" 
        subtitle="Semester 3 at Universidade de Lisboa" 
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-sm text-stone-500 mb-6 uppercase tracking-wider font-semibold">Home &gt; Mobility &gt; Portugal</div>
        
        <SectionCard title="Visa & Residence" emoji="🛂">
          <TipBox text="For non-EU students, Portugal requires a Type D Residence Visa applied at the Portuguese consulate in your home country. After arriving, you must register with AIMA (the Portuguese immigration authority) within 90 days for your residence permit. Book your AIMA appointment on the day you arrive — waiting lists are long." />
          <WarningBox text="AIMA (formerly SEF) has a very large case backlog — some students wait months for appointments. Your initial visa is only valid for 4 months as an entry document. Apply for your AIMA residence permit appointment immediately upon arrival. Do not leave this to the last minute." />

          <div className="mb-4">
            <ChecklistItem id="pt_v_1" text="Non-EU: apply for Type D Residence Visa at Portuguese consulate in your home country" />
            <ChecklistItem id="pt_v_2" text="Gather documents: passport, acceptance letter from ULisboa, proof of funds (min. ~€870/month), health insurance (min. €30,000 Schengen coverage), criminal record, accommodation proof" />
            <ChecklistItem id="pt_v_3" text="EU students: no visa — register with AIMA if staying beyond 90 days" />
            <ChecklistItem id="pt_v_4" text="Upon arrival: book AIMA appointment immediately at aima.gov.pt" />
            <ChecklistItem id="pt_v_5" text="Register your address at your local Junta de Freguesia (parish council) — needed for AIMA" />
            <ChecklistItem id="pt_v_6" text="CPLP nationals (Brazil, Angola, Mozambique etc.): simplified process applies — confirm with Portuguese consulate" />
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <LinkButton label="AIMA official website" url="https://www.aima.gov.pt" />
            <LinkButton label="Universidade de Lisboa International Relations" url="https://www.ulisboa.pt/en/unidade-organica/international-relations-office" />
            <LinkButton label="Portugal visa info (Portuguese MFA)" url="https://vistos.mne.gov.pt" />
          </div>
        </SectionCard>

        <SectionCard title="Housing" emoji="🏠">
          <div className="mb-4">
            <ChecklistItem id="pt_h_1" text="Apply for ULisboa student residence (residência universitária) immediately after your offer — limited places" />
            <ChecklistItem id="pt_h_2" text="Search private rentals on Uniplaces, Idealista Portugal, and Erasmusu" />
            <ChecklistItem id="pt_h_3" text="Budget €500–750/month for a room in a shared flat in Lisbon (prices have risen significantly)" />
            <ChecklistItem id="pt_h_4" text="Areas near ULisboa (Cidade Universitária): Alvalade, Entrecampos, Campo Pequeno offer good value" />
            <ChecklistItem id="pt_h_5" text="Always verify the landlord and do a video call before paying any deposit" />
          </div>

          <TipBox text="Lisbon is one of the most expensive rental markets in Europe. Start searching early — ideally 3 months before Semester 3 begins. Areas near the Cidade Universitária campus such as Alvalade or Campo Grande are convenient and better value than Baixa or Chiado." />
          <WarningBox text="Lisbon rental scams exist, particularly on Facebook groups targeting international students. Never pay a deposit without seeing the property on video call. Verify the landlord's identity against the property ownership records (caderneta predial) if possible." />

          <div className="mt-4 mb-4">
            <CopyButton label="Copy landlord enquiry (Portuguese)" text="Boa tarde, o meu nome é [Seu Nome] e sou estudante de mestrado na Universidade de Lisboa. Tenho interesse no apartamento que publicou em [plataforma]. Seria possível ter mais informações sobre o preço, despesas incluídas e disponibilidade? Poderia fazer uma videochamada para ver o espaço? Muito obrigado/a." />
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <LinkButton label="Search on Uniplaces Lisbon" url="https://www.uniplaces.com/accommodation/lisbon" />
            <LinkButton label="Search on Idealista Portugal" url="https://www.idealista.pt" />
            <LinkButton label="ULisboa Student Housing" url="https://www.ulisboa.pt/en/unidade-organica/social-action-services" />
          </div>
        </SectionCard>

        <SectionCard title="Transport" emoji="🚌">
          <div className="mb-4">
            <ChecklistItem id="pt_t_1" text="Get a NAVEGANTE card (rechargeable transport card) at any metro station on arrival — free card, load credit" />
            <ChecklistItem id="pt_t_2" text="Register for the monthly NAVEGANTE metropolitano pass if staying the full semester (€40/month, unlimited metro + bus + train)" />
            <ChecklistItem id="pt_t_3" text="Download the Carris/Metropolitano Lisboa app for real-time journey planning" />
          </div>

          <TipBox text="The monthly NAVEGANTE metropolitano pass (€40) gives unlimited travel on all Lisbon metro, bus, tram, and Carris lines. Get it the first week. The green metro line connects Cidade Universitária (Cidade Universitária station) directly to central Lisbon and the airport." />

          <div className="flex flex-wrap gap-2 mt-4">
            <LinkButton label="Carris Metropolitana transport" url="https://www.carrismetropolitana.pt" />
            <LinkButton label="Lisbon Metro" url="https://www.metrolisboa.pt" />
          </div>
        </SectionCard>

        <SectionCard title="Student Tips" emoji="💡">
          <TipBox title="Language" text="Portuguese is the official language and locals appreciate any attempt to speak it. Spanish speakers find Portuguese partially understandable but be careful — the pronunciation is very different. Brazilians and Portuguese-speaking nationalities have a natural advantage in daily life." />
          <TipBox title="NIF (Tax Number)" text="You will need a NIF (Número de Identificação Fiscal) to open a bank account and sign any contracts in Portugal. Get it at any Finanças office with your passport — it takes 15 minutes and is free." />
          <TipBox title="Cost of living" text="Lisbon is beautiful but expensive. Groceries from Pingo Doce or Lidl are reasonable. Eating out at local tasca restaurants (€8–12 for a full meal) is good value. Avoid tourist areas like Baixa and Bairro Alto for daily meals." />
          
          <div className="flex flex-wrap gap-2 mt-4">
            <LinkButton label="Universidade de Lisboa" url="https://www.ulisboa.pt" />
            <LinkButton label="Erasmusu Lisbon" url="https://erasmusu.com/en/erasmus-lisbon" />
          </div>
        </SectionCard>

      </div>
    </div>
  );
}
