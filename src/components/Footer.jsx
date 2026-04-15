export default function Footer() {
  return (
    <footer style={{ background: '#2C1810', color: '#FAF3E8' }} className="mt-12 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b" style={{ borderColor: '#4A2208' }}>
          <div>
            <h3 className="font-display text-xl font-semibold mb-3">About GLOBE</h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              The GLOBE Mobility Assistant is a student-built guide for the Erasmus Mundus
              Master in Global Change Ecology and Biodiversity Management.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-sm text-stone-300">
              <li><a href="/mobility" className="hover:text-amber-300 transition-colors">Mobility Guide</a></li>
              <li><a href="/visa-checker" className="hover:text-amber-300 transition-colors">Visa Checker</a></li>
              <li><a href="/about" className="hover:text-amber-300 transition-colors">About the App</a></li>
              <li><a href="/contact" className="hover:text-amber-300 transition-colors">Contact & Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold mb-3">Partner Universities</h3>
            <ul className="flex flex-col gap-2 text-sm text-stone-300">
              <li>🇪🇸 Universidad Rey Juan Carlos</li>
              <li>🇬🇧 Bangor University</li>
              <li>🇲🇽 Universidad Autónoma de Tlaxcala</li>
              <li>🇵🇹 Universidade de Lisboa</li>
            </ul>
          </div>
        </div>
        <div className="pt-6 text-center text-xs text-stone-400">
          © 2025 GLOBE Mobility Assistant &middot; An independent student guide &middot; Not an official GLOBE publication
        </div>
      </div>
    </footer>
  );
}
