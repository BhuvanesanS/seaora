import { useEffect, useState } from 'react';

const pages = [['Home', '/'], ['About', '/about'], ['Products', '/products'], ['Process', '/process'], ['Quality', '/quality'], ['Contact', '/contact']];
const products = [
  { name: 'Fish Meal', number: '01', type: 'Marine protein ingredient', text: 'A dependable protein ingredient for aquaculture, poultry, and livestock feed formulations.', details: ['Grade-led protein options', 'Packed for bulk or export supply', 'Specification sheet on request'] },
  { name: 'Fish Oil', number: '02', type: 'Marine omega source', text: 'Marine oil for nutrition-focused feed blends and industrial applications.', details: ['Omega-rich marine profile', 'Drum, IBC, and bulk options', 'Batch documentation available'] },
  { name: 'Fish Soluble Paste', number: '03', type: 'Nutrient concentrate', text: 'A concentrated marine ingredient designed to support palatability and nutrient density.', details: ['Easy-to-blend liquid format', 'Useful in specialised feed recipes', 'Packing guidance on request'] },
];
const directions = [
  { id: 'harbour', number: '01', name: 'Coastal Authority', note: 'Deep navy, Seaora red, and electric blue. The recommended direction for a premium, export-facing brand.' },
  { id: 'ember', number: '02', name: 'Industrial Heritage', note: 'Charcoal, brick red, and warm sand. A confident, manufacturing-led visual language.' },
  { id: 'tide', number: '03', name: 'Clean Ocean', note: 'Bright white, ocean blue, and coral. A lighter, technical direction for product-led storytelling.' },
];

