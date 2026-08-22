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
  { title: "1M1B | AI + Sustainability Virtual Internship", issuer: "1M1B (One Million for One Billion) • Supported by AICTE • In collaboration with IBM SkillsBuild", proof: "AICTE Internship ID: INTERNSHIP_176309143169a3e755254 • Dec 2025 — Jan 2026", note: "Certificate of Completion supplied by Vikas" },
  { title: "1M1B | AI + Sustainability Virtual Internship — IBM SkillsBuild", issuer: "IBM SkillsBuild", proof: "Plan ID: PLAN-5C114CF1ADED • Completion date: 15 Dec 2025 (GMT)", note: "Completion certificate supplied by Vikas" },
  { title: "Oracle Cloud Infrastructure 2025 — Generative AI Professional", issuer: "Oracle", proof: "Credential link / certificate file to be added", note: "Proof requested" },
  { title: "Google AI & Machine Learning Certification", issuer: "Google", proof: "Credential link / certificate file to be added", note: "Proof requested" },
  { title: "IBM Data Analytics with Excel and R Professional Certificate", issuer: "Coursera / IBM", proof: "Credential link / certificate file to be added", note: "Proof requested" },
  { title: "Python for Everybody", issuer: "Coursera", proof: "Credential link / certificate file to be added", note: "Proof requested" },
  { title: "Microsoft Azure Developer Associate (AZ-204) — Exam Preparation", issuer: "Coursera", proof: "Credential link / certificate file to be added", note: "Proof requested" },
  { title: "Oracle Data Platform 2025 Foundations Associate", issuer: "Oracle", proof: "Credential link / certificate file to be added", note: "Proof requested" },
];

