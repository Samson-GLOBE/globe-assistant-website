import { useState, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { Search, ExternalLink, ChevronDown, Globe, Shield, FileText, Info } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const NATIONALITIES = [
  'Afghan','Albanian','Algerian','American','Andorran','Angolan','Antiguan',
  'Argentine','Armenian','Australian','Austrian','Azerbaijani','Bahamian',
  'Bahraini','Bangladeshi','Barbadian','Belarusian','Belgian','Belizean',
  'Beninese','Bhutanese','Bolivian','Bosnian','Motswana','Brazilian','Bruneian',
  'Bulgarian','Burkinabe','Burundian','Cabo Verdean','Cambodian','Cameroonian',
  'Canadian','Central African','Chadian','Chilean','Chinese','Colombian',
  'Comorian','Congolese (DRC)','Congolese (Republic)','Costa Rican','Croatian',
  'Cuban','Cypriot','Czech','Danish','Djiboutian','Dominican (Dominica)',
  'Dominican (Rep.)','East Timorese','Ecuadorian','Egyptian','Emirati',
  'Equatorial Guinean','Eritrean','Estonian','Eswatini','Ethiopian','Fijian',
  'Finnish','French','Gabonese','Gambian','Georgian','German','Ghanaian',
  'Greek','Grenadian','Guatemalan','Guinean','Guinea-Bissauan','Guyanese',
  'Haitian','Honduran','Hungarian','Icelandic','Indian','Indonesian','Iranian',
  'Iraqi','Irish','Israeli','Italian','Ivorian','Jamaican','Japanese','Jordanian',
  'Kazakhstani','Kenyan','Kiribatian','Kosovar','Kuwaiti','Kyrgyz','Laotian',
  'Latvian','Lebanese','Lesothan','Liberian','Libyan','Liechtensteinish',
  'Lithuanian','Luxembourgish','Malagasy','Malawian','Malaysian','Maldivian',
  'Malian','Maltese','Marshallese','Mauritanian','Mauritian','Mexican',
  'Micronesian','Moldovan','Monacan','Mongolian','Montenegrin','Moroccan',
  'Mozambican','Namibian','Nauruan','Nepali','New Zealander','Nicaraguan',
  'Nigerian','Nigerien','North Korean','North Macedonian','Norwegian','Omani',
  'Pakistani','Palauan','Palestinian','Panamanian','Papua New Guinean',
  'Paraguayan','Peruvian','Philippine','Polish','Portuguese','Qatari','Romanian',
  'Russian','Rwandan','Saint Kitts and Nevisian','Saint Lucian','Saint Vincentian',
  'Samoan','San Marinese','Sao Tomean','Saudi Arabian','Senegalese','Serbian',
  'Seychellois','Sierra Leonean','Singaporean','Slovak','Slovenian',
  'Solomon Islander','Somali','South African','South Korean','South Sudanese',
  'Spanish','Sri Lankan','Sudanese','Surinamese','Swedish','Swiss','Syrian',
  'Taiwanese','Tajik','Tanzanian','Thai','Togolese','Tongan','Trinidadian',
  'Tunisian','Turkish','Turkmen','Tuvaluan','Ugandan','Ukrainian','Uruguayan',
  'Uzbek','Ni-Vanuatu','Venezuelan','Vietnamese','Yemeni','Zambian','Zimbabwean',
];

const DESTINATIONS = [
  { key: 'Spain',          flag: '🇪🇸', uni: 'URJC, Madrid' },
  { key: 'United Kingdom', flag: '🇬🇧', uni: 'Bangor University' },
  { key: 'Mexico',         flag: '🇲🇽', uni: 'UATx, Tlaxcala' },
  { key: 'Portugal',       flag: '🇵🇹', uni: 'ULisboa, Lisbon' },
];

export default function VisaCheckerPage() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(false);
  const [activeDetail, setActiveDetail] = useState(null);
  const detailRef = useRef(null);

  const filtered = NATIONALITIES.filter(n => n.toLowerCase().includes(search.toLowerCase()));

  const fetchVisa = async (nationality) => {
    setSelected(nationality);
    setActiveDetail(null);
    setLoading(true);
    const { data, error } = await supabase
      .from('visa_requirements')
      .select('*')
      .eq('nationality', nationality);
    setLoading(false);
    if (!error && data) {
      const map = {};
      data.forEach(row => { map[row.destination_country] = row; });
      setResults(map);
    }
  };

  const tileColor = (row) => {
    if (!row) return { bg: '#F5F5F5', border: '#CCC', badge: '#888', label: 'No data' };
    if (!row.visa_required) return { bg: '#EDF7E6', border: '#3A7A2C', badge: '#3A7A2C', label: 'No visa required' };
    if (row.visa_type && (row.visa_type.includes('ETA') || row.visa_type.includes('eTA')))
      return { bg: '#FEF3E2', border: '#C47A1E', badge: '#C47A1E', label: 'ETA required' };
    return { bg: '#FDECEA', border: '#B03A2E', badge: '#B03A2E', label: 'Visa required' };
  };

  useEffect(() => {
    if (activeDetail && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeDetail]);

  return (
    <div>
      <PageHeader
        title="Visa Checker"
        subtitle="Select your nationality to instantly see requirements for all four GLOBE destinations"
        emoji="🛂"
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Instruction bar */}
        <div style={{ background: '#FAF3E8', border: '1px solid #E8C99A', borderRadius: 10, padding: '12px 18px', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Info size={16} color="#8B4513" />
          <p style={{ fontSize: 13, color: '#5A3A28', margin: 0 }}>
            All data is sourced from official immigration authorities and stored in our Supabase database. Always verify with official sources before travelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 items-start">

          {/* LEFT PANEL — nationality selector */}
          <div style={{ background: '#FFFFFF', border: '1px solid #E8C99A', borderRadius: 14, overflow: 'hidden', position: 'sticky', top: 80 }}>
            <div style={{ padding: '16px 16px 10px', background: '#2C1810' }}>
              <p style={{ color: '#C08040', fontSize: 11, fontWeight: 600, letterSpacing: '0.8px', textTransform: 'uppercase', margin: '0 0 10px' }}>Select nationality</p>
              <div style={{ position: 'relative' }}>
                <Search size={14} color="#A07060" style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search..."
                  style={{ width: '100%', padding: '8px 10px 8px 32px', background: '#1A0E08', border: '1px solid #4A2208', borderRadius: 8, color: '#FAF3E8', fontSize: 13, outline: 'none' }}
                />
              </div>
            </div>
            <div style={{ height: 380, overflowY: 'auto', padding: '6px 8px' }}>
              {filtered.map(n => (
                <div key={n} onClick={() => fetchVisa(n)}
                  style={{
                    padding: '8px 12px', borderRadius: 8, cursor: 'pointer', fontSize: 13,
                    background: selected === n ? '#FAF3E8' : 'transparent',
                    color: selected === n ? '#2C1810' : '#5A3A28',
                    fontWeight: selected === n ? 600 : 400,
                    transition: 'background 0.12s',
                    borderLeft: selected === n ? '3px solid #8B4513' : '3px solid transparent',
                  }}
                  onMouseEnter={e => { if (selected !== n) e.currentTarget.style.background = '#FDF8F2'; }}
                  onMouseLeave={e => { if (selected !== n) e.currentTarget.style.background = 'transparent'; }}>
                  {n}
                </div>
              ))}
              {filtered.length === 0 && <p style={{ fontSize: 13, color: '#A07060', padding: '12px', textAlign: 'center' }}>No results</p>}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div>
            {!selected && (
              <div style={{ background: '#FFFFFF', border: '1px solid #E8C99A', borderRadius: 14, padding: '60px 40px', textAlign: 'center' }}>
                <Globe size={48} color="#D4A96A" style={{ margin: '0 auto 16px' }} />
                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 24, color: '#2C1810', marginBottom: 8 }}>Select your nationality</h2>
                <p style={{ fontSize: 14, color: '#8B6A55' }}>Choose from the list on the left to see visa requirements for all four GLOBE destinations instantly.</p>
              </div>
            )}

            {selected && (
              <>
                <div style={{ marginBottom: 16 }}>
                  <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, color: '#2C1810', marginBottom: 4 }}>
                    Requirements for {selected} passport
                  </h2>
                  <p style={{ fontSize: 13, color: '#8B6A55' }}>Tap any destination for full details, required documents, and official links.</p>
                </div>

                {loading && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    {[1,2,3,4].map(i => (
                      <div key={i} style={{ background: '#F5F5F5', borderRadius: 12, height: 120, animation: 'pulse 1.5s ease-in-out infinite' }} />
                    ))}
                  </div>
                )}

                {!loading && (
                  <>
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 12, marginBottom: 16 }}>
                      {DESTINATIONS.map(dest => {
                        const row = results[dest.key];
                        const colors = tileColor(row);
                        const isActive = activeDetail === dest.key;
                        return (
                          <div key={dest.key} onClick={() => setActiveDetail(isActive ? null : dest.key)}
                            style={{
                              background: colors.bg, border: `1.5px solid ${isActive ? colors.border : colors.border + '80'}`,
                              borderRadius: 12, padding: '16px 14px', cursor: 'pointer',
                              transition: 'transform 0.15s, box-shadow 0.15s',
                              boxShadow: isActive ? `0 4px 16px ${colors.border}40` : 'none',
                              transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                            onMouseLeave={e => { if (!isActive) e.currentTarget.style.transform = 'translateY(0)'; }}>
                            <div style={{ fontSize: 32, marginBottom: 8 }}>{dest.flag}</div>
                            <div style={{ fontWeight: 600, fontSize: 15, color: '#2C1810', marginBottom: 2 }}>{dest.key}</div>
                            <div style={{ fontSize: 11, color: '#8B6A55', marginBottom: 10, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{dest.uni}</div>
                            <div style={{ display: 'inline-block', background: colors.badge, color: '#fff', borderRadius: 20, padding: '3px 10px', fontSize: 11, fontWeight: 600 }}>
                              {row ? colors.label : 'Loading...'}
                            </div>
                            <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                              <ChevronDown size={14} color={colors.border} style={{ transform: isActive ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Detail drawer */}
                    {activeDetail && results[activeDetail] && (
                      <div ref={detailRef} style={{ background: '#FFFFFF', border: `2px solid ${tileColor(results[activeDetail]).border}`, borderRadius: 14, padding: '20px 22px', animation: 'fadeSlideUp 0.25s ease' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                          <span style={{ fontSize: 28 }}>{DESTINATIONS.find(d => d.key === activeDetail)?.flag}</span>
                          <div>
                            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20, color: '#2C1810', margin: 0 }}>{activeDetail}</h3>
                            <span style={{ display: 'inline-block', background: tileColor(results[activeDetail]).badge, color: '#fff', borderRadius: 20, padding: '2px 10px', fontSize: 11, fontWeight: 600, marginTop: 3 }}>
                              {tileColor(results[activeDetail]).label}
                            </span>
                          </div>
                        </div>

                        {[
                          { icon: <Shield size={14} />, label: 'Visa type', value: results[activeDetail].visa_type },
                          { icon: <FileText size={14} />, label: 'Documents required', value: results[activeDetail].documents_required },
                          { icon: <Info size={14} />, label: 'Notes & recommendations', value: results[activeDetail].notes },
                        ].map(item => item.value && (
                          <div key={item.label} style={{ marginBottom: 14, paddingBottom: 14, borderBottom: '1px solid #F2E0C8' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5, color: '#8B4513' }}>
                              {item.icon}
                              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.6px', textTransform: 'uppercase', color: '#8B6A55' }}>{item.label}</span>
                            </div>
                            <p style={{ fontSize: 13, color: '#2C1810', lineHeight: 1.7, margin: 0 }}>{item.value}</p>
                          </div>
                        ))}

                        {results[activeDetail].official_link && (
                          <a href={results[activeDetail].official_link} target="_blank" rel="noopener noreferrer"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 18px', background: '#8B4513', color: '#FAF3E8', borderRadius: 8, fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: 'background 0.15s' }}
                            onMouseEnter={e => e.currentTarget.style.background = '#6B3410'}
                            onMouseLeave={e => e.currentTarget.style.background = '#8B4513'}>
                            <ExternalLink size={13} /> Official visa application page
                          </a>
                        )}

                        <p style={{ marginTop: 14, fontSize: 11, color: '#A07060', fontStyle: 'italic', lineHeight: 1.5 }}>
                          ⚠️ This information is for guidance only and does not constitute legal or immigration advice. Always verify requirements with official government sources and your programme coordinator before travelling.
                        </p>
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
