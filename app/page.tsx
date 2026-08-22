const projects = [
  {
    title: "AI-Powered Smart Surveillance & Personalized Store Recommendations",
    type: "AI / COMPUTER VISION",
    description: "An AI-focused application concept combining surveillance-event analysis with personalized in-store recommendation logic.",
    stack: "Python • AI/ML • Computer Vision",
    href: "https://github.com/Vikas3655v/Vikas/tree/main/projects/smart-retail-surveillance",
  },
  {
    title: "Library Management System",
    type: "SOFTWARE DEVELOPMENT",
    description: "A Java application for managing books and library operations using object-oriented design, validation, collections and testing.",
    stack: "Java • OOP • Maven • JUnit",
    href: "https://github.com/Vikas3655v/Vikas/tree/main/projects/library-management-system",
  },
  {
    title: "Advance Counter Drone System for Localized Networks",
    type: "NETWORKING / MONITORING",
    description: "A defensive monitoring project focused on localized-network telemetry analysis and suspicious-pattern detection.",
    stack: "Python • Networking • Telemetry Analysis",
    href: "https://github.com/Vikas3655v/Vikas/tree/main/projects/counter-drone-local-network",
  },
  {
    title: "Plant Disease Recognition using Deep Learning",
    type: "DEEP LEARNING",
    description: "A reproducible image-classification workflow designed for dataset preparation, model training, evaluation and inference.",
    stack: "Python • TensorFlow • CNN • OpenCV",
    href: "https://github.com/Vikas3655v/Vikas/tree/main/projects/plant-disease-recognition",
  },
  {
    title: "Real-Time Object Detection & Activity Recognition",
    type: "COMPUTER VISION",
    description: "A real-time video-processing workflow using object detection and computer-vision techniques for activity analysis.",
    stack: "Python • YOLO • OpenCV",
    href: "https://github.com/Vikas3655v/Vikas/tree/main/projects/object-detection-activity-recognition",
  },
];