const education = [
  { title: "Bachelor's Degree in Information Technology", institution: "Alliance University, Bengaluru", year: "2026", result: "CGPA: 8.4/10" },
  { title: "Class XII", institution: "Diamond PU College, Bidar, Karnataka", year: "2021", result: "Percentage: 80%", board: "Department of Pre-University Education Board" },
  { title: "Class X", institution: "Morarji Desai Residential School, Bidar, Karnataka", year: "2019", result: "Percentage: 82.56%", board: "Karnataka Secondary Education Examination Board" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell"><a className="brand" href="#home">&lt;Vikas /&gt;</a><div className="navlinks"><a href="#about">About</a><a href="#education">Education</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#certifications">Certifications</a><a href="#contact">Contact</a></div><a className="nav-cta" href="#contact">Resume ↗</a></nav>

      <section id="home" className="hero shell"><div className="hero-copy"><p className="eyebrow">Hi, I&apos;m <span>👋</span></p><h1>Building digital <span>solutions</span></h1><h2>Software Developer <b>•</b> AI/ML Enthusiast</h2><p className="lead">Information Technology graduate building practical software, AI/ML and data-driven solutions with a focus on clean engineering and continuous learning.</p><div className="hero-actions"><a className="primary" href="#projects">View Work 🚀</a><a className="secondary" href="#contact">Contact Me</a></div><div className="socials"><a href="https://www.linkedin.com/in/vikas-handage" aria-label="LinkedIn">in</a><a href="https://github.com/Vikas3655v" aria-label="GitHub">●</a><a href="mailto:vikashandage06@gmail.com" aria-label="Email">✉</a></div></div><div className="hero-visual"><div className="portrait-frame"><img src="https://avatars.githubusercontent.com/u/182326026?v=4" alt="Vikas Handage" /></div><div className="performance-card"><span>⚡</span><div>Profile<br/><b>Authentic &amp; growing</b></div></div></div></section>

      <section id="about" className="section shell section-heading"><p className="kicker">WHO I AM</p><h2>About Me</h2><div className="underline" /></section><section className="about shell"><div className="about-photo"><img src="https://avatars.githubusercontent.com/u/182326026?v=4" alt="Vikas Handage" /></div><div className="about-copy"><h3>I&apos;m an Information Technology graduate and aspiring Software Developer &amp; AI/ML enthusiast.</h3><p>I enjoy building practical applications that connect software engineering, artificial intelligence, machine learning and data analytics.</p><p>I have a foundation in <strong>Python, Java, C++, JavaScript and SQL</strong>, together with experience across web development, databases, machine learning and computer vision.</p><p>I continuously improve through hands-on projects, technical practice, documentation and problem solving. My goal is to contribute to real products while growing into a strong software engineer.</p></div></section>

      <section id="education" className="section shell"><div className="section-heading"><p className="kicker">ACADEMIC BACKGROUND</p><h2>Education</h2><div className="underline" /></div><div className="education-timeline">{education.map((item) => <div className="education-item" key={item.title}><span className="dot" /><div className="education-card"><div className="card-top"><h3>{item.title}</h3><span>{item.year}</span></div><p>{item.institution}</p>{item.board && <p className="board"><strong>Board:</strong> {item.board}</p>}<strong>{item.result}</strong></div></div>)}</div></section>

      <section id="experience" className="section shell"><div className="section-heading"><p className="kicker">PROFESSIONAL EXPERIENCE</p><h2>Experience</h2><div className="underline" /></div><div className="experience-list"><div className="timeline-card"><span className="dot" /><div><div className="card-top"><h3>Artificial Intelligence Intern</h3><span>07 Mar 2024 — 01 May 2024</span></div><p><strong>Rinex Technology</strong></p><ul><li>Successfully completed an Artificial Intelligence internship at Rinex.</li><li>Internship completion is supported by Certificate ID <strong>AI24-RNI0-3239</strong>.</li><li>Separate AI course certificate from Rinex records a Grade <strong>A+</strong>, Certificate ID <strong>AI24-RNC0-3239</strong>.</li></ul><span className="proof-pending">Certificate proof supplied by Vikas</span></div></div><div className="timeline-card"><span className="dot" /><div><div className="card-top"><h3>AI for Sustainability Virtual Intern</h3><span>Dec 2025 — Jan 2026</span></div><p><strong>1M1B (One Million for One Billion)</strong> • Supported by AICTE • In collaboration with IBM SkillsBuild</p><ul><li>Gained practical experience in <strong>AI</strong>, <strong>responsible AI use</strong> and key <strong>sustainability concepts</strong> aligned with the UN SDGs.</li><li>Learned to use <strong>Agentic AI</strong> and <strong>RAG systems</strong> to approach real-life problems.</li><li>Developed problem-solving and impact-driven skills through the virtual internship.</li><li>Completion is supported by the 1M1B certificate and IBM SkillsBuild completion certificate.</li></ul><span className="proof-pending">AICTE Internship ID: INTERNSHIP_176309143169a3e755254</span></div></div></div></section>

      <section id="skills" className="section tools-section"><div className="shell"><p className="kicker">TOOLS &amp; TECHNOLOGIES</p><h2>Tech Stack</h2><p className="section-subtitle">Technologies and tools I work with.</p><div className="skill-grid">{skills.map(([name, category, icon]) => <div className="skill-card" key={name}><img src={icon} alt={name} /><strong>{name}</strong><span>{category}</span></div>)}</div></div></section>

      <section id="projects" className="section shell"><h2>Projects</h2><div className="project-grid">{projects.map((project, i) => <article className="project-card" key={project.title}><div className="project-head"><h3>{project.title}</h3><span>0{i + 1}</span></div><p>{project.description}</p><div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href={project.href}>GitHub ↗</a><span>{project.proof}</span></div></article>)}</div></section>

      <section id="certifications" className="section shell"><h2>Certifications &amp; Achievements</h2><div className="cert-grid">{certifications.map((cert) => <article className="cert-card" key={cert.title}><h3>{cert.title}</h3><p>{cert.issuer}</p><span className="proof-pending">{cert.proof}</span><small>{cert.note}</small></article>)}</div><div className="achievement-note"><h2>Achievements</h2><p>Credentials are included only when supported by certificates or credential information supplied by Vikas.</p></div></section>

      <section id="contact" className="contact-section"><div className="shell"><h2>Contact Me</h2><div className="contact-grid"><form action="mailto:vikashandage06@gmail.com" method="post" encType="text/plain"><input name="name" placeholder="Name" required /><input name="email" type="email" placeholder="Email" required /><textarea name="message" placeholder="Message" rows={6} required /><button type="submit">Send Message</button></form><div className="contact-card"><p><strong>Email:</strong> vikashandage06@gmail.com</p><p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/vikas-handage">linkedin.com/in/vikas-handage ↗</a></p><p><strong>GitHub:</strong> <a href="https://github.com/Vikas3655v">github.com/Vikas3655v ↗</a></p></div></div></div></section>
      <footer className="footer shell"><span>© {new Date().getFullYear()} Vikas Handage</span><span>Software Development • AI/ML • Data Analytics</span></footer>
    </main>
  );
}
