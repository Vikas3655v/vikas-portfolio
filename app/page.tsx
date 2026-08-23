const skills = [
  ["React", "FRONTEND", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"],
  ["JavaScript", "LANGUAGE", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
  ["Python", "LANGUAGE", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"],
  ["Java", "LANGUAGE", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"],
  ["C++", "LANGUAGE", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"],
  ["HTML5", "FRONTEND", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"],
  ["CSS3", "FRONTEND", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"],
  ["Node.js", "BACKEND", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"],
  ["Express", "BACKEND", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"],
  ["Flutter", "APPLICATION", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"],
  ["SQL", "DATABASE", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"],
  ["SQLite", "DATABASE", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"],
  ["MongoDB", "DATABASE", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"],
  ["TensorFlow", "AI/ML", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"],
  ["Keras", "AI/ML", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg"],
  ["PyTorch", "AI/ML", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"],
  ["Scikit-learn", "AI/ML", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg"],
  ["OpenCV", "COMPUTER VISION", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"],
  ["NumPy", "DATA SCIENCE", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"],
  ["Pandas", "DATA SCIENCE", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"],
  ["Git", "TOOLS", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"],
  ["GitHub", "TOOLS", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"],
  ["VS Code", "TOOLS", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"],
];

const projects = [
  { title: "AI-Powered Smart Surveillance & Personalized Store Recommendations", description: "AI/computer-vision project focused on surveillance event analysis and personalized store recommendation logic.", stack: ["Python", "AI/ML", "Computer Vision"], href: "https://github.com/Vikas3655v/Vikas/tree/main/projects/smart-retail-surveillance", proof: "GitHub implementation" },
  { title: "Real-Time Object Detection & Activity Recognition", description: "Real-time video processing workflow using object detection and computer-vision techniques for activity analysis.", stack: ["Python", "YOLO", "OpenCV"], href: "https://github.com/Vikas3655v/Vikas/tree/main/projects/object-detection-activity-recognition", proof: "GitHub implementation" },
  { title: "Plant Disease Recognition using Deep Learning", description: "Deep-learning image classification workflow covering dataset preparation, training, evaluation and inference.", stack: ["Python", "TensorFlow", "CNN"], href: "https://github.com/Vikas3655v/Vikas/tree/main/projects/plant-disease-recognition", proof: "GitHub implementation" },
  { title: "Advance Counter Drone System for Localized Networks", description: "Defensive monitoring project focused on localized-network telemetry analysis and suspicious-pattern detection.", stack: ["Python", "Networking", "Telemetry"], href: "https://github.com/Vikas3655v/Vikas/tree/main/projects/counter-drone-local-network", proof: "GitHub implementation" },
  { title: "Library Management System", description: "Application for managing library operations with object-oriented design, validation, collections and testing.", stack: ["Java", "OOP", "Maven", "JUnit"], href: "https://github.com/Vikas3655v/Vikas/tree/main/projects/library-management-system", proof: "GitHub implementation" },
];

const certifications = [
  { title: "Artificial Intelligence Course — Grade A+", issuer: "Rinex Organization", proof: "Certificate ID: AI24-RNC0-3239 • Issued 07 Mar 2024", note: "Verified from uploaded certificate" },
  { title: "Artificial Intelligence Internship — Completion", issuer: "Rinex Technology", proof: "Certificate ID: AI24-RNI0-3239 • 07 Mar 2024 — 01 May 2024", note: "Verified from uploaded internship certificate" },
  { title: "1M1B | AI + Sustainability Virtual Internship", issuer: "1M1B • Supported by AICTE • In collaboration with IBM SkillsBuild", proof: "AICTE Internship ID: INTERNSHIP_176309143169a3e755254 • Dec 2025 — Jan 2026", note: "Certificate of Completion supplied by Vikas" },
  { title: "1M1B | AI + Sustainability Virtual Internship — IBM SkillsBuild", issuer: "IBM SkillsBuild", proof: "Plan ID: PLAN-5C114CF1ADED • Completion date: 15 Dec 2025 (GMT)", note: "Completion certificate supplied by Vikas" },
  { title: "Oracle Cloud Infrastructure 2025 — Generative AI Professional", issuer: "Oracle", proof: "Certified Oct 22, 2025 • Valid until Oct 22, 2027 • ID: 102336556OCI25GAIOCP", note: "Verified from uploaded Oracle eCertificate" },
  { title: "Oracle Data Platform 2025 Certified Foundations Associate", issuer: "Oracle", proof: "Certified Aug 17, 2025 • ID: 102336556OCI25DCFA", note: "Verified from uploaded Oracle certificate" },
  { title: "Foundations of Machine Learning", issuer: "Fractal Analytics / Coursera", proof: "Completed Dec 1, 2024 • Verification: 68JB6CD1E401", note: "Coursera certificate supplied by Vikas" },
  { title: "Data Analysis and Visualization Foundations", issuer: "IBM Skills Network / Coursera", proof: "Completed Apr 4, 2024 • Verification: 3YJQCBZMQSGA", note: "IBM specialization certificate supplied by Vikas" },
  { title: "Microsoft Azure Developer Associate (AZ-204) Exam Prep", issuer: "Microsoft / Coursera", proof: "Completed Apr 23, 2024 • Verification: VBFC9SGHMX9F", note: "Professional Certificate supplied by Vikas" },
  { title: "HTML, CSS, and Javascript for Web Developers", issuer: "Johns Hopkins University / Coursera", proof: "Completed Oct 24, 2024 • Verification: IRZLRJ0C1BI2", note: "Specialization certificate supplied by Vikas" },
];

const achievements = [
  { icon: "🏆", eyebrow: "TOP PERFORMANCE", title: "91st Percentile — Global Employability Test 2025", organization: "ETS Solutions", date: "24 Sep 2025", description: "Achieved the 91 percentile in the Global Employability Test 2025.", highlight: "91 PERCENTILE", proof: "Certificate of Achievement" },
  { icon: "🌐", eyebrow: "INDUSTRY EXPOSURE", title: "Industry Immersion Program", organization: "Alliance School of Advanced Computing, Alliance University", date: "May 2025 — Jul 2025", description: "Successfully completed the Industry Immersion Program.", highlight: "3-MONTH PROGRAM", proof: "Certificate of Participation" },
  { icon: "🔬", eyebrow: "SCIENCE & INNOVATION", title: "PRĀKALP'25 — Annual Science Expo", organization: "Amrita Vishwa Vidyapeetham, Bengaluru", date: "15 Mar 2025", description: "Participated in the 3rd Edition of PRĀKALP'25, the Annual Science Expo.", highlight: "PRĀKALP'25", proof: "Certificate of Participation" },
  { icon: "🤖", eyebrow: "AI & SUSTAINABILITY", title: "1M1B AI + Sustainability Virtual Internship", organization: "1M1B • Supported by AICTE • IBM SkillsBuild", date: "Dec 2025 — Jan 2026", description: "Completed a virtual internship focused on AI, responsible AI use and sustainability concepts.", highlight: "AI + SDGs", proof: "Completion certificates" },
  { icon: "☁️", eyebrow: "CLOUD & GENERATIVE AI", title: "Oracle Generative AI Professional", organization: "Oracle University", date: "22 Oct 2025", description: "Earned the Oracle Cloud Infrastructure 2025 Certified Generative AI Professional credential.", highlight: "OCI GEN AI", proof: "Oracle eCertificate" },
  { icon: "📊", eyebrow: "DATA & ANALYTICS", title: "IBM Data Analysis & Visualization Foundations", organization: "IBM Skills Network / Coursera", date: "4 Apr 2024", description: "Completed a four-course specialization covering data analysis, Excel, visualization and dashboards.", highlight: "DATA ANALYTICS", proof: "Coursera specialization certificate" },
];

const education = [
  { title: "Bachelor's Degree in Information Technology", institution: "Alliance University, Bengaluru", year: "2022 — 2026", result: "CGPA: 8.4/10" },
  { title: "Class XII", institution: "Diamond PU College, Bidar, Karnataka", year: "2021", result: "Percentage: 80%", board: "Department of Pre-University Education Board" },
  { title: "Class X", institution: "Morarji Desai Residential School, Bidar, Karnataka", year: "2019", result: "Percentage: 82.56%", board: "Karnataka Secondary Education Examination Board" },
];

const experiences = [
  { title: "Artificial Intelligence Intern", organization: "Rinex Technology", date: "07 Mar 2024 — 01 May 2024", description: "Successfully completed an Artificial Intelligence internship at Rinex Technology.", bullets: ["Completed the AI internship program with documented completion evidence.", "Internship Certificate ID: AI24-RNI0-3239.", "Separate AI course certificate records Grade A+ with Certificate ID AI24-RNC0-3239."], proof: "Internship completion certificate" },
  { title: "AI + Sustainability Virtual Intern", organization: "1M1B (One Million for One Billion)", date: "Dec 2025 — Jan 2026", description: "Completed a virtual internship supported by AICTE and delivered in collaboration with IBM SkillsBuild.", bullets: ["Gained practical exposure to AI and responsible AI use.", "Worked with sustainability concepts aligned with the UN SDGs.", "Learned about Agentic AI and RAG systems for real-life problem solving.", "AICTE Internship ID: INTERNSHIP_176309143169a3e755254."], proof: "1M1B + IBM SkillsBuild completion certificates" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell"><a className="brand" href="#home">&lt;Vikas /&gt;</a><div className="navlinks"><a href="#about">About</a><a href="#education">Education</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#certifications">Certifications</a><a href="#achievements">Achievements</a><a href="#contact">Contact</a></div><a className="nav-cta" href="#contact">Resume ↗</a></nav>

      <section id="home" className="hero shell"><div className="hero-copy"><p className="eyebrow">Hi, I&apos;m <span>👋</span></p><h1>Building digital <span>solutions</span></h1><h2>Software Developer <b>•</b> AI/ML Enthusiast</h2><p className="lead">Information Technology graduate building practical software, AI/ML and data-driven solutions with a focus on clean engineering and continuous learning.</p><div className="hero-actions"><a className="primary" href="#projects">View Work 🚀</a><a className="secondary" href="#contact">Contact Me</a></div><div className="socials"><a href="https://www.linkedin.com/in/vikas-handage" aria-label="LinkedIn">in</a><a href="https://github.com/Vikas3655v" aria-label="GitHub">●</a><a href="mailto:vikashandage06@gmail.com" aria-label="Email">✉</a></div></div><div className="hero-visual"><div className="portrait-frame"><img src="https://avatars.githubusercontent.com/u/182326026?v=4" alt="Vikas Handage" /></div><div className="performance-card"><span>⚡</span><div>Profile<br/><b>Authentic &amp; growing</b></div></div></div></section>

      <section id="about" className="section shell section-heading"><p className="kicker">WHO I AM</p><h2>About Me</h2><div className="underline" /></section><section className="about shell"><div className="about-photo"><img src="https://avatars.githubusercontent.com/u/182326026?v=4" alt="Vikas Handage" /></div><div className="about-copy"><h3>I&apos;m an Information Technology graduate and aspiring Software Developer &amp; AI/ML enthusiast.</h3><p>I enjoy building practical applications that connect software engineering, artificial intelligence, machine learning and data analytics.</p><p>I have a foundation in <strong>Python, Java, C++, JavaScript and SQL</strong>, together with experience across web development, databases, machine learning and computer vision.</p><p>I continuously improve through hands-on projects, technical practice, documentation and problem solving. My goal is to contribute to real products while growing into a strong software engineer.</p></div></section>

      <section id="education" className="section shell"><div className="split-heading"><div><p className="kicker">ACADEMIC BACKGROUND</p><h2>Education</h2></div><div><p className="kicker">PROFESSIONAL EXPERIENCE</p><h2>Experience</h2></div></div><div className="education-experience-grid"><div className="timeline-column education-column">{education.map((item) => <article className="timeline-entry" key={item.title}><span className="timeline-dot" /><div className="timeline-content"><div className="card-top"><h3>{item.title}</h3><span>{item.year}</span></div><p className="institution">{item.institution}</p>{item.board && <p className="board"><strong>Board:</strong> {item.board}</p>}<strong className="result">{item.result}</strong></div></article>)}</div><div id="experience" className="timeline-column experience-column">{experiences.map((item) => <article className="timeline-entry experience-entry" key={item.title}><span className="timeline-dot" /><div className="timeline-content"><div className="card-top"><h3>{item.title}</h3><span>{item.date}</span></div><p className="institution">{item.organization}</p><p className="experience-description">{item.description}</p><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><span className="proof-pending">✓ {item.proof}</span></div></article>)}</div></div></section>

      <section id="skills" className="section tools-section"><div className="shell"><p className="kicker">TOOLS &amp; TECHNOLOGIES</p><h2>Tech Stack</h2><p className="section-subtitle">Technologies and tools I work with.</p><div className="skill-grid">{skills.map(([name, category, icon]) => <div className="skill-card" key={name}><img src={icon} alt={name} /><strong>{name}</strong><span>{category}</span></div>)}</div></div></section>

      <section id="projects" className="section shell"><h2>Projects</h2><div className="project-grid">{projects.map((project, i) => <article className="project-card" key={project.title}><div className="project-head"><h3>{project.title}</h3><span>0{i + 1}</span></div><p>{project.description}</p><div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href={project.href}>GitHub ↗</a><span>{project.proof}</span></div></article>)}</div></section>

      <section id="certifications" className="section shell"><div className="section-heading"><p className="kicker">CREDENTIALS &amp; LEARNING</p><h2>Certifications</h2><div className="underline" /><p className="section-subtitle">Verified credentials across AI, data analytics, cloud and web development.</p></div><div className="cert-grid">{certifications.map((cert) => <article className="cert-card" key={cert.title}><h3>{cert.title}</h3><p>{cert.issuer}</p><span className="proof-pending">{cert.proof}</span><small>{cert.note}</small></article>)}</div></section>

      <section id="achievements" className="section achievements-section"><div className="shell"><div className="achievement-hero"><div><p className="kicker">MILESTONES &amp; RECOGNITION</p><h2>Achievements</h2><p>Highlights that showcase performance, industry exposure, innovation and continuous professional growth.</p></div><div className="achievement-stat"><strong>91</strong><span>Percentile<br/>Global Employability Test</span></div></div><div className="achievement-grid">{achievements.map((item, i) => <article className="achievement-card" key={item.title}><div className="achievement-card-top"><span className="achievement-icon">{item.icon}</span><span className="achievement-number">0{i + 1}</span></div><span className="achievement-eyebrow">{item.eyebrow}</span><h3>{item.title}</h3><p className="achievement-org">{item.organization}</p><p className="achievement-date">{item.date}</p><p className="achievement-description">{item.description}</p><div className="achievement-footer"><span className="achievement-highlight">{item.highlight}</span><span>{item.proof}</span></div></article>)}</div><div className="achievement-bottom"><div><span>✨</span><div><strong>More achievements coming soon</strong><p>New certifications, competitions, projects and professional milestones will be added here as they are earned.</p></div></div><a href="#contact">Get in touch ↗</a></div></div></section>

      <section id="contact" className="contact-section"><div className="shell"><h2>Contact Me</h2><div className="contact-grid"><form action="mailto:vikashandage06@gmail.com" method="post" encType="text/plain"><input name="name" placeholder="Name" required /><input name="email" type="email" placeholder="Email" required /><textarea name="message" placeholder="Message" rows={6} required /><button type="submit">Send Message</button></form><div className="contact-card"><p><strong>Email:</strong> vikashandage06@gmail.com</p><p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/vikas-handage">linkedin.com/in/vikas-handage ↗</a></p><p><strong>GitHub:</strong> <a href="https://github.com/Vikas3655v">github.com/Vikas3655v ↗</a></p></div></div></div></section>
      <footer className="footer shell"><span>© {new Date().getFullYear()} Vikas Handage</span><span>Software Development • AI/ML • Data Analytics</span></footer>
    </main>
  );
}
