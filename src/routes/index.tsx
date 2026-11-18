import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Menu,
  Search,
  MousePointerClick,
  Share2,
  Megaphone,
  Mail,
  ShieldCheck,
  Users,
  Code2,
  Smartphone,
  Palette,
  Monitor,
  Check,
  Star,
  Phone,
  MessageCircle,
  Sparkles,
  Play,
  Link as LinkIcon,
  Activity,
  Headphones,
  GraduationCap,
  Trophy,
  Calendar,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  ArrowUpRight,
  Briefcase,
  Plus,
  Quote,
  MapPin,
} from "lucide-react";
import * as React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ggLogo from "@/assets/gg-logo.png.asset.json";
import heroBg from "@/assets/hero-bg.jpg";
import officePoster from "@/assets/office-video-poster.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import worldMap from "@/assets/world-map.jpg";
import serviceTeamImage from "@/assets/service-team-collaboration.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gadgets Guardians — SEO, PPC, SMM & Website Services" },
      {
        name: "description",
        content:
          "Gadgets Guardians provides SEO, PPC, SMM, website development, and designing services to help businesses grow online.",
      },
      { property: "og:title", content: "Gadgets Guardians — SEO, PPC, SMM & Website Services" },
      {
        property: "og:description",
        content: "SEO, PPC, SMM, website development, and designing for measurable business growth.",
      },
      { property: "og:image", content: ggLogo.url },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Search, title: "SEO", desc: "Improve search visibility and bring more qualified visitors to your website." },
  { icon: MousePointerClick, title: "PPC", desc: "Reach high-intent customers with focused, conversion-led paid campaigns." },
  { icon: Share2, title: "SMM", desc: "Build your brand and connect with customers across social media." },
  { icon: Code2, title: "Website Development", desc: "Build fast, scalable websites tailored to your business and customers." },
  { icon: Monitor, title: "Designing", desc: "Create clear, engaging website experiences that turn visits into action." },
];

const pricing = [
  { name: "SEO", price: 250, icon: Search, popular: false },
  { name: "PPC", price: 200, icon: Monitor, popular: false },
  { name: "SMM", price: null, icon: Share2, popular: true },
  { name: "Website Development", price: null, icon: Code2, popular: false },
  { name: "Designing", price: null, icon: Monitor, popular: false },
];

const process = [
  { step: "01", title: "Discover", desc: "We audit your brand, competitors & goals to map opportunities." },
  { step: "02", title: "Strategize", desc: "A custom growth plan with KPIs, timelines & deliverables." },
  { step: "03", title: "Execute", desc: "Our specialists ship work weekly across every channel." },
  { step: "04", title: "Scale", desc: "Transparent reporting, iteration & compounding growth." },
];

const testimonials = [
  { name: "Brad Henderson", role: "Sports Bar Owner", img: testimonial1 },
  { name: "Sara Khan", role: "CMO, FinEdge", img: testimonial2 },
  { name: "Dyllan Dalya", role: "Owner at AutoDD", img: testimonial3 },
];

const blogs = [
  { img: blog1, tag: "Digital Marketing", title: "10 Digital Marketing Trends That Will Dominate 2026", date: "Jun 18, 2026", read: "6 min" },
  { img: blog2, tag: "SEO", title: "AI SEO: How to Rank in ChatGPT, Perplexity & Google AI Overviews", date: "Jun 12, 2026", read: "8 min" },
  { img: blog3, tag: "Social Media", title: "Instagram Algorithm 2026: A Complete Playbook for Brands", date: "Jun 04, 2026", read: "5 min" },
];

const countries = [
  { name: "United States", flag: "🇺🇸" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "New Zealand", flag: "🇳🇿" },
  { name: "India", flag: "🇮🇳" },
  { name: "UAE", flag: "🇦🇪" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "France", flag: "🇫🇷" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "Ireland", flag: "🇮🇪" },
  { name: "South Africa", flag: "🇿🇦" },
  { name: "Brazil", flag: "🇧🇷" },
  { name: "Japan", flag: "🇯🇵" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustStrip />
      <Services />
      <Pricing />
      <WhyUs />
      <VideoTestimonials />
      <Testimonials />
      <Process />
      <WorldMap />
      <FAQ />
      <Blog />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

const serviceContent: Record<string, { name: string; description: string; headline: string; overview: string }> = {
  seo: { name: "SEO", description: "Rank higher on Google with white-hat, AI-ready SEO strategies.", headline: "Grow organic traffic. Turn rankings into revenue.", overview: "A search strategy built to bring the right people to your website and keep your visibility growing." },
  ppc: { name: "PPC", description: "Reach high-intent customers through focused, conversion-led pay-per-click campaigns.", headline: "Make every click work harder for your business.", overview: "A paid advertising strategy built around qualified leads, efficient spend, and measurable returns." },
  smm: { name: "SMM", description: "Build your brand and connect with customers across social media.", headline: "Build an audience that believes in your brand.", overview: "A social media strategy that gives your brand a consistent voice and turns engagement into lasting relationships." },
  "website-development": { name: "Website Development", description: "Build fast, scalable websites tailored to your business and customers.", headline: "Build a faster website made for what’s next.", overview: "Reliable, scalable web experiences designed around your business and the people who use them." },
  designing: { name: "Designing", description: "Create clear, engaging website experiences that turn visits into action.", headline: "Make your first impression feel effortless.", overview: "Clear, user-focused design that helps visitors understand your offer and take the next step." },
};

export function SEOServicePage() {
  return <ServiceLandingPage slug="seo" />;
}

export function WhoWeArePage() {
  const values = [
    { icon: Users, title: "People-first partnership", body: "We listen closely, communicate clearly, and work as an extension of your team." },
    { icon: ShieldCheck, title: "Work you can trust", body: "We bring thoughtful planning, careful execution, and transparent reporting to every project." },
    { icon: Activity, title: "Progress that compounds", body: "We focus on useful improvements that help your business build momentum over time." },
  ];
  const steps = ["Learn your goals", "Build the strategy", "Deliver the work", "Measure and improve"];
  return <div className="min-h-screen bg-background text-foreground">
    <Header />
    <main>
      <section className="relative overflow-hidden bg-hero text-cream">
        <div className="absolute -right-24 -top-36 h-[32rem] w-[32rem] rounded-full border border-cream/10" />
        <div className="absolute -right-8 -top-20 h-[23rem] w-[23rem] rounded-full border border-copper/15" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:px-6 lg:min-h-[580px] lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.25em] text-copper">Who we are</p>
            <h1 className="mt-5 max-w-2xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">Your team for <span className="text-copper">digital growth.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75">Gadgets Guardians brings SEO, PPC, SMM, website development, and designing together to help businesses grow with confidence.</p>
            <div className="mt-8 flex flex-wrap gap-4"><a href="/#services" className="rounded-full bg-copper-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-copper">Explore our services</a><a href="/#contact" className="rounded-full border border-cream/30 px-6 py-3.5 text-sm font-medium text-cream hover:bg-cream/10">Talk to our team</a></div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-cream/15 shadow-elegant"><img src={serviceTeamImage} alt="Gadgets Guardians team collaborating on a digital strategy" className="aspect-[4/3] w-full object-cover"/><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-teal-darker/90 to-transparent p-6 pt-20"><p className="font-display text-2xl font-bold text-cream">Better work starts with a better partnership.</p></div></div>
        </div>
      </section>

      <section className="border-b border-border bg-card px-4 py-8 md:px-6"><div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 text-center sm:grid-cols-3">{[["400+", "Digital experts"], ["15+", "Countries served"], ["30+", "Industry niches"]].map(([number, label]) => <div key={label}><p className="font-display text-3xl font-bold text-accent">{number}</p><p className="mt-1 text-sm text-muted-foreground">{label}</p></div>)}</div></section>

      <section className="px-4 py-24 md:px-6"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.85fr_1.15fr]"><div className="rounded-3xl bg-secondary p-8 md:p-10"><p className="text-xs font-semibold uppercase tracking-[.25em] text-accent">Our story</p><h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">A practical partner for ambitious businesses.</h2></div><div className="space-y-5 text-base leading-relaxed text-muted-foreground"><p>Growing online takes more than disconnected tactics. It takes people who understand your goals, bring the right skills to the table, and keep the work moving in the same direction.</p><p>That is how we work at Gadgets Guardians. Our specialists collaborate across search, paid campaigns, social media, development, and design so each part supports the larger business objective.</p><p>We value clear communication, thoughtful execution, and results you can understand. From the first conversation through ongoing optimization, you know what we are working on and why.</p></div></div></section>

      <section className="bg-secondary px-4 py-24 md:px-6"><div className="mx-auto max-w-7xl"><div className="mx-auto mb-12 max-w-3xl text-center"><p className="text-xs font-semibold uppercase tracking-[.25em] text-accent">What guides us</p><h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Good work. Clear goals. Strong partnerships.</h2></div><div className="grid gap-5 md:grid-cols-3">{values.map((value) => <article key={value.title} className="rounded-2xl border border-border bg-card p-7 shadow-card-soft"><span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/5 text-primary"><value.icon className="h-6 w-6"/></span><h3 className="mt-5 font-display text-xl font-bold">{value.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.body}</p></article>)}</div></div></section>

      <section id="our-services" className="px-4 py-24 md:px-6"><div className="mx-auto max-w-7xl"><div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[.25em] text-accent">What we do</p><h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Five services. One team moving together.</h2><p className="mt-4 text-lg leading-relaxed text-muted-foreground">Choose the support you need today, then grow your strategy as your business evolves.</p></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map((service) => { const slug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); return <a href={`/services/${slug}`} key={service.title} className="group rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-elegant"><span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/5 text-primary transition group-hover:bg-copper-gradient group-hover:text-white"><service.icon className="h-6 w-6"/></span><h3 className="mt-5 font-display text-xl font-bold">{service.title}<ArrowRight className="ml-2 inline h-4 w-4 text-accent transition group-hover:translate-x-1"/></h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.desc}</p></a>; })}</div></div></section>

      <section className="bg-teal-darker px-4 py-24 text-cream md:px-6"><div className="mx-auto max-w-5xl"><div className="mx-auto mb-12 max-w-2xl text-center"><p className="text-xs font-semibold uppercase tracking-[.25em] text-copper">How we work</p><h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">A clear path from idea to impact.</h2></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{steps.map((step, index) => <article key={step} className="rounded-2xl border border-cream/10 bg-cream/[.05] p-6"><p className="font-display text-3xl font-bold text-copper">0{index + 1}</p><h3 className="mt-4 font-display text-lg font-bold">{step}</h3><p className="mt-2 text-sm leading-relaxed text-cream/65">{["We understand your business, customers, and the outcome you want.", "We shape a focused plan with clear priorities and useful measures.", "Our team delivers the work and keeps you informed as it progresses.", "We review performance, share what we learn, and refine the next steps."][index]}</p></article>)}</div></div></section>

      <section className="px-4 py-20 md:px-6"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-hero p-8 text-cream md:flex-row md:items-center md:p-12"><div><p className="text-xs font-semibold uppercase tracking-[.25em] text-copper">Let’s work together</p><h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Ready to make your next move?</h2></div><a href="mailto:hello@gadgetsguardianstech.com" className="inline-flex items-center gap-2 rounded-full bg-copper-gradient px-6 py-3.5 text-sm font-semibold text-white">Talk to our team <ArrowRight className="h-4 w-4"/></a></div></section>
    </main>
    <Footer />
  </div>;
}

