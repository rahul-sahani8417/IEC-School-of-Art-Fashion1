import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  Camera,
  Check,
  ChevronRight,
  Clock,
  Compass,
  Download,
  GraduationCap,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Palette,
  Phone,
  Play,
  School,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";

const accent = "#FDB514";

const images = {
  hero: [
    {
      src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=2200&q=92",
      position: "center top",
    },
    {
      src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=2200&q=92",
      position: "center center",
    },
    {
      src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=2200&q=92",
      position: "center top",
    },
    {
      src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2200&q=92",
      position: "center center",
    },
    {
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=2200&q=92",
      position: "center top",
    },
  ],
  about: [
    {
      src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=2200&q=92",
      position: "center center",
    },
    {
      src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2200&q=92",
      position: "center top",
    },
    {
      src: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=2200&q=92",
      position: "center center",
    },
  ],
  courses: [
    {
      src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=2200&q=92",
      position: "center top",
    },
    {
      src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2200&q=92",
      position: "center top",
    },
    {
      src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=2200&q=92",
      position: "center center",
    },
  ],
  work: [
    {
      src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=2200&q=92",
      position: "center top",
    },
    {
      src: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=2200&q=92",
      position: "center center",
    },
    {
      src: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=2200&q=92",
      position: "center top",
    },
  ],
  careers: [
    {
      src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=2200&q=92",
      position: "center top",
    },
    {
      src: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=2200&q=92",
      position: "center center",
    },
    {
      src: "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=2200&q=92",
      position: "center top",
    },
  ],
  campus: [
    {
      src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2200&q=92",
      position: "center center",
    },
    {
      src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=2200&q=92",
      position: "center top",
    },
    {
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=2200&q=92",
      position: "center top",
    },
  ],
  admissions: [
    {
      src: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=2200&q=92",
      position: "center center",
    },
    {
      src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=2200&q=92",
      position: "center top",
    },
    {
      src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=2200&q=92",
      position: "center top",
    },
  ],
  contact: [
    {
      src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=2200&q=92",
      position: "center center",
    },
    {
      src: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=2200&q=92",
      position: "center center",
    },
    {
      src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2200&q=92",
      position: "center top",
    },
  ],
};

const resolveImage = (image) =>
  typeof image === "string" ? { src: image, position: "center" } : image;

const cardImages = [
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=86",
  "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=900&q=86",
  "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=86",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=86",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=86",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=86",
];

const gallery = [
  {
    title: "Editorial Runway Look",
    type: "Runway",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=900&q=86",
  },
  {
    title: "Studio Styling Session",
    type: "Styling",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=86",
  },
  {
    title: "Fashion Brand Campaign",
    type: "Branding",
    image:
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=900&q=86",
  },
  {
    title: "Portfolio Cover Design",
    type: "Portfolio",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=86",
  },
  {
    title: "Creative Shoot Direction",
    type: "Photography",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=86",
  },
  {
    title: "Luxury Visual Board",
    type: "Branding",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=86",
  },
  {
    title: "Student Lookbook",
    type: "Portfolio",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=900&q=86",
  },
  {
    title: "Fashion Week Practice",
    type: "Runway",
    image:
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=900&q=86",
  },
  {
    title: "Campaign Reel Concept",
    type: "Photography",
    image:
      "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=900&q=86",
  },
];

const navItems = [
  ["Home", "/"],
  ["About IEC", "/about"],
  ["Courses", "/courses"],
  ["Student Work", "/student-work"],
  ["Career Opportunities", "/careers"],
  ["Campus Life", "/campus-life"],
  ["Admissions", "/admissions"],
  ["Contact", "/contact"],
];

const whyCards = [
  [
    "Industry-Oriented Practical Learning",
    "Work on real creative projects, styling briefs, brand concepts, shoots, and portfolio development.",
    Scissors,
  ],
  [
    "Fashion + Marketing Approach",
    "Learn both design and modern fashion branding, social media, and creative marketing skills.",
    Palette,
  ],
  [
    "Portfolio-Based Training",
    "Build a strong professional portfolio throughout your learning journey.",
    BookOpen,
  ],
  [
    "Creative Learning Environment",
    "Experience a modern, inspiring campus designed for creative growth.",
    School,
  ],
  [
    "Industry Mentorship",
    "Learn from experienced mentors and visiting industry professionals.",
    HeartHandshake,
  ],
  [
    "Career & Entrepreneurship Focus",
    "Develop skills for jobs, freelancing, personal brands, or launching your own venture.",
    BriefcaseBusiness,
  ],
];

