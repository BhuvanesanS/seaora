import { useState } from 'react';

const navItems = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Products', 'products'],
  ['Infrastructure', 'infrastructure'],
  ['Process', 'process'],
  ['Certifications', 'certifications'],
  ['FAQ', 'faq'],
];

const productRows = [
  {
    number: '01',
    name: 'Fish Meal',
    eyebrow: 'Marine protein source',
    description: 'A high-protein feed ingredient milled from fresh marine catch for shrimp, fish, poultry, and livestock feed manufacturing.',
    specs: [['Protein', 'Min. 65%', 'Min. 62-63%', 'Min. 60%'], ['Moisture', 'Max. 7-10%', 'Max. 7-10%', 'Max. 7-10%'], ['Fat', 'Max. 8-10%', 'Max. 8-10%', 'Max. 8-10%'], ['Packing', '50 Kg HDPE', '50 Kg HDPE', '50 Kg HDPE']],
    benefits: ['High digestible protein for faster growth', 'Rich in Omega-3 and amino acids', 'Improves feed conversion ratio (FCR)'],
    image: 'https://images.unsplash.com/photo-1544550285-f813152fb2fd?auto=format&fit=crop&w=900&q=85',
  },
  {
    number: '02',
    name: 'Fish Oil',
    eyebrow: 'Marine omega-3 source',
    description: 'A concentrated source of Omega-3 fatty acids (EPA and DHA), extracted during meal production for aquaculture, poultry, and industrial applications.',
    specs: [['Free Fatty Acid (FFA)', '≤ 5%'], ['Moisture & Impurities', '≤ 1%'], ['Peroxide Value', '≤ 10 meq/kg'], ['Packing', 'Flexi Bags / Plastic Barrels']],
    benefits: ['Rich source of Omega-3 (EPA and DHA)', 'Enhances growth and immunity', 'Sustainable, zero-waste by-product'],
    image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=900&q=85',
  },
  {
    number: '03',
    name: 'Fish Soluble Paste',
    eyebrow: 'Marine nutrient concentrate',
    description: 'A protein-rich, semi-viscous by-product used as a feed ingredient for palatability and nutrient density in sustainable feed formulations.',
    specs: [['Protein', 'Min. 40%'], ['Moisture', 'Max. 45%'], ['TVBN', 'Max. 350 mg'], ['Packing', '200 L Drum']],
    benefits: ['Concentrated, easy-to-blend nutrients', 'Boosts feed formulation performance', 'Makes use of every part of the catch'],
    image: 'https://images.unsplash.com/photo-1510137600163-2729bc695a6f?auto=format&fit=crop&w=900&q=85',
  },
];

const certificates = ['GMP+ Certified', 'FSSC 22000', 'HACCP', 'Export Inspection Council', 'MPEDA Processing Plant', 'MPEDA Storage Premises', 'MPEDA Export', 'IFFO Member', 'MSME Registration', 'China Registration - Fish Oil', 'China Registration - Fish Meal'];

const faqs = [
  ['Do you export internationally?', 'Yes. Our documentation and packaging are export-ready, and our Dubai sales office supports international buyers.'],
  ['How fresh is your raw material?', 'Our facility is on the Tamil Nadu coast in Manapad. Raw material typically reaches processing within hours of catch, not days.'],
  ['What packaging options are available?', 'Fish Meal ships in 50 kg HDPE/PP woven bags, Fish Oil in drums, and custom packaging or private labeling is available on request.'],
  ['Can I request a sample before ordering?', 'Yes, samples can be arranged for serious buyers evaluating our products. Please contact our sales team.'],
  ['What certifications does your facility hold?', 'Our facility is GMP+ and FSSC 22000 certified and follows HACCP protocols. Certification documents are available on request.'],
  ['What is the minimum order quantity?', 'MOQ depends on the product and packaging format. Send your requirement to our sales team for a specific quote.'],
];

