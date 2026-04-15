import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';
import LinkButton from '../components/LinkButton';
import WarningBox from '../components/WarningBox';

export default function AboutPage() {
  return (
    <div>
      <PageHeader 
        emoji="🌿"
        title="About GLOBE Assistant" 
        subtitle="Built by students, for students" 
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        <SectionCard title="What this is" emoji="📖">
          <p className="text-[14px] text-stone-800 leading-relaxed">
            The GLOBE Mobility Assistant is a student-built guide for Erasmus Mundus GLOBE programme students navigating international mobility across Spain, United Kingdom, Mexico, and Portugal. It was created by a first-cohort GLOBE student to capture practical knowledge and real experiences that are not found in official documentation.
          </p>
        </SectionCard>

        <SectionCard title="About the GLOBE Programme" emoji="🌍">
          <p className="text-[14px] text-stone-800 leading-relaxed mb-4">
            The Erasmus Mundus Joint Master in Global Change Ecology and Biodiversity Management (GLOBE) is a two-year, 120 ECTS international master's programme focused on ecology, biodiversity conservation, and environmental governance. It is delivered by four partner universities: Universidad Rey Juan Carlos (Madrid, Spain), Bangor University (Wales, UK), Universidad Autónoma de Tlaxcala (Mexico), and Universidade de Lisboa (Portugal).
          </p>
          <div className="mt-2">
            <LinkButton label="Official GLOBE programme website" url="https://globe-master.eu" />
          </div>
        </SectionCard>

        <SectionCard title="Disclaimer" emoji="⚖️">
          <WarningBox 
            title="Important Disclaimer"
            text="This app does not provide legal, immigration, or financial advice. All information is provided for guidance purposes only. Visa requirements change — always verify with official government sources and your programme coordinator before making travel or visa arrangements." 
          />
        </SectionCard>

        <SectionCard title="Install as app" emoji="📱">
          <p className="text-[14px] text-stone-800 leading-relaxed mb-4">
            This website works as an installable app on your phone — no App Store needed. On Android: tap the three-dot menu in Chrome → 'Add to Home Screen'. On iPhone: tap the share icon in Safari → 'Add to Home Screen'. Once installed, it works with limited offline functionality.
          </p>
          <div className="text-xs text-stone-500 mt-4 pt-4 border-t border-stone-200">
            v1.0 &middot; Built with React, Vite, Supabase, and Tailwind CSS &middot; Hosted on Vercel
          </div>
        </SectionCard>
        
      </div>
    </div>
  );
}