const careers = [
  "Fashion Designer",
  "Fashion Stylist",
  "Fashion Content Creator",
  "Brand Visual Designer",
  "Fashion Marketing Executive",
  "Creative Director",
  "Social Media Fashion Strategist",
  "Fashion Entrepreneur",
  "Personal Brand Consultant",
  "Fashion Photographer Assistant",
];

const modules = [
  "Fashion Design Fundamentals",
  "Styling & Creative Direction",
  "Fashion Branding",
  "Fashion Marketing",
  "Social Media for Fashion Brands",
  "Fashion Photography Basics",
  "Portfolio Development",
  "Trend Forecasting",
  "Creative Content Strategy",
  "Fashion Entrepreneurship",
];

const courses = [
  [
    "Fashion Design",
    "Design foundation, illustration, garment thinking, styling sensibility, and presentation craft.",
    "6 to 12 months",
    ["Design basics", "Fashion illustration", "Portfolio boards"],
  ],
  [
    "Fashion Styling",
    "Editorial, personal, commercial, and campaign styling with practical shoot planning.",
    "3 to 6 months",
    ["Look creation", "Shoot direction", "Wardrobe planning"],
  ],
  [
    "Fashion Marketing",
    "Fashion consumer insight, content strategy, campaign planning, and brand communication.",
    "3 to 6 months",
    ["Campaign planning", "Social media", "Market research"],
  ],
  [
    "Fashion Branding",
    "Build premium visual identities, brand stories, moodboards, and launch-ready fashion concepts.",
    "3 to 6 months",
    ["Brand identity", "Moodboards", "Visual systems"],
  ],
  [
    "Creative Content Strategy",
    "Plan reels, editorials, campaign stories, and social-first content for fashion brands.",
    "8 to 12 weeks",
    ["Reels planning", "Content calendars", "Creative briefs"],
  ],
  [
    "Portfolio Development",
    "Shape your work into a polished portfolio for admissions, jobs, freelance, or brand launch.",
    "8 to 12 weeks",
    ["Curation", "Presentation", "Project storytelling"],
  ],
  [
    "Fashion Entrepreneurship",
    "Develop a market-ready brand concept, customer positioning, and launch plan.",
    "3 to 6 months",
    ["Business model", "Brand launch", "Pricing basics"],
  ],
];

const campusLife = [
  "Creative workspace",
  "Fashion labs",
  "Portfolio rooms",
  "Student events",
  "Workshops",
  "Fashion shows",
  "Photo shoot days",
];

function ScrollReveal({ children, className = "", delay = 0, as = "section" }) {
  const Component = motion[as] || motion.section;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}

function MotionCard({ children, className = "", delay = 0 }) {
  return (
    <motion.article
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay }}
      whileHover={{ y: -8 }}
    >
      {children}
    </motion.article>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="marquee">
          <span>
            Upcoming Intake Open | Book Free Career Counseling | Build Your
            Fashion Career With IEC | Limited Seats Available |{" "}
          </span>
          <span>
            Upcoming Intake Open | Book Free Career Counseling | Build Your
            Fashion Career With IEC | Limited Seats Available |{" "}
          </span>
          <span>
            Upcoming Intake Open | Book Free Career Counseling | Build Your
            Fashion Career With IEC | Limited Seats Available |{" "}
          </span>
        </div>
      </div>
      <header className={`header ${scrolled ? "headerScrolled" : ""}`}>
        <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logoMark">IEC</span>
          <span>
            <small>School of</small>
            Art & Fashion
          </span>
        </NavLink>
        <nav className={`nav ${open ? "navOpen" : ""}`}>
          {navItems.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="headerActions">
          <NavLink className="goldButton smallButton" to="/admissions">
            Apply Now
          </NavLink>
          <button
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
    </>
  );
}