export function ServiceLandingPage({ slug }: { slug: string }) {
  const service = serviceContent[slug] ?? serviceContent.seo;
  return <div className="seo-site min-h-screen bg-background text-foreground">
    <Header />
    <SEOHero service={service} />
    <ServiceSelectorSection service={service} />
    <PartnerStrip />
    <OutcomeStats service={service} />
    <CaseStudies service={service} />
    <ClientStories />
    <ServiceProblems service={service} />
    <OptimizationIntro service={service} />
    <SEOServices service={service} />
    <ComprehensiveServiceDetails service={service} />
    <ExpertCTA />
    <Specialists service={service} />
    <ServiceProcess service={service} />
    <WhyService service={service} />
    <PricingPlans service={service} />
    <Industries />
    <WhyChoose service={service} />
    <FinalCTA service={service} />
    <ServiceFAQ service={service} />
    <ServiceAreas />
    <Footer />
    <a href="#audit" aria-label={`Request a ${service.name} consultation`} className="fixed bottom-6 right-7 z-40 grid h-14 w-14 place-items-center rounded-full bg-copper-gradient text-white shadow-xl transition hover:scale-105"><MessageCircle className="h-6 w-6" /></a>
  </div>;
}

function SEOHero({ service }: { service: (typeof serviceContent)[string] }) {
  return <main id="top" className="seo-hero relative overflow-hidden border-b border-white/10">
    <div className="seo-orbit seo-orbit-one"/><div className="seo-orbit seo-orbit-two"/><div className="seo-orbit seo-orbit-three"/>
    <div className="relative z-10 mx-auto grid max-w-[1240px] items-center gap-14 px-6 py-20 lg:min-h-[760px] lg:grid-cols-[1.12fr_.95fr] lg:gap-20 lg:py-16">
      <div className="max-w-[600px]">
        <p className="mb-5 text-[12px] font-medium uppercase tracking-[.28em] text-copper">Gadgets Guardians · {service.name}</p>
        <h1 className="seo-title mb-8 text-[42px] font-normal leading-[1.1] tracking-[.005em] sm:text-[56px] lg:text-[60px]">{service.headline}</h1>
        <p className="max-w-[570px] text-[17px] leading-[1.75] text-cream/75">{service.description} {service.overview}</p>
        <div className="mt-9 flex flex-wrap gap-4"><a href="#audit" className="inline-flex items-center gap-2 rounded-full bg-copper-gradient px-7 py-4 text-[15px] font-medium text-white transition hover:brightness-110"><MessageCircle className="h-4 w-4"/> Get a Free {service.name} Consultation</a><a href="#audit" className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-4 text-[15px] transition hover:border-copper hover:text-copper"><Phone className="h-4 w-4"/> Book a Call</a></div>
        <div className="mt-12 flex flex-wrap gap-3 text-[13px] text-white/80"><span className="rounded-full border border-white/15 px-4 py-3">Google&nbsp; <b className="text-[#bd7541]">★★★★★</b> &nbsp;4.9</span><span className="rounded-full border border-white/15 px-4 py-3">Clutch&nbsp; <b className="text-[#bd7541]">★★★★★</b> &nbsp;5.0</span><span className="rounded-full border border-white/15 px-4 py-3"><b className="text-[#bd7541]">300+</b>&nbsp; Client Reviews</span></div>
      </div>
      <form id="audit" className="seo-form relative z-10 rounded-[22px] border border-border bg-card p-7 text-card-foreground shadow-elegant sm:p-8" onSubmit={(e)=>{e.preventDefault();window.location.href=`mailto:hello@gadgetsguardianstech.com?subject=${encodeURIComponent(`Free ${service.name} consultation request`)}`;}}>
        <h2 className="mb-1 text-[24px] font-semibold tracking-[.02em]">Let’s talk {service.name}</h2><p className="mb-6 text-[14px] text-muted-foreground">Tell us a little about your goals. Our team will be in touch.</p>
        <label className="seo-label">Full Name<input required name="name" autoComplete="name" /></label>
        <div className="grid grid-cols-[1fr_1fr] gap-4"><label className="seo-label">Email<input required name="email" type="email" autoComplete="email" /></label><label className="seo-label">Phone Number<input name="phone" type="tel" autoComplete="tel" /></label></div>
        <label className="seo-label">Website URL<input name="website" type="text" inputMode="url" placeholder="yourwebsite.com" /></label>
        <div className="grid grid-cols-[1fr_1fr] gap-4"><label className="seo-label">Looking for<select name="service" defaultValue={service.name}>{Object.values(serviceContent).map((item) => <option key={item.name}>{item.name}</option>)}</select></label><label className="seo-label">Budget<input name="budget" placeholder="e.g. $800/mo" /></label></div>
        <label className="seo-label">How we can help<textarea name="message" rows={3}/></label>
        <button className="mt-1 w-full rounded-full bg-[#bd7541] py-4 text-[15px] font-medium text-white transition hover:bg-[#ce8955]">Submit</button>
      </form>
    </div>
    <a href="#audit" className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 [writing-mode:vertical-rl] text-xs tracking-wider text-white/70 lg:block">Book a call</a>
  </main>;
}

