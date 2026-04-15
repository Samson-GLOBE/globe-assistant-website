import PageHeader from '../../components/PageHeader';
import SectionCard from '../../components/SectionCard';
import ChecklistItem from '../../components/ChecklistItem';
import TipBox from '../../components/TipBox';
import WarningBox from '../../components/WarningBox';
import LinkButton from '../../components/LinkButton';

export default function UKPage() {
  return (
    <div>
      <PageHeader 
        emoji="🇬🇧"
        title="United Kingdom — Bangor" 
        subtitle="Semester 2 at Bangor University, Wales" 
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-sm text-stone-500 mb-6 uppercase tracking-wider font-semibold">Home &gt; Mobility &gt; UK</div>
        
        <SectionCard title="Housing" emoji="🏠">
          <div className="mb-4">
            <ChecklistItem id="uk_h_1" text="Apply for Bangor University on-campus accommodation immediately after receiving your offer — it fills fast" />
            <ChecklistItem id="uk_h_2" text="Search private rentals on Rightmove and Zoopla (Bangor is a small city, options are limited)" />
            <ChecklistItem id="uk_h_3" text="Contact Bangor's Student Accommodation office — they maintain a landlord list for international students" />
            <ChecklistItem id="uk_h_4" text="Budget £350–550/month for a room; on-campus is often the best value and most convenient option" />
          </div>

          <TipBox text="Bangor is a small, student-friendly city in North Wales. University accommodation is strongly recommended for Semester 2 — it places you close to the School of Natural Sciences and you will be with other international students. Apply as soon as possible after your offer arrives." />
          <WarningBox text="Private rental in Bangor is limited compared to large UK cities. Do not assume you can find housing when you arrive. Book accommodation before you travel." />

          <div className="flex flex-wrap gap-2 mt-4">
            <LinkButton label="Bangor University Accommodation" url="https://www.bangor.ac.uk/accommodation" />
            <LinkButton label="Search on Rightmove Bangor" url="https://www.rightmove.co.uk/property-to-rent/Bangor-in-Wales.html" />
          </div>
        </SectionCard>

        <SectionCard title="Transport" emoji="🚌">
          <div className="mb-4">
            <ChecklistItem id="uk_t_1" text="Bangor University campus is walkable — most students do not need a bus pass" />
            <ChecklistItem id="uk_t_2" text="For trips to Snowdonia or Chester: use Arriva Trains Wales or the local bus network" />
            <ChecklistItem id="uk_t_3" text="Download the Trainline or Avanti app for discounted advance rail tickets to London or Manchester" />
          </div>

          <TipBox text="Bangor is walkable from most student housing to the Natural Sciences building. For day trips to Snowdonia National Park — which many GLOBE students do on weekends — car sharing or organised group transport is common." />

          <div className="flex flex-wrap gap-2 mt-4">
            <LinkButton label="Arriva Trains Wales" url="https://www.arrivatrainswales.co.uk" />
            <LinkButton label="Traveline Cymru (buses)" url="https://www.traveline.cymru" />
          </div>
        </SectionCard>

        <SectionCard title="Visa Guide" emoji="🛂">
          <TipBox text="As a GLOBE student your Semester 2 at Bangor is 6 months or less. This means most nationalities need a Standard Visitor Visa (£127), NOT the full Student Visa (£490). EU nationals need a UK ETA (£10) from April 2025. Check your specific requirements in the Visa Checker tab." />
          <WarningBox text="Do not confuse the Standard Visitor Visa with the UK Student Visa. Applying for the wrong one could result in denial. Check the official UK government visa checker before applying." />

          <div className="mb-4">
            <ChecklistItem id="uk_v_1" text="Check your visa requirement at gov.uk/check-uk-visa — takes 2 minutes" />
            <ChecklistItem id="uk_v_2" text="Apply at least 6–8 weeks before your travel date (8–10 weeks from certain countries)" />
            <ChecklistItem id="uk_v_3" text="Obtain your official acceptance letter from Bangor University confirming programme duration" />
            <ChecklistItem id="uk_v_4" text="Prepare 6 months of bank statements and proof of return travel for the visa application" />
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <LinkButton label="Check UK visa requirements" url="https://www.gov.uk/check-uk-visa" />
            <LinkButton label="Apply for Standard Visitor Visa" url="https://www.gov.uk/standard-visitor/apply-standard-visitor-visa" />
            <LinkButton label="Apply for UK ETA" url="https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" />
          </div>
        </SectionCard>

        <SectionCard title="Student Tips" emoji="💡">
          <TipBox title="Weather" text="Bangor, Wales is famous for dramatic mountains and frequent rain. Pack waterproof hiking boots and a good rain jacket — you will use them. The view of Snowdon from campus on a clear day is extraordinary." />
          <TipBox title="Healthcare" text="Register with a GP (local doctor) within the first 2 weeks. Bring your passport and university enrolment letter. NHS treatment is free once registered. Alternatively, use the university health centre." />
          <TipBox title="Nature access" text="Snowdonia National Park is on your doorstep. GLOBE students have organised weekend field trips to the mountains, coast, and forests. Take advantage of this — it is directly relevant to your programme." />
          
          <div className="flex flex-wrap gap-2 mt-4">
            <LinkButton label="Bangor University International Office" url="https://www.bangor.ac.uk/international" />
            <LinkButton label="Snowdonia National Park" url="https://www.snowdonia.gov.wales" />
          </div>
        </SectionCard>

      </div>
    </div>
  );
}