function HeroSlider({
  eyebrow,
  title,
  copy,
  images: slides,
  buttons = [],
  compact = false,
}) {
  const [active, setActive] = useState(0);
  const normalizedSlides = slides.map(resolveImage);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      5200,
    );
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section className={`hero ${compact ? "subHero" : ""}`}>
      <div className="heroMedia">
        {normalizedSlides.map(({ src, position = "center" }, index) => (
          <motion.img
            key={src}
            src={src}
            alt=""
            className={
              index === active ? "heroImage activeHeroImage" : "heroImage"
            }
            style={{ objectPosition: position }}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            initial={false}
            animate={{ scale: index === active ? 1.1 : 1.04 }}
            transition={{ duration: 7, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
        <div className="heroOverlay" />
      </div>
      <motion.div
        className="heroContent"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{copy}</p>
        {!!buttons.length && (
          <div className="buttonRow">
            {buttons.map((button, index) => (
              <NavLink
                key={button.label}
                to={button.to}
                className={index === 0 ? "goldButton shimmer" : "outlineButton"}
              >
                {button.icon}
                {button.label}
              </NavLink>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, copy }) {
  return (
    <div className="sectionTitle">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function CountUp({ value, suffix = "" }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {`${value}${suffix}`}
    </motion.span>
  );
}

function TrustStats() {
  const stats = [
    ["Since", "1997", "Shaping creative futures", Award],
    ["27+", "Years of Excellence", "Since 1997", Star],
    ["3500+", "Students Trained", "Creative alumni network", Users],
    ["100%", "Portfolio-Based Learning", "Every student builds work", Camera],
    [
      "Industry",
      "Mentorship Program",
      "Guided by professionals",
      HeartHandshake,
    ],
    ["Placement", "Career Support", "Advising and readiness", ShieldCheck],
  ];

  return (
    <ScrollReveal className="statsWrap">
      {stats.map(([label, value, detail, Icon], index) => (
        <MotionCard
          className="statCard glassCard"
          key={value}
          delay={index * 0.04}
        >
          <Icon size={30} />
          <div>
            <span>
              {label === "27+" ? <CountUp value={27} suffix="+" /> : label}
            </span>
            <strong>{value}</strong>
            <small>{detail}</small>
          </div>
        </MotionCard>
      ))}
    </ScrollReveal>
  );
}

function FeatureGrid() {
  return (
    <ScrollReveal className="pageBand">
      <SectionTitle
        eyebrow="Why Students Choose IEC"
        title="Why Students Choose IEC School of Art & Fashion"
      />
      <div className="bentoGrid">
        {whyCards.map(([title, copy, Icon], index) => (
          <MotionCard
            className="featureCard beamCard"
            key={title}
            delay={index * 0.05}
          >
            <div className="iconBubble">
              <Icon size={24} />
            </div>
            <h3>{title}</h3>
            <p>{copy}</p>
            <img src={cardImages[index]} alt={title} />
          </MotionCard>
        ))}
      </div>
    </ScrollReveal>
  );
}

function CareerCards() {
  return (
    <ScrollReveal className="pageBand tightBand">
      <SectionTitle
        eyebrow="Career Opportunities"
        title="Career Opportunities After This Program"
        copy="Fashion careers today blend creativity, branding, content, and digital influence."
      />
      <div className="careerRail">
        {careers.map((career, index) => (
          <MotionCard className="careerCard" key={career} delay={index * 0.035}>
            <img src={gallery[index % gallery.length].image} alt={career} />
            <h3>{career}</h3>
          </MotionCard>
        ))}
      </div>
      <div className="nameMarquee">
        <span>
          {careers.join(" • ")} • {careers.join(" • ")}
        </span>
      </div>
    </ScrollReveal>
  );
}

function Transformation() {
  return (
    <ScrollReveal className="splitBand">
      <div className="splitCopy">
        <span className="eyebrow">Student Transformation</span>
        <h2>From Passion to Professional Creative Career</h2>
        <div className="compareGrid">
          <div>
            <h3>Before Joining</h3>
            {[
              "Confused about creative career",
              "No portfolio",
              "Limited exposure",
              "No industry direction",
            ].map((item) => (
              <p key={item}>
                <X size={16} /> {item}
              </p>
            ))}
          </div>
          <div>
            <h3>After Learning at IEC</h3>
            {[
              "Professional portfolio",
              "Fashion industry exposure",
              "Practical skills",
              "Career confidence",
              "Branding and content knowledge",
            ].map((item) => (
              <p key={item}>
                <Check size={16} /> {item}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="transformationVisual">
        <img
          src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=900&q=86"
          alt="Creative student before portfolio training"
        />
        <img
          src="https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=900&q=86"
          alt="Confident fashion professional after training"
        />
        <button aria-label="Transformation progress">
          <ChevronRight size={30} />
        </button>
      </div>
    </ScrollReveal>
  );
}

function ModuleGrid() {
  return (
    <ScrollReveal className="pageBand">
      <SectionTitle eyebrow="What You'll Learn" title="What You'll Learn" />
      <div className="moduleGrid">
        {modules.map((module, index) => (
          <MotionCard
            className="moduleCard glassCard"
            key={module}
            delay={index * 0.03}
          >
            <Sparkles size={22} />
            <span>{module}</span>
          </MotionCard>
        ))}
      </div>
    </ScrollReveal>
  );
}

function GalleryPreview({ showFilters = false }) {
  const [filter, setFilter] = useState("All");
  const filters = [
    "All",
    "Styling",
    "Branding",
    "Photography",
    "Portfolio",
    "Runway",
  ];
  const visible =
    filter === "All" ? gallery : gallery.filter((item) => item.type === filter);

  return (
    <ScrollReveal className="pageBand">
      <SectionTitle
        eyebrow="Student Work & Creative Projects"
        title="Student Work & Creative Projects"
      />
      {showFilters && (
        <div className="filterTabs">
          {filters.map((item) => (
            <button
              key={item}
              className={filter === item ? "activeFilter" : ""}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
      <div className="galleryGrid">
        {visible.map((item, index) => (
          <MotionCard
            className={`galleryCard ${index % 3 === 0 ? "tall" : ""}`}
            key={item.title}
            delay={index * 0.04}
          >
            <img src={item.image} alt={item.title} />
            <div>
              <span>{item.type}</span>
              <h3>{item.title}</h3>
              <button>
                View Project <ArrowRight size={16} />
              </button>
            </div>
          </MotionCard>
        ))}
      </div>
    </ScrollReveal>
  );
}

function TrustBand() {
  const cards = [
    "Practical Skill Development",
    "Career-Oriented Learning",
    "Mentorship Support",
    "Professional Portfolio Building",
    "Industry-Relevant Education",
  ];
  return (
    <ScrollReveal className="trustBand">
      <div className="sinceSeal">
        <Award size={34} />
        <span>Since</span>
        <strong>1997</strong>
      </div>
      <div>
        <span className="eyebrow">A Trusted Educational Brand in Nepal</span>
        <p>
          IEC Group Nepal has been shaping creative education since 1997 with
          practical learning, career orientation, and industry exposure.
        </p>
      </div>
      <div className="trustCards">
        {cards.map((card) => (
          <div className="miniTrust" key={card}>
            <ShieldCheck size={20} /> {card}
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}

function CounselingCTA() {
  return (
    <ScrollReveal className="ctaBand">
      <img
        src="https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=900&q=84"
        alt="Fashion counseling and creative career guidance"
      />
      <div>
        <span className="eyebrow">Career Counseling</span>
        <h2>Not Sure If Fashion Is the Right Career for You?</h2>
        <p>
          Book a free career counseling session with our mentors and explore
          opportunities in fashion, branding, styling, and creative industries.
        </p>
      </div>
      <div className="ctaButtons">
        <NavLink className="goldButton shimmer" to="/admissions">
          Book Free Counseling
        </NavLink>
        <NavLink className="outlineButton" to="/contact">
          Talk to an Admission Advisor
        </NavLink>
        <a className="outlineButton" href="https://wa.me/9779801234567">
          <MessageCircle size={18} /> WhatsApp Us
        </a>
      </div>
    </ScrollReveal>
  );
}

function IntakeCard() {
  const target = new Date("2026-06-15T09:00:00+05:45").getTime();
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const diff = Math.max(target - now, 0);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return (
    <ScrollReveal className="intakeBand glassCard">
      <div>
        <span className="eyebrow">Upcoming Intake Now Open</span>
        <h2>Start Your Creative Career Journey</h2>
        <div className="intakeDetails">
          <p>
            <CalendarDays size={18} /> Intake Date: 15th June 2026
          </p>
          <p>
            <Clock size={18} /> Batch Timing: 9:00 AM - 1:00 PM
          </p>
          <p>
            <MapPin size={18} /> IEC Campus, Kupondole, Lalitpur, Nepal
          </p>
          <p>
            <Phone size={18} /> 01-5421654, 9801234568
          </p>
        </div>
      </div>
      <div className="countdown">
        {[
          [days, "Days"],
          [hours, "Hours"],
          [minutes, "Minutes"],
          [seconds, "Seconds"],
        ].map(([value, label]) => (
          <div key={label}>
            <strong>{String(value).padStart(2, "0")}</strong>
            <span>{label}</span>
          </div>
        ))}
        <NavLink className="goldButton" to="/admissions">
          Apply Now
        </NavLink>
      </div>
    </ScrollReveal>
  );
}

function LeadForm({ title = "Start Your Creative Career Journey" }) {
  return (
    <ScrollReveal className="leadFormWrap">
      <div className="leadIntro">
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=700&q=86"
          alt="Fashion portfolio desk"
        />
        <div>
          <span className="eyebrow">Free Counseling</span>
          <h2>{title}</h2>
          <p>
            Fill out the form and our admission team will contact you for course
            counseling.
          </p>
        </div>
      </div>
      <form className="leadForm glassCard">
        <label>
          Full Name
          <input type="text" placeholder="Your full name" />
        </label>
        <label>
          Phone Number
          <input type="tel" placeholder="9800000000" />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          City
          <input type="text" placeholder="Your city" />
        </label>
        <label>
          Interested Course
          <select defaultValue="">
            <option value="" disabled>
              Select a course
            </option>
            {courses.map(([course]) => (
              <option key={course}>{course}</option>
            ))}
          </select>
        </label>
        <label>
          Preferred Counseling Mode
          <select defaultValue="">
            <option value="" disabled>
              Select mode
            </option>
            <option>Campus Visit</option>
            <option>Phone Call</option>
            <option>WhatsApp</option>
            <option>Online Counseling</option>
          </select>
        </label>
        <button type="button" className="goldButton shimmer">
          Submit & Book Free Counseling
        </button>
      </form>
    </ScrollReveal>
  );
}

function Home() {
  return (
    <>
      <HeroSlider
        eyebrow="IEC School of Art & Fashion"
        title="Build Your Career in Fashion & Creative Marketing"
        copy="Practical, portfolio-driven fashion education designed for students who want real-world creative careers in fashion, branding, styling, content creation, and entrepreneurship."
        images={images.hero}
        buttons={[
          {
            label: "Book Free Career Counseling",
            to: "/admissions",
            icon: <ArrowRight size={18} />,
          },
          {
            label: "Apply for Upcoming Intake",
            to: "/admissions",
            icon: <ArrowRight size={18} />,
          },
          {
            label: "Download Course Brochure",
            to: "/courses",
            icon: <Download size={18} />,
          },
          {
            label: "Schedule Campus Visit",
            to: "/contact",
            icon: <CalendarDays size={18} />,
          },
        ]}
      />
      <TrustStats />
      <FeatureGrid />
      <CareerCards />
      <Transformation />
      <ModuleGrid />
      <GalleryPreview />
      <TrustBand />
      <CounselingCTA />
      <IntakeCard />
      <LeadForm />
    </>
  );
}

function About() {
  const timeline = [
    "1997: IEC begins shaping creative education in Nepal",
    "2005: Creative learning expands through practical projects",
    "2015: Portfolio-led learning becomes a key strength",
    "2026: IEC continues building future-ready fashion talent",
  ];
  return (
    <>
      <HeroSlider
        compact
        eyebrow="About IEC"
        title="Fashion Futures Start Here"
        copy="Practical training, mentorship, and portfolio development for confident creative careers."
        images={images.about}
      />
      <ScrollReveal className="twoColumn pageBand">
        <div>
          <SectionTitle
            eyebrow="IEC Story"
            title="Shaping Creative Futures Since 1997"
            copy="IEC Group Nepal has built a trusted name in creative education through practical skill development, student mentorship, and career-focused learning."
          />
          <p className="richText">
            At IEC School of Art & Fashion, students learn inside a studio-led
            environment where ideas become styled looks, portfolios, brand
            concepts, campaigns, and presentation-ready creative work.
          </p>
        </div>
        <img
          className="roundedImage"
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=86"
          alt="IEC mentor and student collaboration"
        />
      </ScrollReveal>
      <ScrollReveal className="timelineBand">
        {timeline.map((item, index) => (
          <MotionCard className="timelineItem" key={item} delay={index * 0.06}>
            <span>{index + 1}</span>
            <p>{item}</p>
          </MotionCard>
        ))}
      </ScrollReveal>
      <InfoCards
        title="Mission & Vision"
        eyebrow="Our Promise"
        items={[
          "Build practical creative confidence",
          "Guide students toward fashion careers",
          "Develop portfolios with industry relevance",
          "Support parents with a trusted learning environment",
        ]}
      />
      <Mentors />
      <CampusPreview />
      <CounselingCTA />
    </>
  );
}

function CourseCard({ course, index }) {
  const [name, description, duration, skills] = course;
  return (
    <MotionCard className="courseCard beamCard" delay={index * 0.05}>
      <img src={gallery[index % gallery.length].image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <strong>Duration: {duration}</strong>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>
              <Check size={15} /> {skill}
            </li>
          ))}
        </ul>
        <NavLink className="outlineButton" to="/admissions">
          Ask About This Course <ArrowRight size={16} />
        </NavLink>
      </div>
    </MotionCard>
  );
}

function Courses() {
  return (
    <>
      <HeroSlider
        compact
        eyebrow="Courses"
        title="Fashion Courses for Creators"
        copy="Choose practical programs in design, styling, branding, marketing, and portfolio development."
        images={images.courses}
      />
      <ScrollReveal className="pageBand">
        <SectionTitle
          eyebrow="Programs"
          title="Explore IEC Courses"
          copy="Every course is built around practical assignments, creative presentation, mentorship, and portfolio output."
        />
        <div className="courseGrid">
          {courses.map((course, index) => (
            <CourseCard key={course[0]} course={course} index={index} />
          ))}
        </div>
      </ScrollReveal>
      <InfoCards
        title="Which Program Fits You?"
        eyebrow="Compare Pathways"
        items={[
          "Design-focused students can begin with Fashion Design",
          "Content-led students can choose Fashion Marketing or Creative Content Strategy",
          "Brand builders can combine Fashion Branding with Entrepreneurship",
          "Every pathway can end with Portfolio Development",
        ]}
      />
      <Faq />
      <CounselingCTA />
    </>
  );
}

function StudentWork() {
  return (
    <>
      <HeroSlider
        compact
        eyebrow="Student Work"
        title="Student Fashion Portfolios"
        copy="Explore moodboards, shoots, runway looks, styling concepts, and brand projects."
        images={images.work}
      />
      <GalleryPreview showFilters />
      <VideoCards />
      <CounselingCTA />
    </>
  );
}

function CareersPage() {
  const roadmap = [
    "Learn",
    "Build Portfolio",
    "Industry Exposure",
    "Internship/Freelance",
    "Career Launch",
  ];
  return (
    <>
      <HeroSlider
        compact
        eyebrow="Career Opportunities"
        title="Build a Fashion Career"
        copy="Connect practical skills with opportunities in design, styling, branding, content, and entrepreneurship."
        images={images.careers}
      />
      <CareerCards />
      <ScrollReveal className="roadmapBand">
        <SectionTitle
          eyebrow="Career Roadmap"
          title="From Classroom Practice to Career Launch"
        />
        <div className="roadmap">
          {roadmap.map((step, index) => (
            <MotionCard
              className="roadStep glassCard"
              key={step}
              delay={index * 0.06}
            >
              <span>{index + 1}</span>
              <h3>{step}</h3>
            </MotionCard>
          ))}
        </div>
      </ScrollReveal>
      <InfoCards
        title="Career Potential"
        eyebrow="Creative Industry Paths"
        items={[
          "Freelance styling and creative direction",
          "Fashion brand marketing and social media",
          "Studio, campaign, and shoot assistance",
          "Boutique, label, and personal brand launch",
        ]}
      />
      <CounselingCTA />
    </>
  );
}

function CampusLife() {
  return (
    <>
      <HeroSlider
        compact
        eyebrow="Campus Life"
        title="Creative Campus Life"
        copy="Study in a visual, collaborative space for shoots, workshops, fashion practice, and exploration."
        images={images.campus}
      />
      <CampusPreview />
      <InfoCards
        title="Life at IEC"
        eyebrow="Creative Experiences"
        items={campusLife}
      />
      <GalleryPreview />
      <Testimonials />
    </>
  );
}

function Admissions() {
  return (
    <>
      <HeroSlider
        compact
        eyebrow="Admissions"
        title="Apply for Upcoming Intake"
        copy="Start with free counseling, choose your course pathway, and begin your creative journey."
        images={images.admissions}
      />
      <Process />
      <InfoCards
        title="Eligibility & Documents"
        eyebrow="Admission Guide"
        items={[
          "Students interested in fashion, styling, branding, content, or creative entrepreneurship may apply",
          "Recent academic documents",
          "Citizenship or identity document",
          "Passport size photo",
          "Counseling discussion with admission advisor",
        ]}
      />
      <IntakeCard />
      <ScrollReveal className="scholarshipCard beamCard">
        <Sparkles size={34} />
        <div>
          <span className="eyebrow">Limited Seats</span>
          <h2>Scholarship and Fee Counseling Available</h2>
          <p>
            Talk to our admission advisor about course selection, installment
            options, available seats, and scholarship guidance.
          </p>
        </div>
      </ScrollReveal>
      <LeadForm title="Submit Your Admission Inquiry" />
    </>
  );
}

function Contact() {
  return (
    <>
      <HeroSlider
        compact
        eyebrow="Contact IEC"
        title="Talk to IEC Admissions"
        copy="Book a campus visit or speak with our team about the right creative pathway for you."
        images={images.contact}
      />
      <ScrollReveal className="contactGrid pageBand">
        <MotionCard className="contactCard glassCard">
          <Phone size={26} />
          <h3>Call IEC</h3>
          <p>
            01-5421654
            <br />
            9801234568
          </p>
        </MotionCard>
        <MotionCard className="contactCard glassCard">
          <MessageCircle size={26} />
          <h3>WhatsApp</h3>
          <p>Chat with our admission team for quick counseling.</p>
          <a href="https://wa.me/9779801234567">Message Now</a>
        </MotionCard>
        <MotionCard className="contactCard glassCard">
          <MapPin size={26} />
          <h3>Campus Location</h3>
          <p>IEC Campus, Kupondole, Lalitpur, Nepal</p>
        </MotionCard>
        <MotionCard className="contactCard glassCard">
          <Mail size={26} />
          <h3>Email</h3>
          <p>info@iec.edu.np</p>
        </MotionCard>
      </ScrollReveal>
      <ScrollReveal className="mapBand">
        <div className="mapPlaceholder">
          <MapPin size={46} />
          <h3>Google Map Placeholder</h3>
          <p>IEC School of Art & Fashion, Kupondole, Lalitpur</p>
        </div>
        <LeadForm title="Send Us a Message" />
      </ScrollReveal>
    </>
  );
}

function InfoCards({ eyebrow, title, items }) {
  return (
    <ScrollReveal className="pageBand">
      <SectionTitle eyebrow={eyebrow} title={title} />
      <div className="infoGrid">
        {items.map((item, index) => (
          <MotionCard
            className="infoCard glassCard"
            key={item}
            delay={index * 0.04}
          >
            <Sparkles size={22} />
            <h3>{item}</h3>
          </MotionCard>
        ))}
      </div>
    </ScrollReveal>
  );
}

function Mentors() {
  const mentors = [
    "Fashion Design Mentor",
    "Styling Mentor",
    "Brand Strategy Mentor",
  ];
  return (
    <ScrollReveal className="pageBand">
      <SectionTitle
        eyebrow="Mentors"
        title="Guided by Creative Professionals"
      />
      <div className="mentorGrid">
        {mentors.map((mentor, index) => {
          const image = resolveImage(images.careers[index]);

          return (
            <MotionCard
              className="mentorCard"
              key={mentor}
              delay={index * 0.06}
            >
              <img
                src={image.src}
                alt={mentor}
                style={{ objectPosition: image.position }}
              />
              <h3>{mentor}</h3>
              <p>
                Practical guidance for briefs, styling decisions, brand
                thinking, and portfolio presentation.
              </p>
            </MotionCard>
          );
        })}
      </div>
    </ScrollReveal>
  );
}

function CampusPreview() {
  return (
    <ScrollReveal className="campusMosaic pageBand">
      <SectionTitle
        eyebrow="Campus Environment"
        title="Creative Spaces Built for Visual Learning"
      />
      <div className="mosaicGrid">
        {images.campus
          .concat(images.courses)
          .slice(0, 5)
          .map((item, index) => {
            const image = resolveImage(item);

            return (
              <MotionCard
                className={`mosaicItem ${index === 0 ? "wide" : ""}`}
                key={image.src}
                delay={index * 0.04}
              >
                <img
                  src={image.src}
                  alt="IEC creative campus and learning space"
                  style={{ objectPosition: image.position }}
                />
              </MotionCard>
            );
          })}
      </div>
    </ScrollReveal>
  );
}

function Faq() {
  const faqs = [
    [
      "Do I need prior fashion experience?",
      "No. IEC programs are designed to guide beginners as well as students with creative exposure.",
    ],
    [
      "Will I build a portfolio?",
      "Yes. Portfolio-based learning is central to the IEC experience.",
    ],
    [
      "Can parents join counseling?",
      "Yes. Parents are welcome for admission and career counseling discussions.",
    ],
  ];
  return (
    <ScrollReveal className="faqBand">
      <SectionTitle eyebrow="FAQ" title="Course Questions" />
      {faqs.map(([question, answer]) => (
        <details key={question}>
          <summary>{question}</summary>
          <p>{answer}</p>
        </details>
      ))}
    </ScrollReveal>
  );
}

function VideoCards() {
  return (
    <ScrollReveal className="pageBand">
      <SectionTitle eyebrow="Reels & Process" title="Creative Process Cards" />
      <div className="videoGrid">
        {[
          "Shoot Planning Reel",
          "Moodboard Walkthrough",
          "Runway Prep Clip",
        ].map((title, index) => (
          <MotionCard className="videoCard" key={title} delay={index * 0.06}>
            <img src={gallery[index + 2].image} alt={title} />
            <button aria-label={title}>
              <Play size={28} />
            </button>
            <h3>{title}</h3>
          </MotionCard>
        ))}
      </div>
    </ScrollReveal>
  );
}

function Testimonials() {
  return (
    <ScrollReveal className="testimonialBand">
      <SectionTitle
        eyebrow="Student Voices"
        title="Confidence Built Through Practice"
      />
      <div className="testimonialGrid">
        {[
          "IEC helped me understand how to present fashion ideas professionally.",
          "The portfolio work made my creative direction clearer.",
          "Counseling helped my family understand fashion as a real career path.",
        ].map((quote, index) => (
          <MotionCard
            className="testimonial glassCard"
            key={quote}
            delay={index * 0.06}
          >
            <Star size={22} fill={accent} />
            <p>{quote}</p>
          </MotionCard>
        ))}
      </div>
    </ScrollReveal>
  );
}

function Process() {
  const steps = [
    "Book free counseling",
    "Choose course pathway",
    "Submit documents",
    "Confirm seat",
    "Begin portfolio learning",
  ];
  return (
    <ScrollReveal className="processBand pageBand">
      <SectionTitle
        eyebrow="Admission Process"
        title="Simple Steps to Join IEC"
      />
      <div className="processGrid">
        {steps.map((step, index) => (
          <MotionCard
            className="processStep beamCard"
            key={step}
            delay={index * 0.05}
          >
            <span>{index + 1}</span>
            <h3>{step}</h3>
          </MotionCard>
        ))}
      </div>
    </ScrollReveal>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footerBrand">
        <div className="logo">
          <span className="logoMark">IEC</span>
          <span>
            <small>School of</small>Art & Fashion
          </span>
        </div>
        <p>Shaping creative futures since 1997.</p>
        <div className="socials">
          <Instagram size={18} />
          <MessageCircle size={18} />
          <Mail size={18} />
        </div>
      </div>
      <div>
        <h3>Quick Links</h3>
        {navItems.slice(1, 5).map(([label, path]) => (
          <NavLink key={path} to={path}>
            {label}
          </NavLink>
        ))}
      </div>
      <div>
        <h3>Programs</h3>
        {courses.slice(0, 4).map(([course]) => (
          <NavLink key={course} to="/courses">
            {course}
          </NavLink>
        ))}
      </div>
      <div>
        <h3>Contact IEC</h3>
        <p>Kupondole, Lalitpur, Nepal</p>
        <p>01-5421654, 9801234568</p>
        <p>info@iec.edu.np</p>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="footerBottom">
        <p className="copyright">
          © {new Date().getFullYear()} IEC School of Art & Fashion. All Rights
          Reserved.
        </p>

        {/* POWERED BY */}
        <div className="poweredBy">
          <a
            href="https://fabulousmedia.in/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="FabulousMedia"
          >
            <img src="public/image.png" alt="FabulousMedia" />
          </a>

          <span className="divider" />

          <a
            href="https://gocommercially.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GoCommercially"
          >
            <img src="public/go.png" alt="GoCommercially" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function FloatingButtons() {
  return (
    <div className="floatingButtons">
      <a className="phoneFloat" href="tel:+97715421654">
        <Phone size={20} />
        <span>Free Counseling</span>
      </a>
      <a
        className="whatsappFloat"
        href="https://wa.me/9779801234567"
        aria-label="WhatsApp IEC"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/student-work" element={<StudentWork />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