function SEOProof() { return <section className="border-b border-border bg-secondary px-6 py-10"><div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 text-center sm:grid-cols-3">{[["Google","★★★★★","4.9"],["Clutch","★★★★★","5.0"],["300+","Client reviews",""]].map(([label,stars,score])=><div key={label} className="flex items-center justify-center gap-3 text-sm text-foreground"><span>{label}</span><span className="text-accent">{stars}</span><span>{score}</span></div>)}</div></section> }

function ServiceSectionTitle({ eyebrow, title, detail }: { eyebrow: string; title: React.ReactNode; detail?: string }) {
  return <div className="mx-auto mb-12 max-w-2xl text-center"><p className="text-xs font-semibold uppercase tracking-[.28em] text-accent">{eyebrow}</p><h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">{title}</h2><span className="mx-auto mt-4 block h-px w-12 bg-accent/60" />{detail && <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{detail}</p>}</div>;
}

function PartnerStrip() {
  return <section className="border-b border-white/10 bg-teal-darker px-5 py-5 text-cream"><div className="mx-auto flex max-w-[1100px] flex-wrap justify-center gap-3">{["Google Partner", "Clutch Top Agency", "Upwork Top Rated", "GoodFirms", "Top SEO Agency 2026", "Verified Experts"].map((item) => <span key={item} className="rounded-md border border-white/10 px-4 py-2 text-[9px] font-semibold uppercase tracking-[.14em] text-cream/65">{item}</span>)}</div></section>;
}

function OutcomeStats({ service }: { service: (typeof serviceContent)[string] }) {
  return <section className="bg-secondary px-6 py-20"><ServiceSectionTitle eyebrow="Average client outcomes" title={<>{service.name} Results That Move Your Business Forward</>} detail={`We pair deep expertise with a focused ${service.name} strategy to put your business in front of the right customers.`} /><div className="mx-auto grid max-w-[900px] grid-cols-2 gap-4 lg:grid-cols-4">{[["2.8x", "Average revenue growth"], ["170%", "Increased organic traffic"], ["20%", "Higher conversion rate"], ["3x", "More qualified leads"]].map(([value, label]) => <div key={label} className="rounded-xl border border-border bg-card px-4 py-6 text-center shadow-sm"><p className="text-3xl font-light text-accent">{value}</p><p className="mt-2 text-[10px] text-muted-foreground">{label}</p></div>)}</div></section>;
}

function CaseStudies({ service }: { service: (typeof serviceContent)[string] }) {
  const cases = [["SaaS", "From niche tool to category leader in organic search", "A focused strategy aligned content, technical improvements, and buyer intent."], ["Beauty & Wellness", "Booking calls tripled for a multi-location clinic", "Local visibility and service-page improvements brought more customers to the right locations."], ["Manufacturing", "Industrial supplier wins high-intent B2B searches", "A clearer site structure and targeted campaigns opened new international markets."]];
  return <section className="bg-background px-6 py-20"><ServiceSectionTitle eyebrow="Case studies" title="Results That Scale Across Sectors" detail={`Every ${service.name} engagement starts with your numbers and ends with better ones.`} /><div className="mx-auto grid max-w-[1000px] gap-4 md:grid-cols-3">{cases.map(([category, title, detail], index) => <article key={category} className="overflow-hidden rounded-xl border border-border bg-card"><div className="service-case-art relative grid h-32 place-items-center overflow-hidden bg-hero"><span className="relative z-10 font-display text-2xl font-bold tracking-[.2em] text-cream/70">G<span className="text-copper">G</span></span><i /><i /><i /></div><div className="p-5"><p className="text-[9px] font-semibold uppercase tracking-[.2em] text-accent">{category}</p><h3 className="mt-2 text-sm font-semibold leading-5">{title}</h3><p className="mt-2 text-xs leading-5 text-muted-foreground">{detail}</p><div className="mt-3 flex flex-wrap gap-1.5">{[["37%+", "organic visits"], ["+122%", "traffic"], ["+64%", "leads"]][index].map((tag) => <span key={tag} className="rounded-full bg-secondary px-2 py-1 text-[9px] text-foreground/75">{tag}</span>)}</div><a href="#audit" className="mt-4 inline-block text-[10px] font-medium text-accent">View {service.name} case study →</a></div></article>)}</div></section>;
}

function ClientStories() {
  return <section className="bg-secondary px-6 py-20"><ServiceSectionTitle eyebrow="Client stories" title="Proven Results Across Industries" /><div className="mx-auto grid max-w-[900px] items-stretch gap-5 md:grid-cols-2"><a href="#audit" className="service-video relative grid min-h-[220px] place-items-center overflow-hidden rounded-xl bg-hero"><div className="service-video-orbit"/><span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-copper text-white shadow-lg"><Play className="ml-1 h-5 w-5 fill-current" /></span></a><article className="flex flex-col justify-between rounded-xl border border-border bg-card p-6"><div><Quote className="h-5 w-5 text-accent"/><p className="mt-3 text-xs text-accent">★★★★★</p><blockquote className="mt-3 text-sm leading-6 text-muted-foreground">“Within six months our business was getting found by the right customers. The reporting was clear, and the results kept building.”</blockquote></div><div className="mt-6 flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-full border border-accent text-[10px] text-accent">JE</span><div><p className="text-xs font-semibold">Jordan Ellis</p><p className="text-[10px] text-muted-foreground">Founder, SaaS company</p></div></div></article></div></section>;
}

function ServiceProblems({ service }: { service: (typeof serviceContent)[string] }) {
  const items = [["Your strategy has technical issues", "Slow processes and gaps in the foundations can make it difficult for your team to get the best from your investment."], ["Traffic isn't turning into leads", "Visitors arrive, but unclear messaging and weak journeys lose valuable opportunities."], ["Your approach is outdated", "Customer behavior and platforms change. Older tactics often miss where buyers are now."], ["You’re not showing up where it matters", "If customers can’t find you at the moment they need you, they’re likely to choose another provider."]];
  return <section className="bg-teal-darker px-6 py-20 text-cream"><ServiceSectionTitle eyebrow="The real problem" title={`Customers Can't Find You with ${service.name}? Here's Why`} detail="A few common issues can hold back your next stage of growth." /><div className="mx-auto grid max-w-[900px] gap-3 sm:grid-cols-2">{items.map(([title, detail], index) => <article key={title} className="flex gap-4 rounded-xl border border-white/5 bg-primary/70 p-5"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-copper/40 text-xs text-copper">{["⌁", "↗", "⌕", "⌖"][index]}</span><div><h3 className="text-xs font-semibold">{title.replace("strategy", service.name + " strategy")}</h3><p className="mt-2 text-[10px] leading-5 text-cream/60">{detail}</p></div></article>)}</div></section>;
}

function OptimizationIntro({ service }: { service: (typeof serviceContent)[string] }) {
  return <section className="bg-secondary px-6 py-20"><div className="mx-auto grid max-w-[900px] items-center gap-10 md:grid-cols-2"><div className="service-chart rounded-xl bg-teal-darker p-5 text-cream shadow-card-soft"><div className="grid grid-cols-3 gap-2">{[["Clicks", "+122%"], ["Rank", "#2.4"], ["Leads", "+3x"]].map(([label, value]) => <div key={label} className="rounded-lg border border-white/10 p-2"><p className="text-[8px] text-cream/50">{label}</p><p className="mt-1 text-xs text-copper">{value}</p></div>)}</div><div className="mt-5 flex h-24 items-end gap-2">{[24, 35, 30, 49, 45, 61, 76, 87].map((height, index) => <span key={index} className="flex-1 rounded-t-sm bg-copper/70" style={{ height: `${height}%` }} />)}</div><div className="mt-4 h-px bg-white/20" /></div><div><p className="text-[9px] font-semibold uppercase tracking-[.25em] text-accent">Built around outcomes</p><h2 className="mt-3 text-3xl font-semibold leading-tight">{service.name} Services Built for Your Business Goals</h2><p className="mt-4 text-sm leading-6 text-muted-foreground">We don’t sell generic packages. We start with your revenue targets, map them to your customers, and build a plan that moves the needle.</p><a href="#services" className="mt-4 inline-block text-[10px] font-medium text-accent">Read more →</a><a href="#audit" className="mt-5 block w-fit rounded-full bg-copper-gradient px-5 py-2.5 text-[10px] font-semibold text-white">Claim Your Free {service.name} Review</a></div></div></section>;
}
function SEOServices({ service }: { service: (typeof serviceContent)[string] }) {
  const seoAreas = [
    ["Website SEO Audit", "A forensic review of your site's health, content, and competitors with a prioritised action plan."],
    ["AI Search Optimization", "AEO + GEO strategies that earn citations in AI answers."],
    ["On-Page SEO", "Every page tuned for intent and experience."],
    ["Technical SEO", "A fast, crawlable foundation search engines trust."],
    ["Link Building & Backlink Strategy", "Earn relevant links from authoritative publications."],
    ["Local SEO Optimization", "Own your neighbourhood searches and the map pack."],
    ["SEO Reporting & Analytics", "Clear dashboards built on Google Analytics and Search Console."],
  ];
  const generalAreas = [
    [`${service.name} Audit`, `A clear review of your current approach, opportunities, and next steps.`],
    [`${service.name} Strategy`, `A focused plan aligned to your audience, goals, and resources.`],
    ["Content & Creative", "Useful content and creative work that keeps your brand consistent."],
    ["Implementation", `Expert execution across the right ${service.name} channels and tools.`],
    ["Campaign Management", "Careful coordination that keeps each moving part on track."],
    ["Measurement & Analytics", "Clear reporting on progress, outcomes, and areas to improve."],
    ["Ongoing Optimization", "Continuous refinement as your business and customer needs change."],
  ];
  const areas = service.name === "SEO" ? seoAreas : generalAreas;
  return <section id="services" className="bg-background px-6 py-24 text-foreground"><div className="mx-auto max-w-[1000px]"><ServiceSectionTitle eyebrow="What we do" title={<>Our Comprehensive {service.name} Services</>} detail="Seven disciplines, one strategy. Pick what you need or let us build the full stack." /><div className="grid gap-3 md:grid-cols-3">{areas.map(([title, description], index) => <article key={title} className="rounded-xl border border-accent/35 border-t-2 bg-card p-5"><span className="text-lg text-accent">{["⌕", "✳", "◉", "⌘", "↗", "⌖", "▥"][index]}</span><h3 className="mt-3 text-xs font-semibold">{title}</h3><p className="mt-2 text-[10px] leading-5 text-muted-foreground">{description}</p>{index === 0 || index === 2 || index === 3 || index === 5 ? <ul className="mt-3 space-y-1 text-[9px] text-muted-foreground"><li><Check className="mr-1 inline h-3 w-3 text-accent"/>Clear recommendations</li><li><Check className="mr-1 inline h-3 w-3 text-accent"/>Focused on your goals</li></ul> : null}</article>)}</div></div></section>;
}

function ComprehensiveServiceDetails({ service }: { service: (typeof serviceContent)[string] }) {
  type DetailItem = { title: string; icon: React.ElementType; description: string; bullets?: string[] };
  const seoItems: DetailItem[] = [
    { title: "Website SEO Audit", icon: Search, description: "We help you optimize your website’s performance with in-depth analysis. A complete website SEO audit identifies technical issues and content gaps, then turns those findings into a precise, research-backed plan for on-page and off-page optimization." },
    { title: "AI Search Optimization", icon: Sparkles, description: "Future-proof your brand’s discoverability with effective AI search optimization. We help your business earn visibility in AI-driven results and answer engines, alongside traditional search." },
    { title: "On-Page SEO Optimization", icon: Search, description: "Align your website with search intent and refine the content across your most important pages.", bullets: ["Keyword research for high-intent searches tailored to your business.", "Meta descriptions and title tags to improve click-through rates.", "Core Web Vitals and page speed improvements.", "Image SEO for better visibility and user experience.", "Content creation and optimization for your audience."] },
    { title: "Technical SEO Optimization", icon: ShieldCheck, description: "Improve your website’s crawlability, loading speed, and overall technical health.", bullets: ["Crawlability and indexing optimization.", "Improve site navigation and internal linking.", "Implement structured data and schema markup.", "URL and site structure optimization.", "Manage redirects and resolve errors."] },
    { title: "Link Building & Backlink Strategy", icon: LinkIcon, description: "Earn relevant backlinks from authoritative sites with ethical outreach and thoughtful content. A strong backlink strategy builds domain authority, supports organic visibility, and brings qualified referral traffic." },
    { title: "Local SEO Optimization", icon: MapPin, description: "Reach customers searching for services in your area. We strengthen your local presence through Google Business Profile optimization, customer reviews, citations, and location-relevant content." },
    { title: "SEO Reporting & Analytics", icon: Activity, description: "Understand what is working through clear reports built around organic traffic, rankings, and conversions. We use analytics and Search Console insights to find opportunities and guide the next steps." },
  ];
  const otherItems: DetailItem[] = [
    { title: `${service.name} Audit`, icon: Activity, description: `We review your current ${service.name.toLowerCase()} performance, audience, and competitors to find the best opportunities for your business.` },
    { title: "AI & Search Visibility", icon: Sparkles, description: `Make your ${service.name.toLowerCase()} strategy ready for new discovery channels and changing customer behavior.` },
    { title: "Content & Experience", icon: Search, description: "Create clear, useful content and customer experiences that support your goals.", bullets: ["Audience and intent research.", "Consistent messaging across key touchpoints.", "Conversion-focused content improvements.", "Accessible, user-friendly experiences."] },
    { title: "Technical Setup & Optimization", icon: ShieldCheck, description: "Build a reliable foundation for your campaigns and customer journeys.", bullets: ["Platform setup and configuration.", "Performance and usability improvements.", "Integration and workflow support.", "Ongoing quality checks."] },
    { title: "Authority & Partnerships", icon: LinkIcon, description: "Build trust and reach through relevant partnerships, distribution, and high-quality brand experiences." },
    { title: "Local & Audience Reach", icon: MapPin, description: "Connect with the right people in the locations and channels where they are looking for your services." },
    { title: `${service.name} Reporting & Analytics`, icon: Activity, description: "Get clear reporting on performance, opportunities, and the next improvements to prioritize." },
  ];
  const items = service.name === "SEO" ? seoItems : otherItems;
  return <section className="bg-background px-6 py-20 text-foreground"><div className="mx-auto max-w-[1250px]"><ServiceSectionTitle eyebrow="What we offer" title={<>Our Comprehensive<br/><strong>{service.name} Services</strong></>} detail={`At Gadgets Guardians, we offer a wide range of ${service.name} services for businesses of all sizes, aligned with your business objectives and designed to drive sustainable growth.`}/><div className="grid items-start gap-10 lg:grid-cols-[.92fr_1.08fr]"><div className="service-team-sticky overflow-hidden rounded-xl shadow-card-soft"><img src={serviceTeamImage} alt="Three digital marketing specialists collaborating on a strategy" className="h-full w-full object-cover"/></div><div className="space-y-7">{items.map((item, index) => <article key={item.title} className="service-detail-card relative rounded-xl border border-border bg-card px-5 pb-5 pt-16 sm:px-6"><span className="service-detail-icon absolute -top-5 left-5 grid h-16 w-16 place-items-center rounded-lg border border-border bg-card text-primary shadow-sm"><item.icon className="h-8 w-8 stroke-[1.5]"/><span className="sr-only">Service {index + 1}</span></span><div className="pt-1"><h3 className="text-base font-bold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>{item.bullets && <ul className="mt-2 space-y-2">{item.bullets.map((bullet) => <li key={bullet} className="flex gap-2 text-sm leading-6 text-muted-foreground"><Check className="mt-1 h-4 w-4 shrink-0 fill-primary text-primary-foreground"/><span>{bullet}</span></li>)}</ul>}</div></article>)}</div></div></div></section>;
}

function ServiceSelectorSection({ service }: { service: (typeof serviceContent)[string] }) {
  type ServiceType = { name: string; description: string; benefits: string[] };
  const typesByService: Record<string, ServiceType[]> = {
    SEO: [
      { name: "AI SEO Services", description: "Improve your brand’s visibility in AI-driven search and answer engines, alongside traditional search.", benefits: ["Improve AI answer visibility", "Strengthen search authority", "Reach high-intent audiences", "Measure discovery performance"] },
      { name: "Organic SEO", description: "Grow qualified organic traffic through technical improvements, useful content, and a clear search strategy.", benefits: ["Target relevant search terms", "Improve organic rankings", "Bring in qualified visitors", "Build sustainable growth"] },
      { name: "E-Commerce SEO", description: "Help shoppers discover your products with optimized category pages, product details, and store structure.", benefits: ["Improve product discovery", "Optimize category pages", "Grow qualified store traffic", "Support more product sales"] },
      { name: "Local SEO", description: "Reach nearby customers through stronger local listings, location pages, and review visibility.", benefits: ["Improve map visibility", "Reach local customers", "Strengthen business listings", "Generate more enquiries"] },
      { name: "Small Business SEO Services", description: "Build a practical search presence that helps small businesses compete in their markets.", benefits: ["Focus on priority keywords", "Compete in local markets", "Build useful site content", "Track progress clearly"] },
      { name: "Online Reputation Management", description: "Strengthen how your business appears in search by monitoring reviews, responding to feedback, and building customer trust.", benefits: ["Monitor brand mentions", "Support review responses", "Build customer confidence", "Track reputation signals"] },
      { name: "Content Marketing", description: "Create useful, search-focused content that answers customer questions and supports organic growth.", benefits: ["Plan content around intent", "Answer customer questions", "Build topical authority", "Measure content performance"] },
    ],
    PPC: [
      { name: "Google Search Ads", description: "Reach customers as they search for the products and services your business offers.", benefits: ["Target high-intent searches", "Control campaign spend", "Generate qualified leads", "Track return on ad spend"] },
      { name: "Google Display Ads", description: "Build awareness and bring your offer to relevant audiences across the Google Display Network.", benefits: ["Reach relevant audiences", "Build brand awareness", "Use visual ad formats", "Measure campaign reach"] },
      { name: "Shopping Ads", description: "Promote products with visual listings that help shoppers compare and choose your products.", benefits: ["Show products in search", "Reach ready-to-buy shoppers", "Promote product catalogs", "Track sales performance"] },
      { name: "YouTube Ads", description: "Tell your brand story through video campaigns that reach the right viewers.", benefits: ["Reach targeted viewers", "Build product awareness", "Use video storytelling", "Measure views and actions"] },
      { name: "Remarketing Campaigns", description: "Reconnect with people who have visited your website or engaged with your business.", benefits: ["Reconnect with visitors", "Support repeat visits", "Tailor audience messages", "Improve conversion paths"] },
      { name: "Microsoft Ads", description: "Reach search audiences across Bing and Microsoft advertising placements.", benefits: ["Expand search reach", "Target relevant keywords", "Connect with new buyers", "Measure campaign results"] },
      { name: "PPC Reporting & Optimization", description: "Review campaign performance and make ongoing improvements to targeting, creative, and spend.", benefits: ["Monitor campaign results", "Find budget efficiencies", "Improve ad performance", "Report on key outcomes"] },
    ],
    SMM: [
      { name: "Social Media Strategy", description: "Set a clear direction for your social channels, audience, content, and business goals.", benefits: ["Choose the right channels", "Understand your audience", "Plan useful content", "Align posts with goals"] },
      { name: "Social Media Management", description: "Keep your social channels active and consistent with thoughtful day-to-day management.", benefits: ["Maintain a steady presence", "Coordinate publishing", "Keep brand voice consistent", "Track channel performance"] },
      { name: "Content Creation", description: "Create engaging social content shaped around your brand and the people you want to reach.", benefits: ["Build recognizable content", "Share useful stories", "Support campaigns", "Encourage engagement"] },
      { name: "Community Management", description: "Build stronger customer relationships through timely responses and meaningful conversations.", benefits: ["Respond to your audience", "Build customer trust", "Encourage conversations", "Learn from feedback"] },
      { name: "Paid Social Campaigns", description: "Use targeted social advertising to reach relevant audiences and support campaign goals.", benefits: ["Reach new audiences", "Target key customer groups", "Support lead generation", "Measure campaign impact"] },
      { name: "Social Media Campaigns", description: "Plan coordinated campaigns that bring your brand message to life across social channels.", benefits: ["Coordinate channel activity", "Strengthen brand awareness", "Promote key offers", "Measure engagement"] },
      { name: "Social Reporting & Analytics", description: "Understand channel performance with clear reporting on audience growth and engagement.", benefits: ["Track audience growth", "Monitor engagement", "Identify strong content", "Plan next steps"] },
    ],
    "Website Development": [
      { name: "Custom Website Development", description: "Build a tailored website around your business requirements, customer journeys, and future plans.", benefits: ["Fit your business needs", "Create flexible features", "Support future growth", "Connect business tools"] },
      { name: "E-Commerce Development", description: "Create online stores that make it easy for customers to explore products and complete purchases.", benefits: ["Build smooth shopping flows", "Organize product catalogs", "Connect payment tools", "Support store growth"] },
      { name: "CMS Website Development", description: "Make it easier for your team to manage website content with a flexible content management system.", benefits: ["Manage content easily", "Support team workflows", "Keep pages consistent", "Scale your site content"] },
      { name: "WordPress Development", description: "Develop flexible WordPress websites tailored to your brand and business operations.", benefits: ["Use flexible page layouts", "Manage site content", "Add useful integrations", "Support site maintenance"] },
      { name: "Shopify Development", description: "Develop and improve Shopify storefronts that support your products and customer experience.", benefits: ["Customize your storefront", "Organize product pages", "Improve shopping journeys", "Connect store apps"] },
      { name: "Web Application Development", description: "Build interactive web applications that help customers or teams complete important tasks.", benefits: ["Support custom workflows", "Build interactive features", "Connect data and tools", "Plan for scale"] },
      { name: "Website Maintenance & Support", description: "Keep your website updated, reliable, and ready to support your business.", benefits: ["Maintain site health", "Apply regular updates", "Resolve site issues", "Protect site reliability"] },
    ],
    Designing: [
      { name: "Website Design", description: "Design a clear and engaging website that introduces your business and guides visitors to act.", benefits: ["Clarify your message", "Create strong page layouts", "Guide visitors to action", "Reflect your brand"] },
      { name: "UI/UX Design", description: "Plan intuitive digital experiences that help people use your website with confidence.", benefits: ["Understand user needs", "Simplify key journeys", "Improve usability", "Build clear interfaces"] },
      { name: "Landing Page Design", description: "Create focused landing pages for campaigns, offers, and lead-generation goals.", benefits: ["Keep campaign focus clear", "Present offers effectively", "Guide user actions", "Support conversion goals"] },
      { name: "E-Commerce Website Design", description: "Design online shopping experiences that make products easy to find and purchase.", benefits: ["Improve product discovery", "Simplify shopping journeys", "Create clear product pages", "Support customer confidence"] },
      { name: "Responsive Website Design", description: "Make sure your website is easy to explore across desktop, tablet, and mobile screens.", benefits: ["Adapt to every screen", "Keep layouts consistent", "Improve mobile usability", "Support accessibility"] },
      { name: "Website Redesign", description: "Refresh an existing website to better reflect your brand, content, and customer needs.", benefits: ["Modernize page layouts", "Improve content hierarchy", "Refresh your brand presence", "Make navigation clearer"] },
      { name: "Wireframes & Prototypes", description: "Map and preview page structures before moving into final visual design and development.", benefits: ["Plan page structure", "Explore design options", "Gather early feedback", "Align teams before build"] },
    ],
  };
  const options = typesByService[service.name] ?? typesByService.SEO;
  const [selected, setSelected] = React.useState(0);
  React.useEffect(() => setSelected(0), [service.name]);
  const selectedType = options[selected] ?? options[0];
  return <section className="bg-background px-6 py-20 text-foreground"><div className="mx-auto max-w-[1250px]"><ServiceSectionTitle eyebrow="What we offer" title={<>Our <span className="text-accent">{service.name}</span> Services</>} detail={`Explore our comprehensive ${service.name} services designed to connect your business with the right audience, generate qualified leads, and improve performance.`}/><div className="grid gap-5 lg:grid-cols-[.65fr_2.35fr]"><div className="flex flex-col gap-2" role="tablist" aria-label={`${service.name} service types`}>{options.map((option, index) => <button key={option.name} role="tab" aria-selected={selected === index} onClick={() => setSelected(index)} className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${selected === index ? "border-accent bg-secondary text-foreground shadow-sm" : "border-border bg-card text-muted-foreground hover:border-accent/50 hover:text-foreground"}`}><span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg border text-xs ${selected === index ? "border-accent bg-accent text-white" : "border-border text-accent"}`}>{String(index + 1).padStart(2, "0")}</span>{option.name}</button>)}</div><article className="service-selector-panel relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card-soft sm:p-9" role="tabpanel"><span className="absolute left-8 top-0 h-1 w-16 bg-copper"/><p className="inline-flex items-center gap-2 rounded-md border border-accent/25 bg-secondary px-3 py-2 text-xs font-bold uppercase tracking-[.16em] text-accent"><span className="h-1.5 w-1.5 rounded-full bg-accent"/>{service.name} solutions</p><h3 className="mt-5 text-3xl font-bold">{selectedType.name}</h3><p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">{selectedType.description}</p><h4 className="mt-6 text-base font-bold">Key Benefits</h4><div className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">{selectedType.benefits.map((benefit) => <p key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground"><span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-accent text-accent">✓</span>{benefit}</p>)}</div><div className="mt-7 rounded-lg border border-accent/20 bg-secondary px-4 py-4 text-sm text-foreground/75"><Sparkles className="mr-2 inline h-4 w-4 text-accent"/>A focused {service.name} plan designed around your business goals.</div></article></div></div></section>;
}

function ExpertCTA() {
  return <section className="bg-copper px-6 py-7 text-teal-darker"><div className="mx-auto flex max-w-[1000px] flex-wrap items-center justify-between gap-4"><h2 className="text-lg font-semibold">Not on page? Find out why, free.</h2><div className="flex gap-3"><a href="#audit" className="rounded-full bg-teal-darker px-5 py-2.5 text-[10px] text-cream">Send us a message</a><a href="#audit" className="rounded-full border border-teal-darker/40 px-5 py-2.5 text-[10px]">Or book a 15-minute call</a></div></div></section>;
}

function Specialists({ service }: { service: (typeof serviceContent)[string] }) {
  const people = [["AM", "Arjun Mehta", "Technical Specialist"], ["SC", "Sofia Clarke", "E-commerce Specialist"], ["DR", "Daniel Reyes", "Organic Growth Specialist"]];
  return <section className="bg-secondary px-6 py-20"><ServiceSectionTitle eyebrow="Talk to a specialist" title="Need Expert Assistance Before Making a Growth Decision?" detail="Get honest, no-pressure advice from the people who’ll actually run your campaign."/><div className="mx-auto grid max-w-[800px] gap-4 sm:grid-cols-3">{people.map(([initials, name, role]) => <article key={name} className="rounded-xl border border-border bg-card p-5 text-center"><span className="mx-auto grid h-14 w-14 place-items-center rounded-full border-4 border-teal-darker bg-teal-deep text-sm tracking-widest text-cream">{initials}</span><h3 className="mt-3 text-xs font-semibold">{name}</h3><p className="mt-1 text-[10px] text-muted-foreground">{service.name} {role}</p><div className="my-3 flex justify-center gap-3 text-xs text-muted-foreground"><a href="mailto:hello@gadgetsguardianstech.com">in</a><a href="mailto:hello@gadgetsguardianstech.com">◎</a></div><a href="#audit" className="block rounded-full bg-copper-gradient py-2 text-[10px] font-semibold text-white">Book Consultation</a></article>)}</div></section>;
}

function ServiceProcess({ service }: { service: (typeof serviceContent)[string] }) {
  const steps = [["Website audit", "We review your current position, performance, and the opportunities ahead."], ["Market research", "We learn what your customers need and where your competitors are investing."], ["Custom strategy", "A practical roadmap with clear priorities, owners, and KPIs."], ["Expert delivery", "Our team executes each part of the plan with care and consistency."], ["Content & campaigns", "We build useful experiences that help move customers toward action."], ["Monitoring & optimization", "Regular tracking and reviews keep your strategy sharp as results evolve."]];
  return <section className="bg-background px-6 py-20"><ServiceSectionTitle eyebrow="Our process" title={<>How Our {service.name} Services Work</>} /><div className="service-timeline mx-auto max-w-[700px]">{steps.map(([title, detail], index) => <article key={title} className={`relative mb-5 w-[calc(50%-26px)] rounded-xl border border-border bg-card p-5 shadow-sm ${index % 2 === 0 ? "mr-auto text-right" : "ml-auto"}`}><span className={`absolute top-4 grid h-7 w-7 place-items-center rounded-full border border-accent/50 bg-secondary text-[9px] text-accent ${index % 2 === 0 ? "-right-[40px]" : "-left-[40px]"}`}>{String(index + 1).padStart(2, "0")}</span><h3 className="text-xs font-semibold">{title}</h3><p className="mt-2 text-[10px] leading-5 text-muted-foreground">{detail}</p></article>)}</div></section>;
}

function WhyService({ service }: { service: (typeof serviceContent)[string] }) {
  const points = [["Constant platform changes", "Keep pace as platforms and customer behavior continue to evolve."], ["Clear return on investment", "Prioritise work that supports business outcomes and long-term value."], ["Focused expertise", "Reach the right audience with a plan built around your market."], ["A changing future", "Stay ready for new channels, search experiences, and opportunities."], ["Competitive edge", "Find the gaps your competitors overlook and put them to work."], ["Better customer experience", "Make it easier for customers to discover, understand, and choose you."]];
  return <section className="bg-teal-darker px-6 py-20 text-cream"><ServiceSectionTitle eyebrow="Why it matters" title={`Why Your Business Needs a ${service.name} Agency?`} detail="The right partner gives you a clearer path through a crowded and changing market."/><div className="mx-auto grid max-w-[900px] gap-3 sm:grid-cols-2 lg:grid-cols-3">{points.map(([title, detail], index) => <article key={title} className="rounded-xl border border-white/5 bg-primary/70 p-5"><p className="text-2xl font-light text-copper">0{index + 1}</p><h3 className="mt-2 text-[11px] font-semibold">{title}</h3><p className="mt-2 text-[9px] leading-5 text-cream/60">{detail}</p></article>)}</div></section>;
}

function PricingPlans({ service }: { service: (typeof serviceContent)[string] }) {
  const plans = [["Basic Plan", "Small businesses & startups", "$300–$600", ["Up to 10 target keywords", "Technical audit & fixes", "Core optimization", "Monthly progress report"]], ["Pro Plan", "Mid-sized growing businesses", "$800–$1,200", ["Up to 30 target keywords", "Everything in Basic", "4 content pieces / month", "Link building campaign"]], ["Advanced Plan", "Large enterprises & eCommerce", "$1,500+", ["Unlimited keyword strategy", "Everything in Pro", "Digital PR & authority links", "Custom dashboards"]]];
  return <section className="bg-secondary px-6 py-20"><ServiceSectionTitle eyebrow="Pricing" title={<>Simple, Transparent Pricing for {service.name}</>} detail="Clear monthly plans. No lock-in surprises."/><div className="mx-auto grid max-w-[900px] items-stretch gap-4 md:grid-cols-3">{plans.map(([name, audience, price, benefits], index) => <article key={name as string} className={`relative rounded-xl border p-6 ${index === 1 ? "border-accent bg-teal-darker text-cream shadow-elegant" : "border-border bg-card text-foreground"}`}>{index === 1 && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-copper px-3 py-1 text-[8px] font-bold uppercase text-white">Most popular</span>}<h3 className="text-sm font-semibold">{name}</h3><p className={`mt-1 text-[9px] ${index === 1 ? "text-cream/60" : "text-muted-foreground"}`}>{audience}</p><p className={`mt-5 text-2xl font-light ${index === 1 ? "text-copper" : "text-accent"}`}>{price}<span className="text-[10px]">/mo</span></p><ul className="my-5 space-y-2">{(benefits as string[]).map((benefit) => <li key={benefit} className={`text-[9px] ${index === 1 ? "text-cream/75" : "text-muted-foreground"}`}><Check className="mr-1 inline h-3 w-3 text-accent"/>{benefit}</li>)}</ul><a href="#audit" className={`block rounded-full py-2.5 text-center text-[10px] font-semibold ${index === 1 ? "bg-copper-gradient text-white" : "border border-border hover:border-accent"}`}>Get Tailored Quote</a></article>)}</div></section>;
}

function Industries() {
  const list = ["Ecommerce", "SaaS", "Insurance", "Legal Services", "Enterprise", "Education", "Sports & Fitness", "Financial Services", "AI & Tech Startup", "Healthcare", "Travel & Hospitality", "Real Estate", "Home Services"];
  return <section className="bg-background px-6 py-20"><ServiceSectionTitle eyebrow="Industries" title="Your Industry. Our Expertise." detail="Experienced specialists serving businesses of all sizes, from local shops to global enterprises."/><div className="mx-auto grid max-w-[900px] grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-5">{list.map((industry, index) => <div key={industry} className="flex min-h-14 items-center gap-2 rounded-lg border border-border px-3 py-3 text-[9px] text-foreground/80"><span className="text-sm text-accent">{["◈", "☁", "◇", "⚖", "▤"][index % 5]}</span>{industry}</div>)}</div></section>;
}

function WhyChoose({ service }: { service: (typeof serviceContent)[string] }) {
  const items = [["Tailored strategies", `Plans built around your market, margins, and ${service.name} goals.`], ["Transparent reporting", "Live dashboards and plain-English reviews show you what’s happening."], ["Proven track record", "Experienced teams focused on measurable traffic, leads, and revenue."], ["Future-ready solutions", "We stay current with emerging platforms and how customers discover brands."], ["Sustainable practices", "Ethical methods and consistent delivery designed to build lasting value."], ["Holistic approach", "Strategy, execution, and measurement work together as one system."]];
  return <section className="bg-secondary px-6 py-20"><ServiceSectionTitle eyebrow="Why us" title={<>Why Choose Gadgets Guardians for Results-Driven {service.name} Services</>}/><div className="mx-auto grid max-w-[900px] overflow-hidden rounded-xl border border-border bg-card sm:grid-cols-2 lg:grid-cols-3">{items.map(([title, detail], index) => <article key={title} className="border-b border-r border-border p-5"><p className="text-[8px] font-semibold text-accent">0{index + 1}</p><h3 className="mt-2 text-[10px] font-semibold">{title}</h3><p className="mt-2 text-[9px] leading-5 text-muted-foreground">{detail}</p></article>)}</div></section>;
}

function FinalCTA({ service }: { service: (typeof serviceContent)[string] }) {
  return <section className="seo-cta relative overflow-hidden bg-hero px-6 py-20 text-center text-cream"><div className="seo-orbit seo-orbit-one"/><div className="relative z-10 mx-auto max-w-2xl"><h2 className="text-3xl font-normal leading-tight sm:text-4xl">Ready to be the first result they see? <span className="text-copper">Let’s talk.</span></h2><div className="mt-7 flex justify-center gap-3"><a href="#audit" className="rounded-full bg-copper-gradient px-5 py-3 text-[10px] font-semibold text-white">Chat about {service.name}</a><a href="#audit" className="rounded-full border border-cream/40 px-5 py-3 text-[10px]">Book a call</a></div></div></section>;
}

function ServiceFAQ({ service }: { service: (typeof serviceContent)[string] }) {
  const questions = [[`How long does ${service.name} take to show results?`, "Timing depends on your starting point, competition, and goals. We set clear milestones and share progress along the way."], [`How much does ${service.name} cost?`, "Plans are tailored to your scope and goals. We’ll recommend the right level of support after learning about your business."], [`Can ${service.name} increase sales and leads?`, "A focused strategy can help you reach more qualified customers and improve the steps that turn interest into action."], [`Why does my business need ${service.name}?`, "Customers increasingly use digital channels to research and choose providers. A strong presence helps you compete for that demand."], [`Is ${service.name} better than other channels?`, "The best mix depends on your audience and timeline. We can help you choose channels that work well together."], [`Why is my website not getting results?`, "Technical issues, unclear messaging, and a weak customer journey can all hold back performance."], [`What is included in your ${service.name} service?`, "Your plan can include strategy, implementation, reporting, and ongoing optimization based on your priorities."], [`How do I choose the right ${service.name} agency?`, "Look for a team that understands your goals, explains its approach clearly, and reports on meaningful outcomes."]];
  return <section className="bg-background px-6 py-20"><ServiceSectionTitle eyebrow="FAQ" title={<>Frequently Asked Questions About {service.name} Services</>}/><div className="mx-auto max-w-[680px] space-y-2">{questions.map(([question, answer]) => <details key={question} className="group rounded-lg border border-border bg-card px-4 py-3"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-display font-bold md:text-lg"><span>{question}</span><ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition group-open:rotate-180"/></summary><p className="pt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{answer}</p></details>)}</div></section>;
}

function ServiceAreas() {
  const places = [["United States", "New York · Los Angeles · Chicago"], ["Canada", "Toronto · Vancouver · Montreal"], ["Australia", "Sydney · Melbourne · Brisbane"], ["Middle East", "Dubai · Abu Dhabi · Doha"], ["India", "Mumbai · Delhi · Bengaluru"]];
  return <section className="bg-secondary px-6 py-20"><ServiceSectionTitle eyebrow="Service areas" title="Local Expertise, Global Reach"/><div className="mx-auto grid max-w-[900px] gap-3 sm:grid-cols-2 lg:grid-cols-5">{places.map(([country, cities]) => <article key={country} className="rounded-xl border border-border bg-card p-4"><p className="text-[10px] font-semibold"><span className="mr-2 text-accent">⌖</span>{country}</p><p className="mt-2 text-[9px] leading-4 text-muted-foreground">Serving businesses across {cities}</p></article>)}</div><div className="mx-auto mt-8 grid max-w-[900px] gap-4 sm:grid-cols-2 lg:grid-cols-4">{[["United States", "New York · Los Angeles · Chicago"], ["Canada", "Toronto · Vancouver"], ["Australia", "Sydney · Melbourne"], ["Middle East", "Dubai · Abu Dhabi"]].map(([region, cities]) => <div key={region}><p className="mb-2 text-[9px] font-semibold">{region}</p><div className="flex flex-wrap gap-1">{cities.split(" · ").map((city) => <span key={city} className="rounded-full border border-border px-2 py-1 text-[8px] text-muted-foreground">{city}</span>)}</div></div>)}</div></section>;
}
function SEOGrowth({ service }: { service: (typeof serviceContent)[string] }) { return <section id="growth" className="bg-hero px-6 py-24 text-cream"><div id="about" className="mx-auto grid max-w-[1100px] items-center gap-12 md:grid-cols-2"><div><p className="text-xs uppercase tracking-[.25em] text-copper">A clear path to better results</p><h2 className="mt-4 text-4xl font-medium leading-tight">Your {service.name} growth deserves more than guesswork.</h2><p className="mt-5 leading-7 text-cream/70">We combine experienced specialists, thoughtful strategy, and transparent reporting to make your investment work harder over time.</p><a href="#audit" className="mt-8 inline-flex items-center gap-2 rounded-full bg-copper-gradient px-6 py-3 text-sm text-white">Talk to our team <ArrowRight className="h-4 w-4"/></a></div><div className="space-y-4">{[["01","Understand","A clear view of your goals, audience, and opportunities."],["02","Build","A tailored roadmap with focused priorities and deliverables."],["03","Grow","Ongoing delivery, reporting, and refinement as results compound."]].map(([n,t,d])=><div key={n} className="flex gap-5 rounded-xl border border-cream/15 p-5"><span className="text-copper">{n}</span><div><h3 className="font-semibold">{t}</h3><p className="mt-1 text-sm text-cream/60">{d}</p></div></div>)}</div></div></section> }
/* ------------------------------ HEADER ------------------------------ */
function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navItems = ["Home", "Who We Are", "Services", "AI", "Digital Marketing", "Case Studies", "Resources"];
  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      {/* <div className="bg-teal-darker text-cream/90 text-xs"> */}
      <div className="hidden md:block bg-teal-darker text-cream/90 text-xs">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between px-4 md:px-6 py-2.5 gap-3">
          <div className="flex items-center gap-2">
            <Trophy className="h-3.5 w-3.5 text-copper" />
            <span className="font-medium">Tech Agency of the Year 2025, 26</span>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <span className="hidden md:inline opacity-60">Free Audit:</span>
            <a href="mailto:hello@gadgetsguardianstech.com" className="hidden sm:inline hover:text-copper transition">hello@gadgetsguardianstech.com</a>
            <span className="hidden md:inline opacity-30">|</span>
            <a href="tel:+910000000000" className="hidden md:inline hover:text-copper transition">+91 00000 00000</a>
            <a
              href="https://wa.me/910000000000"
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 text-white px-3.5 py-1.5 text-[11px] font-semibold hover:bg-emerald-600 transition"
            >
              <MessageCircle className="h-3.5 w-3.5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
      {/* Main nav */}
      <div className="bg-background/95 backdrop-blur-md border-b border-border">
        {/* <div className="mx-auto max-w-7xl flex items-center justify-between px-4 md:px-6 py-3"> */}
        {/* <div className="mx-auto max-w-7xl flex items-center justify-between px-4 md:px-6 py-4"> */}
        {/* <div className="mx-auto max-w-[1500px] flex items-center gap-6 px-4 lg:px-8 py-4"> */}
        <div className="mx-auto max-w-[1500px] flex items-center justify-between px-4 lg:px-8 py-3">
          {/* <a href="/" className="flex items-center gap-3 shrink-0"> */}
          {/* <a href="/" className="flex items-center gap-3 flex-shrink-0"> */}
          <a
  href="/"
  // className="flex items-center gap-3 w-auto lg:w-[280px] flex-shrink-0"
   className="flex flex-1 lg:flex-none items-center gap-2 min-w-0"
>
            <img src={ggLogo.url} alt="Gadgets Guardians logo" 
            // className="h-9 w-9 md:h-11 md:w-11 rounded-lg object-cover" 
              className="h-8 w-8 lg:h-11 lg:w-11 rounded-lg object-contain flex-shrink-0"
            />
            {/* <div className="leading-tight"> */}
            <div className="leading-tight min-w-0">
              {/* <div className="font-display text-base md:text-xl font-bold text-foreground"> */}
              {/* <div className="font-display text-lg lg:text-xl font-bold text-foreground truncate">
                Gadgets <span className="text-accent">Guardians</span>
              </div> */}
              <div className="font-display font-bold text-foreground">
  <span className="text-lg lg:text-xl">
    Gadgets
  </span>

  <span className="hidden sm:inline text-accent text-lg lg:text-xl">
    {" "}Guardians
  </span>
</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground hidden lg:block">Tech & Digital Marketing</div>
            </div>
          </a>
          {/* <nav className="hidden lg:flex items-center gap-1 rounded-full border border-border bg-card/60 px-2 py-1.5 text-sm">
            {navItems.map((n, i) => (
              <a
                key={n}
                href={`#${n.toLowerCase().replace(/\s+/g, "-")}`}
                className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full transition ${
                  i === 0 ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground/80"
                }`}
              >
                {n}
                {i > 0 && i < 6 && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
              </a>
            ))}
          </nav> */}
          <nav className="hidden lg:flex flex-1 justify-center">
  <div className="flex items-center gap-1 rounded-full border border-border bg-card px-2 py-2">

    {navItems.map((n, i) => n === "Services" ? (
      <div key={n} className="group relative">
        <a href="/#services" className="flex items-center gap-1 whitespace-nowrap rounded-full px-4 py-2 text-[15px] font-medium transition-all duration-300 hover:bg-muted">
          {n}<ChevronDown className="h-4 w-4" />
        </a>
        <div className="invisible absolute left-0 top-full z-50 mt-2 max-h-[70vh] w-64 overflow-y-auto rounded-xl border border-border bg-card p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
          {services.map((service) => {
            const slug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
            return <a key={service.title} href={`/services/${slug}`} className="block rounded-lg px-3 py-2.5 text-sm text-foreground/80 transition hover:bg-muted hover:text-accent">{service.title === "SEO" ? "SEO Services" : service.title}</a>;
          })}
        </div>
      </div>
    ) : (
      <a key={n} href={n === "Home" ? "/" : n === "Who We Are" ? "/who-we-are" : `/#${n.toLowerCase().replace(/\s+/g, "-")}`} className={`flex items-center gap-1 whitespace-nowrap rounded-full px-4 py-2 text-[15px] font-medium transition-all duration-300 ${i === 0 ? "bg-primary text-white" : "hover:bg-muted"}`}>
        {n}{i > 1 && i < 6 && <ChevronDown className="h-4 w-4" />}
      </a>
    ))}

  </div>
</nav>
          {/* <div className="flex items-center gap-2"> */}
          {/* <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a href="#contact" className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-500 text-white px-4 py-2 text-sm font-semibold hover:bg-emerald-600 transition">
              Contact Us
            </a>
            <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full bg-copper-gradient text-white px-4 py-2 text-sm font-semibold hover:opacity-95 transition shadow-copper">
              <Calendar className="h-4 w-4" /> Book a Meeting
            </a>
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <button aria-label="Open menu" className="p-2">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col gap-6 p-6">
                  <a href="/" className="flex items-center gap-3">
                    <img src={ggLogo.url} alt="Gadgets Guardians logo" className="h-9 w-9 md:h-11 md:w-11 rounded-lg object-cover" />
                    <div className="leading-tight">
                      <div className="font-display text-lg font-bold text-foreground">
                        Gadgets <span className="text-accent">Guardians</span>
                      </div>
                    </div>
                  </a>
                  <nav className="flex flex-col gap-2">
                    {navItems.map((n) => (
                      <a
                        key={n}
                        href={`#${n.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-lg font-medium text-foreground/80 hover:text-accent transition-colors py-2"
                      >
                        {n}
                      </a>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div> */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
  <a
    href="#contact"
    className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 text-white px-4 py-2 text-sm font-semibold"
  >
    Contact Us
  </a>

  <a
    href="#contact"
    className="inline-flex items-center gap-1.5 rounded-full bg-copper-gradient text-white px-4 py-2 text-sm font-semibold"
  >
    <Calendar className="h-4 w-4" />
    Book a Meeting
  </a>
</div>
{/* <div className="lg:hidden"> */}
<div className="lg:hidden flex-shrink-0 ml-3">
  <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
    <SheetTrigger asChild>
      <button
        aria-label="Open menu"
        className="rounded-lg border border-border p-2"
      >
        <Menu className="h-6 w-6" />
      </button>
    </SheetTrigger>

    <SheetContent side="left" className="w-[300px]">
      <div className="flex flex-col gap-6 mt-6">

        {navItems.map((item) => item === "Services" ? (
          <div key={item}>
            <a href="/#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Services</a>
            <div className="ml-4 mt-2 flex flex-col gap-2 border-l border-border pl-4">
              {services.map((service) => {
                const slug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                return <a key={service.title} href={`/services/${slug}`} onClick={() => setIsMenuOpen(false)} className="py-1 text-sm text-foreground/70 hover:text-accent">{service.title === "SEO" ? "SEO Services" : service.title}</a>;
              })}
            </div>
          </div>
        ) : (
          <a key={item} href={item === "Home" ? "/" : item === "Who We Are" ? "/who-we-are" : `/#${item.toLowerCase().replace(/\s+/g, "-")}`} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">{item}</a>
        ))}

      </div>
    </SheetContent>
  </Sheet>
</div>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------ HERO ------------------------------ */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero text-cream">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-copper/40 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-teal-deep/80 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 pt-20 pb-28 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-cream/80">
            <Sparkles className="h-3.5 w-3.5 text-copper" /> Award-winning tech agency
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-extrabold leading-[1.02] tracking-tight text-balance text-cream">
            Guardians of your <span className="text-copper">digital growth</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/75 leading-relaxed">
            From SEO and paid media to web, mobile and design — Gadgets Guardians is the
            full-stack tech partner that turns ambitious brands into category leaders.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-copper-gradient text-white px-7 py-3.5 text-sm font-semibold shadow-copper hover:scale-[1.02] transition">
              Start your project <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-cream/30 text-cream px-7 py-3.5 text-sm font-medium hover:bg-cream/10 transition">
              Explore services
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-cream/70">
            <div className="flex items-center gap-2">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-copper text-copper" />)}</div>
              <span>4.9/5 · 200+ reviews</span>
            </div>
          </div>
        </div>
        {/* Animated hero image */}
        <div className="lg:col-span-6 relative">
          <div className="relative">
            <div className="absolute -inset-8 bg-copper-gradient rounded-[2.5rem] opacity-25 blur-3xl animate-pulse-glow" />
            <div className="relative animate-float-slow">
              <img
                src={heroBg}
                alt="Digital marketing dashboards and growth ecosystem"
                loading="eager"
                width={1536}
                height={1280}
                className="relative rounded-3xl border border-cream/10 shadow-elegant w-full"
              />
            </div>
            {/* Floating chips */}
            <div className="absolute -top-4 -left-4 md:-left-8 rounded-2xl bg-cream text-teal-darker px-4 py-3 shadow-elegant animate-float-fast">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl bg-copper-gradient flex items-center justify-center text-white"><Activity className="h-5 w-5" /></div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-wider opacity-60">Organic ↑</div>
                  <div className="font-display font-bold text-lg leading-none">+312%</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 md:-right-6 rounded-2xl bg-cream text-teal-darker px-4 py-3 shadow-elegant animate-float-fast" style={{ animationDelay: "1.2s" }}>
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl bg-teal-deep flex items-center justify-center text-cream"><MousePointerClick className="h-5 w-5" /></div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-wider opacity-60">Avg. ROAS</div>
                  <div className="font-display font-bold text-lg leading-none">6.8x</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ TRUST ------------------------------ */
function TrustStrip() {
  const logos = [
    "Shopify",
    "HubSpot",
    "Google Ads",
    "Meta",
    "WordPress",
    "Webflow",
    "Salesforce",
    "AWS",
  ];
  return (
    <section className="border-y border-border bg-card overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-8 flex flex-col md:flex-row items-center gap-6">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground shrink-0">Certified Partners</p>
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className="font-display text-xl font-semibold text-foreground/50">{l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ SERVICES ------------------------------ */
function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">What we do</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">
            One team. Every digital service you need to scale.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Replace five vendors with one accountable partner — strategy, execution and reporting under one roof.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              id={`service-${s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
              className="group relative rounded-2xl border border-border bg-card p-7 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-copper-gradient group-hover:text-white transition-colors">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">
                <a href={`/services/${s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`} className="hover:text-accent">{s.title}<span className="sr-only"> service page</span></a>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ PRICING (image 1 style) ------------------------------ */
function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-balance">
            Our Cost-Effective Service Pricing
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Our mission is to make digital marketing affordable for startups, SMBs and
            enterprises, helping them grow first. Every business deserves a chance to thrive online.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {pricing.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl bg-card border ${
                p.popular ? "border-2 border-accent" : "border-border"
              } p-6 flex flex-col items-center text-center transition hover:shadow-elegant hover:-translate-y-1`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-md bg-accent/15 text-accent text-[11px] uppercase tracking-wider px-3 py-1 font-semibold">
                  Popular
                </span>
              )}
              <div className="mt-2 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{p.name}</h3>
              <div className="mt-6 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">{p.price ? "Starting From" : "Pricing"}</div>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="font-display text-3xl font-bold text-foreground">{p.price ? `$${p.price}` : "Custom"}</span>
                {p.price && <span className="text-xs text-muted-foreground">/mo</span>}
              </div>
              <a
                href="#contact"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-md bg-accent text-white px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition"
              >
                <LinkIcon className="h-3.5 w-3.5" /> Explore
              </a>
              <a
                href="#contact"
                className="mt-2 w-full inline-flex items-center justify-center rounded-md border border-accent text-accent px-4 py-2.5 text-sm font-semibold hover:bg-accent/5 transition"
              >
                Contact Us
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ WHY US (image 3) ------------------------------ */
function WhyUs() {
  const points = [
    { icon: GraduationCap, title: "Doctorate-Level Leadership", desc: "Led by experienced industry professionals", tint: "bg-teal-deep/10" },
    { icon: Headphones, title: "24/7 Dedicated Support", desc: "Always-on account management team", tint: "bg-emerald-500/10" },
    { icon: ShieldCheck, title: "98% Client Retention Rate", desc: "Clients who stay and grow with us", tint: "bg-copper/10" },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-5">
          {points.map((p, i) => (
            <div
              key={p.title}
              className={`flex items-center gap-5 rounded-2xl ${p.tint} border border-border p-6 border-l-4 ${
                i === 0 ? "border-l-teal-deep" : i === 1 ? "border-l-emerald-500" : "border-l-copper"
              }`}
            >
              <div className="h-14 w-14 shrink-0 rounded-xl bg-card flex items-center justify-center shadow-card-soft">
                <p.icon className="h-7 w-7 text-foreground" />
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-lg md:text-xl font-bold">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/3] group cursor-pointer">
          <img src={officePoster} alt="Gadgets Guardians HQ" loading="lazy" width={1280} height={800} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-darker/60 via-transparent to-transparent" />
          <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-card/90 backdrop-blur px-4 py-2 text-xs font-semibold text-foreground">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" /> Gadgets Guardians HQ
          </div>
          <button type="button" aria-label="Play video" className="absolute inset-0 m-auto h-20 w-20 rounded-full bg-cream/95 flex items-center justify-center shadow-elegant hover:scale-110 transition">
            <Play className="h-8 w-8 text-teal-deep ml-1 fill-teal-deep" />
          </button>
          <div className="absolute bottom-5 left-5 right-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { v: "400+", l: "Digital Experts" },
              { v: "15+", l: "Countries Served" },
              { v: "30+", l: "Industry Niches" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl bg-teal-darker/70 backdrop-blur border border-cream/10 p-3 text-center text-cream">
                <div className="font-display font-bold text-xl">{s.v}</div>
                <div className="text-[10px] mt-0.5 opacity-80">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ VIDEO TESTIMONIALS (image 2) ------------------------------ */
function VideoTestimonials() {
  return (
    <section id="testimonials" className="py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-balance">Clients Recommend Us</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Our affordable digital services have made a difference. Still unsure? Check out our video testimonials from{" "}
            <span className="text-accent underline underline-offset-4 font-semibold">1000+ satisfied clients</span> to see how we've helped them grow their online business.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="relative rounded-2xl overflow-hidden bg-card shadow-card-soft hover:shadow-elegant transition group cursor-pointer">
              <div className="relative aspect-[4/5]">
                <img src={t.img} alt={t.name} loading="lazy" width={800} height={1024} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-darker/85 via-teal-darker/10 to-transparent" />
                <button type="button" aria-label={`Play ${t.name} testimonial`} className="absolute bottom-5 right-5 h-14 w-14 rounded-full bg-cream/95 flex items-center justify-center shadow-elegant hover:scale-110 transition">
                  <Play className="h-6 w-6 text-teal-deep ml-0.5 fill-teal-deep" />
                </button>
                <div className="absolute bottom-5 left-5 text-cream">
                  <div className="font-display font-bold text-lg">{t.name}</div>
                  <div className="text-sm opacity-85">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ PROCESS ------------------------------ */
function Process() {
  return (
    <section id="process" className="py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">How we work</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">
            A proven 4-step process that compounds growth.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {process.map((p) => (
            <div key={p.step} className="rounded-2xl bg-card border border-border p-7 relative overflow-hidden">
              <div className="font-display text-7xl font-bold text-copper/15 absolute -top-2 -right-2 select-none">{p.step}</div>
              <div className="relative">
                <div className="font-display text-xs font-bold text-accent tracking-widest">STEP {p.step}</div>
                <h3 className="mt-2 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ WORLD MAP (image 5) ------------------------------ */
function WorldMap() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-4 text-center lg:text-left">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-balance leading-tight">
            Satisfied Customers Around The World
          </h2>
          <p className="mt-5 text-muted-foreground">
            Gadgets Guardians has delighted customers in <strong className="text-foreground">15+ countries</strong> worldwide.
          </p>
          <div className="mt-10 inline-block">
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">We Served In Over</div>
            <div className="font-display text-7xl md:text-8xl font-bold text-teal-deep mt-2">15+</div>
            <div className="font-display text-sm tracking-[0.4em] font-bold text-foreground/80">COUNTRIES</div>
          </div>
        </div>
        <div className="lg:col-span-8 relative">
          <img src={worldMap} alt="World map of countries served" loading="lazy" width={1400} height={700} className="w-full" />
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {countries.map((c) => (
              <span key={c.name} className="inline-flex items-center gap-1.5 rounded-full bg-card border border-border px-3 py-1.5 text-xs font-medium">
                <span>{c.flag}</span> {c.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ BLOG (image 2 highlight) ------------------------------ */
function Blog() {
  return (
    <section id="blog" className="py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-accent">From the blog</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">
              Fresh insights from our growth experts.
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
            View all articles <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((b) => (
            <article key={b.title} className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-elegant hover:-translate-y-1 transition-all">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={b.img} alt={b.title} loading="lazy" width={1024} height={700} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute top-4 left-4 inline-flex rounded-full bg-cream/95 text-teal-deep px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">{b.tag}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{b.date}</span><span>•</span><span>{b.read} read</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold leading-snug group-hover:text-accent transition">{b.title}</h3>
                <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Read article <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ CTA ------------------------------ */
function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-hero p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-copper/30 blur-3xl" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center"></div> */}
            <div className="min-w-0">
              {/* <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight text-cream text-balance"> */}
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight break-words text-cream">
                Let's build something <span className="text-copper">worth guarding.</span>
              </h2>
              <p className="mt-5 text-cream/75 max-w-lg">
                Book a free 30-minute strategy call. We'll audit your site, identify the
                biggest growth opportunities and send you a custom roadmap — no obligation.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@gadgetsguardianstech.com" className="flex items-center justify-between gap-3 rounded-2xl bg-cream/[0.06] border border-cream/15 px-6 py-5 hover:bg-cream/[0.1] transition">
                <span className="flex items-center gap-4"><Mail className="h-5 w-5 text-copper flex-shrink-0" /><span className="text-cream break-all text-sm sm:text-base">hello@gadgetsguardianstech.com</span></span>
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
              </a>
              <a href="tel:+910000000000" className="flex items-center justify-between gap-3 rounded-2xl bg-cream/[0.06] border border-cream/15 px-6 py-5 hover:bg-cream/[0.1] transition">
                <span className="flex items-center gap-4"><Phone className="h-5 w-5 text-copper" /><span className="text-cream break-all text-sm sm:text-base">+91 00000 00000</span></span>
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
              </a>
              <a href="https://wa.me/910000000000" className="flex items-center justify-between gap-3 rounded-2xl bg-copper-gradient text-white px-6 py-5 hover:opacity-95 transition shadow-copper">
                <span className="flex items-center gap-4"><MessageCircle className="h-5 w-5" /><span className="font-semibold">Chat on WhatsApp</span></span>
                <ArrowRight className="h-5 w-5 flex-shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FOOTER (image 6 style, no CEO name) ------------------------------ */
function Footer() {
  const offices = [
    { country: "India (HQ)", address: "C 210 A, 4th Floor, Industrial Area, Phase 8B, Mohali, Punjab, 160071" },
    { country: "United Kingdom", address: "White Heather, St Mary's Road, Springborne, Bournemouth, BH14QP, UK" },
    { country: "United States", address: "1234 Market Street, Suite 500, San Francisco, CA 94103, USA" },
    { country: "Canada", address: "Robert Speck Parkway, Suite 750, Mississauga, ON L4Z 1H8, Canada" },
    { country: "Australia", address: "Barmedman Avenue, Gobbagombalin, NSW 2650, Australia" },
  ];
  const tagCloud = ["Digital Marketing", "Social Media Marketing", "Paid Marketing", "Amazon PPC", "Content Writing", "Web Design", "Reputation Management", "Web Analytics", "Influencer Marketing", "Shopify Marketing", "Product Marketing", "Startup Digital Marketing", "Facebook Ads", "Instagram Ads", "YouTube Ads", "Reddit Marketing", "Video Marketing", "Enterprise Digital Marketing", "WordPress Speed Optimization", "AI Digital Marketing"];
  return (
    <footer className="bg-teal-darker text-cream">
      {/* Top headline */}
      <div className="border-b border-cream/10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 text-center">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-cream">The Sun Never Sets on Gadgets Guardians</h3>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-8">
            {offices.map((o) => (
              <div key={o.country} className="text-center">
                <div className="mx-auto h-10 w-10 rounded-md bg-copper/15 flex items-center justify-center mb-3">
                  <Briefcase className="h-5 w-5 text-copper" />
                </div>
                <div className="font-semibold text-cream">{o.country}</div>
                <div className="mt-1 text-xs text-cream/65 leading-relaxed">{o.address}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Middle columns */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <img src={ggLogo.url} alt="Gadgets Guardians" className="h-12 w-12 rounded-lg" />
            <div className="font-display text-xl font-bold">Gadgets <span className="text-copper">Guardians</span></div>
          </div>
          <p className="mt-5 text-sm text-cream/70 leading-relaxed">
            At Gadgets Guardians, each client is our top priority. We ensure every visit is satisfying and meets your expectations. Forward your concerns to{" "}
            <a href="mailto:hello@gadgetsguardianstech.com" className="text-copper font-semibold">hello@gadgetsguardianstech.com</a> anytime — we're committed to delivering our best at all times.
          </p>
          <div className="mt-5 flex gap-2">
            {[Facebook, Instagram, Twitter, Youtube, Linkedin].map((I, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-full bg-cream/5 border border-cream/10 flex items-center justify-center hover:bg-copper hover:border-copper transition">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="min-w-0">
          <h4 className="text-xs uppercase tracking-[0.2em] text-copper font-semibold">Our Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
            {["About Us", "Contact Us", "Client Reviews", "Locations", "Video Testimonials"].map((l) => (
              <li key={l}><a href={l === "About Us" ? "/who-we-are" : "#"} className="hover:text-copper transition">{l}</a></li>
            ))}
          </ul>
        </div>
        <div className="min-w-0">
          <h4 className="text-xs uppercase tracking-[0.2em] text-copper font-semibold">Resources</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
            {["Portfolio", "PPC Portfolio", "SMO Portfolios", "SEO Portfolios", "Case Studies", "Latest Blogs"].map((l) => (
              <li key={l}><a href="#" className="hover:text-copper transition">{l}</a></li>
            ))}
          </ul>
        </div>
        <div className="min-w-0">
          <h4 className="text-xs uppercase tracking-[0.2em] text-copper font-semibold">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
            {["SEO", "PPC", "SMM", "Website Development", "Designing"].map((l) => {
              const slug = l.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
              return <li key={l}><a href={`/services/${slug}`} className="hover:text-copper transition">{l}</a></li>;
            })}
          </ul>
          <div className="mt-6 grid grid-cols-2 gap-2">
            {["Training", "Reseller", "Career", "Referral"].map((l) => (
              <a key={l} href="#" className="rounded-lg bg-cream/5 border border-cream/10 px-3 py-2 text-xs font-medium text-center hover:bg-copper/15 hover:border-copper/30 transition">{l}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Tag cloud */}
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-8 flex flex-wrap justify-center gap-x-2 gap-y-1">
          {tagCloud.map((t) => (
            <a key={t} href="#" className="text-[11px] text-cream/65 hover:text-copper transition border-r border-cream/10 pr-2 last:border-0">{t}</a>
          ))}
        </div>
      </div>

      {/* Partners */}
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-8 grid grid-cols-2 md:grid-cols-5 gap-4">
          {["Google Partner", "Meta Partner", "Bing Partner", "ISO Certified", "DMCA Protected"].map((p) => (
            <div key={p} className="rounded-lg bg-cream/5 border border-cream/10 px-4 py-3 text-center text-xs font-semibold text-cream/85">{p}</div>
          ))}
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/55">
          <p>© {new Date().getFullYear()} Gadgets Guardians. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <a href="#" className="hover:text-copper">Privacy Policy</a>
            <a href="#" className="hover:text-copper">Terms & Conditions</a>
            <a href="#" className="hover:text-copper">Legal Disclaimer</a>
            <a href="#" className="hover:text-copper">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------ TESTIMONIALS (written) ------------------------------ */
function Testimonials() {
  const items = [
    {
      quote:
        "Gadgets Guardians transformed our online presence. Within 6 months our organic traffic tripled and inbound leads are now our #1 channel.",
      name: "Amanda Rivera",
      role: "Founder, NorthPeak Studio",
      img: testimonial1,
    },
    {
      quote:
        "The team is incredibly responsive and data-driven. Their PPC overhaul cut our CPL by 47% while doubling qualified demos.",
      name: "Rohan Mehta",
      role: "Head of Growth, FinEdge",
      img: testimonial2,
    },
    {
      quote:
        "From rebranding to a full Shopify rebuild — they handled it end-to-end. Best agency partnership we've ever had, hands down.",
      name: "Dyllan Dalya",
      role: "Owner, AutoDD",
      img: testimonial3,
    },
  ];
  return (
    <section id="reviews" className="py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">What clients say</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance">
            Loved by <span className="text-accent">200+ brands</span> worldwide.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="rounded-2xl bg-card border border-border p-7 shadow-card-soft hover:shadow-elegant transition flex flex-col">
              <Quote className="h-8 w-8 text-accent/70" />
              <p className="mt-5 text-foreground/85 leading-relaxed flex-1">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-2 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <div className="mt-5 flex items-center gap-3 pt-5 border-t border-border">
                <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div className="min-w-0">
                  <div className="font-display font-bold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FAQ ------------------------------ */
function FAQ() {
  const faqs = [
    {
      q: "What services does Gadgets Guardians offer?",
      a: "We provide SEO, PPC, SMM, Website Development, and Designing services to help businesses build visibility and grow online.",
    },
    {
      q: "How much do your services cost?",
      a: "SEO plans start from $250/month and PPC plans from $200/month. SMM, Website Development, and Designing are priced based on your goals and project scope.",
    },
    {
      q: "How long does it take to see results from SEO?",
      a: "SEO is a compounding investment. Most clients start seeing meaningful ranking and traffic improvements within 3–6 months, with strong ROI typically arriving between months 6–12.",
    },
    {
      q: "Do you work with international clients?",
      a: "Yes! We currently serve clients in 15+ countries including the US, UK, Canada, Australia, UAE, Singapore, Germany and more — with 24/7 dedicated account managers.",
    },
    {
      q: "Will I get reports of the work done?",
      a: "Absolutely. You'll receive transparent weekly progress updates and detailed monthly reports covering KPIs, deliverables, traffic, rankings and ROI.",
    },
    {
      q: "Do you build and design websites too?",
      a: "Yes. Website Development and Designing are two of our core services, alongside SEO, PPC, and SMM.",
    },
  ];
  return (
    <section id="faq" className="py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.25em] text-accent">FAQs</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-balance leading-tight">
            Questions? <span className="text-accent">We've got</span> answers.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Can't find what you're looking for? Reach out and our team will get back within 24 hours.
          </p>
          <a
            href="https://wa.me/910000000000"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-copper-gradient text-white px-6 py-3 text-sm font-semibold shadow-copper hover:scale-[1.02] transition"
          >
            <MessageCircle className="h-4 w-4" /> Ask on WhatsApp
          </a>
        </div>
        <div className="lg:col-span-8 space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="group rounded-2xl bg-card border border-border p-6 open:shadow-card-soft transition"
              {...(i === 0 ? { open: true } : {})}
            >
              <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                <span className="font-display text-base md:text-lg font-bold text-foreground">{f.q}</span>
                <span className="h-9 w-9 shrink-0 rounded-full bg-accent/10 text-accent flex items-center justify-center group-open:bg-accent group-open:text-white transition">
                  <Plus className="h-4 w-4 group-open:rotate-45 transition-transform" />
                </span>
              </summary>
              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ WHATSAPP FLOATING BUTTON ------------------------------ */
function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/910000000000?text=Hi%20Gadgets%20Guardians%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500/60 animate-ping" />
      <span className="relative flex items-center gap-2.5 rounded-full bg-emerald-500 text-white pl-4 pr-5 py-3.5 shadow-[0_18px_40px_-12px_rgba(16,185,129,0.6)] hover:bg-emerald-600 transition">
        <svg viewBox="0 0 32 32" className="h-6 w-6 fill-current" aria-hidden="true">
          <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.385.694 4.605 1.89 6.473L4 29l7.71-1.86A11.93 11.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.628 3 16.001 3Zm0 21.6c-1.71 0-3.36-.45-4.815-1.305l-.345-.21-4.575 1.11 1.155-4.41-.225-.36A9.55 9.55 0 0 1 6.4 15c0-5.295 4.305-9.6 9.6-9.6s9.6 4.305 9.6 9.6-4.304 9.6-9.6 9.6Zm5.355-7.155c-.285-.15-1.695-.84-1.96-.93-.27-.105-.465-.15-.66.15-.21.285-.765.93-.93 1.125-.18.18-.345.21-.63.075-.285-.15-1.215-.45-2.31-1.425a8.7 8.7 0 0 1-1.605-1.995c-.165-.285-.015-.45.135-.585.135-.135.285-.345.435-.51.135-.18.18-.285.285-.495.105-.21.045-.39-.015-.54-.075-.15-.66-1.59-.9-2.16-.24-.585-.495-.495-.66-.495h-.555c-.18 0-.495.075-.75.36-.27.285-1.005.99-1.005 2.4 0 1.41 1.035 2.79 1.17 2.985.15.195 2.04 3.105 4.965 4.35 1.755.75 2.43.825 3.3.69.525-.09 1.695-.69 1.935-1.365.24-.66.24-1.23.165-1.365-.075-.135-.27-.21-.555-.36Z" />
        </svg>
        <span className="hidden sm:inline text-sm font-semibold">Chat with us</span>
      </span>
    </a>
  );
}
