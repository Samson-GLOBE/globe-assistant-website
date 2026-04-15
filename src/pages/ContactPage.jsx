import PageHeader from '../components/PageHeader';
import SectionCard from '../components/SectionCard';
import LinkButton from '../components/LinkButton';

export default function ContactPage() {
  return (
    <div>
      <PageHeader 
        emoji="📬"
        title="Contact & Support" 
        subtitle="University offices, emergency numbers, and programme contacts" 
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        <SectionCard title="Programme Coordination" emoji="🎓">
          <div className="text-[14px] text-stone-800 leading-relaxed flex flex-col gap-2">
            <div>
              <span className="font-semibold">GLOBE Programme:</span>{' '}
              <a href="mailto:info@globe-master.eu" className="text-[#8B4513] hover:underline">info@globe-master.eu</a>
            </div>
            <div>
              <span className="font-semibold">Official website:</span>{' '}
              <LinkButton label="globe-master.eu" url="https://globe-master.eu" />
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Partner Universities" emoji="🏛️">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-4 border border-[#E8C99A] rounded-lg bg-[#FAF3E8]">
              <div className="text-2xl mb-2">🇪🇸</div>
              <h3 className="font-display font-semibold text-lg text-[#2C1810]">Universidad Rey Juan Carlos (URJC)</h3>
              <p className="text-xs text-stone-600 mb-2 font-medium">Semester 1 &middot; Madrid, Spain</p>
              <a href="mailto:international@urjc.es" className="text-sm text-[#8B4513] hover:underline block mb-3">international@urjc.es</a>
              <LinkButton label="URJC International" url="https://www.urjc.es/internacional" />
            </div>

            <div className="p-4 border border-[#E8C99A] rounded-lg bg-[#FAF3E8]">
              <div className="text-2xl mb-2">🇬🇧</div>
              <h3 className="font-display font-semibold text-lg text-[#2C1810]">Bangor University</h3>
              <p className="text-xs text-stone-600 mb-2 font-medium">Semester 2 &middot; Bangor, Wales, UK</p>
              <a href="mailto:international@bangor.ac.uk" className="text-sm text-[#8B4513] hover:underline block mb-3">international@bangor.ac.uk</a>
              <LinkButton label="Bangor International" url="https://www.bangor.ac.uk/international" />
            </div>

            <div className="p-4 border border-[#E8C99A] rounded-lg bg-[#FAF3E8]">
              <div className="text-2xl mb-2">🇲🇽</div>
              <h3 className="font-display font-semibold text-lg text-[#2C1810]">Universidad Autónoma de Tlaxcala (UATx)</h3>
              <p className="text-xs text-stone-600 mb-2 font-medium">Summer School &middot; Tlaxcala, Mexico</p>
              <div className="mt-3">
                <LinkButton label="UATx Website" url="https://www.uatx.mx" />
              </div>
            </div>

            <div className="p-4 border border-[#E8C99A] rounded-lg bg-[#FAF3E8]">
              <div className="text-2xl mb-2">🇵🇹</div>
              <h3 className="font-display font-semibold text-lg text-[#2C1810]">Universidade de Lisboa (ULisboa)</h3>
              <p className="text-xs text-stone-600 mb-2 font-medium">Semester 3 &middot; Lisbon, Portugal</p>
              <div className="mt-3">
                <LinkButton label="ULisboa Website" url="https://www.ulisboa.pt/en" />
              </div>
            </div>
            
          </div>
        </SectionCard>

        <SectionCard title="Emergency Numbers" emoji="🚑">
          <div className="overflow-hidden rounded-lg border border-stone-200 mb-2 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#FAF3E8] border-b border-[#E8C99A]">
                <tr>
                  <th className="font-semibold p-3 text-[#2C1810]">Location</th>
                  <th className="font-semibold p-3 text-[#2C1810]">Numbers</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-100">
                  <td className="p-3 text-stone-700 font-medium">🇪🇸 Spain</td>
                  <td className="p-3">
                    <span className="font-semibold text-red-700">112</span> (general) &middot; <span className="font-semibold text-blue-700">091</span> (national police) &middot; <span className="font-semibold text-green-700">061</span> (ambulance)
                  </td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="p-3 text-stone-700 font-medium">🇬🇧 United Kingdom</td>
                  <td className="p-3">
                    <span className="font-semibold text-red-700">999</span> (all services) &middot; <span className="font-semibold text-blue-700">101</span> (non-emergency police)
                  </td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="p-3 text-stone-700 font-medium">🇲🇽 Mexico</td>
                  <td className="p-3">
                    <span className="font-semibold text-red-700">911</span> (all services)
                  </td>
                </tr>
                <tr className="border-b border-stone-100 last:border-none">
                  <td className="p-3 text-stone-700 font-medium">🇵🇹 Portugal</td>
                  <td className="p-3">
                    <span className="font-semibold text-red-700">112</span> (general)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionCard>

        <SectionCard title="Useful Links" emoji="🔗">
          <div className="flex flex-col items-start gap-2">
            <LinkButton label="GLOBE official website" url="https://globe-master.eu" />
            <LinkButton label="Erasmus Mundus programme info (EACEA)" url="https://erasmus-plus.ec.europa.eu/programme-guide/erasmusplus/erasmus-mundus-joint-masters" />
            <LinkButton label="Check UK visa requirements" url="https://www.gov.uk/check-uk-visa" />
            <LinkButton label="Spain student visa info" url="https://www.exteriores.gob.es" />
            <LinkButton label="Portugal AIMA (residence permits)" url="https://www.aima.gov.pt" />
            <LinkButton label="Mexico immigration (INM)" url="https://www.inm.gob.mx" />
          </div>
        </SectionCard>

      </div>
    </div>
  );
}