const skills = [
  ["C++", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"],
  ["Java", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"],
  ["Python", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"],
  ["JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
  ["SQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"],
  ["HTML", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"],
  ["CSS", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"],
  ["React", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"],
  ["Node.js", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"],
  ["Express", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"],
  ["Flutter", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"],
  ["TensorFlow", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"],
  ["Keras", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg"],
  ["PyTorch", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"],
  ["Scikit-learn", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg"],
  ["OpenCV", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"],
  ["NumPy", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"],
  ["Pandas", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"],
  ["MongoDB", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"],
  ["Git", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"],
];

const heroSkills = [skills[2], skills[1], skills[0], skills[3], skills[7], skills[11]];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#home"><span>V</span> Vikas Handage</a>
        <div className="navlinks">
          <a href="#home">Home</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="#contact">Let&apos;s Connect ↗</a>
      </nav>

      <section id="home" className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">Hi, I&apos;m <span>👋</span></p>
          <h1>Vikas <span>Handage</span></h1>
          <h2>Software Developer <b>•</b> AI/ML Enthusiast</h2>
          <p className="lead">I build practical and responsive software solutions by combining programming, data, AI/ML and clean engineering practices.</p>
          <div className="hero-actions"><a className="primary" href="#projects">View Projects ↗</a><a className="secondary" href="https://github.com/Vikas3655v">GitHub ↗</a></div>
          <div className="hero-tech">
            {heroSkills.map(([name, icon]) => <div className="tech" key={name}><div className="tech-icon"><img src={icon} alt={name} /></div><span>{name}</span></div>)}
          </div>
          <div className="stats"><div><strong>5+</strong><span>Projects</span></div><div><strong>8.4</strong><span>CGPA</span></div><div><strong>20+</strong><span>Technologies</span></div><div><strong>2026</strong><span>Graduate</span></div></div>
        </div>
        <div className="hero-visual">
          <div className="portrait-wrap">
            <div className="portrait-glow" />
            <img className="portrait" src="https://avatars.githubusercontent.com/u/182326026?v=4" alt="Vikas Handage" />
            <div className="portrait-caption">Software • AI/ML • Data Analytics</div>
          </div>
          <div className="floating-card card-one">&lt;/&gt; Building solutions<br/><b>that solve real problems.</b></div>
          <div className="floating-card card-two">✦ Focused on<br/><b>learning &amp; continuous improvement</b></div>
        </div>
      </section>

      <section id="about" className="section shell">
        <p className="section-label">ABOUT ME</p><h2>Building with purpose, <span>learning by doing.</span></h2>
        <p className="section-text">I&apos;m an Information Technology graduate from Alliance University, Bengaluru, with interests in software development, artificial intelligence, machine learning and data analytics. I enjoy turning ideas into practical applications and improving them through testing, documentation and iteration.</p>
        <div className="about-grid"><div><h3>👨‍💻 Software Development</h3><p>Python, Java, C++, JavaScript, SQL, React, Node.js, Express, HTML, CSS and Flutter, with a focus on clean code and problem solving.</p></div><div><h3>🤖 AI/ML &amp; Data</h3><p>TensorFlow, Keras, PyTorch, Scikit-learn, OpenCV, NumPy, Pandas, Matplotlib and Seaborn for machine learning, computer vision and analytics projects.</p></div></div>
      </section>

      <section id="skills" className="section dark-section"><div className="shell"><p className="section-label">TECHNICAL SKILLS</p><h2>Technologies I <span>work with.</span></h2><div className="skill-grid">{skills.map(([name, icon]) => <div className="skill-card" key={name}><img src={icon} alt={name} /><strong>{name}</strong></div>)}</div></div></section>

      <section id="projects" className="section shell"><p className="section-label">SELECTED PROJECTS</p><h2>Work that <span>shows what I build.</span></h2><div className="project-grid">{projects.map((project, i) => <article className="project-card" key={project.title}><div className="project-number">0{i + 1}</div><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><div className="stack">{project.stack}</div><a href={project.href}>View on GitHub ↗</a></article>)}</div></section>

      <section id="experience" className="section dark-section"><div className="shell"><p className="section-label">EXPERIENCE &amp; EDUCATION</p><h2>My <span>foundation.</span></h2><div className="timeline"><div><span>MAR 2024 — MAY 2024</span><h3>AI &amp; ML Development Intern</h3><p>Developed and tested AI/ML models for data-analysis and prediction tasks using Python and relevant AI frameworks. Worked on model evaluation, performance improvement and presentation of findings.</p></div><div><span>2026</span><h3>Information Technology Graduate</h3><p>Alliance University, Bengaluru • Bachelor&apos;s Degree in Information Technology • CGPA 8.4</p></div></div></div></section>

      <section className="section shell"><p className="section-label">CERTIFICATIONS</p><h2>Learning beyond the <span>classroom.</span></h2><div className="about-grid"><div><h3>☁️ Cloud &amp; Generative AI</h3><p>Oracle Cloud Infrastructure 2025 — Generative AI Professional<br/>Oracle Data Platform 2025 Foundations Associate<br/>Microsoft Azure Developer Associate (AZ-204) — Exam Preparation</p></div><div><h3>📊 AI, Data &amp; Python</h3><p>Google AI &amp; Machine Learning Certification<br/>IBM Data Analytics with Excel and R Professional Certificate<br/>Python for Everybody — Coursera</p></div></div></section>

      <section id="contact" className="contact shell"><p className="section-label">CONTACT</p><h2>Let&apos;s build something <span>useful.</span></h2><p>Open to entry-level opportunities in software development, AI/ML and data analytics.</p><div className="contact-links"><a href="mailto:vikashandage06@gmail.com">vikashandage06@gmail.com</a><a href="https://www.linkedin.com/in/vikas-handage">LinkedIn ↗</a><a href="https://github.com/Vikas3655v">GitHub ↗</a></div></section>

      <footer className="footer shell"><span>© {new Date().getFullYear()} Vikas Handage</span><span>Built with Next.js • Ready for Vercel</span></footer>
    </main>
  );
}