function CountUp({ value, label }) {
  const [count, setCount] = useState(0);
  const [node, setNode] = useState(null);
  useEffect(() => {
    if (!node) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const animate = (now) => {
        const progress = Math.min((now - start) / 1000, 1);
        setCount(Math.round(value * (1 - (1 - progress) ** 3)));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
      observer.disconnect();
    }, { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [node, value]);
  return <div className="metric" ref={setNode}><strong>{count}</strong><span>{label}</span></div>;
}

function SectionHeading({ eyebrow, title, copy }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function App() {
  const [path, setPath] = useState(() => window.location.pathname || '/');
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('harbour');
  const [sent, setSent] = useState(false);
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname || '/');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [path]);
  const navigate = (to) => { if (to !== path) { window.history.pushState({}, '', to); setPath(to); } setMenuOpen(false); };
  const go = (event, to) => { event.preventDefault(); navigate(to); };
  const submit = (event) => { event.preventDefault(); event.currentTarget.reset(); setSent(true); };
  const Header = () => <header className="site-header">
    <div className="topbar"><div className="shell"><span>Marine nutrition ingredients</span><span>Manapad, Tamil Nadu · India</span></div></div>
    <div className="shell nav-wrap"><a className="brand" href="/" onClick={(e) => go(e, '/')} aria-label="Seaora home"><img src="/assets/seaora-logo-light.jpeg" alt="Seaora Marine Products Private Limited" /></a>
      <button className="menu-button" aria-label="Open navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><i></i><i></i></button>
      <nav className={menuOpen ? 'show' : ''}>{pages.map(([label, to]) => <a key={to} className={path === to ? 'active' : ''} href={to} onClick={(e) => go(e, to)}>{label}</a>)}</nav>
      <a href="/contact" className="button button-small desktop-cta" onClick={(e) => go(e, '/contact')}>Request a quote <b>→</b></a></div>
  </header>;
  const Footer = () => <footer><div className="shell footer-grid">
    <div><img className="footer-logo" src="/assets/seaora-logo-dark.jpeg" alt="Seaora Marine Products" /><p>Marine ingredients, made with care for consistent feed performance.</p></div>
    <div><strong>Explore</strong>{pages.slice(1).map(([name, to]) => <a key={to} href={to} onClick={(e) => go(e, to)}>{name}</a>)}</div>
    <div><strong>Products</strong>{products.map((product) => <a key={product.name} href="/products" onClick={(e) => go(e, '/products')}>{product.name}</a>)}</div>
    <div><strong>Contact</strong><a href="mailto:info@seaoraonline.com">info@seaoraonline.com</a><a href="mailto:sales@seaoraonline.com">sales@seaoraonline.com</a><span>Manapad, Tamil Nadu,<br />India</span></div>
  </div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Seaora Marine Products Private Limited.</span><a href="/design-directions" onClick={(e) => go(e, '/design-directions')}>Choose a design direction</a></div></footer>;
  const Home = () => <><section className="hero"><div className="hero-photo"></div><div className="hero-grid shell">
    <div className="hero-content"><p className="eyebrow light">Seaora marine products private limited</p><h1>Marine nutrition with a coast-to-customer mindset.</h1><p>We shape fresh marine raw material into practical fish meal, fish oil, and soluble paste ingredients for feed makers.</p><div className="hero-actions"><a className="button" href="/products" onClick={(e) => go(e, '/products')}>Explore our products <b>→</b></a><a className="button button-ghost" href="/contact" onClick={(e) => go(e, '/contact')}>Talk to our team</a></div></div>
    <div className="hero-stamp"><span>Made for</span><strong>marine<br />nutrition</strong><i>↓</i></div></div><div className="hero-scroll shell"><span>Scroll to explore</span><i></i></div></section>
    <section className="intro shell split"><div><SectionHeading eyebrow="A clear advantage" title="Closer to the source. Focused on the finish." /></div><div><p className="large-copy">Seaora brings a considered, modern approach to marine ingredients. From receiving to packing, every step is designed around freshness, clarity, and dependable supply.</p><a className="text-link" href="/about" onClick={(e) => go(e, '/about')}>Discover Seaora <b>→</b></a></div></section>
    <section className="product-band"><div className="shell"><SectionHeading eyebrow="Our range" title="Three foundational marine ingredients." copy="Built for feed manufacturers looking for practical, consistent raw materials." /><div className="product-grid">{products.map((product) => <article key={product.name} className="product-card"><span>{product.number}</span><div className="product-disc"></div><p>{product.type}</p><h3>{product.name}</h3><a href="/products" onClick={(e) => go(e, '/products')}>View product <b>→</b></a></article>)}</div></div></section>
    <section className="metrics-wrap"><div className="shell metrics-grid"><CountUp value={3} label="core product families" /><CountUp value={4} label="carefully managed process stages" /><CountUp value={2} label="sales regions" /></div></section>
    <section className="process-teaser shell"><div className="process-visual"><div className="process-line"></div><span>01</span><span>02</span><span>03</span><span>04</span></div><div><SectionHeading eyebrow="A considered process" title="Made with control at every stage." copy="We keep the journey simple: intake, controlled processing, separation, and quality review before dispatch." /><a className="button button-dark" href="/process" onClick={(e) => go(e, '/process')}>See how it works <b>→</b></a></div></section>
    <section className="directions-callout shell"><div><p className="eyebrow">Three homepage directions</p><h2>Choose the expression that feels most like Seaora.</h2></div><a className="button button-dark" href="/design-directions" onClick={(e) => go(e, '/design-directions')}>Compare directions <b>→</b></a></section></>;
  const About = () => <><section className="page-hero page-hero-about"><div className="shell"><p className="eyebrow light">About Seaora</p><h1>A marine business with a practical point of view.</h1></div></section><section className="shell split content-section"><div><SectionHeading eyebrow="From the coast" title="Built around marine ingredient know-how." /></div><div><p className="large-copy">Seaora Marine Products Private Limited is focused on three important outputs from marine raw material: fish meal, fish oil, and fish soluble paste.</p><p>We work with a simple belief: better processing decisions create better feed ingredients. Our visual identity is designed to reflect the same idea — confident, clean, and connected to the coast.</p><a className="text-link" href="/contact" onClick={(e) => go(e, '/contact')}>Start a conversation <b>→</b></a></div></section><section className="shell principle-grid">{[['01', 'Freshness-led', 'A process shaped around timely handling and care.'], ['02', 'Straightforward supply', 'Clear communication from enquiry through dispatch.'], ['03', 'Quality-minded', 'Documentation and checks designed for consistency.']].map(([no, title, text]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>)}</section></>;
  const Products = () => <><section className="page-hero page-hero-products"><div className="shell"><p className="eyebrow light">Product portfolio</p><h1>Purposeful ingredients for demanding feed formulations.</h1></div></section><section className="shell content-section"><SectionHeading eyebrow="Marine ingredients" title="A focused range, ready for your requirement." /><div className="product-detail-list">{products.map((product, index) => <article key={product.name} className="product-detail"><div className={`detail-image image-${index + 1}`}><span>{product.number}</span><div className="ingredient-object"></div></div><div><p className="eyebrow">{product.type}</p><h2>{product.name}</h2><p>{product.text}</p><ul>{product.details.map((detail) => <li key={detail}>✓ {detail}</li>)}</ul><a className="text-link" href="/contact" onClick={(e) => go(e, '/contact')}>Request a specification <b>→</b></a></div></article>)}</div></section></>;
  const Process = () => <><section className="page-hero page-hero-process"><div className="shell"><p className="eyebrow light">Our process</p><h1>Four stages. One focus: a dependable finished ingredient.</h1></div></section><section className="shell process-list content-section">{[['01', 'Receive', 'Marine raw material is received and reviewed before it enters the process.'], ['02', 'Process', 'Controlled cooking and pressing prepare the material for separation.'], ['03', 'Separate', 'Meal, oil, and soluble fractions are handled according to their required format.'], ['04', 'Review & pack', 'Finished material is checked, packed, and readied for supply.']].map(([number, title, description]) => <article key={number}><span>{number}</span><div><h2>{title}</h2><p>{description}</p></div><i>↓</i></article>)}</section><section className="process-banner"><div className="shell"><p>FROM COASTAL RAW MATERIAL TO A FINISHED FEED INGREDIENT</p></div></section></>;
  const Quality = () => <><section className="page-hero page-hero-quality"><div className="shell"><p className="eyebrow light">Quality approach</p><h1>Good output begins with visible controls.</h1></div></section><section className="shell split content-section"><div><SectionHeading eyebrow="Consistency matters" title="A quality mindset across the journey." /></div><div><p className="large-copy">For every requirement, Seaora can discuss relevant product specifications, packing formats, and batch documentation before supply.</p><p>We believe confidence comes from clear expectations — not overpromising. Speak with our team about the requirements that matter to your formulation or market.</p></div></section><section className="quality-checks shell">{[['01', 'Material review', 'A sensible starting point for every production run.'], ['02', 'Process observations', 'Focused controls throughout the manufacturing journey.'], ['03', 'Finished-product check', 'A final review before packing and dispatch.']].map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</section></>;
  const Contact = () => <><section className="page-hero page-hero-contact"><div className="shell"><p className="eyebrow light">Contact Seaora</p><h1>Tell us what your business needs.</h1></div></section><section className="shell contact-layout content-section"><div><SectionHeading eyebrow="Make an enquiry" title="Let’s start with the essentials." copy="Share your product, quantity, and destination requirements. Our team will get back to you." /><div className="contact-lines"><a href="mailto:info@seaoraonline.com">info@seaoraonline.com</a><a href="mailto:sales@seaoraonline.com">sales@seaoraonline.com</a><p>Manapad, Tamil Nadu, India</p></div></div><form onSubmit={submit}><label>Your name<input required name="name" placeholder="Name" /></label><label>Company<input required name="company" placeholder="Company name" /></label><label>Email<input required type="email" name="email" placeholder="name@company.com" /></label><label>Requirement<select name="product"><option>Fish Meal</option><option>Fish Oil</option><option>Fish Soluble Paste</option><option>General enquiry</option></select></label><label>Message<textarea required name="message" rows="5" placeholder="Tell us about your requirement" /></label><button className="button" type="submit">Send enquiry <b>→</b></button>{sent && <p className="success">Thank you. Your enquiry has been recorded.</p>}</form></section></>;
  const Directions = () => <><section className="directions-hero"><div className="shell"><p className="eyebrow">Design options</p><h1>Three ways Seaora could look.</h1><p>Each option works across the full multi-page site. Select one to preview it immediately.</p></div></section><section className="shell direction-list">{directions.map((direction) => <article key={direction.id} className={`direction-card ${theme === direction.id ? 'selected' : ''}`}><div className={`direction-swatch ${direction.id}`}><span>{direction.number}</span><strong>SEAORA</strong><i></i></div><div><p className="eyebrow">Direction {direction.number}</p><h2>{direction.name}</h2><p>{direction.note}</p><button className="text-link" onClick={() => setTheme(direction.id)}>{theme === direction.id ? 'Currently previewing' : 'Preview this direction'} <b>→</b></button></div></article>)}</section></>;
  const current = path === '/about' ? <About /> : path === '/products' ? <Products /> : path === '/process' ? <Process /> : path === '/quality' ? <Quality /> : path === '/contact' ? <Contact /> : path === '/design-directions' ? <Directions /> : <Home />;
  return <><Header /><main>{current}</main><Footer /></>;
}
export default App;