function SectionTitle({ eyebrow, title, copy, centered = false }) {
  return <div className={`section-title ${centered ? 'centered' : ''}`}>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2>{title}</h2>
    {copy && <p className="section-copy">{copy}</p>}
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [sent, setSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); closeMenu(); };

  const submitForm = (event) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return <>
    <header className="site-header">
      <div className="utility"><span>info@seaoraonline.com &nbsp;•&nbsp; +91 4639 251614</span><span>Manapad, Tamil Nadu, India &nbsp;|&nbsp; Dubai, UAE</span></div>
      <div className="navigation shell">
        <button className="brand" onClick={() => scrollTo('home')} aria-label="Seaora home">Sea<span>o</span>ra<i>✦</i></button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}><span></span><span></span><span></span></button>
        <nav className={menuOpen ? 'open' : ''}>{navItems.map(([label, id]) => <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}</nav>
        <button className="button button-small nav-contact" onClick={() => scrollTo('contact')}>Contact Us</button>
      </div>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Manufacturer & exporter</p>
            <h1>Premium marine nutrition ingredients, sourced and processed on the Tamil Nadu coast.</h1>
            <p className="lead">Straight from the sea to the mill - in hours, not days. Seaora turns fresh coastal catch into Fish Meal, Fish Oil, and Fish Soluble Paste with nutrition and freshness locked in.</p>
            <div className="hero-actions"><button className="button" onClick={() => scrollTo('contact')}>Request a quote <b>→</b></button><button className="button button-outline" onClick={() => scrollTo('products')}>Explore products</button></div>
            <div className="trust-list"><span>✓ Export ready</span><span>✓ Batch tested</span><span>✓ Bulk supply</span></div>
          </div>
          <div className="hero-image" aria-hidden="true">
            <div className="hero-horizon"></div>
            <div className="marine-orb orb-one"></div>
            <div className="marine-orb orb-two"></div>
            <div className="marine-orb orb-three"></div>
            <div className="product-monolith">
              <span className="monolith-kicker">Marine grade</span>
              <strong>SEA<br/>ORA</strong>
              <i>Pure coastal nutrition</i>
            </div>
            <div className="hero-wave wave-a"></div>
            <div className="hero-wave wave-b"></div>
            <p>From the sea<br/><em>to the mill</em></p>
          </div>
        </div>
      </section>

      <section className="compliance-strip"><div className="shell"><span>Quality & compliance</span><b>GMP+ Certified</b><b>FSSC 22000</b><b>HACCP</b><b>Export Registered</b></div></section>

      <section className="products-intro shell" id="products">
        <SectionTitle eyebrow="Product range" title="Three marine ingredients, engineered for feed performance." copy="Full specification sheets are available on request for every grade we manufacture." />
        <div className="product-quick-list">{productRows.map((product) => <button key={product.name} onClick={() => document.getElementById(product.name.toLowerCase().replaceAll(' ', '-'))?.scrollIntoView({ behavior: 'smooth' })}><span>{product.number}</span><div><small>{product.eyebrow}</small><strong>{product.name}</strong></div><p>{product.description}</p><i>→</i></button>)}</div>
      </section>

      <section className="sand-section process-preview" id="process">
        <div className="shell"><SectionTitle eyebrow="Our process" title="From boat to bag, in four controlled steps." />
          <div className="four-grid">{[['01', 'Fresh Catch Intake', 'From the sea to the mill in hours - freshness that cannot be faked.'], ['02', 'Cooking & Pressing', 'Controlled cooking preserves protein and nutrient structure.'], ['03', 'Drying & Separation', 'Meal, oil, and soluble paste are separated and processed individually.'], ['04', 'Quality Testing', 'Every batch is tested before packing and dispatch.']].map(([number, title, text]) => <article key={number} className="step-card"><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="quote-section"><blockquote>“Consistent protein content, reliable delivery windows, and responsive communication - exactly what we need from a feed ingredient supplier.”<cite>Feed formulation manager, aquaculture client</cite></blockquote><div className="shell stats"><div><strong>Hours</strong><span>Catch to process</span></div><div><strong>3</strong><span>Core products</span></div><div><strong>3</strong><span>Offices - India & UAE</span></div><div><strong>GMP+</strong><span>Certified facility</span></div></div></section>

      <section className="about-section shell" id="about"><div className="photo-block coast-photo"><p>Manapad, Tamil Nadu</p></div><div><SectionTitle eyebrow="About Seaora" title="From the coast of Manapad, to the world." /><p className="body-copy">Seaora Marine Products Private Limited manufactures Fish Meal, Fish Oil, and Fish Soluble Paste from Manapad, on the southern coast of Tamil Nadu. Our facility is built around one advantage: fresh marine raw material moves from boat to processing within hours of landing.</p><p className="body-copy">We source directly from local fishing communities, maintain controlled processing under one roof, and supply domestic and international feed manufacturers with traceable, consistent marine nutrition ingredients.</p><div className="feature-grid"><div><b>01</b><strong>Hours, not days</strong><span>Raw material reaches our facility within hours of catch.</span></div><div><b>02</b><strong>Coastal advantage</strong><span>Located in a high-yield Tamil Nadu fishing belt.</span></div><div><b>03</b><strong>Community-rooted</strong><span>Direct partnerships with local fishing communities.</span></div><div><b>04</b><strong>Freshness you can test</strong><span>Every batch reflects the difference proximity makes.</span></div></div></div></section>

      <section className="product-details" aria-label="Product specifications">{productRows.map((product) => <article className="product-detail shell" id={product.name.toLowerCase().replaceAll(' ', '-')} key={product.name}><div className="product-aside"><div className="product-photo" style={{ backgroundImage: `url(${product.image})` }}></div><p className="eyebrow">{product.eyebrow}</p><span className="product-number">{product.number}</span></div><div className="product-content"><h2>{product.name}</h2><p className="body-copy">{product.description}</p><div className="spec-table"><div className="spec-row spec-head"><span>Parameter</span><span>{product.name === 'Fish Meal' ? 'Supreme' : 'Typical value'}</span>{product.name === 'Fish Meal' && <><span>Prime</span><span>Standard FAQ</span></>}</div>{product.specs.map((row) => <div className="spec-row" key={row[0]}>{row.map((cell, index) => <span key={index}>{cell}</span>)}</div>)}</div><h4>Key benefits</h4><ul>{product.benefits.map((benefit) => <li key={benefit}>✓ {benefit}</li>)}</ul><button className="text-link" onClick={() => scrollTo('contact')}>Request full specification sheet →</button></div></article>)}</section>

      <section className="sand-section packaging"><div className="shell"><SectionTitle eyebrow="Packaging & supply" title="Flexible packaging for every order size." /><div className="four-grid">{[['Fish Meal', '25 / 50 Kg bags', 'HDPE/PP woven bags with inner liner.'], ['Fish Oil', 'Drums / IBC / Bulk', 'Drums, IBC tanks, or bulk tanker supply.'], ['Custom', 'Private labeling', 'Custom packaging and labeling available on request.'], ['Export', 'Bulk & export orders', 'Documentation suited for international buyers.']].map(([label, title, copy]) => <article key={label} className="pack-card"><p>{label}</p><h3>{title}</h3><span>{copy}</span></article>)}</div></div></section>

      <section className="infrastructure shell" id="infrastructure"><SectionTitle eyebrow="Infrastructure" title="Built for consistency, from coastline to lab." copy="From our coast allocation to our in-house testing lab, every part of our infrastructure protects raw material freshness and product consistency, batch after batch." centered /><div className="infrastructure-image"><div><span>Located directly on a high-yield stretch of the Tamil Nadu coast.</span></div></div><div className="three-grid">{[['01', 'Factory', 'Our ECR Road facility is purpose-built for hygienic Fish Meal, Fish Oil, and Fish Soluble Paste production.'], ['02', 'Warehouse & packing', 'Dedicated finished-goods storage and packing areas support HDPE, drum, and export-ready specifications.'], ['03', 'Chemical & microbiology lab', 'An in-house lab tests protein, moisture, fat, and contamination from intake to dispatch.']].map(([number, title, copy]) => <article key={number} className="facility-card"><b>{number}</b><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

      <section className="process-detail sand-section"><div className="shell"><SectionTitle eyebrow="Manufacturing process" title="From fresh catch to finished ingredient, under controlled conditions." copy="Every stage is designed to preserve nutrient value - from raw material arrival to a packed, tested batch." centered /><div className="timeline">{[['1', 'Raw material intake', 'Fresh catch received and screened for quality within hours of landing.'], ['2', 'Cooking', 'Controlled cooking prepares material for pressing while preserving nutrients.'], ['3', 'Pressing & separation', 'Press cake becomes meal; liquor is separated into oil, solids, and stick water.'], ['4', 'Drying, milling & packing', 'Finished ingredients are cooled, packed, labelled, and stored under controlled conditions.']].map(([number, title, copy]) => <div className="timeline-item" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></div></section>

      <section className="certifications shell" id="certifications"><SectionTitle eyebrow="Quality & compliance" title="Certified processes, tested for consistency." copy="Every batch undergoes quality checks for protein, moisture, fat, and contamination levels before dispatch." centered /><div className="certificate-grid">{certificates.map((certificate, index) => <div className="certificate" key={certificate}><span>{index < 4 ? '✓' : '◌'}</span><b>{certificate}</b></div>)}</div><div className="quality-grid"><div><h3>Protein & fat content</h3><p>Verified against grade-specific minimums for every batch.</p></div><div><h3>Moisture & contamination</h3><p>Checked to ensure shelf stability and purity.</p></div><div><h3>Batch documentation</h3><p>Full traceability records maintained for every shipment.</p></div></div></section>

      <section className="faq-section sand-section" id="faq"><div className="shell faq-layout"><div><SectionTitle eyebrow="Frequently asked questions" title="Common questions from feed manufacturers and buyers." copy="Cannot find what you are looking for? Reach out directly and our team will get back to you." /></div><div className="faq-list">{faqs.map(([question, answer], index) => <article className={openFaq === index ? 'faq-item expanded' : 'faq-item'} key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{question}</span><b>{openFaq === index ? '−' : '+'}</b></button>{openFaq === index && <p>{answer}</p>}</article>)}</div></div></section>

      <section className="contact-section shell" id="contact"><div className="contact-intro"><SectionTitle eyebrow="Get in touch" title="Let’s talk business." copy="Have a requirement, a question, or want to know more about our range? Reach out through any channel below or send us a message directly." /><div className="contact-prompt"><strong>Need a product sheet or bulk supply quote?</strong><a href="mailto:sales@seaoraonline.com">sales@seaoraonline.com →</a></div></div><form onSubmit={submitForm} className="contact-form"><label>Full name<input required name="name" /></label><label>Company name<input required name="company" /></label><div className="form-row"><label>Phone number<input required name="phone" type="tel" /></label><label>Country / region<input name="region" /></label></div><label>Email address<input required name="email" type="email" /></label><label>Product of interest<select name="product"><option>Fish Meal</option><option>Fish Oil</option><option>Fish Soluble Paste</option><option>Bulk / Export order</option></select></label><label>Message<textarea required name="message" rows="5" /></label><button className="button" type="submit">Send message →</button>{sent && <p className="success" role="status">Thank you. Your enquiry has been recorded. Our sales team will contact you shortly.</p>}</form></section>

      <section className="addresses shell"><article><span>Registered office</span><h3>Uvari, Tamil Nadu</h3><p>5/177/1, North Street,<br/>Uvari, Tirunelveli (Dist),<br/>Tamil Nadu 627 651, India</p><a href="tel:+914637212307">+91 4637 212307</a></article><article><span>Factory address</span><h3>Manapad, Tamil Nadu</h3><p>01/423, Micheal Garden,<br/>ECR Main Road, Manapad,<br/>Tuticorin (Dist), Tamil Nadu 628 209</p><a href="tel:+914639251614">+91 4639 251614</a></article><article><span>Sales office</span><h3>Dubai, UAE</h3><p>511, IT Plaza, Dubai Silicon Oasis,<br/>P O Box: 238957,<br/>Dubai, UAE</p><a href="tel:+97143334493">+971 4 333 4493</a></article></section>
    </main>

    <footer><div className="shell footer-grid"><div><button className="brand footer-brand" onClick={() => scrollTo('home')}>Sea<span>o</span>ra<i>✦</i></button><p>Seaora Marine Products Private Limited manufactures Fish Meal, Fish Oil, and Fish Soluble Paste for domestic and export markets.</p></div><div><strong>Company</strong><button onClick={() => scrollTo('about')}>About Us</button><button onClick={() => scrollTo('infrastructure')}>Infrastructure</button><button onClick={() => scrollTo('contact')}>Contact</button></div><div><strong>Products</strong>{productRows.map((product) => <button key={product.name} onClick={() => scrollTo(product.name.toLowerCase().replaceAll(' ', '-'))}>{product.name}</button>)}</div><div><strong>Resources</strong><button onClick={() => scrollTo('process')}>Manufacturing Process</button><button onClick={() => scrollTo('certifications')}>Certifications</button><button onClick={() => scrollTo('faq')}>FAQ</button></div></div><div className="shell copyright"><span>© 2026 Seaora Marine Products Private Limited. All rights reserved.</span><span>info@seaoraonline.com · sales@seaoraonline.com</span></div></footer>
  </>;
}

export default App;
